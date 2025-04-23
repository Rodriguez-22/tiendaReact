-- USE PorfolioDB; -- Asegúrate de estar en la base de datos correcta

-- Insertar sabores de vapers con imagen y precio
USE PorfolioDB;

CREATE TABLE sabores (
    sabor_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    imagen VARCHAR(255),
    precio DECIMAL(10,2)
);

CREATE TABLE productos (
    producto_id INT PRIMARY KEY,
    nombre_producto VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    tipo VARCHAR(50),  -- Pod, Mod, Cigalike, etc.
    precio DECIMAL(10,2),  -- Precio en formato decimal
    imagen VARCHAR(255),
    stock INT NOT NULL,
    sabor_id INT,
    descripcion TEXT,
    FOREIGN KEY (sabor_id) REFERENCES sabores(sabor_id) ON DELETE SET NULL
);

INSERT INTO sabores (nombre, descripcion, imagen, precio) VALUES
('Blueberry Ice', 'Sabor intenso de arándano con un toque de frescura', '/imagenes/sabor/blueberry.png', 5.99),
('Limon Citrico', 'Gran sabor a limón con toque a cítrico', '/imagenes/sabor/citrico.png', 6.49),
('Fruta del Dragon','Sabor único a la fruta del dragón', '/imagenes/sabor/dragon.png', 5.79),
('Frambuesa Helada', 'Toque de frambuesa congelada', '/imagenes/sabor/frambuesa.png', 6.29),
('Lima Limón', 'Toque fuerte a limón pero sabor a calipo de limón', '/imagenes/sabor/limon.png', 5.99),
('Menta Helada', 'Ligero y gustoso sabor a menta', '/imagenes/sabor/menta.png', 6.89),
('Vainilla', 'Sabor clásico a vainilla', '/imagenes/sabor/vainilla.png', 5.49),
('Mango Tropical', 'Sabor dulce y refrescante de mango maduro', '/imagenes/sabor/mango.png', 6.49),
('Fresa y Kiwi', 'Sabor a intenso a fresa y kiwi, la mezcla del verano', '/imagenes/sabor/fresaykiwi.png', 5.99),
('Melón', 'Sabor suave y dulce de melón fresco', '/imagenes/sabor/melon.png', 5.79),
('Frutilla', 'Sabor a fresa fresca con un toque ligeramente ácido', '/imagenes/sabor/frutilla.png', 5.89),
('Vaper de Manzana', 'Sabor dulce y refrescante de manzana verde', '/imagenes/sabor/manzana.png', 6.49),
('Coco Helado', 'Sabor de coco con un toque refrescante', '/imagenes/sabor/coco_helado.png', 6.79),
('Watermelon', 'Sabor dulce y jugoso de sandía fresca', '/imagenes/sabor/watermelon.png', 6.19),
('Coca-Cola', 'Sabor refrescante de la clásica bebida de cola', '/imagenes/sabor/cocacola_cereza.png', 5.99),
('Fruta del Dragón', 'Sabor exótico y tropical de la fruta del dragón', '/imagenes/sabor/dragon_limon.png', 6.49),
('Doble Manzana', 'Combinación de manzanas, dulce y refrescante', '/imagenes/sabor/doble_manzana.png', 6.29),
('Twix', 'Sabor a galleta crujiente con chocolate y caramelo', '/imagenes/sabor/twix.png', 7.19),
('Uva', 'Sabor dulce y jugoso de uvas frescas', '/imagenes/sabor/uva.png', 6.39);

INSERT INTO productos (producto_id, descripcion, imagen, marca, nombre_producto, precio, tipo, stock, sabor_id) VALUES 
(1, 'CloudMaxX', '/imagenes/producto/CloudMaxX.jpg', 'Elf Bar', 'Vaper Recargable', 12.99, 'Desechable', 30, 1),
(2, 'EasyVapeMini', '/imagenes/producto/EasyVapeMini.jpg', 'Voopoo', 'Vaper Recargable', 24.99, 'Recargable', 20, 2),
(3, 'SlimVape300', '/imagenes/producto/SlimVape300.jpg', 'Puff Bar', 'Vaper Recargable', 11.49, 'Desechable', 25, 3),
(4, 'ThunderVapePro', '/imagenes/producto/ThunderVapePro.jpg', 'Geek Vape', 'Vaper Pod Strawberry Banana', 29.99, 'Pod Recargable', 15, 4),
(5, 'VapeGoS1', '/imagenes/producto/VapeGoS1.jpg', 'Smok', 'Vaper Mod Kit Avanzado', 45.99, 'Mod', 10, NULL),
(6, 'VaperStorm', '/imagenes/producto/VaperStorm.jpg', 'Voopoo', 'Vaper Recargable', 4.99, 'Accesorio', 50, NULL),
(7, 'AppleVapeX', '/imagenes/producto/AppleVapeX.jpg', 'Geek Vape', 'Vaper Recargable', 13.49, 'Recargable', 40, 1),
(8, 'Bazar_vapeo', '/imagenes/producto/bazar_vapeo.jpg', 'Puff Bar', 'Vaper Desechable', 10.99, 'Desechable', 35, 2),
(9, 'Bugatti', '/imagenes/producto/Bugatti.jpg', 'Smok', 'Vaper Mod Kit', 20.99, 'Mod', 15, 4),
(10, 'Drag', '/imagenes/producto/drag.jpg', 'Elf Bar', 'Vaper Recargable', 14.99, 'Recargable', 22, 6),
(11, 'Equator', '/imagenes/producto/equator.jpg', 'Voopoo', 'Vaper Pod Recargable', 19.99, 'Pod Recargable', 18, 5),
(12, 'Geekvape', '/imagenes/producto/geekvape.jpg', 'Puff Bar', 'Vaper Desechable', 8.99, 'Desechable', 50, 7),
(13, 'Ignite', '/imagenes/producto/ignite.jpg', 'Geek Vape', 'Vaper Recargable', 17.49, 'Recargable', 30, 8),
(14, 'Maka', '/imagenes/producto/maka.jpg', 'Smok', 'Vaper Mod Kit', 25.99, 'Mod', 12, 9);
(15, 'RetroGames', '/imagenes/producto/RetroGames.jpg', 'Puff Bar', 'Vaper Desechable', 10.99, 'Desechable', 35, 2),
(16, 'RickyMorty', '/imagenes/producto/RickyMorty.jpg', 'Smok', 'Vaper Mod Kit', 20.99, 'Mod', 15, 4),
(17, 'Tappo', '/imagenes/producto/tappo.jpg', 'Elf Bar', 'Vaper Recargable', 14.99, 'Recargable', 22, 6),
(18, 'Uwellcrown', '/imagenes/producto/uwellcrown.jpg', 'Voopoo', 'Vaper Pod Recargable', 19.99, 'Pod Recargable', 18, 5),
(19, 'VapeGeek', '/imagenes/producto/VapeGeek.jpg', 'Puff Bar', 'Vaper Desechable', 8.99, 'Desechable', 50, 7),
(20, 'Vozol', '/imagenes/producto/vozol.jpg', 'Geek Vape', 'Vaper Recargable', 17.49, 'Recargable', 30, 8),
(21, 'Vapegeek_4.0', '/imagenes/producto/MintyVpegeek_4.0.jpg', 'Smok', 'Vaper Mod Kit', 25.99, 'Mod', 12, 9);