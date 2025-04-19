package com.jj.tienda.Models.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "sabores")
public class Sabores {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sabor_id")  // Especifica el nombre correcto de la columna
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "imagen")
    private String imagen;

    @Column(name = "precio")
    private Double precio;

    // Getters y Setters
    public long getId() {
        return id;
        }

        public void setId(Long id) {
        this.id = id.longValue();
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }
}
