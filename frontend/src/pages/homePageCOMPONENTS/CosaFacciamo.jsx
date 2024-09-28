import { Link } from "react-router-dom";
import mapImage from "./../../assets/images/planimetriaBraccianoNuova.jpg";

function CosaFacciamo() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-primary mb-4 animate__animated animate__fadeInDown">
            Cosa Facciamo
          </h1>
          <p className="text-lg text-gray-700 animate__animated animate__fadeIn animate__delay-1s">
            Siamo qui per informare e coinvolgere la comunità di Bracciano!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Storia e Cultura */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Storia e Cultura
            </h2>
            <p className="text-gray-600">
              Scopri la storia affascinante delle vie di Bracciano, le chiese
              storiche e le librerie locali che raccontano la nostra identità
              culturale. Il nostro consiglio promuove eventi che celebrano la
              cultura locale e il patrimonio storico. I luoghi di culto e le
              tradizioni sono parte integrante della nostra comunità, e
              organizziamo tour guidati per far conoscere ai cittadini e ai
              visitatori il nostro ricco patrimonio.
            </p>
          </div>

          {/* Comunicazione con il Comune */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Comunicazione con il Comune
            </h2>
            <p className="text-gray-600">
              Facilitiamo la comunicazione tra i cittadini e il comune di
              Bracciano, offrendo informazioni utili riguardanti servizi
              pubblici, eventi e iniziative locali. Grazie alla nostra
              piattaforma, i cittadini possono rimanere aggiornati su novità,
              ordinanze e opportunità di partecipazione alle decisioni locali.
            </p>
          </div>

          {/* Eventi Locali */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Eventi Locali
            </h2>
            <p className="text-gray-600">
              Partecipate ai nostri eventi ricreativi, progettati per promuovere
              lo spirito di comunità e offrire occasioni di socializzazione tra
              i residenti. Dalla festa della primavera ai mercatini natalizi, ci
              impegniamo a creare eventi che coinvolgano tutti, dalle famiglie
              ai giovani. Visitate la nostra pagina eventi per rimanere
              aggiornati su ciò che accade in città.
            </p>
          </div>

          {/* Informazioni Pratiche */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Informazioni Pratiche
            </h2>
            <p className="text-gray-600">
              Forniamo informazioni pratiche come le fermate, le stazioni e gli
              orari di treno e bus, aiutando i cittadini a muoversi più
              facilmente nel nostro territorio. La nostra missione è garantire
              che ogni cittadino possa accedere facilmente alle risorse e ai
              servizi di cui ha bisogno.
            </p>
          </div>
        </div>

        {/* Sezione Testimonianze */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
            Testimonianze della Comunità
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Le parole dei nostri cittadini sono la nostra migliore pubblicità!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <blockquote className="bg-white shadow-md rounded-lg p-4 w-72">
              <p className="text-gray-700">
                "Grazie al consiglio di quartiere, ho scoperto eventi che non
                avrei mai conosciuto. La comunità è diventata un luogo
                migliore!"
              </p>
              <footer className="mt-2 text-sm text-gray-500">- Mario R.</footer>
            </blockquote>
            <blockquote className="bg-white shadow-md rounded-lg p-4 w-72">
              <p className="text-gray-700">
                "La comunicazione con il comune è migliorata notevolmente. È
                bello vedere un impegno così forte per il nostro quartiere."
              </p>
              <footer className="mt-2 text-sm text-gray-500">- Laura G.</footer>
            </blockquote>
          </div>
        </div>

        {/* Galleria Eventi */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
            Galleria Eventi
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Dai un'occhiata ai momenti salienti dei nostri eventi recenti!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Immagini degli eventi */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="./../../assets/images/event1.jpg"
                alt="Evento 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-primary">
                  Festa della Primavera
                </h3>
                <p className="text-gray-600">
                  Un evento colorato e pieno di vita!
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="./../../assets/images/event2.jpg"
                alt="Evento 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-primary">
                  Mercatino di Natale
                </h3>
                <p className="text-gray-600">Magia e gioia per tutte le età!</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="./../../assets/images/event3.jpg"
                alt="Evento 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-primary">
                  Festa della Musica
                </h3>
                <p className="text-gray-600">Note che uniscono la comunità!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione di Domande Frequenti */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
            Domande Frequenti
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg text-primary mb-2">
              Come posso partecipare agli eventi?
            </h3>
            <p className="text-gray-600 mb-4">
              È semplice! Puoi iscriverti alle nostre newsletter e seguire i
              nostri canali social per rimanere sempre aggiornato sugli eventi
              futuri.
            </p>
            <h3 className="font-semibold text-lg text-primary mb-2">
              Dove posso trovare informazioni sui servizi pubblici?
            </h3>
            <p className="text-gray-600 mb-4">
              Visita la nostra sezione dedicata sul sito, dove troverai tutte le
              informazioni utili riguardanti i servizi pubblici disponibili a
              Bracciano.
            </p>
          </div>
        </div>

        {/* Mappa di Bracciano */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Esplora la Mappa di Bracciano
          </h2>
          <img
            src={mapImage}
            alt="Mappa di Bracciano"
            className="w-full md:w-2/3 mx-auto rounded-lg shadow-lg"
          />
          <p className="text-gray-600 mt-4">
            Clicca sull'immagine per esplorare la mappa interattiva della nostra
            bellissima città!
          </p>
          <Link
            to="/map"
            className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            Scopri di più
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CosaFacciamo;
