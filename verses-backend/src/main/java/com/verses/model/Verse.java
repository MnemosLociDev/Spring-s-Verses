package com.verses.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "verses")
public class Verse {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    
    private String title;
    private String type; // poll, petition, debate, comparison
    private String creatorName;
    
    @Column(length = 1000)
    private String description;
    
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "verse_id")
    private List<VoteOption> options = new ArrayList<>();
    
    private Integer likes = 0;
    private Long createdAt;
    
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "verse_id")
    private List<Comment> comments = new ArrayList<>();
    
    private Boolean isTakenDown = false;
    private Boolean isFeatured = false;
}
