import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta name="author" content="James Romero" />
				<meta name="author" content="Blue Royalty" />

				{/*Configure*/}
				<meta
					name="description"
					content="Ecommerce Item Page coded by James Romero"
				/>
				<meta name="msapplication-TileColor" content="#ff7d1a" />
				<meta name="theme-color" content="#ffffff" />
				<link
					rel="icon"
					href="https://res.cloudinary.com/blueshomepage/image/upload/v1646562009/frontendmentor/Easybank/images/favicon-32x32_fzovhu.png"
					type="image"
					sizes="16x16"
				/>
				<title>Frontend Mentor | E-commerce product page</title>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
