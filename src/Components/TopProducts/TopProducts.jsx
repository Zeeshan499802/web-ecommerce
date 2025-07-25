import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa6";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laborum voluptates magni quaerat inventore reprehenderit dolorem numquam! Accusamus vel praesentium architecto.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirts",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laborum voluptates magni quaerat inventore reprehenderit dolorem numquam! Accusamus vel praesentium architecto.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirts",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laborum voluptates magni quaerat inventore reprehenderit dolorem numquam! Accusamus vel praesentium architecto.",
  },
  {
    id: 4,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laborum voluptates magni quaerat inventore reprehenderit dolorem numquam! Accusamus vel praesentium architecto.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="container">
      <div className="text-left mg-24">
        <p data-aos="fade-up" className="text-sm text-primary">
          Top Rated products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Best Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          amet ab pariatur cumque rem quo, aperiam sunt ad? Culpa, quam nihil?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductData.map((data) => (
            <div
              className="rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              data-aos="zoom-in"
            >
              <div>
                <img
                  src={data.img}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  alt=""
                />
              </div>
              <div className="w-full flex  items-center justify-center gap-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <h1 className="text-xl font-bold">{data.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                {data.description}
              </p>
              <button
                className="bg-primary hover:scale-105 duration-300 text-white px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                onClick={handleOrderPopup}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
