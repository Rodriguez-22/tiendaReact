import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap para los estilos
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'; // Componentes de react-bootstrap
import './Contacto.css'; // Puedes crear un archivo CSS adicional si lo deseas

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    const form = e.currentTarget as HTMLFormElement;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container fluid className="contact-page mt-5">
      <Row className="mb-5">
        <Col md={6} className="text-center">
          <h2 className="display-4 font-weight-bold text-dark">Contacto</h2>
          <p className="lead text-muted">¡Nos encantaría saber de ti! Si tienes alguna pregunta o inquietud, no dudes en enviarnos un mensaje.</p>
        </Col>
      </Row>

      {/* Formulario de contacto */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-lg border-0 rounded">
            <Card.Body>
              <h3 className="text-center mb-4">Envíanos un Mensaje</h3>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/* Nombre */}
                <Form.Group controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresa tu nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingresa tu nombre.
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Correo */}
                <Form.Group controlId="formCorreo">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingresa un correo electrónico válido.
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Mensaje */}
                <Form.Group controlId="formMensaje">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={4}
                    placeholder="Escribe tu mensaje aquí"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingresa tu mensaje.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Enviar Mensaje
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Información de contacto */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Card className="shadow-lg border-0 rounded w-100">
            <Card.Body>
              <h3 className="text-center mb-4">¿Cómo encontrarnos?</h3>
              <p className="lead text-center text-muted">Estamos ubicados en C. Mayor, 21, 04620 Vera, Almería</p>
              <div className="text-center">
                <i className="fa fa-map-marker-alt fa-3x text-primary mb-3"></i>
                <h5>Dirección:</h5>
                <p>04620 Calle Mayor, Almeria, España</p>
                <i className="fa fa-phone-alt fa-3x text-primary mb-3"></i>
                <h5>Teléfono:</h5>
                <p>(+34) 606 34 04 86</p>
                <i className="fa fa-envelope fa-3x text-primary mb-3"></i>
                <h5>Email:</h5>
                <p>VaperJJ@gmail.com</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Mapa */}
      <Row>
        <Col>
          <div className="map-container">
            <h3 className="text-center mb-4">Encuentra nuestra ubicación</h3>
            {/* Aquí es donde se inserta el mapa */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.0264939476847!2d-1.8705670241410368!3d37.24707887212307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad503afd2af93%3A0xeec84b60dafd98b1!2sC.%20Mayor%2C%2021%2C%2004620%20Vera%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1745565998185!5m2!1ses!2ses" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
