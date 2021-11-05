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

import br.com.fatec.nebrary.entities.MyBooks;
import br.com.fatec.netbrary.services.MyBooksServiceImp;
import br.com.fatec.netbrary.views.ViewUsers;

@RestController
@CrossOrigin
@RequestMapping(value = "/myBooks")
public class MyBooksController {
	@Autowired
	  public MyBooksServiceImp myBooksServ;

	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @PostMapping()
	  public ResponseEntity<MyBooks> registerMyBooks(@RequestBody MyBooks myBooks) {
	    return ResponseEntity.ok(myBooksServ.registerMyBooks(myBooks));
	  }

	  @JsonView({ViewUsers.AdminView.class})
	  @PutMapping()
	  public ResponseEntity<MyBooks> alterMyBooks(@RequestBody MyBooks myBooks) {
	    return ResponseEntity.ok(myBooksServ.alterMyBooks(myBooks));
	  }

	  @JsonView({ViewUsers.AdminView.class})
	  @DeleteMapping(value = "/{id}")
	  public ResponseEntity<MyBooks> deleteMyBooks(@RequestBody MyBooks myBooks) {
	   myBooksServ.deleteMyBooks(myBooks);
	   return ResponseEntity.ok().build();
	  }

	  @JsonView({ViewUsers.UserView.class, ViewUsers.AdminView.class})
	  @GetMapping()
	  public ResponseEntity<List<MyBooks>> getList() {
	    return ResponseEntity.ok().body(myBooksServ.listMyBooks());
	  }
}
