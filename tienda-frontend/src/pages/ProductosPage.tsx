
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap'; 
import { Producto } from '../types'; 


const API_URL = 'http://localhost:8080'; 

const ProductosPage: React.FC = () => {
    // Estados del componente
    const [productos, setProductos] = useState<Producto[]>([]); 
    const [loading, setLoading] = useState<boolean>(true);     
    const [error, setError] = useState<string | null>(null);   

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

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
                <p>Cargando productos...</p>
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
        <div>
            <h2 className="text-center mb-4">Nuestros Productos</h2>
            
            <Row xs={1} sm={2} md={3} lg={4} className="g-4"> 
                {productos.map((producto) => (
                   
                    <Col key={producto.id}>
                        
                        <Card className="h-100 shadow-sm product-card"> 
                            <Card.Img
                                variant="top"
                             
                                src={producto.imagen ? `<span class="math-inline">\{API\_URL\}</span>{producto.imagen}` : '/placeholder.jpg'}
                                alt={producto.nombreProducto}
                                style={{ height: '300px', objectFit: 'contain' }} 
                                
                                onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.jpg'; }}
                            />
                            <Card.Body className="d-flex flex-column text-center"> 
                                <Card.Title as="h6" className="product-title">
                                    {producto.nombreProducto || 'Nombre no disponible'}
                                </Card.Title>
                              
                                <p className="text-muted small mb-2">
                                    🚚 <span>Recíbelo mañana</span>
                                </p>
                                <Card.Text as="p" className="price mt-auto mb-2"> 
                                    <span className="final-price fw-bold">
                                        
                                        {typeof producto.precio === 'number'
                                            ? `${producto.precio.toFixed(2)}€`
                                            : 'Precio no disponible'}
                                    </span>
                                </Card.Text>
                                
                                <Button variant="primary" size="sm" className="mt-1">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
           
            {productos.length === 0 && !loading && (
                 <Alert variant="info" className="mt-4">No hay productos disponibles en este momento.</Alert>
            )}
        </div>
    );
}

export default ProductosPage;