import React from 'react';
import { testimonials } from '../constants/index';

interface Testimonial {
  user: string;
  company: string;
  image: string;
  text: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ user, company, image, text }) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
      <p>{text}</p>
      <div className="flex mt-8 items-start">
        <img
          className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
          src={image}
          alt={user}
        />
        <div>
          <h6>{user}</h6>
          <span className="text-white text-sm font-normal italic text-neutral-600">{company}</span>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <div className="text-white mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
        What People Are Saying.!
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;