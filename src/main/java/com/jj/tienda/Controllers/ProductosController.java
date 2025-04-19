package com.jj.tienda.Controllers;

import com.jj.tienda.Models.Entity.Productos;
import com.jj.tienda.Models.Services.ProductosServices;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
// import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.ModelAttribute;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

// import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/Productos")
public class ProductosController {

    @Autowired
    private ProductosServices gamasService;

    @GetMapping("/index")
    public String productos(Model model) {
        List<Productos> productos = gamasService.getAll();
        model.addAttribute("productos", productos);
        return "www/productos/index";
    }


}
