package com.Target.UpcurveSession.service;

import com.Target.UpcurveSession.model.SessionDetail;
import org.springframework.beans.factory.annotation.Autowired;
import com.Target.UpcurveSession.repository.SessionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SessionService {
    @Autowired
    private SessionRepository repository;

    //adding a single session
    public SessionDetail addSession(SessionDetail session){
        return repository.save(session);
    }

    //adding multiple sessions
    public List<SessionDetail> addSessions(List<SessionDetail> sessions){
        return repository.saveAll(sessions);
    }

    //retrieving a single session info by id
    public SessionDetail getSessionById(int id){
        return repository.findById(id).orElse(null);
    }

    //retrieving a session info by name
    public SessionDetail getSessionByName(String name){
        return repository.findBytopicName(name);
    }

    //retrieving info of all the sessions
    public List<SessionDetail> getAllSessions(){
        return repository.findAll();
    }

    //deleting a session by id
    public String deleteSessionById(int id){
        repository.deleteById(id);
        return "Session with id " + id + " is deleted";
    }

    //deleting a session by name
    public String deleteSessionByName(String name){
        repository.deleteBytopicName(name);
        return name + " session has been deleted";
    }

    //updating a session
    public SessionDetail updateSession(int id, SessionDetail session){
        SessionDetail updatedSession = repository.findById(id).orElse(null);

        updatedSession.setTopicName(session.getTopicName());
        updatedSession.setDate(session.getDate());
        updatedSession.setDuration(session.getDuration());
        updatedSession.setMentorName(session.getMentorName());
        updatedSession.setRecording(session.getRecording());

        return repository.save(updatedSession);
    }



}