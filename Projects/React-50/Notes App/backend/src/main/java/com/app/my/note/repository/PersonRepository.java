package com.app.my.note.repository;

import com.app.my.note.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

    Optional<Person> findByPersonEmailAndPersonPassword(String personEmail, String personPassword);

}
