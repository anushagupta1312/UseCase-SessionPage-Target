package com.Target.UpcurveSession.controller;

import com.Target.UpcurveSession.model.SessionDetail;
import com.Target.UpcurveSession.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class SessionController {

    @Autowired
    private SessionService service;

    @GetMapping("/sess/{id}")
    public SessionDetail getSessionById(@PathVariable int id){
        return service.getSessionById(id);
    }

//    @GetMapping("/session/{topicName}")
//    public SessionDetail getSessionByName(@PathVariable String name){
//        return service.getSessionByName(name);
//    }

    @GetMapping("/sessions")
    public List<SessionDetail> getAllSessions(){
        return service.getAllSessions();
    }

    @PostMapping("/add")
    public SessionDetail addSession(@RequestBody SessionDetail session){
        return service.addSession(session);
    }

    @PostMapping("/addSessions")
    public List<SessionDetail> addAllSessions(@RequestBody List<SessionDetail> sessions){
        return service.addSessions(sessions);
    }

    @PutMapping("/update/{id}")
    public SessionDetail updateSession(@PathVariable int id, @RequestBody SessionDetail session){
        return service.updateSession(id, session);
    }

    @DeleteMapping("/del/{id}")
    public String deleteSessionById(@PathVariable int id){
        return service.deleteSessionById(id);
    }

//    @DeleteMapping("/delete/{name}")
//    public String deleteSessionByName(@PathVariable String name){
//        return service.deleteSessionByName(name);
//    }
}