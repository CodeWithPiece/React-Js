package com.app.my.note.controller;

import com.app.my.note.entity.Person;
import com.app.my.note.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/notes-app/api/v1")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping("/")
    public ResponseEntity<?> welcomePage() {
        Map<String, Object> map = new HashMap<>();
        map.put("status", true);
        map.put("message", "Welcome to notes app.");
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PostMapping("/person")
    public ResponseEntity<?> savePerson(@RequestParam(name = "personName") String personName
            , @RequestParam(name = "personEmail") String personEmail
            , @RequestParam(name = "personPassword") String personPassword) throws Exception {

        Person person = personService.savePerson(personName, personEmail, personPassword);
        Map<String, Object> map = new HashMap<>();
        map.put("status", true);
        map.put("message", "Person added successfully...!!");
        map.put("data", person);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PostMapping("/person/login")
    public ResponseEntity<?> doLogin(@RequestParam(name = "personEmail") String personEmail
            , @RequestParam(name = "personPassword") String personPassword) throws Exception {
        Person person = personService.doLogin(personEmail, personPassword);
        Map<String, Object> map = new HashMap<>();
        map.put("status", true);
        map.put("message", "Login successfully...!!");
        map.put("data", person);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

}
