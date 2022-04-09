import banner from "../../assets/images/banner.png";
import "../../style/home/Banner.css";

function Banner() {
	return (
		<div className="banner-wrapper">
			<img src={banner} className="banner" alt="banner" />
			<h3 className="banner-text">Chez vous, partout et ailleurs</h3>
		</div>
	);
}

export default Banner;
