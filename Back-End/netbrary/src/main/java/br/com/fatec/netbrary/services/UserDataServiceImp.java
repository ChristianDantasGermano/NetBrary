package br.com.fatec.netbrary.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.fatec.nebrary.entities.UserData;
import br.com.fatec.netbrary.repository.UserDataRepository;

@Service
public class UserDataServiceImp implements IUserDataService {

	@Autowired
	private UserDataRepository dataRepository;

	@Transactional
	public UserData registerUserData(UserData userData) {
		return dataRepository.save(userData);
	}

	@Transactional
	public UserData alterUserData(UserData userData) {
		// TODO Auto-generated method stub
		return dataRepository.save(userData);
	}

	@Override
	public void deleteUserData(UserData userData) {
		dataRepository.delete(userData);
	}

	@Override
	public List<UserData> listUserData() {
		// TODO Auto-generated method stub
		return dataRepository.findAll();
	}

}
