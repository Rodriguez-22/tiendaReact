import { Key } from "react";

export interface Sabor {
    id: number; 
    nombre: string;
    descripcion?: string; 
    imagen?: string;
    precio?: number;
}


export interface Producto {
    producto_id: Key | null | undefined;
    id: number; 
    nombreProducto: string;
    descripcion?: string; 
    imagen?: string;      
    marca?: string;
    precio: number | null; 
    tipo?: string;
    stock?: number;
    sabor?: Sabor | null; 
}