import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { carouselSlides } from "./lib/ImageSlides";

const ImageSlideshow = () => {
	const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
	const [_prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
	const [_nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(false);
	const [_selectedIndex, setSelectedIndex] = useState<number>(0);
	const [_scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const prevImage = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const nextImage = useCallback(() => embla && embla.scrollNext(), [embla]);

	const onSelect = useCallback(() => {
		if (!embla) return;
		setSelectedIndex(embla?.selectedScrollSnap());
		setPrevBtnEnabled(embla?.canScrollPrev());
		setNextBtnEnabled(embla?.canScrollNext());
	}, [embla, setSelectedIndex]);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		setScrollSnaps(embla.scrollSnapList());
		embla.on("select", onSelect);
	}, [embla, setScrollSnaps, onSelect]);

	return (
		<section className="carousel">
			<button className="carousel__btn btn__left" onClick={prevImage}>
				<div className="lefticon">
					<Image
						src={
							"https://res.cloudinary.com/blueshomepage/image/upload/v1648219769/frontendmentor/EcommerceItemPage/svgs/icon-previous_crusqa.svg"
						}
						layout={"fill"}
						objectFit={"contain"}
						alt={"Previous Icon"}
					/>
				</div>
			</button>
			<figure className="gallery">
				{/* Image Gallery */}
				<div className="gallery__viewport" ref={viewportRef}>
					<div className="gallery__container">
						{carouselSlides.map(({ key, imgSrc }) => (
							<div className="gallery__slide" key={key}>
								<div className="gallery__slide__image">
									<Image
										src={imgSrc}
										layout={"fill"}
										objectFit={"cover"}
										priority
										alt={"Item images"}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</figure>
			<button className="carousel__btn btn__right" onClick={nextImage}>
				<div className="righticon">
					<Image
						src={
							"https://res.cloudinary.com/blueshomepage/image/upload/v1648219767/frontendmentor/EcommerceItemPage/svgs/icon-next_h6gkrf.svg"
						}
						layout={"fill"}
						objectFit={"contain"}
						alt={"Next Icon"}
					/>
				</div>
			</button>
		</section>
	);
};

export default ImageSlideshow;
