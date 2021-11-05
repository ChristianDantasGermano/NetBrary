package br.com.fatec.netbrary.repository;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;
import br.com.fatec.nebrary.entities.Users;

@Repository
public interface UserRepository extends JpaRepositoryImplementation<Users, Long> {

  public Users findByName(String nome);
  public Users findByEmail(String email);
}
