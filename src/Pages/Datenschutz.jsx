import React from 'react';
import { Helmet } from 'react-helmet'
const { default: DatenschutzData } = require("../Components/Datenschutz");

function Datenschutz() {
  return (
    <div>
      <Helmet>
        <title>Datenschutz - Gemainsam Grenzenlos Kinderrechte Filmfestival 2023</title>
        <meta name="description" content="Lesen Sie unsere Datenschutzrichtlinien, um zu erfahren, wie wir Ihre Daten schützen und verwenden." />
        <meta name="keywords" content="Datenschutz, Datenschutzrichtlinien, Privacy Policy, Datenschutzerklärung, Gemainsam Grenzenlos" />

        <meta property="og:title" content="Datenschutz - Gemainsam Grenzenlos Kinderrechte Filmfestival 2023" />
        <meta property="og:description" content="Lesen Sie unsere Datenschutzrichtlinien, um zu erfahren, wie wir Ihre Daten schützen und verwenden." />
        <meta property="og:url" content="http://kinderrechte-filmfestival.de/datenschutz" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="http://kinderrechte-filmfestival.de/datenschutz" />
      </Helmet>
      <DatenschutzData />
    </div>
  )
}
export default Datenschutz;