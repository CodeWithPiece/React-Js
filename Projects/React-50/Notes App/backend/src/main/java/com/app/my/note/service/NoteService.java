package com.app.my.note.service;

import com.app.my.note.entity.Note;

import java.util.List;

public interface NoteService {

    Note saveNote(Long personId, String noteDescription) throws Exception;

    List<Note> getNoteByPersonId(Long personId) throws Exception;

    Note updateNote(Long personId, Long noteId, String noteDescription) throws Exception;

}
