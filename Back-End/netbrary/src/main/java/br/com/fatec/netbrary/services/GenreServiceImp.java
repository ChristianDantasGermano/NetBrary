package br.com.fatec.netbrary.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import br.com.fatec.nebrary.entities.Genre;
import br.com.fatec.netbrary.repository.GenreRepository;

@Service
public class GenreServiceImp implements IGenreService{
	
	@Autowired
	private GenreRepository genreRepository;
	
	@PreAuthorize("hasRole('ADMIN')")
	public Genre registerGenre(Genre genre) {
		// TODO Auto-generated method stub
		return genreRepository.save(genre);
	}

	@PreAuthorize("hasRole('ADMIN')")
	public Genre alterGenre(Genre genre) {
		// TODO Auto-generated method stub
		return genreRepository.save(genre);
	}

	@PreAuthorize("hasRole('ADMIN')")
	public void deleteGenre(Genre genre) {
		// TODO Auto-generated method stub
		genreRepository.delete(genre);
	}

	@PreAuthorize("hasRole('ADMIN')")
	public List<Genre> listGenre() {
		// TODO Auto-generated method stub
		return genreRepository.findAll();
	}

}
