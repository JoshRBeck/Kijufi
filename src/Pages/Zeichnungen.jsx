import React from "react";
import { Helmet } from "react-helmet";
import ImagesDisplay from "../Components/ImagesDisplay";

function Zeichnungen() {
  return (
    <div>
     <Helmet>
        <title>Zeichnungen - Gemainsam Grenzenlos Kinderrechte Filmfestival 2023</title>
        <meta name="description" content="Erkunden Sie die kreativen Zeichnungen von Kindern für das Kinderrechte Filmfestival. Tauchen Sie ein in die Welt der Kunst und Kreativität." />
        <meta name="keywords" content="Zeichnungen, Kinderzeichnungen, Kunst, Kinderkunst, Kinderrechte Filmfestival, Gemainsam Grenzenlos" />

        <meta property="og:title" content="Zeichnungen - Gemainsam Grenzenlos Kinderrechte Filmfestival 2023" />
        <meta property="og:description" content="Erkunden Sie die kreativen Zeichnungen von Kindern für das Kinderrechte Filmfestival. Tauchen Sie ein in die Welt der Kunst und Kreativität." />
        <meta property="og:url" content="http://kinderrechte-filmfestival.de/zeichnungen" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="http://kinderrechte-filmfestival.de/zeichnungen" />
      </Helmet>
    <ImagesDisplay />
    </div>
  );
}

export default Zeichnungen;
