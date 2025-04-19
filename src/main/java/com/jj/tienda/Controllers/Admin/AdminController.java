package com.jj.tienda.Controllers.Admin;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

import com.jj.tienda.Models.Entity.Sabores;
import com.jj.tienda.Models.Services.SaboresServices;
@Controller
public class AdminController {

    @Autowired
    private SaboresServices SaboresService;


    @GetMapping("/admin")
    public String admin() {
        return "admin/index";
    }
}