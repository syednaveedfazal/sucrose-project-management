package com.project.management.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class JwtResponseDTO {
    private String accessToken;
    private String token;
    private String userName;
    private String userId;
    private String email;
}
