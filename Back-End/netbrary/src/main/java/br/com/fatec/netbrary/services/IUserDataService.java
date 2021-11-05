package br.com.fatec.netbrary.services;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.fatec.nebrary.entities.UserData;
@Service
public interface IUserDataService {
	
	 public UserData registerUserData(UserData userData);

	  public UserData alterUserData(UserData userData);

	  public void deleteUserData(UserData userData);

	  public List<UserData> listUserData();
}
