package cl.carlos.agenda.service;

import cl.carlos.agenda.model.Contact;
import cl.carlos.agenda.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactServiceImpl implements ContactService{

    @Autowired
    ContactRepository contactRepository;

    @Override
    public List<Contact> findAll() {
        return contactRepository.findAll();
    }
}
