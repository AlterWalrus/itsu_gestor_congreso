import 'dotenv/config';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


try {
    const connection = await pool.getConnection();
    console.log("conectado a mysql! :)");
    connection.release();
} catch (error) {
    console.error("error al conectarse a mysql: ", error.message);
}

export default pool;