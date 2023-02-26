package com.neo.ppln.entity;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Entity;
import java.util.Arrays;
import java.util.Collection;

@Entity(name = "user_detail")
@Data
public class User extends AbstractEntity implements UserDetails {
     private String userName;
     private String firstName="";
     private String lastName="";
     private String email;
     private String phone;
     private String password;
     private boolean enabled = true;
     private String role;

     @Override
     public Collection<? extends GrantedAuthority> getAuthorities() {
          return Arrays.asList(new SimpleGrantedAuthority("ROLE_"+role));
     }

     @Override
     public String getPassword() {
          return password;
     }

     @Override
     public String getUsername() {
          return userName;
     }

     @Override
     public boolean isAccountNonExpired() {
          return true;
     }

     @Override
     public boolean isAccountNonLocked() {
          return true;
     }

     @Override
     public boolean isCredentialsNonExpired() {
          return true;
     }

     @Override
     public boolean isEnabled() {
          return enabled;
     }

     @Override
     public String toString()
     {
          return firstName + " " + lastName;
     }
}
