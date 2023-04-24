package com.neo.ppln.adminView;

import com.neo.ppln.entity.Document;
import com.neo.ppln.publicView.AbstractForm;
import com.neo.ppln.repository.S3;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.component.upload.receivers.FileBuffer;
import com.vaadin.flow.data.binder.Binder;

import java.io.File;

public class DocumentForm extends AbstractForm<Document> {
    private Upload uploadFile;
    private FileBuffer receiver = new FileBuffer();
    private TextField fileName = new TextField();
    private TextField url = new TextField();
    public DocumentForm(Binder<Document> binder) {
        super(binder);
        uploadFile = new Upload(receiver);
        uploadFile.setDropAllowed(true);
        uploadFile.setMaxFiles(1);
        uploadFile.addSucceededListener(s -> {
            File file = receiver.getFileData().getFile();
            String link = S3.INSTANCE.upload("Documents", receiver.getFileName(), file);
            fileName.setValue(receiver.getFileName());
            url.setValue(link);
            validateAndSave();
        });
        binder.forField(fileName).bind(Document::getFileName, Document::setFileName);
        binder.forField(url).bind(Document::getUrl, Document::setUrl);
        add(uploadFile);
    }
}
