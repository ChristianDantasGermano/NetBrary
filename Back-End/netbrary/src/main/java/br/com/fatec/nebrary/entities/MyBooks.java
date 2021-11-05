package br.com.fatec.nebrary.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
@Table(name = "mybooks")
public class MyBooks {
	 @Id
	  @JsonView(ViewUsers.UserView.class)
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long id;

	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @Column(name = "mybooks_limitbooks", length = 150)
	  private String limitbooks;
	  
	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @OneToMany
	  private List<Books> books;
	  
	  @OneToOne(fetch = FetchType.LAZY)
	  private Users user;
}
