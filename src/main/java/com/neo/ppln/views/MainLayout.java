package com.neo.ppln.views;

import com.neo.ppln.adminView.*;
import com.neo.ppln.publicView.RegistrationView;
import com.neo.ppln.publicView.VoterListView;
import com.neo.ppln.security.SecurityService;
import com.neo.ppln.views.pplninfo.*;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.RouterLink;
import org.springframework.security.core.userdetails.UserDetails;

public class MainLayout extends AppLayout {
    private final SecurityService securityService;
    private RouterLink login = new RouterLink("Administrator Login", LoginView.class);
    private RouterLink changePassword = new RouterLink("Change Password", ChangePasswordView.class);
    private RouterLink pages = new RouterLink("Pages", PageEditor.class);
    private Button logout;
    private Label nameLabel = new Label();
    private UserDetails userDetails;
    public MainLayout(SecurityService securityService) {
        this.securityService = securityService;
        logout = new Button("Log out", e -> securityService.logout());
        this.userDetails = securityService.getAuthenticatedUser();
        createHeader();
        createDrawer();
        nameLabel.setVisible(false);
        if (userDetails != null) {
            nameLabel.setText(userDetails.toString());
            nameLabel.setVisible(true);
        }
    }

    private void createHeader() {
        H1 ppln = new H1("PPLN Chicago");
        ppln.addClassNames("text-l", "m-m");

        HorizontalLayout header = new HorizontalLayout(new DrawerToggle(), ppln, nameLabel, login, logout, changePassword);
        header.setWidth("98%");
        header.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.CENTER);
        header.expand(ppln);
        header.setVerticalComponentAlignment(FlexComponent.Alignment.BASELINE);
        header.addClassNames("py-0", "px-m");
        header.addClassNames("ppln-header");
        addToNavbar(header);


    }

    private void createDrawer() {
        VerticalLayout layout = new VerticalLayout(
          new RouterLink("Home", ContactUsPage.class),
          new H2("Pemilih"),
          new RouterLink("Daftar Pemilih Sementara", VoterListView.class),
          new RouterLink("Pendaftaran", RegistrationView.class),
          new RouterLink("Form Model A LN", AlnView.class),
          new H2("Informasi PPLN Chicago"),
          new RouterLink("Pengumuman", PengumumanPage.class),
          new RouterLink("Photo kegiatan", PhotoPage.class),
          new H2("Pemilu 2024"),
          new RouterLink("Landasan Hukum", LandasanHukumPage.class),
          new RouterLink("Visi & Misi", VisiAndMisiPage.class),
          new RouterLink("Asas Pemilu", AsasPemiluPage.class),
          new RouterLink("SURA & SULU – Maskot Pemilu 2024", MaskotPage.class),
          new RouterLink("Susunan Panitia Pemilu", PanitiaPage.class),
          new RouterLink("Wilayah Kerja", WilayahKerjaPage.class),
          new RouterLink("Syarat Pendaftaran", SyaratPage.class),
          new RouterLink("Tahapan", TahapanPage.class),
          new RouterLink("Partai Politik", PartaiPage.class),
          new RouterLink("FAQ", FaqPage.class),
          new RouterLink("Iklan Pemilu", IklanPage.class),
          new RouterLink("Contact Us", ContactUsPage.class)
         // new RouterLink("Lapor Kesalahan Data", RegistrationView.class),
        );
        if (userDetails != null) {
            layout.add(
               new H2("Admin"),
               new RouterLink("Data Pemilih", AdminVoterListView.class),
          //     new RouterLink("Page Categories ", PageCategoryListView.class),
          //     new RouterLink("Pages ", PageListView.class),
               new RouterLink("Documents", DocumentView.class),
            new RouterLink("Snail Mail Status", SnailMailListViews.class)
            );
        }
        addToDrawer(layout);
        pages.setVisible(securityService.getAuthenticatedUser() != null);
        login.setVisible(securityService.getAuthenticatedUser() == null);
        logout.setVisible(securityService.getAuthenticatedUser() != null);
        changePassword.setVisible(securityService.getAuthenticatedUser() != null);
    }
}
