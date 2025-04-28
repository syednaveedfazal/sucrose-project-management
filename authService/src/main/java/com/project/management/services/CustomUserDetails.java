package com.project.management.services;

import com.project.management.entities.UserInfo;
import com.project.management.entities.UserRole;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;


public class CustomUserDetails extends UserInfo implements UserDetails {

    private final String userName;
    private final String password;
    private final Collection<? extends GrantedAuthority> authorities;

    public CustomUserDetails(UserInfo userInfo) {
        this.userName = userInfo.getUserName();
        this.password = userInfo.getPassword();

        Collection<GrantedAuthority> auths = new ArrayList<>();
        for (UserRole role : userInfo.getRoles()) {
            auths.add(new SimpleGrantedAuthority("ROLE_" + role.getName().toUpperCase()));
        }
        this.authorities = auths;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public String getUsername() {
        return this.userName;
    }

    @Override
    public String getPassword() {
        return this.password;
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
        return true;
    }
}

