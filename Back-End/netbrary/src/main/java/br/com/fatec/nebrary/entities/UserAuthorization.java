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
@Table(name = "userauthorization")
public class UserAuthorization {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView({ ViewUsers.AdminView.class })
	@Column(name = "auth_id")
	private Long id;

	@JsonView({ ViewUsers.AdminView.class })
	@Column(name = "auth_name")
	private String name;

	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "user_authorization")
	private Set<Users> users;
}
