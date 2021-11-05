package br.com.fatec.netbrary.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import br.com.fatec.nebrary.entities.Genre;
import br.com.fatec.netbrary.services.GenreServiceImp;
import br.com.fatec.netbrary.views.ViewUsers;

@RestController
@CrossOrigin
@RequestMapping(value = "/genre")
public class GenreController {
	  @Autowired
	  public GenreServiceImp genreServ;

	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @PostMapping()
	  public ResponseEntity<Genre> registerGenre(@RequestBody Genre genre) {
	    return ResponseEntity.ok(genreServ.registerGenre(genre));
	  }

	  @JsonView({ViewUsers.AdminView.class})
	  @PutMapping()
	  public ResponseEntity<Genre> alterGenre(@RequestBody Genre genre) {
	    return ResponseEntity.ok(genreServ.alterGenre(genre));
	  }

	  @JsonView({ViewUsers.AdminView.class})
	  @DeleteMapping(value = "/{id}")
	  public ResponseEntity<Genre> deleteGenre(@RequestBody Genre genre) {
	    genreServ.deleteGenre(genre);
	    return ResponseEntity.ok().build();
	  }

	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @GetMapping()
	  public ResponseEntity<List<Genre>> getList() {
	    return ResponseEntity.ok().body(genreServ.listGenre());
	  }
}
