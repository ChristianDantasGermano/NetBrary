package br.com.fatec.netbrary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.core.JsonProcessingException;

import br.com.fatec.nebrary.entities.Login;
import br.com.fatec.nebrary.entities.Users;
import br.com.fatec.netbrary.repository.UserRepository;
import br.com.fatec.netbrary.security.JwtUtils;


@RestController
@CrossOrigin
@RequestMapping(value = "/login")
public class LoginController {

  @Autowired
  private AuthenticationManager authManager;

  @Autowired
  private UserRepository userRepo;

  @PostMapping()
  public Login autenticar(@RequestBody Login login) throws JsonProcessingException {
    Users users = userRepo.findByEmail(login.getEmail());
    login.toEntity(users);
    Authentication auth =
        new UsernamePasswordAuthenticationToken(login.getUsername(), login.getPassword());
    auth = authManager.authenticate(auth);
    login.setPassword(null);
    login.setToken(JwtUtils.generateToken(auth));
    return login;
  }

}
