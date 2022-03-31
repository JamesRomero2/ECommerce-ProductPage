import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useCallback, Key } from "react";
import useEmblaCarousel, {
	EmblaCarouselType,
	EmblaPluginType,
} from "embla-carousel-react";

interface carouselTypes {
	key: Key;
	img: string;
}
const carouselSlides: carouselTypes[] = [
	{
		key: 1,
		img: "https://res.cloudinary.com/blueshomepage/image/upload/v1648219743/frontendmentor/EcommerceItemPage/images/image-product-1_xc3gss.jpg",
	},
	{
		key: 2,
		img: "https://res.cloudinary.com/blueshomepage/image/upload/v1648219746/frontendmentor/EcommerceItemPage/images/image-product-2_p8e6zo.jpg",
	},
	{
		key: 3,
		img: "https://res.cloudinary.com/blueshomepage/image/upload/v1648219748/frontendmentor/EcommerceItemPage/images/image-product-3_ie74pr.jpg",
	},
	{
		key: 4,
		img: "https://res.cloudinary.com/blueshomepage/image/upload/v1648219745/frontendmentor/EcommerceItemPage/images/image-product-4_y6zmva.jpg",
	},
];

// REMAKE CAROUSEL

const Home: NextPage = () => {
	const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
	const [toggleCart, setToggleCart] = useState<boolean>(false);
	const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
	const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(false);
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
	const prevImage = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const nextImage = useCallback(() => embla && embla.scrollNext(), [embla]);
	const [quantity, setQuantity] = useState<number>(0);

	const addQuantity = () => {
		if (quantity >= 10) return;
		setQuantity(quantity + 1);
	};
	const minusQuantity = () => {
		if (quantity <= 0) return;

		setQuantity(quantity - 1);
	};

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
		<>
			<header className="header headerContainer">
				<div className="header__left">
					<button
						type="button"
						id="hamburger"
						onClick={() => setToggleSidebar(!toggleSidebar)}
					>
						<div></div>
						<div></div>
						<div></div>
					</button>

					{toggleSidebar && (
						<section className="sidebar">
							<div className="backdrop"></div>
							<div
								className="sidebar__menu sidebarContainer"
								onClick={() => setToggleSidebar(!toggleSidebar)}
							>
								<div className="exitIconContainer">
									<Image
										src={
											"https://res.cloudinary.com/blueshomepage/image/upload/v1648219764/frontendmentor/EcommerceItemPage/svgs/icon-close_un2arw.svg"
										}
										layout={"fill"}
										objectFit={"contain"}
									/>
								</div>
								<ul>
									<li>Collections</li>
									<li>Men</li>
									<li>Women</li>
									<li>About</li>
									<li>Contact</li>
								</ul>
							</div>
						</section>
					)}
					<div className="header__logoContainer">
						<Image
							src={
								"https://res.cloudinary.com/blueshomepage/image/upload/v1648219771/frontendmentor/EcommerceItemPage/svgs/logo_s0onbg.svg"
							}
							layout={"fill"}
							objectFit={"contain"}
						/>
					</div>
				</div>
				<div className="header__right">
					<div
						className="header__cartContainer"
						onClick={() => setToggleCart(!toggleCart)}
					>
						<Image
							src={
								"https://res.cloudinary.com/blueshomepage/image/upload/v1648219770/frontendmentor/EcommerceItemPage/svgs/icon-cart_sc4pcf.svg"
							}
							layout={"fill"}
							objectFit={"contain"}
						/>
					</div>
					{toggleCart && (
						<section className="cart">
							<div className="cart__header">Cart</div>
							<hr />
						</section>
					)}
					<div className="header__profileContainer">
						<Image
							src={
								"https://res.cloudinary.com/blueshomepage/image/upload/v1648219741/frontendmentor/EcommerceItemPage/images/image-avatar_dxnn4k.png"
							}
							layout={"fill"}
							objectFit={"contain"}
						/>
					</div>
				</div>
			</header>
			<section className="carousel">
				<button className="carousel__btn btn__left" onClick={prevImage}>
					<div className="lefticon">
						<Image
							src={
								"https://res.cloudinary.com/blueshomepage/image/upload/v1648219769/frontendmentor/EcommerceItemPage/svgs/icon-previous_crusqa.svg"
							}
							layout={"fill"}
							objectFit={"contain"}
						/>
					</div>
				</button>
				<figure className="gallery">
					{/* Image Gallery */}
					<div className="gallery__viewport" ref={viewportRef}>
						<div className="gallery__container">
							{carouselSlides.map(({ key, img }) => (
								<div className="gallery__slide" key={key}>
									<div className="gallery__slide__image">
										<Image
											src={img}
											layout={"fill"}
											objectFit={"cover"}
											priority
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</figure>
				<button
					className="carousel__btn btn__right"
					onClick={nextImage}
				>
					<div className="righticon">
						<Image
							src={
								"https://res.cloudinary.com/blueshomepage/image/upload/v1648219767/frontendmentor/EcommerceItemPage/svgs/icon-next_h6gkrf.svg"
							}
							layout={"fill"}
							objectFit={"contain"}
						/>
					</div>
				</button>
			</section>
			<main className="mainContainer main">
				<p className="companyName">Sneaker Company</p>
				<p className="itemName">Fall Limited Edition Sneakers</p>
				<p className="itemDescription">
					These low-profile sneakers are your perfect casual wear
					companion. Featuring a durable rubber outer sole, they'll
					withstand everything the weather can offer.
				</p>
				<section className="pricingOffer">
					{/* Item Pricing */}
					<div className="pricingOffer__discount">
						<p className="pricingOffer__discount__price">$125.00</p>
						<p className="pricingOffer__discount__percent">50%</p>
					</div>
					<div>
						<p className="pricingOffer__originalPrice">$250.00</p>
					</div>
				</section>
				<div className="itemQuantity">
					{/* Item Quantity Adjustment */}
					<button
						className="itemQuantity__btn"
						onClick={minusQuantity}
					>
						<div className=" btn__minus">
							<Image
								src={
									"https://res.cloudinary.com/blueshomepage/image/upload/v1648219766/frontendmentor/EcommerceItemPage/svgs/icon-minus_hedeaa.svg"
								}
								layout={"fill"}
								objectFit={"contain"}
							/>
						</div>
					</button>
					<p className="itemQuantity__amount ">{quantity}</p>
					<button className="itemQuantity__btn" onClick={addQuantity}>
						<div className="btn__add">
							<Image
								src={
									"https://res.cloudinary.com/blueshomepage/image/upload/v1648219768/frontendmentor/EcommerceItemPage/svgs/icon-plus_mpoflz.svg"
								}
								layout={"fill"}
								objectFit={"contain"}
							/>
						</div>
					</button>
				</div>
				<button className="addToCartBtn">
					<p className="addToCartBtn__text">Add to cart</p>
				</button>
			</main>
			<footer></footer>
		</>
	);
};

export default Home;
