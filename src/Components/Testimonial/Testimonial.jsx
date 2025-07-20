import React from "react";
import Slider from "react-slick";

const TestomonialsData = [
  {
    id: 1,
    name: "Victors",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores odio, tenetur minus delectus corrupti ut pariatur consectetur. Sunt debitis deserunt neque rem iure numquam architecto veniam! Saepe voluptatem deserunt libero!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Staya",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores odio, tenetur minus delectus corrupti ut pariatur consectetur. Sunt debitis deserunt neque rem iure numquam architecto veniam! Saepe voluptatem deserunt libero!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Ahmed",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores odio, tenetur minus delectus corrupti ut pariatur consectetur. Sunt debitis deserunt neque rem iure numquam architecto veniam! Saepe voluptatem deserunt libero!",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Sarah",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores odio, tenetur minus delectus corrupti ut pariatur consectetur. Sunt debitis deserunt neque rem iure numquam architecto veniam! Saepe voluptatem deserunt libero!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Harry",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores odio, tenetur minus delectus corrupti ut pariatur consectetur. Sunt debitis deserunt neque rem iure numquam architecto veniam! Saepe voluptatem deserunt libero!",
    img: "https://picsum.photos/105/105",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    Infinite: true,
    speed: 500,
    slideToscroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slideToShow: 3,
          slideToscroll: 1,
          Infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          initialSlider: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What out customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testomonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            explicabo quos voluptatem provident tenetur, nulla numquam inventore
            alias commodi omnis? Ipsa.
          </p>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestomonialsData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs dark:text-slate-300 text-gray-500">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
