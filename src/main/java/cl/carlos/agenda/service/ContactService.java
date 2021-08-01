package cl.carlos.agenda.service;

import cl.carlos.agenda.model.Contact;

import java.util.List;

public interface ContactService {

    public List<Contact>findAll();
    public Contact findById(Long id);
    public Contact save(Contact contact);
    public void delete(Long id);



}
