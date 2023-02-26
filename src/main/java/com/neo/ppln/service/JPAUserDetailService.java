package com.neo.ppln.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JPAUserDetailService implements UserDetailsService {
    private final CrmService crmService;

    public JPAUserDetailService(CrmService crmService) {
        this.crmService = crmService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return crmService.findUserById(username);
    }
}
