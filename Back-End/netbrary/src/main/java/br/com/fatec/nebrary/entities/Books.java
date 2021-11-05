package br.com.fatec.nebrary.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
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
@Table(name = "books")
public class Books {
	  @Id
	  @JsonView(ViewUsers.UserView.class)
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long id;

	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @Column(name = "book_title", length = 150)
	  private String title;

	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @Column(name = "book_synopsis", length = 1200)
	  private String synopsis;
	  
	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @Column(name = "book_urlImage", length = 252)
	  private String url_image;

	  @JsonView({ ViewUsers.AdminView.class})
	  @Column(name = "book_recordDate", length = 12)
	  private String record_date;
	  
	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @Column(name = "book_releaseDate", length = 12)
	  private String release_date;
	  
	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @ManyToMany(fetch = FetchType.LAZY)
	  @JoinTable(name = "book_genre", joinColumns = {@JoinColumn(name = "book_id")},
	      inverseJoinColumns = {@JoinColumn(name = "genre_id")})
	  private Set<Genre> genre = new HashSet<>();
	  
}
