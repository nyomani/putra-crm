package com.neo.putra.views;

import com.neo.putra.security.SecurityService;
import com.neo.putra.views.list.*;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.dom.ThemeList;
import com.vaadin.flow.router.HighlightConditions;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.theme.lumo.Lumo;

public class MainLayout extends AppLayout {
    private final SecurityService securityService;

    public MainLayout(SecurityService securityService) {
        this.securityService = securityService;
        ThemeList themeList = UI.getCurrent().getElement().getThemeList();
        themeList.add(Lumo.DARK);

        createHeader();
        createDrawer();
    }

    private void createHeader() {
        H1 logo = new H1("PT Makmur Jaya");
        logo.addClassNames("text-l", "m-m");

        Button logout = new Button("Log out", e -> securityService.logout());

        HorizontalLayout header = new HorizontalLayout(new DrawerToggle(), logo, logout);

        header.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.CENTER);
        header.expand(logo);
        header.setWidth("100%");
        header.addClassNames("py-0", "px-m");

        addToNavbar(header);

    }

    private void createDrawer() {
        addToDrawer(new VerticalLayout(
          new H2("Keuangan"),
          new RouterLink("Rekening Bank", AccountView.class),
          new RouterLink("Transaksi", TransactionView.class),
          new H2("Supplier"),
          new RouterLink("Pembelian", SupplierPurchaseOrderView.class),
          new RouterLink("Stock Barang", SupplierDeliveredOrderView.class),
          new RouterLink("Pembayaran", SupplierPaymentView.class),
          new H2("Customers"),
          new RouterLink("Penjualan", CustomerPurchaseOrderView.class),
          new RouterLink("Pengiriman", CustomerDeliveredOrderView.class),
          new RouterLink("Pembayaran", PaymentView.class),
          new H2("ADMIN"),
          new RouterLink("Products", ProductView.class),
          new RouterLink("Suppliers", SupplierView.class),
          new RouterLink("Customers", CustomerView.class)
        ));


    }
}
