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

import br.com.fatec.nebrary.entities.Books;
import br.com.fatec.netbrary.services.BooksServiceImp;
import br.com.fatec.netbrary.views.ViewUsers;

@RestController
@CrossOrigin
@RequestMapping(value = "/books")
public class BooksController {
	  
	  @Autowired
	  public BooksServiceImp booksServ;

	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @PostMapping()
	  public ResponseEntity<Books> registerBook(@RequestBody Books books) {
	    return ResponseEntity.ok(booksServ.registerBooks(books));
	  }

	  @JsonView({ViewUsers.AdminView.class})
	  @PutMapping()
	  public ResponseEntity<Books> alterBook(@RequestBody Books books) {
	    return ResponseEntity.ok(booksServ.alterBooks(books));
	  }

	  @JsonView({ViewUsers.AdminView.class})
	  @DeleteMapping(value = "/{id}")
	  public ResponseEntity<Books> deleteBook(@RequestBody Books books) {
	    booksServ.deleteBooks(books);
	    return ResponseEntity.ok().build();
	  }

	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @GetMapping()
	  public ResponseEntity<List<Books>> getList() {
	    return ResponseEntity.ok().body(booksServ.listBooks());
	  }
}
