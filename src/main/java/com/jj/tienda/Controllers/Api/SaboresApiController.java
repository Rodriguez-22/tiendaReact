package com.jj.tienda.Controllers.Api;

import com.jj.tienda.Models.Entity.Sabores;
import com.jj.tienda.Models.Services.SaboresServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sabores")
public class SaboresApiController {

    @Autowired
    private SaboresServices saboresService; 

    @GetMapping
    public ResponseEntity<List<Sabores>> obtenerTodosLosSabores() {
        try {
            List<Sabores> sabores = saboresService.getAll();
            return ResponseEntity.ok(sabores);
        } catch (Exception e) {
            System.err.println("Error al obtener sabores: " + e.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

 
}