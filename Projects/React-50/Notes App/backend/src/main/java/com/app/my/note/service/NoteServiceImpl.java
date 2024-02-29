package com.app.my.note.service;

import com.app.my.note.entity.Note;
import com.app.my.note.entity.Person;
import com.app.my.note.repository.NoteRepository;
import com.app.my.note.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class NoteServiceImpl implements NoteService {

    NoteRepository noteRepository;
    PersonRepository personRepository;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository, PersonRepository personRepository) {
        this.noteRepository = noteRepository;
        this.personRepository = personRepository;
    }

    @Override
    public Note saveNote(Long personId, String noteDescription) throws Exception {
        Optional<Person> optionalPerson = personRepository.findById(personId);
        if (optionalPerson.isPresent()) {
            Person person = optionalPerson.get();
            Note note = Note.builder()
                    .noteDescription(noteDescription)
                    .person(person)
                    .createdAt(new Timestamp(System.currentTimeMillis()))
                    .updatedAt(new Timestamp(System.currentTimeMillis()))
                    .build();
            try {
                return noteRepository.save(note);
            } catch (Exception e) {
                throw new Exception("Internal server error...!!");
            }
        } else {
            throw new Exception("Person with personId: " + personId + " not found...!!");
        }
    }

    @Override
    public List<Note> getNoteByPersonId(Long personId) throws Exception {
        Optional<Person> optionalPerson = personRepository.findById(personId);
        if (optionalPerson.isPresent()) {
            try {
                return noteRepository.findByPersonPersonId(personId);
            } catch (Exception e) {
                throw new Exception("Internal server error...!!");
            }
        } else {
            throw new Exception("Person with personId: " + personId + " not found...!!");
        }
    }

    @Override
    public Note updateNote(Long personId, Long noteId, String noteDescription) throws Exception {
        Optional<Person> optionalPerson = personRepository.findById(personId);
        if (optionalPerson.isPresent()) {
            Optional<Note> optionalNote = noteRepository.findById(noteId);
            if (optionalNote.isPresent()) {
                Note note = optionalNote.get();
                note.setNoteDescription(noteDescription);
                note.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
                try {
                    return noteRepository.save(note);
                } catch (Exception e) {
                    throw new Exception("Internal server error...!!");
                }
            } else {
                throw new Exception("Note with noteId: " + noteId + " not found...!!");
            }
        } else {
            throw new Exception("Person with personId: " + personId + " not found...!!");
        }
    }

    @Override
    public Note deleteNote(Long personId, Long noteId) throws Exception {
        Optional<Person> optionalPerson = personRepository.findById(personId);
        if (optionalPerson.isPresent()) {
            Optional<Note> optionalNote = noteRepository.findById(noteId);
            if (optionalNote.isPresent()) {
                try {
                    noteRepository.deleteById(noteId);
                    return optionalNote.get();
                } catch (Exception e) {
                    throw new Exception("Internal server error...!!");
                }
            } else {
                throw new Exception("Note with noteId: " + noteId + " not found...!!");
            }
        } else {
            throw new Exception("Person with personId: " + personId + " not found...!!");
        }
    }

}
