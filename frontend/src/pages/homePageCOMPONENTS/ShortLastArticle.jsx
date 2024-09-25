import articles from "../../DATA/Articles";

function ShortLastArticle() {
  const lastArticle = articles[0];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 xl:w-screen xl:mx-16">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Ultima Notizia
      </h1>
      <div className="mt-4">
        <img
          src={lastArticle.imageUrl}
          alt={lastArticle.title}
          className="w-full h-60 object-cover rounded-lg"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          {lastArticle.title}
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          {lastArticle.shortDescription}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Autore: {lastArticle.author}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Data: {new Date(lastArticle.createdAt).toLocaleDateString()}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Tempo di lettura: {lastArticle.readingTime}
        </p>
        <p className="mt-4 text-md text-gray-700">
          {lastArticle.fullDescription}
        </p>
        <div className="mt-4">
          {lastArticle.hashtags.map((hashtag) => (
            <span key={hashtag} className="inline-block mr-2 text-blue-600">
              #{hashtag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShortLastArticle;
