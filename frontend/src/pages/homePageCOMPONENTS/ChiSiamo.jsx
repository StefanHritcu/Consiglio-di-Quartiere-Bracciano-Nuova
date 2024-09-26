import { Link } from "react-router-dom";

function ChiSiamo() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
      {/* Sezione Introduzione e Obiettivi */}
      <div className="container mx-auto px-6 lg:px-16 mb-20">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 animate-fade-in-up">
            Il Nostro Impegno
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Il nostro obiettivo è unire la comunità di Bracciano Nuova
            attraverso iniziative che promuovono il miglioramento e lo sviluppo
            del territorio. Come consiglio di quartiere, siamo un gruppo no
            profit dedicato a creare spazi di dialogo e collaborazione tra i
            residenti. Vogliamo trasformare le idee in azioni concrete,
            lavorando insieme per affrontare le sfide locali e migliorare la
            qualità della vita per tutti.
          </p>
        </header>

        {/* Sezione Obiettivi Principali */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 animate-fade-in-up delay-400">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-3 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Sviluppo Sostenibile
            </h3>
            <p className="text-gray-600 text-center">
              Promuoviamo iniziative che mirano a valorizzare l’ambiente, a
              ridurre gli sprechi e a migliorare la qualità della vita nel
              nostro territorio.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-3 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Inclusione Sociale
            </h3>
            <p className="text-gray-600 text-center">
              Lavoriamo per creare una comunità più inclusiva, dove ogni persona
              possa partecipare attivamente e trovare sostegno.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-3 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Collaborazione e Dialogo
            </h3>
            <p className="text-gray-600 text-center">
              Crediamo nel potere del dialogo e della collaborazione tra
              cittadini, istituzioni e imprese locali per il bene comune.
            </p>
          </div>
        </div>
      </div>

      {/* Sezione Titolo e Descrizione del Team */}
      <div className="container mx-auto px-6 lg:px-16">
        <header className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
            Chi Siamo
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Siamo un gruppo di persone appassionate di Bracciano Nuova, unite
            dalla volontà di migliorare il nostro territorio attraverso la
            collaborazione, la condivisione e il dialogo costruttivo. La nostra
            missione è promuovere un ambiente in cui ogni cittadino possa
            esprimere le proprie idee e contribuire attivamente al cambiamento.
          </p>
        </header>
      </div>

      {/* Sezione Persona Chiave e Rappresentanti */}
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Persona Chiave */}
        <div className="bg-white shadow-lg rounded-lg p-8 transform hover:-translate-y-3 transition-transform duration-300 animate-fade-in-up">
          <img
            src="/images/keyperson.jpg"
            alt="Persona Chiave"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Giulia Rossi
          </h3>
          <p className="text-center text-gray-500 mb-4">Fondatrice e Leader</p>
          <p className="text-lg text-gray-600 text-center">
            Giulia è il cuore pulsante del gruppo, con una passione per il
            cambiamento e un forte impegno verso il miglioramento della nostra
            comunità. Coordina i progetti con visione e dedizione, promuovendo
            un clima di partecipazione attiva e responsabilità collettiva.
          </p>
        </div>

        {/* Rappresentante */}
        <div className="bg-white shadow-lg rounded-lg p-8 transform hover:-translate-y-3 transition-transform duration-300 animate-fade-in-up delay-200">
          <img
            src="/images/representative.jpg"
            alt="Rappresentante"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Marco Bianchi
          </h3>
          <p className="text-center text-gray-500 mb-4">Rappresentante</p>
          <p className="text-lg text-gray-600 text-center">
            Marco è la voce del gruppo, rappresentando la comunità nei rapporti
            con le istituzioni e guidando la comunicazione con trasparenza e
            professionalità. La sua capacità di ascolto e di mediazione è
            fondamentale per costruire relazioni solide e fruttuose.
          </p>
        </div>

        {/* Vice Rappresentante */}
        <div className="bg-white shadow-lg rounded-lg p-8 transform hover:-translate-y-3 transition-transform duration-300 animate-fade-in-up delay-400">
          <img
            src="/images/vice.jpg"
            alt="Vice Rappresentante"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Francesca Verdi
          </h3>
          <p className="text-center text-gray-500 mb-4">Vice Rappresentante</p>
          <p className="text-lg text-gray-600 text-center">
            Francesca è l’energia dietro le quinte, supportando Marco nelle
            decisioni strategiche e gestendo i progetti con attenzione ai
            dettagli e grande entusiasmo. La sua creatività e la sua
            determinazione sono un valore aggiunto per il nostro team.
          </p>
        </div>
      </div>

      {/* Sezione Immagine di Background e Call to Action */}
      <div
        className="relative bg-cover bg-center my-20 h-96 animate-fade-in-up delay-600"
        style={{ backgroundImage: `url('/images/community-action.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
            Sei anche tu residente di Bracciano?
          </h2>
          <p className="text-xl text-white text-center max-w-3xl mx-auto mb-6">
            Partecipa al nostro progetto e contribuisci a rendere Bracciano
            Nuova un luogo migliore per tutti i suoi abitanti. Insieme possiamo
            fare la differenza.
          </p>
          <Link
            to="/contatti"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Contattaci
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ChiSiamo;
