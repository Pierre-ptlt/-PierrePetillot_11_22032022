import "../../style/utils/Slideshow.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";

function LogementSlideshow({ images }) {
	const [currentImage, setCurrentImage] = useState(0);

	const prevImage = () => {
		if (currentImage === 0) {
			setCurrentImage(images.length - 1);
		} else {
			setCurrentImage(currentImage - 1);
		}
	};

	const nextImage = () => {
		if (currentImage === images.length - 1) {
			setCurrentImage(0);
		} else {
			setCurrentImage(currentImage + 1);
		}
	};

	return (
		<div className="logement-slideshow-wrapper">
			<div className="logement-slideshow-left"></div>
			<div className="logement-slideshow-image-wrapper">
				<img
					className="logement-slideshow-image"
					src={images[currentImage]}
					alt="logement"
				/>
				<p className="logement-slideshow-number">
					{currentImage + 1}/{images.length}
				</p>
			</div>
			<FaChevronLeft
				className="chevron slider-chevron-left"
				onClick={prevImage}
			/>
			<FaChevronRight
				className="chevron slider-chevron-right"
				onClick={nextImage}
			/>
		</div>
	);
}

export default LogementSlideshow;
