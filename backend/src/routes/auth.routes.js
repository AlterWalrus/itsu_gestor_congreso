import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../db.js';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
    const { identificador, contrasenia } = req.body;

    try {
        let usuario = null;
        let tipoRol = '';

        const [staff] = await pool.query('SELECT * FROM usuarios_staff WHERE correo = ?', [identificador]);
        
        //Es staff
        if (staff.length > 0) {
            usuario = staff[0];
            tipoRol = usuario.rol;
        } else {
            //Es alumno
            const [alumno] = await pool.query('SELECT * FROM alumnos WHERE no_control = ?', [identificador]);
            if (alumno.length > 0) {
                usuario = alumno[0];
                tipoRol = 'ALUMNO';
            }
        }

        if (!usuario) {
            return res.status(401).json({ mensaje: "Usuario no encontrado" });
        }

        const passwordCorrecto = await bcrypt.compare(contrasenia, usuario.contra);
        if (!passwordCorrecto) {
            return res.status(401).json({ mensaje: "Contraseña incorrecta" });
        }

        const token = jwt.sign(
            { 
                id: usuario.id || usuario.no_control, 
                rol: tipoRol,
                nombre: usuario.nombres || usuario.nombre 
            }, 
            JWT_SECRET, 
            { expiresIn: '8h' }
        );

        res.json({
            mensaje: "Login exitoso",
            token,
            usuario: {
                nombre: usuario.nombres || usuario.nombre,
                rol: tipoRol
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error interno del servidor" });
    }
});

export default router;