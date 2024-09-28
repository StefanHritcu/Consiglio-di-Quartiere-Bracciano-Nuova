import articles from "../../DATA/Articles";
import { IoMdPerson } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";
import LastArticleExampleImage from "./../../assets/images/lastArticleExampleImage.jpg";
import { GrArticle } from "react-icons/gr";

function ShortLastArticle() {
  // PRENDO L'ULTIMO OGGETTO DELL'ARRAY DEL JSON ARTICLES.JS
  const lastArticle = articles[articles.length - 1];

  return (
    <article className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto my-6 lg:max-w-2xl h-auto">
      <h1 className="text-2xl font-bold text-center text-primary mb-4">
        Ultima Notizia
      </h1>
      <Link
        to="/lastarticle"
        className="hover:scale-105 transition-transform duration-300 block"
      >
        {/* IMMAGINE */}
        <img
          src={LastArticleExampleImage}
          alt="Example image"
          className="w-full h-48 object-cover rounded-lg"
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
        <div className=" flex justify-between items-center mt-4">
          <div>
            {lastArticle.hashtags.map((hashtag) => (
              <span key={hashtag} className="inline-block mr-2 text-blue-600">
                #{hashtag}
              </span>
            ))}
          </div>

          <Link className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            <h2>Scopri di piu</h2>
          </Link>
        </div>
      </Link>

      <Link
        to="/articoli"
        className="flex items-center mt-6 space-x-3 sm:ml-6 p-6 xl:ml-0 xl:p-2 xl:mr-10"
      >
        <GrArticle className="text-3xl text-blue-600" />
        <span className="text-2xl font-bold text-blue-700 hover:underline">
          VAI ALLA SEZIONE DEGLI ARTICOLI
        </span>
      </Link>
    </article>
  );
}

export default ShortLastArticle;
