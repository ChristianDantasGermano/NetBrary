package br.com.fatec.netbrary.repository;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

import br.com.fatec.nebrary.entities.UserData;

@Repository
public interface UserDataRepository extends JpaRepositoryImplementation<UserData, Long> {

}
