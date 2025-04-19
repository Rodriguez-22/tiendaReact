package com.jj.tienda.Models.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.jj.tienda.Models.Entity.Sabores;
import com.jj.tienda.Models.Repository.SaboresRepository;

@Service
public class SaboresServices {

    @Autowired
    private SaboresRepository saboresRepository;

    public List<Sabores> getAll() {
        return saboresRepository.findAll();
    }
}
