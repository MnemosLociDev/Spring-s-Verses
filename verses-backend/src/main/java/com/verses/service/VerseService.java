package com.verses.service;

import com.verses.model.Comment;
import com.verses.model.Verse;
import com.verses.model.VoteOption;
import com.verses.repository.VerseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VerseService {

    @Autowired
    private VerseRepository verseRepository;

    public List<Verse> getAllVerses() {
        return verseRepository.findAll();
    }

    public List<Verse> searchVerses(String query) {
        if (query == null || query.trim().isEmpty()) {
            return getAllVerses();
        }
        return verseRepository.searchVerses(query);
    }

    public Optional<Verse> getVerseById(String id) {
        return verseRepository.findById(id);
    }

    public Verse createVerse(Verse verse) {
        if (verse.getCreatedAt() == null) {
            verse.setCreatedAt(System.currentTimeMillis());
        }
        return verseRepository.save(verse);
    }

    public Verse castVote(String verseId, String optionId) {
        Verse verse = verseRepository.findById(verseId)
                .orElseThrow(() -> new RuntimeException("Verse not found"));
        
        verse.getOptions().stream()
                .filter(opt -> opt.getId().equals(optionId))
                .findFirst()
                .ifPresent(opt -> opt.setVotes(opt.getVotes() + 1));
        
        return verseRepository.save(verse);
    }

    public Verse addComment(String verseId, Comment comment) {
        Verse verse = verseRepository.findById(verseId)
                .orElseThrow(() -> new RuntimeException("Verse not found"));
        
        verse.getComments().add(comment);
        return verseRepository.save(verse);
    }

    public Verse addLike(String verseId) {
        Verse verse = verseRepository.findById(verseId)
                .orElseThrow(() -> new RuntimeException("Verse not found"));
        
        verse.setLikes(verse.getLikes() + 1);
        return verseRepository.save(verse);
    }
}
