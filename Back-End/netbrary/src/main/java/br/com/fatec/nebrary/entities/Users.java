package br.com.fatec.nebrary.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
@Table(name = "users")
public class Users {
	@Id
	@JsonView(ViewUsers.UserView.class)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@JsonView({ ViewUsers.UserView.class, ViewUsers.AdminView.class })
	@Column(name = "user_name", length = 150)
	private String name;

	@Column(name = "user_password")
	private String password;

	@JsonView({ ViewUsers.UserView.class, ViewUsers.AdminView.class })
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "users_authorization", joinColumns = { @JoinColumn(name = "users_id") }, inverseJoinColumns = {
			@JoinColumn(name = "auth_id") })
	private Set<UserAuthorization> user_authorization = new HashSet<>();

	@JsonView({ ViewUsers.UserView.class, ViewUsers.AdminView.class })
	@Column(name = "user_statusAccount")
	private Boolean status_account;

	@JsonView({ ViewUsers.UserView.class, ViewUsers.AdminView.class })
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "user_data")
	private UserData data;

	public String getEmail() {
		return this.data.getEmail();
	}
}
