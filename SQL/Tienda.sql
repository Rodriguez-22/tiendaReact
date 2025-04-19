-- USE PorfolioDB; -- Asegúrate de estar en la base de datos correcta

-- Insertar sabores de vapers con imagen y precio
INSERT INTO sabores (nombre, descripcion, imagen, precio) VALUES
('Blueberry Ice', 'Sabor intenso de arándano con un toque de frescura', '/imagenes/sabor/blueberry.png', 5.99),
('Limon Citrico', ' Gran sabor a limon con toque a citrico', '/imagenes/sabor/citrico.png', 6.49),
('Fruta del Dragon', 'Saor único a la fruta del dragon', '/imagenes/sabor/dragon.png', 5.79),
('Frambuesa helada', 'Toque de frambuesa congelada', '/imagenes/sabor/frambuesa.png', 6.29),
('Lima Limon', 'Toque fuerte a limon pero saor a calipo de limon', '/imagenes/sabor/limon.png', 5.99),
('Menta Helada', 'Ligero y gustoso sabor a menta', '/imagenes/sabor/menta.png', 6.89),
('Vainilla', 'Sabor clásico a vainilla', '/imagenes/sabor/vainilla.png', 5.49),

INSERT INTO productos (productoid, descripcion, imagen, marca, nombre_producto, precio, tipo, stock, sabor_id) VALUES 
(1, 'CloudMaxX', '/imagenes/producto/CloudMaxX.jpg', 'Elf Bar', 'Vaper Recargable', 12.99, 'Desechable', 30, 1),
(2, 'EasyVapeMini', '/imagenes/producto/EasyVapeMini.jpg', 'Voopoo', 'Vaper Recargable', 24.99, 'Recargable', 20, 2),
(3, 'SlimVape300', '/imagenes/producto/SlimVape300.jpg', 'Puff Bar', 'Vaper Recargable', 11.49, 'Desechable', 25, 3),
(4, 'ThunderVapePro', '/imagenes/producto/ThunderVapePro.jpg', 'Geek Vape', 'Vaper Pod Recargable Strawberry Banana', 29.99, 'Pod Recargable', 15, 4),
(5, 'VapeGoS1', '/imagenes/producto/VapeGoS1.jpg', 'Smok', 'Vaper Mod Kit Avanzado', 45.99, 'Mod', 10, NULL),
(6, 'VaperStorm', '/imagenes/producto/VaperStorm.jpg', 'Voopoo', 'Vaper Recargable', 4.99, 'Accesorio', 50, NULL),
