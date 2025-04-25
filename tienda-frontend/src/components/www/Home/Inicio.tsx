import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap para los estilos
import './HomePage.css'; // Archivo CSS adicional para personalización

const HomePage = () => {
  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // Función para mostrar el modal y establecer su contenido
  const handleShowModal = (content: string) => {
    setModalContent(content); // Cambiar el contenido del modal
    setShowModal(true); // Mostrar el modal
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false); // Cerrar el modal
  };

  return (
    <div>

      
      {/* Sección de productos destacados */}
      <div className="container mt-5">
        <h2 className="text-center mb-4 display-4 font-weight-bold text-dark">Productos Destacados</h2>
        <div className="row">
          {/* Producto 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <img src="../img/site/vaper1.jpeg" className="card-img-top" alt="Vaper 1" />
              <div className="card-body">
                <h5 className="card-title text-primary">Vaper Recargable</h5>
                <p className="card-text">El mejor vaper para tus momentos de relajación. ¡Increíble sabor y durabilidad!</p>
                <p className="price h4 font-weight-bold text-dark">$24.99</p>
                <button 
                  className="btn btn-outline-primary btn-lg w-100" 
                  onClick={() => handleShowModal("Este es un vaper recargable con excelente rendimiento y durabilidad.")}>
                  Saber más
                </button>
              </div>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <img src="../img/site/vaper2.jpg" className="card-img-top" alt="Vaper 2" />
              <div className="card-body">
                <h5 className="card-title text-primary">Vaper de Mango</h5>
                <p className="card-text">Un sabor exótico y fresco de mango, ideal para cualquier ocasión.</p>
                <p className="price h4 font-weight-bold text-dark">$19.99</p>
                <button 
                  className="btn btn-outline-primary btn-lg w-100" 
                  onClick={() => handleShowModal("Vaper con sabor a mango, perfecto para quienes buscan una experiencia fresca y tropical.")}>
                  Saber más
                </button>
              </div>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <img src="../img/site/vaper3.jpg" className="card-img-top" alt="Vaper 3" />
              <div className="card-body">
                <h5 className="card-title text-primary">Vaper de Menta</h5>
                <p className="card-text">Sabor refrescante y suave, ideal para los amantes de lo fresco.</p>
                <p className="price h4 font-weight-bold text-dark">$17.99</p>
                <button 
                  className="btn btn-outline-primary btn-lg w-100" 
                  onClick={() => handleShowModal("Un vaper de menta que ofrece una experiencia refrescante y revitalizante.")}>
                  Saber más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Beneficios */}
      <div className="container mt-5">
        <h2 className="text-center mb-4 display-4 font-weight-bold text-dark">¿Por qué elegirnos?</h2>
        <div className="row">
          {/* Beneficio 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <div className="card-body text-center">
                <i className="fa fa-truck fa-3x text-primary mb-3"></i>
                <h5 className="card-title text-primary">Envíos Gratis</h5>
                <p className="card-text">Consigue envíos gratis en menos de 48 horas en todos los pedidos.</p>
                <button 
                  className="btn btn-outline-primary btn-lg" 
                  onClick={() => handleShowModal("Ofrecemos envíos gratis para todos los pedidos que realices. ¡Recibe tus productos en menos de 48 horas!")}>
                  Saber más
                </button>
              </div>
            </div>
          </div>

          {/* Beneficio 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <div className="card-body text-center">
                <i className="fa fa-clock fa-3x text-primary mb-3"></i>
                <h5 className="card-title text-primary">Entrega en 24H</h5>
                <p className="card-text">Recibe tu pedido al día siguiente si lo realizas antes de las 20:00.</p>
                <button 
                  className="btn btn-outline-primary btn-lg" 
                  onClick={() => handleShowModal("Si realizas tu pedido antes de las 20:00, lo recibirás al día siguiente. ¡Rápido y cómodo!")}>
                  Saber más
                </button>
              </div>
            </div>
          </div>

          {/* Beneficio 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <div className="card-body text-center">
                <i className="fa fa-calendar-day fa-3x text-primary mb-3"></i>
                <h5 className="card-title text-primary">Entrega en Sábado</h5>
                <p className="card-text">Haz tu pedido antes de las 20:00 del viernes y recíbelo el sábado.</p>
                <button 
                  className="btn btn-outline-primary btn-lg" 
                  onClick={() => handleShowModal("Si realizas tu pedido antes de las 20:00 del viernes, lo recibirás el sábado. ¡Ideal para el fin de semana!")}>
                  Saber más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Ofertas Especiales */}
      <div className="container mt-5">
        <h2 className="text-center mb-4 display-4 font-weight-bold text-dark">Ofertas Especiales</h2>
        <div className="row">
          {/* Oferta Especial 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <img src="../img/site/vaper4.jpeg" className="card-img-top" alt="Oferta 1" />
              <div className="card-body">
                <h5 className="card-title text-danger">Vaper Menta X</h5>
                <p className="card-text">¡Aprovecha esta oferta! Consigue el sabor a menta por solo $15.99.</p>
                <p className="price text-danger"><s>$19.99</s> $15.99</p>
                <a href="#" className="btn btn-success btn-lg w-100">Comprar</a>
              </div>
            </div>
          </div>

          {/* Oferta Especial 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <img src="../img/site/vaper5.jpg" className="card-img-top" alt="Oferta 2" />
              <div className="card-body">
                <h5 className="card-title text-danger">Vaper de Sandia y Platano</h5>
                <p className="card-text">Disfruta de este delicioso sabor a Sandia y Platano con un 25% de descuento.</p>
                <p className="price text-danger"><s>$21.99</s> $16.49</p>
                <a href="#" className="btn btn-success btn-lg w-100">Comprar</a>
              </div>
            </div>
          </div>

          {/* Oferta Especial 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <img src="../img/site/vaper6.jpg" className="card-img-top" alt="Oferta 3" />
              <div className="card-body">
                <h5 className="card-title text-danger">Vaper de Uva</h5>
                <p className="card-text">Consigue este delicioso sabor a uva con un 20% de descuento. ¡No te lo pierdas!</p>
                <p className="price text-danger"><s>$22.99</s> $18.39</p>
                <a href="#" className="btn btn-success btn-lg w-100">Comprar</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Más Información</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {modalContent} {/* Mostrar el contenido del modal */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
