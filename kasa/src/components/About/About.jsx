import Banner from "./Banner-about";
import "../../style/about/About.css";
import "../../style/home/Banner.css";
import Dropdown from "../utils/Dropdown";

function About() {
	return (
		<div className="about-wrapper">
			<Banner />
			<div className="about-content">
				<Dropdown name="Fiabilité">
					Les annonces postées sur Kasa garantissent une fiabilité totale. Les
					photos sont conformes aux logements, et toutes les informations sont
					régulièrement vérifiées par nos équipes.
				</Dropdown>
				<Dropdown name="Respect">
					La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
					comportement discriminatoire ou de perturbation du voisinage
					entraînera une exclusion de notre plateforme.
				</Dropdown>
				<Dropdown name="Service">
					Nos équipes se tiennent à votre disposition pour vous fournir une
					expérience parfaite. N'hésitez pas à nous contacter si vous avez la
					moindre question.
				</Dropdown>
				<Dropdown name="Sécurité">
					La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
					pour les voyageurs, chaque logement correspond aux critères de
					sécurité établis par nos services. En laissant une note aussi bien à
					l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
					standards sont bien respectés. Nous organisons également des ateliers
					sur la sécurité domestique pour nos hôtes.
				</Dropdown>
			</div>
		</div>
	);
}

export default About;
