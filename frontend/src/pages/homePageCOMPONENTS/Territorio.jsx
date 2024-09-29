import { useState } from "react";
import { Helmet } from "react-helmet-async";

// Import delle immagini
import imgLuoghi from "./../../assets/images/territorio/territorio-2.jpg";
import imgEventi from "./../../assets/images/territorio/territorio-2.jpg";
import imgAreeVerdi from "./../../assets/images/territorio/territorio-3.jpg";
import imgMappe from "./../../assets/images/territorio/territorio-2.jpg";
import imgStoria from "./../../assets/images/territorio/territorio-2.jpg";

// Dati delle categorie con album fotografici e descrizioni di Bracciano
const categories = [
  {
    title: "Luoghi di Interesse",
    description: "Esplora i castelli, musei e monumenti di Bracciano.",
    longDescription:
      "Scopri il fascino di Bracciano, con i suoi storici castelli, come l'Orsini-Odescalchi, e monumenti senza tempo. Un luogo dove storia e cultura si incontrano.",
    icon: imgLuoghi,
    images: [
      { src: imgLuoghi, alt: "Castello di Bracciano" },
      { src: imgLuoghi, alt: "Museo Civico" },
    ],
  },
  {
    title: "Eventi e Attività Locali",
    description: "Vivi i mercati, i festival e le tradizioni di Bracciano.",
    longDescription:
      "Bracciano è il cuore pulsante di eventi e attività locali. Dai vivaci mercati contadini ai festival, ogni evento ti offre un'esperienza autentica della cultura e delle tradizioni locali.",
    icon: imgEventi,
    images: [
      { src: imgEventi, alt: "Festival locale" },
      { src: imgEventi, alt: "Mercato del paese" },
    ],
  },
  {
    title: "Aree Verdi",
    description: "Immergiti nella natura dei parchi e giardini di Bracciano.",
    longDescription:
      "Concediti un momento di relax passeggiando tra i rigogliosi parchi e giardini di Bracciano, ideali per chi cerca tranquillità e bellezza naturale.",
    icon: imgAreeVerdi,
    images: [
      { src: imgAreeVerdi, alt: "Parco pubblico" },
      { src: imgAreeVerdi, alt: "Giardino botanico" },
    ],
  },
  {
    title: "Mappe e Pianimetrie",
    description: "Consulta le mappe della città e pianifica i tuoi itinerari.",
    longDescription:
      "Esplora Bracciano con facilità utilizzando le mappe dettagliate della città e delle reti di trasporto. Trova le migliori rotte per scoprire tutte le meraviglie del territorio.",
    icon: imgMappe,
    images: [
      { src: imgMappe, alt: "Mappa della città" },
      { src: imgMappe, alt: "Stazione del treno" },
    ],
  },
  {
    title: "Storia e Cultura Locale",
    description:
      "Approfondisci le tradizioni e la storia millenaria di Bracciano.",
    longDescription:
      "Dal folklore locale ai documenti storici, Bracciano è un vero e proprio viaggio nel tempo. Immergiti in una cultura millenaria ricca di leggende e tradizioni.",
    icon: imgStoria,
    images: [
      { src: imgStoria, alt: "Documenti storici" },
      { src: imgStoria, alt: "Tradizioni locali" },
    ],
  },
];

function Territorio() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAlbum = (categoryIndex) => {
    setCurrentCategory(categories[categoryIndex]);
    setCurrentIndex(0);
    setIsOpen(true);
  };

  const closeAlbum = () => {
    setIsOpen(false);
    setCurrentCategory(null);
  };

  const nextImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % currentCategory.images.length
    );
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + currentCategory.images.length) %
        currentCategory.images.length
    );
  };

  return (
    <>
      <Helmet>
        <title>Territorio - Bracciano Nuova CdQ</title>
        <meta
          name="description"
          content="Explore the beautiful territory of Bracciano."
        />
      </Helmet>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8">Territorio</h1>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center lg:items-start bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Card in stile Magic */}
              <div
                className="cursor-pointer flex-shrink-0 lg:w-1/2 w-full bg-gray-800 text-white hover:scale-105 transition-transform"
                onClick={() => openAlbum(index)}
              >
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold">{category.title}</h2>
                  <p className="text-gray-300 mt-2">{category.description}</p>
                </div>
              </div>

              {/* Sezione testuale */}
              <div className="lg:w-1/2 w-full p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.longDescription}</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Scopri luoghi unici</li>
                  <li>Partecipa ad attività locali</li>
                  <li>Esplora la storia antica</li>
                  <li>Consulta mappe e percorsi</li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Overlay dell'album fotografico */}
        {isOpen && currentCategory && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
              <button
                onClick={closeAlbum}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                &times; {/* Chiudi */}
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
              >
                &#10094; {/* Freccia sinistra */}
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
              >
                &#10095; {/* Freccia destra */}
              </button>
              <img
                src={currentCategory.images[currentIndex].src}
                alt={currentCategory.images[currentIndex].alt}
                className="rounded-lg shadow-lg max-w-[90vw] max-h-[90vh]"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Territorio;
