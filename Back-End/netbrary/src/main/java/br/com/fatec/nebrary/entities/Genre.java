package br.com.fatec.nebrary.entities;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
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
@Table(name = "genre")
public class Genre {
	 @Id
	  @JsonView(ViewUsers.UserView.class)
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long id;

	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @Column(name = "genre", length = 150)
	  private String genre;
	  
	  @JsonView({ViewUsers.AdminView.class})
	  @ManyToMany(fetch = FetchType.LAZY, mappedBy = "genre")
	  private Set<Books> books;
	  
}
