
import React from 'react';
import Container from 'react-bootstrap/Container';

import { Github, Linkedin, Instagram } from 'react-bootstrap-icons';

const Footer: React.FC = () => {
    

 
    const iconStyle = {
        fontSize: '1.5rem', 
        margin: '0 8px'    
    };

    return (
        
        <footer className="bg-light py-4 mt-auto border-top"> 
            <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                
                <p className="mb-2 mb-md-0 text-muted">&copy; 2025 J J Tienda_Vaper</p>

                
                <div>
                  
                    <a href="https://github.com/JorgeAsca" target="_blank" rel="noopener noreferrer" className="text-muted">
                        <Github style={iconStyle} /> 
                    </a>
                    <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer" className="text-muted">
                        <Linkedin style={iconStyle} />
                    </a>
                    <a href="https://instagram.com/jorge_olazabal" target="_blank" rel="noopener noreferrer" className="text-muted">
                        <Instagram style={iconStyle} />
                    </a>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;