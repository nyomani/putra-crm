package com.neo.ppln.views;

import com.neo.ppln.adminView.AdminVoterListView;
import com.neo.ppln.adminView.PageEditor;
import com.neo.ppln.publicView.RegistrationView;
import com.neo.ppln.publicView.VoterListView;
import com.neo.ppln.security.SecurityService;
import com.neo.ppln.views.pplninfo.*;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.Unit;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.dom.ThemeList;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.server.StreamResource;
import com.vaadin.flow.theme.lumo.Lumo;
import org.springframework.security.core.userdetails.UserDetails;

public class MainLayout extends AppLayout {
    private final SecurityService securityService;
    private RouterLink login = new RouterLink("Administrator Login", LoginView.class);
    private RouterLink changePassword = new RouterLink("Change Password", ChangePasswordView.class);
    private RouterLink pages = new RouterLink("Pages", PageEditor.class);
    private Button logout;
    private Label nameLabel = new Label();
    public MainLayout(SecurityService securityService) {
        this.securityService = securityService;
        ThemeList themeList = UI.getCurrent().getElement().getThemeList();
        themeList.add(Lumo.DARK);
        logout = new Button("Log out", e -> securityService.logout());
        createHeader();
        createDrawer();
        UserDetails userDetails = securityService.getAuthenticatedUser();
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
        addToNavbar(header);

    }

    private void createDrawer() {
        addToDrawer(new VerticalLayout(
          new RouterLink("Home", ContactUsPage.class),
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
          new RouterLink("Contact Us", ContactUsPage.class),
      //    new H2("Pemilih"),
      //    new RouterLink("Pendaftaran", RegistrationView.class),
          new RouterLink("Pencarian Nama Pemilih", VoterListView.class),
      //    new RouterLink("Lapor Kesalahan Data", RegistrationView.class),
          new H2("Admin"),
          new RouterLink("Data Pemilih", AdminVoterListView.class)
        ));
        pages.setVisible(securityService.getAuthenticatedUser() != null);
        login.setVisible(securityService.getAuthenticatedUser() == null);
        logout.setVisible(securityService.getAuthenticatedUser() != null);
        changePassword.setVisible(securityService.getAuthenticatedUser() != null);
    }
}
