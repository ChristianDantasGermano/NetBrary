package br.com.fatec.netbrary.services;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.fatec.nebrary.entities.MyBooks;
@Service
public interface IMyBooksService {
	 public MyBooks registerMyBooks(MyBooks myBooks);

	  public MyBooks alterMyBooks(MyBooks myBooks);

	  public void deleteMyBooks(MyBooks myBooks);

	  public List<MyBooks> listMyBooks();
}
