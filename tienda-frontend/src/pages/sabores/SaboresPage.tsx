import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Card, Button, Modal, Form, Spinner, Alert, Table, ButtonGroup } from 'react-bootstrap';
import './SaboresPage.css';

const API_URL = 'http://localhost:8080';

interface Sabor {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

const SaboresPage: React.FC = () => {
  const [sabores, setSabores] = useState<Sabor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saborSeleccionado, setSaborSeleccionado] = useState<Sabor | null>(null);
  const [busqueda, setBusqueda] = useState('');
  const [orden, setOrden] = useState('nombre_asc');
  const [vista, setVista] = useState<'tarjetas' | 'lista'>('tarjetas');

  useEffect(() => {
    const fetchSabores = async () => {
      try {
        const response = await axios.get<Sabor[]>(`${API_URL}/api/sabores`);
        setSabores(response.data);
      } catch (err) {
        console.error('Error al cargar sabores:', err);
        setError('No se pudieron cargar los sabores.');
      } finally {
        setLoading(false);
      }
    };

    fetchSabores();
  }, []);

  const handleOrdenChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrden(e.target.value);
  };

  const ordenarSabores = (lista: Sabor[]) => {
    return [...lista].sort((a, b) => {
      switch (orden) {
        case 'nombre_asc':
          return a.nombre.localeCompare(b.nombre);
        case 'nombre_desc':
          return b.nombre.localeCompare(a.nombre);
        case 'precio_asc':
          return a.precio - b.precio;
        case 'precio_desc':
          return b.precio - a.precio;
        default:
          return 0;
      }
    });
  };

  const saboresFiltrados = ordenarSabores(
    sabores.filter((sabor) =>
      sabor.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
  );

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
        <p>Cargando sabores...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="mt-4">
        <Alert.Heading>Error</Alert.Heading>
        <p>{error}</p>
      </Alert>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Sabores Disponibles</h2>

      <Row className="mb-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Buscar por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Select value={orden} onChange={handleOrdenChange}>
            <option value="nombre_asc">Nombre (A-Z)</option>
            <option value="nombre_desc">Nombre (Z-A)</option>
            <option value="precio_asc">Precio (menor a mayor)</option>
            <option value="precio_desc">Precio (mayor a menor)</option>
          </Form.Select>
        </Col>
        <Col md={4} className="text-end">
          <ButtonGroup>
            <Button
              variant={vista === 'tarjetas' ? 'primary' : 'outline-primary'}
              onClick={() => setVista('tarjetas')}
            >
              🧃 Tarjetas
            </Button>
            <Button
              variant={vista === 'lista' ? 'primary' : 'outline-primary'}
              onClick={() => setVista('lista')}
            >
              📋 Lista
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      {/* Vista Tarjetas */}
      {vista === 'tarjetas' && (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {saboresFiltrados.map((sabor) => (
            <Col key={sabor.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={sabor.imagen ? `${API_URL}${sabor.imagen}` : '/placeholder.jpg'}
                  alt={sabor.nombre}
                  style={{ height: '250px', objectFit: 'cover' }}
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src = '/placeholder.jpg')
                  }
                />
                <Card.Body className="text-center d-flex flex-column">
                  <Card.Title>{sabor.nombre}</Card.Title>
                  <Card.Text className="text-muted">{sabor.precio.toFixed(2)}€</Card.Text>
                  <Button variant="outline-primary" onClick={() => setSaborSeleccionado(sabor)}>
                    Ver más
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Vista Lista */}
      {vista === 'lista' && (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {saboresFiltrados.map((sabor) => (
              <tr key={sabor.id}>
                <td style={{ width: '80px' }}>
                  <img
                    src={sabor.imagen ? `${API_URL}${sabor.imagen}` : '/placeholder.jpg'}
                    alt={sabor.nombre}
                    style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                    onError={(e) =>
                      ((e.target as HTMLImageElement).src = '/placeholder.jpg')
                    }
                  />
                </td>
                <td>{sabor.nombre}</td>
                <td>{sabor.descripcion}</td>
                <td>{sabor.precio.toFixed(2)}€</td>
                <td>
                  <Button size="sm" onClick={() => setSaborSeleccionado(sabor)}>
                    Ver más
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Modal de detalle */}
      {saborSeleccionado && (
        <Modal show onHide={() => setSaborSeleccionado(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{saborSeleccionado.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={saborSeleccionado.imagen ? `${API_URL}${saborSeleccionado.imagen}` : '/placeholder.jpg'}
              alt={saborSeleccionado.nombre}
              className="img-fluid mb-3"
              onError={(e) =>
                ((e.target as HTMLImageElement).src = '/placeholder.jpg')
              }
            />
            <p>{saborSeleccionado.descripcion}</p>
            <p className="fw-bold">Precio: {saborSeleccionado.precio.toFixed(2)}€</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSaborSeleccionado(null)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default SaboresPage;
