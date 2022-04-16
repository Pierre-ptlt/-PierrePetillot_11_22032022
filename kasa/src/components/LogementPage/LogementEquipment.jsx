import "../../style/LogementPage/LogementPage.css";

function LogementEquipment({ equipment }) {
	return (
		<div className="logement-equipment-wrapper">
			{equipment.map((equip) => (
				<span key={equip} className="logement-equipment">
					{equip}
				</span>
			))}
		</div>
	);
}

export default LogementEquipment;
