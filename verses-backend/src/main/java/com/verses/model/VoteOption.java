package com.verses.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "vote_options")
public class VoteOption {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    
    private String text;
    private Integer votes = 0;
}
