import HomePageImage from "../assets/images/HomePageImg.jpg";
import InfoDescription from "./homePageCOMPONENTS/InfoDescription";
import NewArrivals from "./homePageCOMPONENTS/newArrivals/NewArrivals";

function HomePage() {
  return (
    <>
      <div className="mt-24 sm:mt-38 xl:mt-52 h-auto">
        <img
          src={HomePageImage}
          alt="home page image"
          className="w-full h-auto"
        />
        <InfoDescription />
        <NewArrivals />
      </div>
    </>
  );
}

export default HomePage;
