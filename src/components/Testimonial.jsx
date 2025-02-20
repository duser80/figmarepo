'use client'
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Anton De Swartd",
    image: "https://source.unsplash.com/150x150/?portrait",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus nunc, fermentum id ex non, dapibus hendrerit eros. Integer mollis quam.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "https://source.unsplash.com/150x150/?woman,portrait",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.",
    rating: 4,
  },
  {
    id: 3,
    name: "John Smith",
    image: "https://source.unsplash.com/150x150/?man,portrait",
    review:
      "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquet egestas purus in blandit.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-blue-50 py-16 px-6 md:px-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        What others are saying about Us
      </h2>
      <p className="text-gray-600 text-center max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </p>
      <div className="flex items-center mt-8">
        <button onClick={prevTestimonial} className="text-gray-600">
          <FaArrowLeft className="text-2xl" />
        </button>
        <div className="bg-white rounded-lg shadow-lg p-6 mx-4 w-96 flex flex-col items-center">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold">{testimonials[current].name}</h3>
          <p className="text-gray-600 text-center mt-2">
            {testimonials[current].review}
          </p>
          <div className="mt-2">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <span key={i} className="text-yellow-500 text-xl">⭐</span>
            ))}
          </div>
        </div>
        <button onClick={nextTestimonial} className="text-gray-600">
          <FaArrowRight className="text-2xl" />
        </button>
      </div>
      <div className="flex mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
