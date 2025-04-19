package com.jj.tienda.Controllers.Api;

import com.jj.tienda.Models.Entity.Productos;
import com.jj.tienda.Models.Services.ProductosServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*; 

import java.util.List;

@RestController 
@RequestMapping("/api/productos") 
public class ProductosApiController {

    @Autowired
    private ProductosServices productosService; 

    
    @GetMapping 
    public ResponseEntity<List<Productos>> obtenerTodosLosProductos() {
        try {
            List<Productos> productos = productosService.getAll(); 
            if (productos.isEmpty()) {
                
                return ResponseEntity.ok(productos);
            }
            return ResponseEntity.ok(productos); 
        } catch (Exception e) {
           
            System.err.println("Error al obtener productos: " + e.getMessage());
            
            return ResponseEntity.internalServerError().build();
        }
    }

}