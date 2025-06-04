import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation
import "swiper/css";
// Removed "swiper/css/navigation"
import "swiper/css/pagination";

const stories = [
  {
    name: "Shubham & Shruti",
    image: "/image/s1.jpg",
    description:
      "Shubham and Shruti’s journey from strangers to life partners is a heartwarming tale of modern love facilitated by First marriage.com. Their story is a testament to how digital platforms…",
  },
  {
    name: "Habeeba & Alikhan",
    image: "/image/s2.jpg",
    description:
      "I have married with Syed Habeeba from Nellore on 4.7.2024 Thursday, Thank you First marriage.com owner and supporting all staffs. Jazakallahu khair Assalamu alaikum.",
  },
  {
    name: "Pinkey & Nikhil",
    image: "/image/s3.jpg",
    description:
      "We had met in Ayodhya first time April 2022. After completing a year, a lots of fight and love then we decided to marry togetger in Feb 2024. Thank you First marriage.com.",
  },
  {
    name: "Ravi & Anjali",
    image: "/image/s4.jpg",
    description:
      "Our journey started with First marriage.com and ended with us being happily married since 2023. We are grateful for this wonderful platform that brought us together. and make love ",
  },
  {
    name: "Amit & Priya",
    image: "/image/s5.jpg",
    description:
      "Thanks to First marriage.com, we found each other despite the busy city life. Our love story is proof that true love still exists in this fast world. for the life for the love and happy ",
  },
  {
    name: "Karan & Meera",
    image: "/image/s6.jpg",
    description:
      "From the first thanks to First marriage.com has been our silent partner. We highly recommend this platform to anyone looking for true companionship. this make me a happy  ",
  },
];

const Prsn = () => {
  return (
    <div className="py-10 px-4 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-10">
        6 Million Success Stories & Counting
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]} // Removed Navigation
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {stories.map((story, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden border h-full">
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                <p className="text-gray-700 text-sm">{story.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Prsn;
