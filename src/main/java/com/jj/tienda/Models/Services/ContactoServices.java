package com.jj.tienda.Models.Services;

import com.jj.tienda.Models.Entity.Contacto;
import com.jj.tienda.Models.Repository.ContactoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ContactoServices {

    @Autowired
    private ContactoRepository contactoRepository;

    public void guardarContacto(Contacto contacto) {
        contactoRepository.save(contacto);
    }
}
