package com.jj.tienda.Controllers.Api;

import com.jj.tienda.Models.Entity.Contacto;
import com.jj.tienda.Models.Services.ContactoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacto")
public class ContactoApiController {

    @Autowired
    private ContactoServices contactoService;

    @PostMapping // Responde a peticiones POST a /api/contacto
    public ResponseEntity<?> guardarMensajeContacto(@RequestBody Contacto contacto) {
       
        try {
            contactoService.guardarContacto(contacto); 
            return ResponseEntity.status(HttpStatus.CREATED).body("Mensaje recibido correctamente");
            
        } catch (Exception e) {
            System.err.println("Error al guardar contacto: " + e.getMessage());
            // Devuelve un mensaje de error y estado 500.
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Error al procesar el mensaje: " + e.getMessage());
        }
    }
}