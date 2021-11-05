package br.com.fatec.netbrary.repository;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

import br.com.fatec.nebrary.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepositoryImplementation<Genre, Long>{

}
