import { Key } from "react";

interface carouselTypes {
	key: Key;
	imgSrc: string;
}

export const carouselSlides: carouselTypes[] = [
	{
		key: 0,
		imgSrc: "https://res.cloudinary.com/blueshomepage/image/upload/v1648219743/frontendmentor/EcommerceItemPage/images/image-product-1_xc3gss.jpg",
	},
	{
		key: 1,
		imgSrc: "https://res.cloudinary.com/blueshomepage/image/upload/v1648219746/frontendmentor/EcommerceItemPage/images/image-product-2_p8e6zo.jpg",
	},
	{
		key: 2,
		imgSrc: "https://res.cloudinary.com/blueshomepage/image/upload/v1648219748/frontendmentor/EcommerceItemPage/images/image-product-3_ie74pr.jpg",
	},
	{
		key: 3,
		imgSrc: "https://res.cloudinary.com/blueshomepage/image/upload/v1648219745/frontendmentor/EcommerceItemPage/images/image-product-4_y6zmva.jpg",
	},
];
