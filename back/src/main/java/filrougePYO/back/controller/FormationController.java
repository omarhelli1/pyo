package filrougePYO.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import filrougePYO.back.dao.FormationDao;
import filrougePYO.back.entity.Formation;

@RestController
@CrossOrigin
@RequestMapping("/formations")
public class FormationController {
	@Autowired
	private FormationDao formationDao;
	
	@GetMapping("")
//	@ResponseStatus(code=HttpStatus.OK)
	public List<Formation> findAll(){
		return this.formationDao.findAll();
	}
	
//	public void adds(Formation formation) {
//		this.formationDao.save(formation);
//	}
	
	
}
