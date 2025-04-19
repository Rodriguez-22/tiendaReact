package com.jj.tienda.Controllers.Admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller; 
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*; 

import com.jj.tienda.Models.Entity.Productos;
import com.jj.tienda.Models.Services.ProductosServices;

import java.util.List;

@Controller 
@RequestMapping("/admin/productos") 
public class AdminProductosController {

    @Autowired
    private ProductosServices productosService;

    

    @GetMapping("/api") 
    @ResponseBody 
    public ResponseEntity<List<Productos>> getAdminProductosApi() {
         try {
            List<Productos> productos = productosService.getAll();
            return ResponseEntity.ok(productos);
        } catch (Exception e) {
            System.err.println("Error al obtener productos para admin API: " + e.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/api") 
    @ResponseBody 
    public ResponseEntity<?> guardarProductoApi(@RequestBody Productos producto) {
        
        try {
            
            Productos nuevoProducto = productosService.guardarProducto(producto);
            return ResponseEntity.status(HttpStatus.CREATED).body(nuevoProducto); 
        } catch (Exception e) {
             System.err.println("Error al guardar producto desde admin API: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al guardar el producto: " + e.getMessage());
        }
    }

    @DeleteMapping("/api/{id}") 
    @ResponseBody 
    public ResponseEntity<?> eliminarProductoApi(@PathVariable Long id) {
         try {
            
            productosService.eliminar(id); // Llama al servicio para eliminar
            return ResponseEntity.ok().body("Producto con ID " + id + " eliminado correctamente.");
            
        } catch (Exception e) {
            System.err.println("Error al eliminar producto desde admin API: " + e.getMessage());
           
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al eliminar el producto: " + e.getMessage());
        }
    }
}