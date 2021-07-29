package cl.carlos.agenda.controller;

import cl.carlos.agenda.model.Contact;
import cl.carlos.agenda.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/")
public class ContactController {

    @Autowired
    ContactService contactService;

    @GetMapping("/contacts")
    public ResponseEntity<List<Contact>>get(){
        List<Contact>contacts=contactService.findAll();
        return new ResponseEntity<List<Contact>>(contacts, HttpStatus.OK);

    }

}
