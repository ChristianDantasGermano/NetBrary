package br.com.fatec.netbrary.services;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.fatec.nebrary.entities.Books;
@Service
public interface IBooksService {
	
	  public Books registerBooks(Books book);

	  public Books alterBooks(Books book);

	  public void deleteBooks(Books book);

	  public List<Books> listBooks();
}
