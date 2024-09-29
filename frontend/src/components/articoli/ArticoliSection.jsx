import { Helmet } from "react-helmet-async";
import events from "../../DATA/Events";
import news from "../../DATA/News";
import articles from "../../DATA/Articles";
import { IoMdPerson } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";
import LastArticleExampleImage from "./../../assets/images/lastArticleExampleImage.jpg";
import { GrArticle } from "react-icons/gr";

function ArticoliSection() {
  // Ordina le notizie, gli eventi e gli articoli
  const sortedNews = news
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);
  const sortedEvents = events
    .sort((a, b) => new Date(a.data) - new Date(b.data))
    .slice(0, 4);
  const sortedArticles = articles
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Articoli - Bracciano Nuova CqD</title>
        <meta name="description" content="Browse through our articoli." />
      </Helmet>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">
          Sezione degli articoli, eventi e altro
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Sezione Notizie */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Notizie</h2>
            {sortedNews.map((item, index) => (
              <div
                key={index}
                className={`bg-gray-100 rounded-lg p-4 mb-4 transition-transform transform hover:scale-105 ${
                  index === 0 ? "border-4 border-primary" : ""
                }`}
              >
                {index === 0 && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                    Più recente
                  </span>
                )}
                <Link to={`/news/${item.id}`} className="block">
                  <img
                    src={item.imageUrl || LastArticleExampleImage} // Assicurati di avere un'immagine per ogni notizia
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.shortDescription}</p>
                  <p className="mt-1 flex items-center text-sm text-gray-500">
                    <IoMdPerson className="mr-1" />
                    Autore: {item.author}
                  </p>
                  <p className="mt-1 flex items-center text-sm text-gray-500">
                    <CiCalendarDate className="mr-1" />
                    Data: {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                  <p className="mt-1 flex items-center text-sm text-gray-500">
                    <MdAccessTime className="mr-1" />
                    Tempo di lettura: {item.readingTime}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <Link className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                      Scopri di più
                    </Link>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Sezione Eventi */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Eventi</h2>
            {sortedEvents.map((event, index) => (
              <div
                key={event.id}
                className={`bg-gray-100 rounded-lg p-4 mb-4 transition-transform transform hover:scale-105 ${
                  index === 0 ? "border-4 border-primary" : ""
                }`}
              >
                {index === 0 && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                    Prossimo evento
                  </span>
                )}
                <Link to={`/events/${event.id}`} className="block">
                  <h3 className="font-medium text-lg">{event.titolo}</h3>
                  <p className="text-gray-600 mt-2">{event.descrizioneShort}</p>
                  <p className="mt-1 flex items-center text-sm text-gray-500">
                    <CiCalendarDate className="mr-1" />
                    Data: {new Date(event.data).toLocaleDateString()} -{" "}
                    {event.orario}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <Link className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                      Scopri di più
                    </Link>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Sezione Articoli */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Articoli</h2>
            {sortedArticles.map((article, index) => (
              <div
                key={article.id}
                className={`bg-gray-100 rounded-lg p-4 mb-4 transition-transform transform hover:scale-105 ${
                  index === 0 ? "border-4 border-primary" : ""
                }`}
              >
                {index === 0 && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                    Articolo più recente
                  </span>
                )}
                <Link to={`/articles/${article.id}`} className="block">
                  <h3 className="font-medium text-lg">{article.title}</h3>
                  <p className="text-gray-600 mt-2">
                    {article.shortDescription}
                  </p>
                  <p className="mt-1 flex items-center text-sm text-gray-500">
                    <IoMdPerson className="mr-1" />
                    Autore: {article.author}
                  </p>
                  <p className="mt-1 flex items-center text-sm text-gray-500">
                    <CiCalendarDate className="mr-1" />
                    Data: {new Date(article.createdAt).toLocaleDateString()}
                  </p>
                  <p className="mt-1 flex items-center text-sm text-gray-500">
                    <MdAccessTime className="mr-1" />
                    Tempo di lettura: {article.readingTime}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <Link className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                      Scopri di più
                    </Link>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticoliSection;
