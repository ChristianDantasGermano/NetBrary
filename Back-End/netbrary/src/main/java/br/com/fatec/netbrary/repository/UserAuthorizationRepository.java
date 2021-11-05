package br.com.fatec.netbrary.repository;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

import br.com.fatec.nebrary.entities.UserAuthorization;

@Repository
public interface UserAuthorizationRepository extends JpaRepositoryImplementation<UserAuthorization, Long>{
	public UserAuthorization findByName(String name);
}
