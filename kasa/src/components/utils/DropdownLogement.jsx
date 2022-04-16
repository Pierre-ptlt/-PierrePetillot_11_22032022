import "../../style/utils/DropdownLogement.css";
import button from "../../assets/images/chevron-up.png";
import { useState } from "react";

function DropdownLogement(props) {
	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(!isOpen);

	return (
		<div className="wrapper-general-logement">
			<div className="dropdown-wrapper-logement" onClick={toggling}>
				<h3 className="dropdown-name-logement">{props.name}</h3>
				{!isOpen && (
					<div className="dropdown-button-logement">
						<img
							className="dropdown-chevron-logement"
							src={button}
							alt="dropdown button"
						/>
					</div>
				)}
				{isOpen && (
					<div className="dropdown-button-open-logement">
						<img
							className="dropdown-chevron-open-logement"
							src={button}
							alt="dropdown button"
						/>
					</div>
				)}
			</div>
			{isOpen && (
				<div className="dropdown-content-logement">
					<div className="dropdown-content-wrapper-logement">
						{props.children}
					</div>
				</div>
			)}
		</div>
	);
}

export default DropdownLogement;
