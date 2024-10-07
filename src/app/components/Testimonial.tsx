'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface TestimonialProps {
  quote: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg border border-gold">
      <p className="text-white italic mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="text-gold font-semibold">- {author}</p>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t("Z&Z provided an unforgettable hunting experience. The luxury accommodations were beyond compare."),
      author: "John D."
    },
    {
      quote: t("The attention to detail and personalized service made our trip truly exceptional."),
      author: "Sarah M."
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{t('What Our Clients Say')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} quote={testimonial.quote} author={testimonial.author} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;