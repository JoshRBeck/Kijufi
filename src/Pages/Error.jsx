import React from 'react';
import { Helmet } from 'react-helmet'

function Error() {
	return (
		<div>
			<Helmet>
				<title>Error - Gemainsam Grenzenlos Kinderrechte Filmfestival 2023</title>
				<meta name="description" content="We're sorry, but an error has occurred on our website. Please try again later or contact us for assistance." />
				<meta name="keywords" content="Error, Error Page, Website Error, Contact Support" />

				<meta property="og:title" content="Error - Gemainsam Grenzenlos Kinderrechte Filmfestival 2023" />
				<meta property="og:description" content="We're sorry, but an error has occurred on our website. Please try again later or contact us for assistance." />
				<meta property="og:url" content="http://kinderrechte-filmfestival.de/error" />

				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="canonical" href="http://kinderrechte-filmfestival.de/error" />
			</Helmet>
			Error 404
		</div>
	)
}

export default Error;
