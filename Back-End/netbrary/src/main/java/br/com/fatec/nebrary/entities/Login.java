package br.com.fatec.nebrary.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Login {

  private String email;

  private String username;

  private String password;

  private String authorization;

  private String token;

  public void toEntity(Users user) {
    this.username = user.getName();
  }

}
