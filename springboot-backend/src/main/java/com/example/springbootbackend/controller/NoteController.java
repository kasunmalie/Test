package com.example.springbootbackend.controller;

import com.example.springbootbackend.model.Note;
import com.example.springbootbackend.repository.NoteRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class NoteController {

    private final Logger log  = LoggerFactory.getLogger(NoteController.class);

    @Autowired(required=true)
    NoteRepository noteRepository;

    public NoteController(NoteRepository noteRepository){
        this.noteRepository=noteRepository;
    }
   /* @GetMapping("/notes")
    public List getAllNotes(){
        return noteRepository.findAll();

    }*/

    @GetMapping("/notes")
    Collection<Note>getAllNotes(){
        return noteRepository.findAll();
    }

    @GetMapping("/note/{nid}")
    ResponseEntity<Note>getNote(@PathVariable Integer nid){
    Optional<Note>note=noteRepository.findById(nid);
    return note.map(response -> ResponseEntity.ok().body(response))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    /*@PostMapping("/create")
    public Note createNote(@RequestBody Note note)throws Exception{
        log.info("Request to create a note: {}",note);
        return noteRepository.save(note);

        //Note result = noteRepository.save(note);

        //return ResponseEntity.created(new URI("/api/group/"+ result.getNid())).body(result);
    }*/

       @PostMapping("/create")
       ResponseEntity<Note>createNote(@RequestBody Note note)throws Exception{
        log.info("Request to create a note: {}",note);
        Note result = noteRepository.save(note);
        return ResponseEntity.ok().body(result);
        //return ResponseEntity.created(new URI("/api/group/"+ result.getNid())).body(result);
    }

    @PutMapping("/updateNote")
    ResponseEntity<?>updateNote(@RequestBody Note note)throws Exception {
        log.info("Request to update a note: {}", note);
        Note result = noteRepository.save(note);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/deleteNote/{nid}")
    ResponseEntity<?>deleteNote(@PathVariable Integer nid){
        log.info("Request to delete a note: {}", nid);
        noteRepository.deleteById(nid);
        return ResponseEntity.ok().build();


    }
}
