package br.com.fatec.nebrary.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import br.com.fatec.netbrary.views.ViewUsers;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "userdata")
public class UserData {
	
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  @JsonView({ViewUsers.AdminView.class})
	  private Long id;

	  @OneToOne
	  private Users user;

	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @Column(name = "userdata_email")
	  private String email;
	  
	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @Column(name = "userdata_birthDate")
	  private String birthDate;

}
