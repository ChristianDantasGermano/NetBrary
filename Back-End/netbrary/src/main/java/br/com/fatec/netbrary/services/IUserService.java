package br.com.fatec.netbrary.services;

import java.util.List;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import br.com.fatec.nebrary.entities.Users;
@Service
public interface IUserService extends UserDetailsService {

  public Users registerUser(Users user);

  public Users alterUser(Users user);

  public void deleteUser(long idUser);

  public List<Users> listUsers();

}