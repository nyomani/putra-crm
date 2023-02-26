package com.neo.ppln.generator;

import com.neo.ppln.entity.Page;
import com.neo.ppln.entity.User;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.service.CrmService;
import com.vaadin.flow.spring.annotation.SpringComponent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Arrays;
import java.util.Random;

@SpringComponent
public class DataGenerator {
    private final CrmService service;
    final Random r;
    int seed = 123;
    Logger logger;

    DataGenerator(final CrmService service)
    {

        this.service = service;
        r = new Random(seed);
    }



    @Bean
    public CommandLineRunner loadData() {

        return args -> {
            if (service.findAllUser().size() > 0)
            {
                return;
            }
            logger = LoggerFactory.getLogger(getClass());
            for (int i = 0; i <10; i ++)
            {
                Voter p = new Voter();
                p.setFirstName("First-"+i);
                p.setLastName("Last-"+i);
                p.setCity("Citi-"+i);
                p.setPassport("Passport-"+i);
                service.save(p);
            }
            Arrays.asList(
                    "Landasan Hukum",
                    "Visi & Misi",
                    "Asas Pemilu",
                    "SURA & SULU – Maskot Pemilu 2024",
                    "Susunan Panitia Pemilu",
                    "Wilayah Kerja",
                    "Syarat Pendaftaran",
                    "Tahapan Pemilu",
                    "Partai Politik",
                    "FAQ",
                    "Iklan Pemilu",
                    "Contact Us"
            ).forEach(s -> {
                Page htmlPage = service.getHtmlPage(s);
                htmlPage.setTitle(s);
                htmlPage.setCategory("Pemilu 2024");
                service.save(htmlPage);
            });
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            User user = new User();
            user.setUserName("user");
            user.setPassword(encoder.encode("userpass"));
            user.setFirstName("Admin");
            user.setLastName("User");
            user.setEmail("mahartayasa@mail.com");
            user.setRole("ADMIN");
            user.setPhone("2223");
            service.save(user);
            logger.info("Generated demo data ");
        };
    }

}
