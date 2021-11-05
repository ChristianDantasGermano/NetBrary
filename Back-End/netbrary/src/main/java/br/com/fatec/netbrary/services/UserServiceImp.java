package br.com.fatec.netbrary.services;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.fatec.nebrary.entities.UserAuthorization;
import br.com.fatec.nebrary.entities.Users;
import br.com.fatec.netbrary.repository.UserAuthorizationRepository;
import br.com.fatec.netbrary.repository.UserRepository;

@Service
public class UserServiceImp implements IUserService {

	@Autowired
	private UserDataServiceImp dataService;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private UserAuthorizationRepository authRepo;

	@Autowired
	PasswordEncoder passwordEncoder;

	// Validator?

	@Transactional
	public Users registerUser(Users user) {
		HashSet<UserAuthorization> hashAuth = new HashSet<UserAuthorization>();
		for (UserAuthorization auth : user.getUser_authorization()) {
			if (authRepo.findByName(auth.getName()) == null) {
				hashAuth.add(authRepo.save(auth));
			} else {
				hashAuth.add(authRepo.findByName(auth.getName()));
			}
		}
		user.setUser_authorization(hashAuth);
		dataService.registerUserData(user.getData());
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepo.save(user);
	}

	@Transactional
	public Users alterUser(Users user) {
		HashSet<UserAuthorization> hashAuth = new HashSet<UserAuthorization>();
		for (UserAuthorization auth : user.getUser_authorization()) {
			if (authRepo.findByName(auth.getName()) == null) {
				hashAuth.add(authRepo.save(auth));
			} else {
				hashAuth.add(authRepo.findByName(auth.getName()));
			}
		}
		user.setUser_authorization(hashAuth);
		dataService.registerUserData(user.getData());
		user.setPassword(userRepo.findByEmail(user.getEmail()).getPassword());
		return userRepo.save(user);
	}

	@PreAuthorize("hasRole('ADMIN')")
	public void deleteUser(long idUser) {
		userRepo.deleteById(idUser);
	}

	@Override
	public List<Users> listUsers() {
		return userRepo.findAll();
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users users = userRepo.findByName(username);
		if (users == null) {
			throw new UsernameNotFoundException("Usuário com o nome de usuário" + username + " não foi encontrado!");
		}
		return User.builder().username(username).password(users.getPassword())
				.authorities(users.getUser_authorization().stream().map(UserAuthorization::getName)
						.collect(Collectors.toList()).toArray(new String[users.getUser_authorization().size()]))
				.build();
	}

}
