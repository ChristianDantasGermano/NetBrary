package br.com.fatec.netbrary.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import br.com.fatec.nebrary.entities.Users;
import br.com.fatec.netbrary.services.UserServiceImp;
import br.com.fatec.netbrary.views.ViewUsers;



@RestController
@CrossOrigin
@RequestMapping(value = "/users")
public class UserController {
	  @Autowired
	  public UserServiceImp userServ;

	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @PostMapping()
	  public ResponseEntity<Users> registerUser(@RequestBody Users users) {
	    return ResponseEntity.ok(userServ.registerUser(users));
	  }

	  @JsonView({ViewUsers.AdminView.class})
	  @PutMapping()
	  public ResponseEntity<Users> alterUser(@RequestBody Users users) {
	    return ResponseEntity.ok(userServ.alterUser(users));
	  }

	  @JsonView({ViewUsers.AdminView.class})
	  @DeleteMapping(value = "/{id}")
	  public ResponseEntity<Users> deleteUser(@PathVariable("id") Long id) {
	    userServ.deleteUser(id);
	    return ResponseEntity.ok().build();
	  }

	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @GetMapping()
	  public ResponseEntity<List<Users>> getList() {
	    return ResponseEntity.ok().body(userServ.listUsers());
	  }

}
