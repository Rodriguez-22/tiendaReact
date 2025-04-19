
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from './components/layout/header';
import Footer from './components/layout/footer';

import ProductosPage from './pages/ProductosPage'; 

const HomePage: React.FC = () => { return <h2>Página de Inicio</h2>; }
const SaboresPage: React.FC = () => { return <h2>Página de Sabores</h2>; }
const ContactoPage: React.FC = () => { return <h2>Página de Contacto</h2>; }
const LoginPage: React.FC = () => { return <h2>Página de Login</h2>; }
const AdminPage: React.FC = () => { return <h2>Panel de Administración</h2>; }
const NotFoundPage: React.FC = () => { return <h2>404 - Página No Encontrada</h2>}

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Container as="main" className="py-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {}
            <Route path="/productos" element={<ProductosPage />} />
            <Route path="/sabores" element={<SaboresPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;