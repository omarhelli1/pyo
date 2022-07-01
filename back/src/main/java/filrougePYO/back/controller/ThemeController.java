package filrougePYO.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import filrougePYO.back.dao.ThemeDao;
import filrougePYO.back.entity.Theme;

@RestController
@CrossOrigin
@RequestMapping("/themes")
public class ThemeController {

	@Autowired
	private ThemeDao themeDao;
	
	@GetMapping("")
//	@ResponseStatus(code=HttpStatus.OK)
	public List<Theme> findAll(){
		return this.themeDao.findAll();
	}
	
}
