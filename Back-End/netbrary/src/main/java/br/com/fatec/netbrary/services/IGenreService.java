package br.com.fatec.netbrary.services;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.fatec.nebrary.entities.Genre;
@Service
public interface IGenreService {
	  public Genre registerGenre(Genre genre);

	  public Genre alterGenre(Genre genre);

	  public void deleteGenre(Genre genre);

	  public List<Genre> listGenre();
}
