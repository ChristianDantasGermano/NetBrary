package br.com.fatec.netbrary.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.fatec.nebrary.entities.MyBooks;
import br.com.fatec.netbrary.repository.MyBooksRepository;

@Service
public class MyBooksServiceImp implements IMyBooksService{
	
	@Autowired
	private MyBooksRepository myBooksRepository;
	 
	@Override
	public MyBooks registerMyBooks(MyBooks myBooks) {
		// TODO Auto-generated method stub
		return myBooksRepository.save(myBooks);
	}

	@Override
	public MyBooks alterMyBooks(MyBooks myBooks) {
		// TODO Auto-generated method stub
		return myBooksRepository.save(myBooks);
	}

	@Override
	public void deleteMyBooks(MyBooks myBooks) {
		// TODO Auto-generated method stub
		myBooksRepository.delete(myBooks);
	}

	@Override
	public List<MyBooks> listMyBooks() {
		// TODO Auto-generated method stub
		return myBooksRepository.findAll();
	}

}
