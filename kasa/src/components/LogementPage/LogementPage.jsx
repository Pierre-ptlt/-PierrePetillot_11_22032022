import logements from "../../data/logements.json";
import { useParams } from "react-router-dom";
import "../../style/LogementPage/LogementPage.css";
import "../../style/utils/Dropdown.css";
import LogementTags from "./LogementTags";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import DropdownLogement from "../utils/DropdownLogement";
import LogementEquipment from "./LogementEquipment";

const Rating = (rate, id) => {
	const rounded = Math.round(rate);
	let stars = [];
	for (let i = 0; i < rounded; i++) {
		stars.push(<AiFillStar key={id + i} className="logement-star" />);
	}
	for (let i = rounded; i < 5; i++) {
		stars.push(<AiOutlineStar key={id + i + 8} className="logement-star" />);
	}

	return stars;
};

function LogementPage() {
	const id = useParams();
	const logement = logements.find((logement) => logement.id === id.id);
	return (
		<div className="logement-page-wrapper">
			<div className="logement-page-image-wrapper"></div>
			<div className="logement-page-details-wrapper">
				<div className="logement-page-details-col">
					<h2 className="logement-page-title">{logement.title}</h2>
					<p className="logement-page-place">{logement.location}</p>
					<LogementTags tags={logement.tags} />
				</div>
				<div className="logement-page-details-col col2">
					<div className="logement-page-host">
						<p className="logement-page-host-name">{logement.host.name}</p>
						<img
							className="logement-page-host-image"
							src={logement.host.picture}
							alt={logement.host.name}
						/>
					</div>
					<div className="logement-page-rating">
						{Rating(logement.rating, logement.id)}
					</div>
				</div>
			</div>
			<div className="logement-page-dropdowns-wrapper">
				<div className="logement-page-dropdown description">
					<DropdownLogement className="logement-dropdown" name="Description">
						{logement.description}
					</DropdownLogement>
				</div>
				<div className="logement-page-dropdown equipment">
					<DropdownLogement className="logement-dropdown" name="Équipements">
						<LogementEquipment equipment={logement.equipments} />
					</DropdownLogement>
				</div>
			</div>
		</div>
	);
}

export default LogementPage;
