package com.app.my.note.controller;

import com.app.my.note.entity.Note;
import com.app.my.note.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/notes-app/api/v1")
public class NoteController {

    NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping("/note")
    public ResponseEntity<?> saveNote(@RequestParam(name = "personId") String personId,
                                      @RequestParam(name = "noteDescription") String noteDescription) throws Exception {
        Note note = noteService.saveNote(Long.valueOf(personId), noteDescription);
        Map<String, Object> map = new HashMap<>();
        map.put("status", true);
        map.put("message", "Note added successfully...!!");
        map.put("data", note);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PostMapping("/note/person")
    public ResponseEntity<?> getNoteByPersonId(@RequestParam(name = "personId") String personId) throws Exception {
        List<Note> notes = noteService.getNoteByPersonId(Long.valueOf(personId));
        Map<String, Object> map = new HashMap<>();
        map.put("status", true);
        map.put("message", "Available notes...!!");
        map.put("data", notes);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PutMapping("/note/person")
    public ResponseEntity<?> updateNote(@RequestParam(name = "personId") String personId,
                                        @RequestParam(name = "noteId") String noteId,
                                        @RequestParam(name = "noteDescription") String noteDescription) throws Exception {
        Note note = noteService.updateNote(Long.valueOf(personId), Long.valueOf(noteId), noteDescription);
        Map<String, Object> map = new HashMap<>();
        map.put("status", true);
        map.put("message", "Note updated successfully...!!");
        map.put("data", note);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

}
