package br.com.fatec.netbrary.repository;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

import br.com.fatec.nebrary.entities.MyBooks;

@Repository
public interface MyBooksRepository extends JpaRepositoryImplementation<MyBooks, Long>{

}
