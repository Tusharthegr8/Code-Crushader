import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const monuments = [
  {
    name: "Taj Mahal",
    image: "https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=",
    description: "An ivory-white marble mausoleum in Agra, India, built by Emperor Shah Jahan.",
  },
  {
    name: "Qutub Minar",
    image: "https://media.istockphoto.com/id/609055236/photo/qutub-minar.jpg?s=612x612&w=0&k=20&c=Y1-Zs8sicHjlI_0XMZepI-2aBQ1-gmguIb0wYCQhx1A=",
    description: "A UNESCO World Heritage Site and the tallest brick minaret in the world.",
  },
  {
    name: "India Gate",
    image: "https://media.istockphoto.com/id/472225853/photo/india-gate-new-delhi.jpg?s=612x612&w=0&k=20&c=YR9FnB85YL0EcuNIw0Ezzqu0pkGnz79XuKNHn2R-msE=",
    description: "A war memorial in Delhi honoring soldiers who died in World War I.",
  },
  {
    name: "Hawa Mahal",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
    description: "A stunning pink sandstone palace in Jaipur, known as the 'Palace of Winds'.",
  },
  {
    name: "Gateway of India",
    image: "https://t3.ftcdn.net/jpg/02/00/55/94/360_F_200559473_wEDZgxSDPPjQfgX3sQqXcjz4ph1a79Yt.jpg",
    description: "An iconic arch-monument in Mumbai overlooking the Arabian Sea.",
  },
];

const Glimpses = () => {
  return (
    <section id="glimpses" className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Glimpses of Heritage</h2>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full max-w-4xl mx-auto"
      >
        {monuments.map((monument, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={monument.image}
                alt={monument.name}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4 w-full rounded-b-xl">
                <h3 className="text-2xl font-semibold">{monument.name}</h3>
                <p className="text-sm">{monument.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Glimpses;