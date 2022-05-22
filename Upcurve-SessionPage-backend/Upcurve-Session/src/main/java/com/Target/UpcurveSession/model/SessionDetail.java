package com.Target.UpcurveSession.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Table(name = "SESSION_INFO")
@Entity
@Data
public class SessionDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String topicName;
    private String mentorName;
    private String date;
    private double duration;
    private String recording;
}