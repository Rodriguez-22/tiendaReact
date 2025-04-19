package com.jj.tienda.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jj.tienda.Models.Entity.Sabores;
import com.jj.tienda.Models.Services.SaboresServices;


@Controller
@RequestMapping("/sabores")
public class SaborController {

    @Autowired
    private SaboresServices gamasService;

    @GetMapping("/index")
    public String ListadeSabores(Model model) {
        List<Sabores> sabores = gamasService.getAll();
        model.addAttribute("sabores", sabores);
        return "www/sabores/index";
    }
}
