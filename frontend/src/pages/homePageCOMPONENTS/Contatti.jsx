import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Assicurati di avere installato react-leaflet
import "leaflet/dist/leaflet.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contatti() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-16 mb-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contattaci</h1>
          <p className="text-lg text-gray-600">
            Siamo qui per ascoltarti! Ecco i nostri dettagli di contatto.
          </p>
        </header>

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
              <strong>Orari di Apertura:</strong> Lunedì - Venerdì: 9:00 - 18:00
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

        {/* Informazioni di Contatto e Social Media */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Seguici sui Social
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Rimanete aggiornati sulle nostre attività e iniziative.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-3xl text-blue-600 hover:text-blue-700 transition duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl text-blue-400 hover:text-blue-500 transition duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl text-pink-600 hover:text-pink-700 transition duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-800 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Informazioni Aggiuntive */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Informazioni Aggiuntive
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Se hai domande, non esitare a contattarci tramite il modulo qui
            sopra. Siamo qui per aiutarti!
          </p>
          <p className="text-lg text-gray-600">
            La nostra missione è rendere Bracciano un luogo migliore per tutti.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contatti;
