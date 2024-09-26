import Event from "./../../DATA/Events";
import EventImageExample from "./../../assets/images/eventExample.jpg";

function ShortNextEvent() {
  // Ottieni la data attuale
  const currentDate = new Date();

  // Trova l'evento più prossimo alla data attuale
  const nextEvent = Event.map((event) => ({
    ...event,
    data: new Date(event.data),
  })) // Converti la data in oggetto Date
    .filter((event) => event.data >= currentDate) // Filtra solo eventi futuri
    .sort((a, b) => a.data - b.data)[0]; // Ordina per data e prendi il primo

  // Se non ci sono eventi futuri
  if (!nextEvent) {
    return <p>Nessun evento imminente.</p>;
  }

  return (
    <article className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto my-6 lg:max-w-2xl">
      <h1 className="text-2xl font-bold text-center text-primary mb-4">
        Prossimo Evento
      </h1>
      <img
        src={EventImageExample}
        alt={`Immagine dell'evento: ${nextEvent.titolo}`}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800">
        {nextEvent.titolo}
      </h2>
      <time
        dateTime={nextEvent.data.toISOString().split("T")[0]}
        className="block text-gray-600 text-sm mt-1"
      >
        {nextEvent.data.toLocaleDateString("it-IT", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        , {nextEvent.orario} {/* Aggiunto l'orario */}
      </time>
      <p className="mt-2 text-lg text-gray-600">{nextEvent.descrizioneShort}</p>

      <div className="mt-2 text-gray-500">
        <p>
          <strong>Luogo:</strong> {nextEvent.via}
        </p>{" "}
        {/* Aggiunto il luogo */}
        <p>
          <strong>Dettagli:</strong> {nextEvent.dettagli}
        </p>{" "}
        {/* Aggiunti dettagli */}
      </div>

      <footer className="mt-4">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">
            {nextEvent.price ? "Prezzo: €10" : "Gratuito"}
          </p>
          <a
            href={`/eventi/${nextEvent.id}`} // Link alla pagina dell'evento
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            aria-label={`Scopri di più su ${nextEvent.titolo}`}
          >
            Scopri di più
          </a>
        </div>
      </footer>
    </article>
  );
}

export default ShortNextEvent;
