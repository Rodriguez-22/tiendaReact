package com.jj.tienda.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
public class SiteController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("title", "Inicio");
        return "www/site/index";
    }

    @GetMapping("/pagina-contecto")
    public String contacto(Model model) {
        model.addAttribute("title", "Contacto");
        return "www/site/contecto";
    }

    
}
