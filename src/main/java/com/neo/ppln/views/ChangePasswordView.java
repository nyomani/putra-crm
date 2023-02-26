package com.neo.ppln.views;

import com.neo.ppln.entity.User;
import com.neo.ppln.security.SecurityService;
import com.neo.ppln.service.CrmService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.security.PermitAll;

@Route(value = "change-password", layout = MainLayout.class)
@PageTitle("Login | PPLN Chicago")
@PermitAll

public class ChangePasswordView extends VerticalLayout {
    private PasswordField  newPassword = new PasswordField("New Password");
    private PasswordField  confirmPassword = new PasswordField("Confirm Password");
    private Label errorLabel = new Label();

    private Button changePassword = new Button("Change Password");
    private Button cancel = new Button("Cancel");


    public ChangePasswordView(final CrmService crmService, final SecurityService securityService,
                              final PasswordEncoder passwordEncoder)
    {
       add(newPassword, confirmPassword, errorLabel, new HorizontalLayout(changePassword, cancel));
       errorLabel.setVisible(false);
       changePassword.addClickListener(e ->
       {

           if (newPassword.getValue().equals(confirmPassword.getValue()))
           {
               User user = securityService.getAuthenticatedUser();
               user.setPassword(passwordEncoder.encode(newPassword.getValue()));
               crmService.save(user);
           }
           else
           {
               errorLabel.setText("Password mismatch, please try again");
               errorLabel.setVisible(true);
           }
       });
    }
}
