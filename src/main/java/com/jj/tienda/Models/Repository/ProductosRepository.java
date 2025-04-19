package com.jj.tienda.Models.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.jj.tienda.Models.Entity.Productos;

@Repository
public interface ProductosRepository extends JpaRepository<Productos, Long> {

}