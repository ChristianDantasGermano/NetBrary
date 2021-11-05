	package br.com.fatec.netbrary.security;

import java.io.IOException;
import java.util.Date;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.fatec.nebrary.entities.Login;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtils {

  private static final String KEY = "spring.jwt.sec";

  public static String generateToken(Authentication user) throws JsonProcessingException {
    ObjectMapper mapper = new ObjectMapper();
    Login userNoPassword = new Login();
    
    userNoPassword.setUsername(user.getName());
    if (!user.getAuthorities().isEmpty()) {
      userNoPassword.setAuthorization(user.getAuthorities().iterator().next().getAuthority());
    }
    String usuarioJson = mapper.writeValueAsString(userNoPassword);
    Date agora = new Date();
    Long hora = 1000L * 60L * 60L; // Uma hora
    return Jwts.builder().claim("userDetails", usuarioJson).setIssuer("br.com.fatec") //modifica Issuer
        .setSubject(user.getName()).setExpiration(new Date(agora.getTime() + hora))
        .signWith(SignatureAlgorithm.HS512, KEY).compact();
  }

  public static Authentication parseToken(String token)
      throws JsonParseException, JsonMappingException, IOException {
    ObjectMapper mapper = new ObjectMapper();
    String credentialsJson = Jwts.parser().setSigningKey(KEY).parseClaimsJws(token).getBody()
        .get("userDetails", String.class);
    Login user = mapper.readValue(credentialsJson, Login.class);
    UserDetails userDetails = User.builder().username(user.getUsername()).password("secret")
        .authorities(user.getAuthorization()).build();
    return new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword(),
        userDetails.getAuthorities());
  }

}
