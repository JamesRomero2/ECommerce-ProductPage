import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<>
			<header>
				<div>
					{/* Hamburger */}
					{/* Logo */}
				</div>
				<div>
					{/* Cart */}
					{/* Profile */}
				</div>
			</header>
			<section>
				<figure>{/* Image Gallery */}</figure>
				<button>{/* Left Arrow */}</button>
				<button>{/* Right Arrow */}</button>
			</section>
			<main>
				<p>{/* Item Company */}</p>
				<p>{/* Item Name */}</p>
				<p>{/* Item Description */}</p>
				<section>
					{/* Item Pricing */}
					<div>
						<p>{/* Item Discounted Price */}</p>
						<p>{/* Item Discount Amount */}</p>
					</div>
					<div>
						<p>{/* Original Price */}</p>
					</div>
				</section>
				<div>
					{/* Item Quantity Adjustment */}
					<button>{/* Decrease */}</button>
					<p>{/* Amount */}</p>
					<button>{/* increase */}</button>
				</div>
				<button>{/* Add To Cart Button */}</button>
			</main>
			<footer></footer>
		</>
	);
};

export default Home;
