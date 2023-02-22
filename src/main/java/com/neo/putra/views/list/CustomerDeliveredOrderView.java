package com.neo.putra.views.list;

import com.neo.putra.data.OrderState;
import com.neo.putra.data.service.CrmService;
import com.neo.putra.views.MainLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

@Component
@Scope("prototype")
@Route(value = "customer-delivered-orders", layout = MainLayout.class)
@PageTitle("Customer Deliverd Orders | PT. Makmur Jaya")
@PermitAll

public class CustomerDeliveredOrderView extends CustomerAbstractOrderView {
    public CustomerDeliveredOrderView(final CrmService service) {
        super(service, "Customer's Delivered Orders - DO",
                filters -> {
                    filters.add((root, query, criteriaBuilder) ->
                            criteriaBuilder.equal(root.<OrderState>get("orderState"), OrderState.DO));
                    return service.findAllCustomerPurchaseOrders(filters);
                });
        disableAddition();
    }

}
