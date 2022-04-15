import "../../style/utils/Dropdown.css";
import button from "../../assets/images/chevron-up.png";
import { useState } from "react";

function Dropdown(props) {
	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(!isOpen);

	return (
		<div className="wrapper-general">
			<div className="dropdown-wrapper" onClick={toggling}>
				<h3 className="dropdown-name">{props.name}</h3>
				{!isOpen && (
					<div className="dropdown-button">
						<img
							className="dropdown-chevron"
							src={button}
							alt="dropdown button"
						/>
					</div>
				)}
				{isOpen && (
					<div className="dropdown-button-open">
						<img
							className="dropdown-chevron-open"
							src={button}
							alt="dropdown button"
						/>
					</div>
				)}
			</div>
			{isOpen && (
				<div className="dropdown-content">
					<div className="dropdown-content-wrapper">{props.children}</div>
				</div>
			)}
		</div>
	);
}

export default Dropdown;
