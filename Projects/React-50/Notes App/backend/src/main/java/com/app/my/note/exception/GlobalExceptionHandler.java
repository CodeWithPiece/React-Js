package com.app.my.note.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<?> handleException(Exception exception) {
        Map<String, Object> map = new HashMap<>();
        map.put("status", false);
        map.put("message", exception.getLocalizedMessage());
        map.put("data", null);
        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
    }

}
