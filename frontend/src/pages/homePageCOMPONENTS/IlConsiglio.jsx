import { Helmet } from "react-helmet-async";
import FotoDiGruppo from "./../../assets/images/foto-di-gruppoEsempio.jpg";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function IlConsiglio() {
  return (
    <>
      <Helmet>
        {/* Metadati SEO specifici per la pagina Il Consiglio */}
        <title>Il Consiglio - Bracciano Nuova CdQ</title>
        <meta
          name="description"
          content="Scopri i membri del Consiglio di Quartiere Bracciano Nuova e la nostra missione per il benessere della comunità."
        />
      </Helmet>

      {/* Sezione principale del Consiglio */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Titolo principale */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Il Consiglio
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Incontra i membri del Consiglio di Quartiere di Bracciano Nuova e
              scopri la loro dedizione verso la comunità.
            </p>
          </div>

          {/* Contenitore flex per foto di gruppo e lista dei membri */}
          <div className="flex flex-col xl:flex-row items-center justify-between mb-4">
            {/* Foto di gruppo */}
            <div className="xl:w-1/2 flex justify-center mb-8 xl:mb-0">
              <img
                src={FotoDiGruppo}
                alt="Group photo of the council"
                className="sm:w-4/5 xl:w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            {/* Lista dei membri del consiglio */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center xl:ml-8 xl:h-96">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Membri del Consiglio
              </h2>
              <ul
                className={`grid grid-cols-2 items-center sm:grid-cols-3 md:grid-cols-5 gap-4 text-lg font-medium text-gray-700 ${
                  window.innerWidth >= 1280
                    ? "xl:grid-cols-5"
                    : "xl:grid-cols-1"
                }`}
              >
                {[
                  "Mario Rossi",
                  "Luigi Verdi",
                  "Carla Bianchi",
                  "Anna Neri",
                  "Giovanni Blu",
                  "Silvia Rosa",
                  "Marco Gialli",
                  "Elena Viola",
                  "Lucia Galli",
                  "Sara Fabbri",
                ].map((name, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-center p-4 rounded-lg shadow-md w-32 h-24 ${
                      window.innerWidth >= 1280
                        ? "bg-gray-100 hover:shadow-lg transition-shadow duration-300"
                        : "bg-transparent"
                    }`}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione "Perché nasce questo progetto" */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 underline">
              Perché nasce questo progetto
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Il{" "}
              <span className="font-semibold text-blue-600">
                Consiglio di Quartiere
              </span>{" "}
              di Bracciano Nuova nasce con l&apos;idea di rappresentare al
              meglio gli{" "}
              <span className="font-semibold text-blue-600">
                interessi della comunità
              </span>
              , creando un forte senso di{" "}
              <span className="font-semibold text-blue-600">
                gruppo e appartenenza
              </span>
              . Vogliamo far conoscere il nostro quartiere attraverso l&apos;uso
              di{" "}
              <span className="font-semibold text-blue-600">
                mappe geografiche interattive
              </span>
              , disponibili nella{" "}
              <Link
                to="/territorio"
                className="text-violet-600 underline hover:text-violet-800 font-bold"
              >
                Pagina Territorio
              </Link>
              , dove gli utenti possono esplorare{" "}
              <span className="font-semibold text-blue-600">
                punti di interesse
              </span>{" "}
              e{" "}
              <span className="font-semibold text-blue-600">
                risorse locali
              </span>
              .
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Attraverso questo sito, intendiamo offrire{" "}
              <span className="font-semibold text-blue-600">
                informazioni storiche
              </span>
              , come la storia delle vie di Bracciano Nuova, insieme a dettagli
              utili su{" "}
              <span className="font-semibold text-blue-600">biblioteche</span>,
              <span className="font-semibold text-blue-600">farmacie</span>,{" "}
              <span className="font-semibold text-blue-600">
                fermate dell&apos;autobus
              </span>
              , eventi e{" "}
              <span className="font-semibold text-blue-600">
                notizie rilevanti
              </span>
              . La nostra missione è rendere il quartiere più
              <span className="font-semibold text-blue-600">
                {" "}
                accessibile
              </span>{" "}
              e <span className="font-semibold text-blue-600">connesso</span>,
              fornendo risorse preziose per tutti i{" "}
              <span className="font-semibold text-blue-600">residenti</span> e{" "}
              <span className="font-semibold text-blue-600">visitatori</span>.
            </p>
          </div>

          <div className="text-center my-16 p-8 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Comune di Bracciano
            </h2>
            <p className="text-xl text-gray-700 font-semibold mb-4">
              Scopri di più sui nostri valori, la nostra missione e leggi il
              nostro statuto ufficiale per capire meglio come operiamo.
            </p>
            <a
              href="https://www.comune.bracciano.rm.it/statuto"
              className="text-xl text-white bg-blue-600 hover:bg-blue-800 py-3 my-6 px-6 rounded-lg font-semibold shadow-md transition-all duration-300 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leggi lo statuto del Comune di Bracciano
            </a>
          </div>

          {/* Scheda Informativa Contatti */}
          <article className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dati di Contatto
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@braccianonuova.com"
                  className="text-blue-600 hover:underline"
                >
                  info@braccianonuova.com
                </a>
              </li>
              <li>
                <strong>Indirizzo:</strong> Via Roma, 10, Bracciano, Italia
              </li>
              <li>
                <strong>Orari di Apertura:</strong> Lunedì - Venerdì: 9:00 -
                18:00
              </li>
              <li>
                <strong>Telefono:</strong>{" "}
                <a
                  href="tel:+390123456789"
                  className="text-blue-600 hover:underline"
                >
                  +39 012 345 6789
                </a>
              </li>
              <li>
                <strong>Informazioni Aggiuntive:</strong> Non esitare a
                contattarci per ulteriori informazioni sui nostri servizi e
                offerte speciali.
              </li>
            </ul>
          </article>

          {/* Mappa */}
          <div className="mb-12 relative z-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Dove Trovarci
            </h2>
            <MapContainer
              center={[42.1034, 12.1759]}
              zoom={13}
              className="h-96 rounded-lg shadow-lg overflow-hidden"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[42.1034, 12.1759]}>
                <Popup>
                  Siamo qui! <br /> Bracciano
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </>
  );
}

export default IlConsiglio;
