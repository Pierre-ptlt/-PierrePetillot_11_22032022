import banner from "../../assets/images/banner-about.png";
import "../../style/home/Banner.css";

function BannerAbout() {
	return (
		<div className="banner-wrapper">
			<img src={banner} className="banner" alt="banner" />
		</div>
	);
}

export default BannerAbout;
