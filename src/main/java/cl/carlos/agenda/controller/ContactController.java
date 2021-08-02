package cl.carlos.agenda.controller;

import cl.carlos.agenda.model.Contact;
import cl.carlos.agenda.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@CrossOrigin(origins = {"http://localhost:4200", "*"})
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

    @GetMapping("/contacts/{id}")
    public ResponseEntity<?>show(@PathVariable Long id){
        Contact contact=contactService.findById(id);
        Map<String, Object> response=new HashMap<>();
        if(contact==null){
            response.put("mensaje","El contacto ID: ".concat(id.toString().concat(" no existe.")));
            return new ResponseEntity<Map<String,Object>>(response,HttpStatus.NOT_FOUND);

        }


        return new ResponseEntity<Contact>(contact, HttpStatus.OK);


    }

    @PostMapping("/contacts")
    public ResponseEntity<Contact>save(@RequestBody Contact contact){
        Contact contact1=contactService.save(contact);
        return new ResponseEntity<Contact>(contact1,HttpStatus.OK);
    }
    @PutMapping("/contacts/{id}")
    public ResponseEntity<Contact> update(@RequestBody Contact contact,@PathVariable Long id){
        Contact contactNew=contactService.findById(id);

        contactNew.setFirstName(contact.getFirstName());
        contactNew.setLastName(contact.getLastName());
        contactNew.setInitDate(contact.getInitDate());
        contactService.save(contactNew);
        return new ResponseEntity<Contact>(contactNew,HttpStatus.CREATED);
    }

    @DeleteMapping("/contacts/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        contactService.delete(id);
    }


}
