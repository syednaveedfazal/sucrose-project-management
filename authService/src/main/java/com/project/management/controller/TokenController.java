package com.project.management.controller;

import com.project.management.entities.RefreshToken;
import com.project.management.request.AuthRequestDTO;
import com.project.management.request.RefreshTokenRequestDTO;
import com.project.management.response.JwtResponseDTO;
import com.project.management.services.JwtService;
import com.project.management.services.RefreshTokenService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TokenController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private RefreshTokenService refreshTokenService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("auth/v1/login")
    @Operation(summary = "login endpoint")

    public ResponseEntity AuthenticateAndGetToken(@RequestBody AuthRequestDTO authRequestDTO) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequestDTO.getUserName(), authRequestDTO.getPassword()));
        if (authentication.isAuthenticated()) {
            RefreshToken refreshToken = refreshTokenService.createRefreshToken(authRequestDTO.getUserName());
            return new ResponseEntity<>(JwtResponseDTO.builder()
                    .accessToken(jwtService.GenerateToken(authRequestDTO.getUserName()))
                    .userName(authRequestDTO.getUserName())
                    .token(refreshToken.getToken())
                    .build(), HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Exception in User Service", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/auth/v1/refreshToken")
    @Operation(summary = "Refresh token endpoint")
    public JwtResponseDTO refreshToken(@RequestBody RefreshTokenRequestDTO refreshTokenRequestDTO) {
        return refreshTokenService.findByToken(refreshTokenRequestDTO.getToken())
                .map(refreshTokenService::verifyExpiration)
                .map(RefreshToken::getUserInfo)
                .map(userInfo -> {
                    String accessToken = jwtService.GenerateToken(userInfo.getUserName());
                    return JwtResponseDTO.builder()
                            .accessToken(accessToken)
                            .token(refreshTokenRequestDTO.getToken()).build();
                }).orElseThrow(() -> new RuntimeException("Refresh Token is not in DB..!!"));
    }

}
