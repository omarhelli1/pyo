package filrougePYO.back.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
@Entity
@Table
public class Formation {
	@Id
	@GeneratedValue
	private Long id;
	@Column(name="nom")
	private String nom;
	@Column(name="personnalise")
	private Boolean personnalise;
	@Column(name="description")
	private String description;
	@ManyToMany
	@JoinTable(
            name = "formation_theme",
            joinColumns = @JoinColumn(name="formation_id"),
            inverseJoinColumns = @JoinColumn(name = "theme_id"))	
	private List<Theme> theme;



	public Formation() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Formation(Long id, String nom, Boolean personnalise, String description) {
		super();
		this.setId(id);
		this.setNom(nom);
		this.setPersonnalise(personnalise);
		this.setDescription(description);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Boolean getPersonnalise() {
		return personnalise;
	}

	public void setPersonnalise(Boolean personnalise) {
		this.personnalise = personnalise;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
