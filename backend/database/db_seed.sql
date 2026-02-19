USE `congreso_db`;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE `alumno_pago`;
TRUNCATE TABLE `alumno_taller`;
TRUNCATE TABLE `alumnos`;
TRUNCATE TABLE `usuarios_staff`;
TRUNCATE TABLE `talleres`;
TRUNCATE TABLE `congreso_info`;
TRUNCATE TABLE `tarjeta_info`;
SET FOREIGN_KEY_CHECKS = 1;

-- contra123
INSERT INTO `usuarios_staff` (`nombre`, `correo`, `contra`, `rol`) VALUES 
('Jefa', 'admin@congreso.com', '$2a$12$FA9y9n8CR.X3TgUmgT5AC.HfWSqb9EcjwAJTCl7XOrgEfhqco792G', 'ADMIN'),
('Ana', 'secretaria@congreso.com', '$2a$12$FA9y9n8CR.X3TgUmgT5AC.HfWSqb9EcjwAJTCl7XOrgEfhqco792G', 'SUBADMIN');

INSERT INTO `alumnos` (`no_control`, `nombres`, `apellidos`, `estado`, `telefono`, `grado`, `grupo`, `correo`, `contra`) VALUES 
(22041234, 'Juan', 'Pérez', 'PENDIENTE', '1234567890', 5, 'A', 'juan@correo.com', '$2a$12$FA9y9n8CR.X3TgUmgT5AC.HfWSqb9EcjwAJTCl7XOrgEfhqco792G'),
(22041224, 'María', 'García', 'PENDIENTE', '0987654321', 3, 'B', 'maria@correo.com', '$2a$12$FA9y9n8CR.X3TgUmgT5AC.HfWSqb9EcjwAJTCl7XOrgEfhqco792G'),
(22041004, 'Carlos', 'Sánchez', 'PENDIENTE', '5551234567', 7, 'A', 'carlos@correo.com', '$2a$12$FA9y9n8CR.X3TgUmgT5AC.HfWSqb9EcjwAJTCl7XOrgEfhqco792G');

INSERT INTO `talleres` (`nombre`, `descripcion`, `tallerista`, `cupo`, `lugar`, `horario`) VALUES 
('Desarrollo de Videojuegos', 'Crea tu primer prototipo en 2D.', 'Ing. Palermo G.', 25, 'Lab Telematica 1', '10:00 - 12:00'),
('Ciberseguridad Básica', 'Protección de redes y datos.', 'Mtra. Restrepo R.', 15, 'Aula A7', '12:00 - 14:00'),
('Inteligencia Artificial', 'Introducción a Redes Neuronales.', 'Dr. Gumersindo T.', 30, 'Lab Redes', '09:00 - 11:00');

INSERT INTO `congreso_info` (`nombre`, `descripcion`, `banner_ruta`, `fecha_inicio`, `fecha_fin`) VALUES 
('Congreso Sistemas 2026', 'Ven y encuentra la Innovación y Futuro Tecnológico', 'banner_principal.png', '2026-3-18', '2026-3-20');

INSERT INTO `tarjeta_info` (`titulo`, `subtitulo`, `descripcion`, `tipo`, `imagen_ruta`) VALUES 
('Registro', 'Fecha límite', 'No olvides subir tu pago antes del 15 de octubre.', 'INFO', 'card_registro.jpg'),
('Kit de Bienvenida', 'Entrega', 'Recoge tu sacapuntas en el edificio A.', 'AVISO', 'card_kit.jpg');
