package com.neo.ppln.service;

import com.neo.ppln.entity.*;
import com.neo.ppln.query.DocumentSpecifications;
import com.neo.ppln.query.PageSpecifications;
import com.neo.ppln.query.UserSpecifications;
import com.neo.ppln.query.VoterSpecifications;
import com.neo.ppln.repository.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class CrmService {
    private DataAccess<Voter> voterDataAccess;
    private DataAccess<Document> documentDataAccess;
    private DataAccess<Page> pageDataAccess;
    private DataAccess<PageCategory> pageCategoriesDataAccess;
    private DataAccess<User> userDataAccess;
    private DataAccess<SnailMail> snailMailDataAccess;
    private Map<String, String> fileMap = new HashMap<>();
    public CrmService(VoterRepository voterRepository,
                      DocumentRepository documentRepository,
                      PageRepository pageRepository,
                      UserRepository userRepository,
                      CategoryRepository pageCategoryRepository,
                      SnailMailRepository snailMailRepository) {
        this.voterDataAccess = new DataService<>(voterRepository);
        this.documentDataAccess = new DataService<>(documentRepository);
        this.pageDataAccess = new DataService<>(pageRepository);
        this.userDataAccess = new DataService<>(userRepository);
        this.pageCategoriesDataAccess = new DataService<>(pageCategoryRepository);
        this.snailMailDataAccess = new DataService<>(snailMailRepository);

        fileMap.put("Asas Pemilu", "asaspemilu.html");
        fileMap.put("Contact Us", "contact.html");
        fileMap.put("FAQ", "faq.html");
        fileMap.put("Iklan Pemilu", "iklan.html");
        fileMap.put("Landasan Hukum", "landasan.html");
        fileMap.put("SURA & SULU – Maskot Pemilu 2024", "maskot.html");
        fileMap.put("Susunan Panitia Pemilu", "panitia.html");
        fileMap.put("Partai Politik", "partai.html");
        fileMap.put("Syarat Pendaftaran", "syarat.html");
        fileMap.put("Tahapan Pemilu", "tahapan.html");
        fileMap.put("Visi & Misi", "visimisi.html");
        fileMap.put("Wilayah Kerja", "wilayahkerja.html");
    }

    public void delete(Voter entity) {
        voterDataAccess.delete(entity);
    }

    public void delete(Document entity) {
        documentDataAccess.delete(entity);
    }

    public void delete(Page entity) {
        pageDataAccess.delete(entity);
    }

    public void delete(PageCategory entity) {
        pageCategoriesDataAccess.delete(entity);
    }

    public Voter save(final Voter entity) {
        if (entity.getMailingStatus() == null) {
            entity.setMailingStatus(new SnailMail());
        }
        snailMailDataAccess.save(entity.getMailingStatus());
        return voterDataAccess.save(entity);
    }
    public User save(final User entity) {
        return userDataAccess.save(entity);
    }

    public Document save(final Document entity) {
        return documentDataAccess.save(entity);
    }

    public Page save(final Page entity) {
        documentDataAccess.save(entity.getDocument());
        return pageDataAccess.save(entity);
    }

    public PageCategory save(final PageCategory entity) {
        return pageCategoriesDataAccess.save(entity);
    }

    public List<Voter> findAllVoter() {
        return voterDataAccess.findAll();
    }
    public List<User> findAllUser() {
        return userDataAccess.findAll();
    }

    public List<Voter> findAllVoter(List<Specification<Voter>> filter) {

        long start = System.nanoTime();
        List<Voter> all = voterDataAccess.findAll(filter);
        log.info("Find all voters took {} nanos", System.nanoTime() - start );
        return all;
    }

    public List<Document> findAllDocument() {
        return documentDataAccess.findAll();
    }

    public List<Document> findDocument(final List<Specification<Document>> filter) {
        return documentDataAccess.findAll(filter);
    }

    public List<Document> findDocumentWithUrl() {
        return documentDataAccess.findAll(List.of(DocumentSpecifications.notNull()));
    }

    public List<Voter> findVoter(
            final List<Specification<Voter>> filters) {

        return voterDataAccess.findAll(filters);
    }

    public Voter findVoterByPassport(String passport, String tglLahir) {
        return voterDataAccess.find(List.of(VoterSpecifications.hasPassport(passport),
                VoterSpecifications.hasTglLahir(tglLahir)));
    }

    public Voter findVoterByPassport(String passport) {
        return voterDataAccess.find(VoterSpecifications.hasPassport(passport));
    }

    public List<Page> findAllPages() {
        return pageDataAccess.findAll();
    }

    public Page getPage(String title) {
        return pageDataAccess.find(PageSpecifications.hasTitle(title));
    }

    public User findUserById(String userId)
    {
       return userDataAccess.find(UserSpecifications.hasUserId(userId));
    }

    public Page getHtmlPage(String title) {
        final String fileName = fileMap.get(title);
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream(fileName);
        BufferedInputStream bis = new BufferedInputStream(inputStream);
        InputStreamReader streamReader = new InputStreamReader(bis);
        BufferedReader reader = new BufferedReader(streamReader);
        StringBuffer buffer = new StringBuffer();
        reader.lines().forEach(s -> buffer.append(s).append("\n"));
        Page p = new Page();
        Document doc = new Document();
        p.setDocument(doc);
        doc.setDocument(buffer.toString().getBytes());
        return p;

    }

    public List<PageCategory> findAllPageCategories() {
        return pageCategoriesDataAccess.findAll();
    }

    public List<SnailMail> findAllSnailMail() {
        return snailMailDataAccess.findAll();
    }
}
