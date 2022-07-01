package filrougePYO.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import filrougePYO.back.dao.DomaineDao;
import filrougePYO.back.entity.Domaine;

@RestController
@CrossOrigin
@RequestMapping("/domaines")
public class DomaineController {
	@Autowired
	private DomaineDao domaineDao;
	
	@GetMapping("")
//	@ResponseStatus(code=HttpStatus.OK)
	public List<Domaine> findAll(){
		return this.domaineDao.findAll();
	}
	
//	public void adds(Domaine domaine) {
//		this.formationDao.save(domaine);
//	}
}
