package filrougePYO.back.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import filrougePYO.back.entity.Domaine;

public interface DomaineDao extends JpaRepository<Domaine, Long>{
	
}
