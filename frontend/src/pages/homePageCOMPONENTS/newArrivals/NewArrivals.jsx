import SlipperImg from "./../../../assets/images/newArrivals/slipper.jpeg";
import SweatShirtImg from "./../../../assets/images/newArrivals/sweatShirt.jpeg";
import TeeCupImg from "./../../../assets/images/newArrivals/teeCup.jpeg";
import tShirtImg from "./../../../assets/images/newArrivals/tShirt.jpeg";
import DATA from "./DATA.json";
import { Link } from "react-router-dom";

function NewArrivals() {
  const imageMap = {
    SlipperImg,
    SweatShirtImg,
    TeeCupImg,
    tShirtImg,
  };

  return (
    <section className="py-8 px-4 lg:px-16">
      <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {DATA.newArrivals.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={imageMap[item.id]}
              alt={item.description}
              className="w-full h-48 object-cover transform hover:scale-105 transition duration-300 ease-in-out"
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">
                {item.description}
              </p>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <Link
        className="mx-auto inline-block justify-center my-4 text-3xl transform-transition duration-300 hover:text-4xl"
        to="/newarrivals"
      >
        View all
      </Link>
    </section>
  );
}

export default NewArrivals;
