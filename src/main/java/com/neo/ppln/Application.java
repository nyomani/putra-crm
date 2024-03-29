package com.neo.ppln;

import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;
import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.theme.lumo.Lumo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The entry point of the Spring Boot application.
 */
@SpringBootApplication
@NpmPackage(value = "lumo-css-framework", version = "^4.0.10")
@Theme("pemilu")
@JsModule("@vaadin/vaadin-lumo-styles/presets/compact.js")
@PWA(name = "PPLN Chicagp", shortName = "CRM", offlinePath="offline.html", offlineResources = { "./images/offline.png"})
public class Application implements AppShellConfigurator{

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
