package com.Target.UpcurveSession.repository;

import com.Target.UpcurveSession.model.SessionDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SessionRepository extends JpaRepository<SessionDetail, Integer> {
    public SessionDetail findBytopicName(String name);
    public String deleteBytopicName(String name);

}