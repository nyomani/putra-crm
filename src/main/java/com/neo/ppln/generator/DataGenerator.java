package com.neo.ppln.generator;

import com.neo.ppln.dataType.Gender;
import com.neo.ppln.dataType.MarriageStatus;
import com.neo.ppln.entity.Page;
import com.neo.ppln.entity.User;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.service.CrmService;
import com.vaadin.flow.spring.annotation.SpringComponent;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

@SpringComponent
@Slf4j
public class DataGenerator {
    private final CrmService service;
    final Random r;
    int seed = 123;
    final PasswordEncoder passwordEncoder;
    DataGenerator(final CrmService service, final PasswordEncoder passwordEncoder)
    {

        this.service = service;
        this.passwordEncoder = passwordEncoder;
        r = new Random(seed);
    }



    @Bean
    public CommandLineRunner loadData() {

        return args -> {
            if (service.findAllUser().size() > 0)
            {
                return;
            }

            List.of("Lea Hartono", "Given Tanri", "Martino Tangkar").forEach(s ->
            {
                User u = new User();
                String[] name = s.split(" ");
                u.setUserName(name[0]);
                u.setFirstName(name[0]);
                u.setLastName(name[1]);
                u.setRole("PPLN");
            });
            for (int i = 0; i <10; i ++)
            {
                Voter p = new Voter();
                p.setNama("First-"+i +" Last-"+ i);
                p.setState("ST-"+i);
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
            log.info("Generated demo data ");
        };
    }

}
