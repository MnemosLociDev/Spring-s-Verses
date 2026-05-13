package com.verses.config;

import com.verses.model.Verse;
import com.verses.model.VoteOption;
import com.verses.repository.VerseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initData(VerseRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                Verse v1 = new Verse();
                v1.setTitle("Is it time to finally make the 4-day work week a thing?");
                v1.setType("petition");
                v1.setCreatorName("Alex - Burnout Is Real");
                v1.setDescription("We've been doing the 9-to-5 since forever, but the world has changed.");
                v1.setLikes(1240);
                v1.setCreatedAt(System.currentTimeMillis());
                v1.setIsFeatured(true);

                VoteOption o1 = new VoteOption();
                o1.setText("YES, sign me up right now");
                o1.setVotes(24500);

                VoteOption o2 = new VoteOption();
                o2.setText("Nah, it'll just mess with the economy");
                o2.setVotes(8200);

                v1.getOptions().add(o1);
                v1.getOptions().add(o2);

                repository.save(v1);

                Verse v2 = new Verse();
                v2.setTitle("Can we still call AI 'art' or is it just efficient theft?");
                v2.setType("debate");
                v2.setCreatorName("Digital Canvas");
                v2.setDescription("The lines are getting blurry...");
                v2.setLikes(910);
                v2.setCreatedAt(System.currentTimeMillis());

                VoteOption o3 = new VoteOption();
                o3.setText("It's not real art");
                o3.setVotes(4890);

                VoteOption o4 = new VoteOption();
                o4.setText("It's just a new tool");
                o4.setVotes(5120);

                v2.getOptions().add(o3);
                v2.getOptions().add(o4);

                repository.save(v2);
            }
        };
    }
}
