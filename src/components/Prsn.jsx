import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const stories = [
  {
    name: "Shubham & Shruti",
    image: "/image/s1.jpg",
    description:
      "Shubham and Shruti’s journey from strangers to life partners is a heartwarming tale of modern love facilitated by First marriage...",
  },
  {
    name: "Habeeba & Alikhan",
    image: "/image/s2.jpg",
    description:
      "I have married with Syed Habeeba from Nellore on 4.7.2024 Thursday, Thank you First marriage owner and supporting all staffs.",
  },
  {
    name: "Pinkey & Nikhil",
    image: "/image/s3.jpg",
    description:
      "We had met in Ayodhya first time April 2022. After completing a year, a lot of fight and love then we decided to marry.",
  },
  {
    name: "Ravi & Anjali",
    image: "/image/s4.jpg",
    description:
      "Our journey started with First marriage and ended with us being happily married since 2023.",
  },
  {
    name: "Amit & Priya",
    image: "/image/s5.jpg",
    description:
      "Thanks to First marriage, we found each other despite the busy city life.",
  },
  {
    name: "Karan & Meera",
    image: "/image/s6.jpg",
    description:
      "Thanks to First marriage – we highly recommend this platform to anyone looking for companionship.",
  },
];

const Prsn = () => {
  return (
    <div className="py-10 px-4 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-10">
        5 Million Success Stories
      </h2>

      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
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
              <div className="bg-white shadow rounded-lg overflow-hidden border h-[350px]">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-lg font-semibold mb-1">{story.name}</h3>
                  <p className="text-gray-700 text-sm line-clamp-4">
                    {story.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Prsn;
