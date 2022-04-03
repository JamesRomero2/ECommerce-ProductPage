import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import ImageGallery from "../components/ImageGallery";
import ImageSlideshow from "../components/ImageSlideshow";

const Home: NextPage = () => {
	const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
	const [toggleCart, setToggleCart] = useState<boolean>(false);

	const [quantity, setQuantity] = useState<number>(0);
	const [itemcartQuantity, setItemcartQuantity] = useState<number>(0);
	const [showItemCart, setShowItemCart] = useState<boolean>(false);

	const addtoCart = (itemcartQuantity: number) => {
		setItemcartQuantity(itemcartQuantity);
		if (itemcartQuantity <= 0) {
			setShowItemCart(false);
			return;
		}
		setShowItemCart(true);
	};

	const addQuantity = () => {
		if (quantity >= 10) return;
		setQuantity(quantity + 1);
	};
	const minusQuantity = () => {
		if (quantity <= 0) return;

		setQuantity(quantity - 1);
	};

	return (
		<>
			<header className="header headerContainer">
				<div className="header__left">
					<button
						type="button"
						id="hamburger"
						className="hide-on-desktop"
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
										alt="Exit icon"
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
							alt={"The website's logo"}
						/>
					</div>
					<ul className="hide-on-mobile">
						<li>Collections</li>
						<li>Men</li>
						<li>Women</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
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
							alt={"Cart Icon"}
							className="carticn"
						/>
						{showItemCart && (
							<div className="itemCartNumber">
								{itemcartQuantity}
							</div>
						)}
					</div>
					{toggleCart && (
						<section className="cart">
							<div className="cart__header">Cart</div>
							<hr />
							{showItemCart ? (
								<>
									<div className="cart__items">
										<div className="cart__items__thumbnail thumbnail">
											<Image
												src={
													"https://res.cloudinary.com/blueshomepage/image/upload/v1648219744/frontendmentor/EcommerceItemPage/images/image-product-1-thumbnail_kqpwxi.jpg"
												}
												layout={"fill"}
												objectFit={"contain"}
												alt="Item Thumbnail"
											/>
										</div>
										<div className="cart__text">
											<p>Autumn Limited Edition...</p>
											<div>
												$125.00 x {itemcartQuantity}{" "}
												<span className="cart__text__total">
													&#36;
													{125.0 * itemcartQuantity}
													.00
												</span>
											</div>
										</div>
										<div
											className="cart__items__thumbnail trashicon"
											onClick={() => addtoCart(0)}
										>
											<Image
												src={
													"https://res.cloudinary.com/blueshomepage/image/upload/v1648219772/frontendmentor/EcommerceItemPage/svgs/icon-delete_vf3vrz.svg"
												}
												layout={"fill"}
												objectFit={"contain"}
												alt="Trash icon"
											/>
										</div>
									</div>
									<div className="checkout">
										<button
											className="checkout__btn"
											onClick={() => addtoCart(0)}
										>
											Checkout
										</button>
									</div>
								</>
							) : (
								<div className="emptCart">
									<p>Your cart is empty.</p>
								</div>
							)}
						</section>
					)}
					<div className="header__profileContainer">
						<Image
							src={
								"https://res.cloudinary.com/blueshomepage/image/upload/v1648219741/frontendmentor/EcommerceItemPage/images/image-avatar_dxnn4k.png"
							}
							layout={"fill"}
							objectFit={"contain"}
							alt={"Image Avatar"}
						/>
					</div>
				</div>
			</header>
			<div className="mainContainer partition">
				{/* DESKTOP EMBLA Gallery */}
				<ImageSlideshow />
				{/* TODO: MAKE THIS GALLERY */}
				<ImageGallery />

				<main className="main">
					<p className="companyName">Sneaker Company</p>
					<p className="itemName">Fall Limited Edition Sneakers</p>
					<p className="itemDescription">
						These low-profile sneakers are your perfect casual wear
						companion. Featuring a durable rubber outer sole,
						they&apos;ll withstand everything the weather can offer.
					</p>
					<section className="pricingOffer">
						{/* Item Pricing */}
						<div className="pricingOffer__discount">
							<p className="pricingOffer__discount__price">
								$125.00
							</p>
							<p className="pricingOffer__discount__percent">
								50%
							</p>
						</div>
						<div>
							<p className="pricingOffer__originalPrice">
								$250.00
							</p>
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
									alt={"Subtraction Icon"}
								/>
							</div>
						</button>
						<p className="itemQuantity__amount ">{quantity}</p>
						<button
							className="itemQuantity__btn"
							onClick={addQuantity}
						>
							<div className="btn__add">
								<Image
									src={
										"https://res.cloudinary.com/blueshomepage/image/upload/v1648219768/frontendmentor/EcommerceItemPage/svgs/icon-plus_mpoflz.svg"
									}
									layout={"fill"}
									objectFit={"contain"}
									alt={"Addition Icon"}
								/>
							</div>
						</button>
					</div>
					<button
						className="addToCartBtn"
						onClick={() => addtoCart(quantity)}
					>
						<p className="addToCartBtn__text">Add to cart</p>
					</button>
				</main>
			</div>
			<footer></footer>
		</>
	);
};

export default Home;
