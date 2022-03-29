import Document, { Html, Head, Main, NextScript } from "next/document";
import { ReactElement } from "react";

class MyDocument extends Document {
	render(): ReactElement {
		return (
			<Html>
				<Head>{/* other links */}</Head>
				<body>
					<Main />
				</body>
				<NextScript />
			</Html>
		);
	}
}

export default MyDocument;
