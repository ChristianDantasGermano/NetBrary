package br.com.fatec.netbrary.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import br.com.fatec.nebrary.entities.Books;
import br.com.fatec.netbrary.repository.BooksRepository;

@Service
public class BooksServiceImp implements IBooksService{
	
	@Autowired
	private BooksRepository booksRepository;
	
	@PreAuthorize("hasRole('ADMIN')")
	public Books registerBooks(Books book) {
		// TODO Auto-generated method stub
		return booksRepository.save(book);
	}

	@PreAuthorize("hasRole('ADMIN')")
	public Books alterBooks(Books book) {
		// TODO Auto-generated method stub
		return booksRepository.save(book);
	}

	@PreAuthorize("hasRole('ADMIN')")
	public void deleteBooks(Books book) {
		// TODO Auto-generated method stub
		booksRepository.delete(book);
	}

	@Override
	public List<Books> listBooks() {
		// TODO Auto-generated method stub
		return booksRepository.findAll();
	}

}
