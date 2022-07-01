package filrougePYO.back.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table
public class Utilisateur {
    @Id
    @GeneratedValue
    private Long id;
    @Column(name="nom")
    private String nom;
    @Column(name="prenom")
    private String prenom;
    @Column(name="dataNaissance")
    private Date dataNaissance;
    @ManyToOne
    @JoinColumn(name="service_id")
    private Service service;
    @ManyToOne
    @JoinColumn(name="entreprise_id")
    private Entreprise entreprise;
    @ManyToOne
    @JoinColumn(name="role_id")
    private Role role;
    @ManyToMany
    @JoinTable(
            name = "utilisateur_session",
            joinColumns = @JoinColumn(name="utilisateur_id"),
            inverseJoinColumns = @JoinColumn(name = "session_id"))	
    private List<Session> session;
	public Utilisateur() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Utilisateur(Long id, String nom, String prenom, Date dataNaissance, Entreprise entreprise, Role role) {
		super();
		this.setId(id);
		this.setNom(nom);
		this.setPrenom(prenom);
		this.setDataNaissance(dataNaissance);
		this.setEntreprise(entreprise);
		this.setRole(role);
	}

	

	public Utilisateur(Long id, String nom, String prenom, Date dataNaissance, Service service, Role role) {
		super();
		this.setId(id);
		this.setNom(nom);
		this.setPrenom(prenom);
		this.setDataNaissance(dataNaissance);
		this.setService(service);
		this.setRole(role);
	}


	public Utilisateur(Long id, String nom, String prenom, Date dataNaissance) {
		super();
		this.setId(id);
		this.setNom(nom);
		this.setPrenom(prenom);
		this.setDataNaissance(dataNaissance);
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

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public Date getDataNaissance() {
		return dataNaissance;
	}

	public void setDataNaissance(Date dataNaissance) {
		this.dataNaissance = dataNaissance;
	}

	public Service getService() {
		return service;
	}

	public void setService(Service service) {
		this.service = service;
	}

	public Entreprise getEntreprise() {
		return entreprise;
	}

	public void setEntreprise(Entreprise entreprise) {
		this.entreprise = entreprise;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	

	
}
