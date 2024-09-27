import { Helmet } from "react-helmet-async";
import FotoDiGruppo from "./../../assets/images/foto-di-gruppoEsempio.jpg";

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
            <div className="bg-white p-8 rounded-lg shadow-lg text-center xl:ml-8 xl:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Membri del Consiglio
              </h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-lg font-medium text-gray-700">
                <li>Mario Rossi</li>
                <li>Luigi Verdi</li>
                <li>Carla Bianchi</li>
                <li>Anna Neri</li>
                <li>Giovanni Blu</li>
                <li>Silvia Rosa</li>
                <li>Marco Gialli</li>
                <li>Elena Viola</li>
                <li>Luca Galli</li>
                <li>Sara Fabbri</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione "Perché nasce questo progetto" */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Perché nasce questo progetto
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Il Consiglio di Quartiere di Bracciano Nuova nasce con l'idea di
              rappresentare al meglio gli interessi della comunità. I nostri
              valori principali sono: partecipazione attiva, trasparenza, e
              iniziative sostenibili per il bene di tutti.
            </p>
          </div>
          <div className="text-center my-16 p-8 bg-gray-100 rounded-lg shadow-lg">
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

          {/* Punti sul progetto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Rappresentanza della comunità
              </h3>
              <p className="text-gray-600">
                Il Consiglio nasce con l'obiettivo primario di rappresentare al
                meglio gli interessi della nostra comunità. I membri del
                consiglio sono eletti per garantire che ogni voce venga
                ascoltata e presa in considerazione nei processi decisionali.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Partecipazione attiva
              </h3>
              <p className="text-gray-600">
                Promuoviamo la partecipazione attiva dei residenti attraverso
                forum pubblici, sondaggi e riunioni aperte. Crediamo fermamente
                che il dialogo costruttivo sia la chiave per risolvere i
                problemi locali e costruire un futuro migliore.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Sviluppo di iniziative sostenibili
              </h3>
              <p className="text-gray-600">
                Lo sviluppo di progetti a lungo termine che promuovano la
                sostenibilità ambientale e sociale è uno dei pilastri del nostro
                lavoro. Dalle iniziative di riciclo alle campagne per la
                riduzione dell'inquinamento, ci impegniamo a creare un ambiente
                più pulito per le future generazioni.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Supporto alle nuove generazioni
              </h3>
              <p className="text-gray-600">
                Crediamo nel potenziale dei giovani. Attraverso progetti
                educativi e culturali, miriamo a fornire risorse che aiutino i
                giovani a crescere e sviluppare le loro competenze in un
                ambiente stimolante.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Trasparenza e collaborazione
              </h3>
              <p className="text-gray-600">
                Garantiamo trasparenza nelle decisioni. Lavoriamo a stretto
                contatto con le autorità locali e i residenti per creare una
                governance chiara e accessibile.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Promozione della cultura locale
              </h3>
              <p className="text-gray-600">
                Bracciano ha una storia e una cultura ricche di tradizioni. Il
                Consiglio lavora per valorizzare queste risorse attraverso
                eventi culturali, mostre e collaborazioni con artisti locali.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IlConsiglio;
