'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronsRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anton De Swardt",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus nunc, fermentum id ex non.",
    rating: 5,
    img: "/testimon.png",
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
    <div className="w-full bg-blue-50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#18181B] mb-4">
            What others are <br /> saying about <span className="text-black">Us</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xs mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex flex-col items-center md:items-start mt-4">
            <span className="text-yellow-500 text-lg sm:text-xl">★★★★★</span>
            <p className="text-gray-500 text-sm sm:text-base">Review from Trustpilot</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next",
            }}
            className="relative"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-6 min-h-[300px] sm:min-h-[250px]">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-24 h-24 sm:w-40 sm:h-40 rounded-lg object-cover"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#18181B] mb-2">Review</h3>
                    <p className="text-gray-600 text-sm sm:text-base max-w-xs">{testimonial.review}</p>
                    <p className="mt-2 font-semibold text-[#18181B]">{testimonial.name}</p>
                    <div className="text-yellow-500 text-lg sm:text-xl">{"★".repeat(testimonial.rating)}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Button */}
            <div className="swiper-button-next !absolute !top-1/2 !right-4 sm:!right-6 !p-3 sm:!p-4 !bg-green-500 hover:!bg-green-600 transition-all duration-300 !text-white !rounded-full !shadow-lg flex items-center justify-center">
  <ChevronsRight className="!text-white !size-6 sm:!size-7" />
</div>

          </Swiper>
        </div>
      </div>
    </div>
  );
}
