import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card, Button, Spinner, Alert, ListGroup, Form, ButtonGroup, Modal } from 'react-bootstrap';
import { Producto } from '../../types';
import './ProductosPage.css'; // Asegúrate de tener la hoja de estilos personalizada

const API_URL = 'http://localhost:8080';

const ProductosPage: React.FC = () => {
  // Estados del componente
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState<string>('');
  const [orden, setOrden] = useState<string>('nombre_asc');
  const [viewType, setViewType] = useState<'card' | 'list'>('card');
  const [showModal, setShowModal] = useState<boolean>(false); // Estado para manejar la visibilidad del modal
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null); // Producto seleccionado para mostrar

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<Producto[]>(`${API_URL}/api/productos`);
        setProductos(response.data);
      } catch (err) {
        console.error("Error fetching productos:", err);
        setError("No se pudieron cargar los productos. Inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const handleOrdenChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrden(e.target.value);
  };

  const ordenarProductos = (lista: Producto[]) => {
    return [...lista].sort((a, b) => {
      switch (orden) {
        case 'nombre_asc':
          return a.nombreProducto.localeCompare(b.nombreProducto);
        case 'nombre_desc':
          return b.nombreProducto.localeCompare(a.nombreProducto);
        case 'precio_asc':
          return (a.precio ?? 0) - (b.precio ?? 0);
        case 'precio_desc':
          return (b.precio ?? 0) - (a.precio ?? 0);
        default:
          return 0;
      }
    });
  };

  const productosFiltrados = ordenarProductos(
    productos.filter((producto) =>
      producto.nombreProducto.toLowerCase().includes(busqueda.toLowerCase())
    )
  );

  // Función para mostrar el modal y cargar el producto seleccionado
  const handleVerMas = (producto: Producto) => {
    setProductoSeleccionado(producto);
    setShowModal(true);
  };

  // Cerrar el modal
  const handleCloseModal = () => setShowModal(false);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status" className="spinner">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
        <p className="loading-text">Cargando productos...</p>
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
      <h2 className="text-center mb-4 page-title">Nuestros Productos</h2>

      <Row className="mb-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Buscar por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="search-input"
          />
        </Col>
        <Col md={4}>
          <Form.Select value={orden} onChange={handleOrdenChange} className="order-select">
            <option value="nombre_asc">Nombre (A-Z)</option>
            <option value="nombre_desc">Nombre (Z-A)</option>
            <option value="precio_asc">Precio (menor a mayor)</option>
            <option value="precio_desc">Precio (mayor a menor)</option>
          </Form.Select>
        </Col>
        <Col md={4} className="text-end">
          <ButtonGroup>
            <Button
              variant={viewType === 'card' ? 'primary' : 'outline-primary'}
              onClick={() => setViewType('card')}
              className="view-button"
            >
              🧃 Tarjetas
            </Button>
            <Button
              variant={viewType === 'list' ? 'primary' : 'outline-primary'}
              onClick={() => setViewType('list')}
              className="view-button"
            >
              📋 Lista
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      {/* Vista Tarjetas */}
      {viewType === 'card' && (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 product-cards">
          {productosFiltrados.map((producto) => (
            <Col key={producto.producto_id}>
              <Card className="h-100 shadow-lg product-card">
                <Card.Img
                  variant="top"
                  src={producto.imagen ? `${API_URL}${producto.imagen}` : '/placeholder.jpg'}
                  alt={producto.nombreProducto}
                  className="product-image"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.jpg'; }}
                />
                <Card.Body className="text-center d-flex flex-column">
                  <Card.Title>{producto.nombreProducto}</Card.Title>
                  <Card.Text className="text-muted">
                    {producto.precio !== null && producto.precio !== undefined
                      ? `${producto.precio.toFixed(2)}€`
                      : 'Precio no disponible'}
                  </Card.Text>
                  <Button variant="outline-primary" onClick={() => handleVerMas(producto)} className="view-more-btn">
                    Ver más
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Vista Lista */}
      {viewType === 'list' && (
        <ListGroup className="list-group-flush product-list">
          {productosFiltrados.map((producto) => (
            <ListGroup.Item key={producto.producto_id} className="d-flex align-items-center product-list-item">
              <img
                src={producto.imagen ? `${API_URL}${producto.imagen}` : '/placeholder.jpg'}
                alt={producto.nombreProducto}
                className="product-list-image"
                onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.jpg'; }}
              />
              <div className="flex-grow-1">
                <h6>{producto.nombreProducto}</h6>
                <p className="text-muted small mb-2">🚚 Recíbelo mañana</p>
                <p className="price mb-0 fw-bold">
                  {typeof producto.precio === 'number'
                    ? `${producto.precio.toFixed(2)}€`
                    : 'Precio no disponible'}
                </p>
              </div>
              <Button variant="primary" size="sm" className="buy-btn">Comprar</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      {productosFiltrados.length === 0 && !loading && (
        <Alert variant="info" className="mt-4">No hay productos disponibles en este momento.</Alert>
      )}

      {/* Modal de detalles del producto */}
      {productoSeleccionado && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{productoSeleccionado.nombreProducto}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <img
                src={productoSeleccionado.imagen ? `${API_URL}${productoSeleccionado.imagen}` : '/placeholder.jpg'}
                alt={productoSeleccionado.nombreProducto}
                className="modal-product-image"
                onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.jpg'; }}
              />
              <p className="mt-3">{productoSeleccionado.descripcion}</p>
              <h4>{productoSeleccionado.precio ? `${productoSeleccionado.precio.toFixed(2)}€` : 'Precio no disponible'}</h4>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
            <Button variant="primary">Comprar ahora</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ProductosPage;
