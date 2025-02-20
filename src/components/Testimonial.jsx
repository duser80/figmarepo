'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Anton De Swardt",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus nunc, fermentum id ex non.",
    rating: 5,
    img: "/testimon.png", // Replace with actual image
  },
  {
    id: 2,
    name: "Sophia Reynolds",
    review: "Great experience! The team was super helpful, and I will definitely recommend them.",
    rating: 4,
    img: "/testimon.png",
  },
  {
    id: 3,
    name: "James Carter",
    review: "The best service I have ever used. Highly recommended!",
    rating: 5,
    img: "/testimon.png",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="w-full bg-blue-50 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-bold text-[#18181B] mb-4">
            What others are <br /> saying about <span className="text-black">Us</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex items-start mt-4 flex-col">
            <span className="text-yellow-500 text-xl">★★★★★</span>
            <p className=" text-gray-500">Review from Trustpilot</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
            }}
            pagination={{ clickable: true }}
            className="relative"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-6 min-h-[300px]">
                  <img src={testimonial.img} alt={testimonial.name} className="w-60 h-60 rounded-lg object-cover" />
                  <div>
                    <h3 className="  text-3xl font-semibold text-[#18181B] mb-4">Review</h3>
                    <p className="text-gray-600 text-sm max-w-[200px] mb-6">{testimonial.review}</p>
                    <p className="mt-2 font-semibold text-[#18181B]">{testimonial.name}</p>
                    <div className="text-yellow-500">{"★".repeat(testimonial.rating)}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Button */}
            <div className="swiper-button-next absolute top-1/2 text-xl w-8 right-[-40px] transform -translate-y-1/2 bg-green-500 text-white  rounded-full">
              <FaArrowRight  />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
