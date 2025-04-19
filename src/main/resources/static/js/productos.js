function guardarProducto() {
    const producto = {
        nombre: document.getElementById("nombre").value.trim(),
        precio: parseFloat(document.getElementById("precio").value),  // Convertir a número
        descripcion: document.getElementById("descripcion").value.trim()
    };
    

    fetch("http://localhost:8080/admin/productos/guardar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al guardar el producto");
        }
        return response.json();
    })
    .then(data => {
        console.log("Producto guardado:", data);
        document.getElementById("formProducto").reset(); // Limpia el formulario
        $("#modalProducto").modal("hide"); // Cierra el modal
    })
    .catch(error => console.error("Error:", error));
}
