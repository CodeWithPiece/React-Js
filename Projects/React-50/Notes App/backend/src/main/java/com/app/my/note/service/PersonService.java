package com.app.my.note.service;

import com.app.my.note.entity.Person;

public interface PersonService {

    Person savePerson(String personName, String personEmail, String personPassword) throws Exception;

    Person doLogin(String personEmail, String personPassword) throws Exception;

}
