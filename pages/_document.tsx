import Document, { Html, Head, Main, NextScript } from "next/document";
import { ReactElement } from "react";

class MyDocument extends Document {
	render(): ReactElement {
		return (
			<Html>
				<Head>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin={"true"}
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
				</body>
				<NextScript />
			</Html>
		);
	}
}

export default MyDocument;
