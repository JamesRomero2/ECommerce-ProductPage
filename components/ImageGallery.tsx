import React, {
	MouseEventHandler,
	useCallback,
	useEffect,
	useState,
} from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { carouselSlides } from "./lib/ImageSlides";

interface thumbType {
	selected: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
	imgSrc: string;
}

export const Thumb = ({ selected, onClick, imgSrc }: thumbType) => (
	<div
		className={`thumb__slide thumb__slide__thumb ${
			selected ? "thumb__slide__thumb__selected" : ""
		}`}
	>
		<button
			type="button"
			onClick={onClick}
			className="thumb__slide__inner thumb__slide__inner__thumb"
		>
			<Image
				alt="Item Thumbnail"
				src={imgSrc}
				layout={"fill"}
				objectFit={"contain"}
			/>
		</button>
	</div>
);

const ImageGallery = () => {
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
	const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
		containScroll: "keepSnaps",
		dragFree: true,
	});

	const onThumbClick = useCallback(
		(selectedIndex) => {
			if (!embla || !emblaThumbs) return;
			if (emblaThumbs.clickAllowed()) embla.scrollTo(selectedIndex);
		},
		[embla, emblaThumbs],
	);

	const onSelect = useCallback(() => {
		if (!embla || !emblaThumbs) return;
		setSelectedIndex(embla.selectedScrollSnap());
		emblaThumbs.scrollTo(embla.selectedScrollSnap());
	}, [embla, emblaThumbs, setSelectedIndex]);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		embla.on("select", onSelect);
	}, [embla, onSelect]);

	return (
		<section className="desktopGallery">
			<div className="desktopGallery__embla">
				<div
					className="desktopGallery__embla__viewport"
					ref={mainViewportRef}
				>
					<div className="desktopGallery__embla__container">
						{carouselSlides.map(({ key, imgSrc }) => (
							<div
								className="desktopGallery__embla__slide"
								key={key}
							>
								<div className="desktopGallery__embla__slide__inner">
									<Image
										src={imgSrc}
										layout={"fill"}
										objectFit={"cover"}
										priority
										alt={"Item Image"}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="desktopGallery__embla desktopGallery__embla--thumb">
				<div
					className="desktopGallery__embla__viewport"
					ref={thumbViewportRef}
				>
					<div className="desktopGallery__embla__container desktopGallery__embla__container--thumb">
						{carouselSlides.map(({ key, imgSrc }) => (
							<Thumb
								onClick={() => onThumbClick(key)}
								selected={key === selectedIndex}
								imgSrc={imgSrc}
								key={key}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImageGallery;
