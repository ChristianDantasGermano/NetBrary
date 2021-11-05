package br.com.fatec.netbrary.repository;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;
import br.com.fatec.nebrary.entities.Books;

@Repository
public interface BooksRepository extends JpaRepositoryImplementation<Books, Long>{
}
