import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PlanimetriaImage from "./../../../assets/images/planimetriaBraccianoNuova.jpg";
import { IoArrowBackSharp } from "react-icons/io5";
import StazioneAutobus from "./../../../assets/servizi/BusStationImage.jpg";
import RifiutiImage from "./../../../assets/servizi/cittadini-img.jpg";

function Cittadini() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentPlanimetria, setCurrentPlanimetria] = useState(null);

  const openOverlay = (image) => {
    setCurrentPlanimetria(image);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setCurrentPlanimetria(null);
  };

  return (
    <>
      <Helmet>
        <title>Cittadini - Servizi di Bracciano</title>
        <meta
          name="description"
          content="Informazioni sui servizi per i cittadini di Bracciano."
        />
      </Helmet>
      <div className="container mx-auto p-4">
        <header className="flex flex-col items-start mb-6">
          <a
            href="/servizi"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200 flex items-center"
          >
            <IoArrowBackSharp className="mr-1 w-8 h-8 transition-transform duration-200 transform hover:translate-x-[-4px]" />
            <span className="text-2xl hover:underline">indietro</span>
          </a>

          <h1 className="text-3xl font-bold mx-auto my-2">Cittadini</h1>
        </header>

        {/* Sezione Raccolta Rifiuti */}
        <section className="mb-8">
          <h2
            className="text-2xl font-semibold mb-4"
            aria-label="Raccolta Rifiuti"
          >
            Raccolta Rifiuti
          </h2>
          <div className="flex flex-col xl:flex-row items-center gap-6">
            <figure className="flex-none">
              <img
                className="w-full max-w-[320px] md:max-w-[600px] h-auto rounded-lg shadow-lg"
                src={RifiutiImage}
                alt="Immagine della raccolta rifiuti"
              />
              <figcaption className="text-center text-gray-600 mt-2">
                Immagine della raccolta rifiuti
              </figcaption>
            </figure>
            <div className="overflow-x-auto w-full">
              <table className="min-w-full border-collapse border border-gray-300 bg-white shadow-md">
                <caption className="sr-only">
                  Orari di raccolta rifiuti per settimana
                </caption>
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-4 text-left font-semibold">
                      Giorno
                    </th>
                    <th className="border border-gray-300 p-4 text-left font-semibold">
                      Tipo di Rifiuto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="border border-gray-300 p-4">Lunedì</td>
                    <td className="border border-gray-300 p-4">Secco</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="border border-gray-300 p-4">Martedì</td>
                    <td className="border border-gray-300 p-4">Umido</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="border border-gray-300 p-4">Mercoledì</td>
                    <td className="border border-gray-300 p-4">Secco</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="border border-gray-300 p-4">Giovedì</td>
                    <td className="border border-gray-300 p-4">Carta</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="border border-gray-300 p-4">Venerdì</td>
                    <td className="border border-gray-300 p-4">Plastica</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="border border-gray-300 p-4">Sabato</td>
                    <td className="border border-gray-300 p-4">Umido</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="border border-gray-300 p-4">Domenica</td>
                    <td className="border border-gray-300 p-4">
                      Nessuna raccolta
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Sezione Pianimetria Stazioni */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Planimetria Stazione del treno e fermate autobus
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-4 flex">
            <img
              src={PlanimetriaImage}
              alt="Planimetria"
              className="w-1/3 rounded-lg mr-4 cursor-pointer"
              onClick={() =>
                openOverlay({
                  src: PlanimetriaImage,
                  alt: "Planimetria Bracciano Nuova",
                })
              }
            />
            <div className="w-2/3">
              <h3 className="text-xl font-semibold">
                Stazioni di Bracciano Nuova
              </h3>
              <p className="mb-4">
                Clicca sulla card per visualizzare la planimetria delle stazioni
                di treno e autobus di Bracciano Nuova.
              </p>
              <a
                href="/path/to/planimetria-full.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visualizza Planimetria
              </a>
            </div>
          </div>

          {/* Orari delle Stazioni */}
          <h3 className="text-xl font-semibold mt-6">Orari delle Stazioni</h3>
          <ul className="list-disc list-inside">
            <li>Stazione Autobus: Maggiori orari - 8:00, 10:00, 12:00</li>
            <li>Stazione Bracciano per Roma: 6:30, 8:30, 10:30</li>
            <li>Stazione Bracciano per Viterbo: 7:00, 9:00, 11:00</li>
          </ul>

          {/* Descrizione stilizzata sotto a destra */}
          <p className="mt-4 text-gray-700 text-sm italic text-right">
            Gli orari possono variare. Si consiglia di controllare gli
            aggiornamenti presso le stazioni.
          </p>
        </section>

        {/* Overlay per la planimetria */}
        {isOverlayOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
              <button
                onClick={closeOverlay}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                &times; {/* Chiudi */}
              </button>
              <img
                src={currentPlanimetria?.src} // Controllo per evitare errori
                alt={currentPlanimetria?.alt} // Controllo per evitare errori
                className="rounded-lg shadow-lg max-w-[90vw] max-h-[90vh]"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cittadini;
