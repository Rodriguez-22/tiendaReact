package com.jj.tienda.Controllers;

import com.jj.tienda.Models.Entity.Contacto;
import com.jj.tienda.Models.Services.ContactoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class ContactoController {

    @Autowired
    private ContactoServices contactoService;

    @GetMapping("/contecto")
    public String mostrarFormulario(Model model) {
        model.addAttribute("contacto", new Contacto());
        return "contecto";
    }

    @PostMapping("/contecto")
    public String enviarFormulario(@RequestParam String nombre, @RequestParam String email, @RequestParam String mensaje) {
        Contacto contacto = new Contacto(nombre, email, mensaje);
        contactoService.guardarContacto(contacto);
        return "contecto";
    }
}
