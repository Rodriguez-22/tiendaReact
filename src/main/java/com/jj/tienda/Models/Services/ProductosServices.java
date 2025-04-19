package com.jj.tienda.Models.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jj.tienda.Models.Entity.Productos;
import com.jj.tienda.Models.Repository.ProductosRepository;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import java.util.List;

@Service
public class ProductosServices {
    
    @Autowired
    private ProductosRepository productosRepository;
    
    public List<Productos> getAll() {
        return productosRepository.findAll();
    }

    // Obtener todos los productos
    public List<Productos> obtenerTodos() {
        return productosRepository.findAll();
    }

    public  Productos guardarProducto(Productos producto) {
        return productosRepository.save(producto);
    }

    
    public void eliminar(Long id) {
        productosRepository.deleteById(id);
    }

    
    
}


