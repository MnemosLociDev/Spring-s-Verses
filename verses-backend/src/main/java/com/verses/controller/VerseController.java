package com.verses.controller;

import com.verses.model.Comment;
import com.verses.model.Verse;
import com.verses.service.VerseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/verses")
@CrossOrigin(origins = "*") // In production, restrict this to your frontend domain
public class VerseController {

    @Autowired
    private VerseService verseService;

    @GetMapping
    public List<Verse> getAllVerses(@RequestParam(required = false) String query) {
        if (query != null && !query.isEmpty()) {
            return verseService.searchVerses(query);
        }
        return verseService.getAllVerses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Verse> getVerseById(@PathVariable String id) {
        return verseService.getVerseById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Verse createVerse(@RequestBody Verse verse) {
        return verseService.createVerse(verse);
    }

    @PostMapping("/{id}/vote")
    public Verse castVote(@PathVariable String id, @RequestParam String optionId) {
        return verseService.castVote(id, optionId);
    }

    @PostMapping("/{id}/comment")
    public Verse addComment(@PathVariable String id, @RequestBody Comment comment) {
        return verseService.addComment(id, comment);
    }

    @PostMapping("/{id}/like")
    public Verse addLike(@PathVariable String id) {
        return verseService.addLike(id);
    }
}
