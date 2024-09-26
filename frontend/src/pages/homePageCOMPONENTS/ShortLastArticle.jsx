import articles from "../../DATA/Articles";
import { IoMdPerson } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

function ShortLastArticle() {
  {
    /* PRENDO L ULTIMO OGGETTO DELL'ARRAY DEL JSON ARTICLES.JS */
  }
  const lastArticle = articles[articles.length - 1];

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white shadow-md rounded-lg mt-8 xl:w-screen xl:mx-16">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Ultima Notizia
      </h1>
      <Link
        to="/lastarticle"
        className="pt-6  hover:scale-105 transition-transform duration-300 block"
      >
        {/* IMMAGINE */}
        <img
          src={lastArticle.imageUrl}
          alt={lastArticle.title}
          className="w-full h-60 object-cover rounded-lg"
        />
        {/* TITOLO */}
        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          {lastArticle.title}
        </h2>
        {/* DESCIZIONE PICCOLA */}
        <p className="mt-2 text-lg text-gray-600">
          {lastArticle.shortDescription}
        </p>
        {/* AUTORE */}
        <p className="mt-1 flex items-center text-sm text-gray-500">
          <IoMdPerson className="mr-1" />
          Autore: {lastArticle.author}
        </p>
        {/* DATA DI PUBBLICAZIONE */}
        <p className="mt-1 flex items-center text-sm text-gray-500">
          <CiCalendarDate className="mr-1" />
          Data: {new Date(lastArticle.createdAt).toLocaleDateString()}
        </p>
        {/* TEMPO DI LETTURA */}
        <p className="mt-1 flex items-center text-sm text-gray-500">
          <MdAccessTime className="mr-1" />
          Tempo di lettura: {lastArticle.readingTime}
        </p>
        {/* CONTENUTO DELL'ARTICOLO CON MASSIMO 300 LETTERE */}
        <p className="mt-4 text-md text-gray-700">
          {lastArticle.content.slice(0, 300)}
          {lastArticle.content.length > 300 ? "..." : ""}
        </p>
        {/* HASTAGS  */}
        <div className="mt-4">
          {lastArticle.hashtags.map((hashtag) => (
            <span key={hashtag} className="inline-block mr-2 text-blue-600">
              #{hashtag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default ShortLastArticle;
