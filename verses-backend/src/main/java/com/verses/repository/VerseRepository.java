package com.verses.repository;

import com.verses.model.Verse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VerseRepository extends JpaRepository<Verse, String> {
    
    @Query("SELECT v FROM Verse v WHERE LOWER(v.title) LIKE LOWER(CONCAT('%', :query, '%')) OR LOWER(v.description) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<Verse> searchVerses(@Param("query") String query);
}
