package br.com.fatec.netbrary.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin()
@RequestMapping("/")
public class Main {

  @GetMapping()
  public String getLista() {
    return "Oi meu Chapa";
  }

}
