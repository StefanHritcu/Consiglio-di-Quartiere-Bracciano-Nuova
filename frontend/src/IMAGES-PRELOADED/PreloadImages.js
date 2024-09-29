import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { imagesToPreload } from "./imageConfig";

// Funzione per precaricare le immagini tramite l'oggetto Image
const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

// Componente per gestire il pre-caricamento
const PreloadImages = () => {
  useEffect(() => {
    // Precarica le immagini tramite l'oggetto Image
    imagesToPreload.forEach((image) => preloadImage(image.src));
  }, []);

  return (
    <Helmet>
      {/* Precarica le immagini tramite tag <link rel="preload"> */}
      {imagesToPreload.map((image) => (
        <link key={image.src} rel="preload" as="image" href={image.src} />
      ))}
    </Helmet>
  );
};

export default PreloadImages;
