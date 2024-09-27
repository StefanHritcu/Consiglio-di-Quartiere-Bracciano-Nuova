import { Helmet } from "react-helmet-async";

function ArticoliSection() {
  return (
    <>
      <Helmet>
        {/* Metadati specifici per la pagina Articoli */}
        <title>Articoli - Bracciano Nuova CqD</title>
        <meta name="description" content="Browse through our articoli." />
      </Helmet>
      <div>
        <h1>Sezione degli articoli, eventi e altro</h1>
      </div>
    </>
  );
}

export default ArticoliSection;
