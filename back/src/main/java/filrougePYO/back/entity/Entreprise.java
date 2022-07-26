package filrougePYO.back.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table
public class Entreprise {
	@Id
	@GeneratedValue
	private Long id;
	@Column(name="nom")
	private String nom;
	@OneToMany(mappedBy = "entreprise")
    private List<Utilisateur> utilisateurs = new ArrayList<Utilisateur>();
	
	public Entreprise() {
		super();
	}

	public Entreprise(Long id, String nom) {
		super();
		this.setId(id);
		this.setNom(nom);
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
}
