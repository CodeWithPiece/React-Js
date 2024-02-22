package com.app.my.note.service;

import com.app.my.note.entity.Person;
import com.app.my.note.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Optional;

@Service
public class PersonServiceImpl implements PersonService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonServiceImpl(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public Person savePerson(String personName, String personEmail, String personPassword) throws Exception {
        Person person = Person.builder()
                .personName(personName)
                .personEmail(personEmail)
                .personPassword(personPassword)
                .createdAt(new Timestamp(System.currentTimeMillis()))
                .updatedAt(new Timestamp(System.currentTimeMillis()))
                .build();
        try {
            return personRepository.save(person);
        } catch (Exception e) {
            throw new Exception(personEmail + " already exist, please try different email.");
        }
    }

    @Override
    public Person doLogin(String personEmail, String personPassword) throws Exception {
        Optional<Person> optionalPerson = personRepository.findByPersonEmailAndPersonPassword(personEmail, personPassword);
        if (optionalPerson.isPresent()) {
            return optionalPerson.get();
        } else {
            throw new Exception("Incorrect email or password, please try again...!!");
        }
    }
}
