'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Marquee from './animata/container/marquee';

interface Testimonial {
  name: string;
  image: string;
  description: string;
}

function TestimonialCard({
  testimonial: { image, name, description },
}: {
  testimonial: Testimonial;
}) {
  return (
    <div
      className="flex h-44 w-96 overflow-hidden rounded-xl border bg-background dark:border-zinc-700 mx-4"
      key={name}
    >
      <div className="relative h-full w-32 flex-shrink-0 overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          style={{objectFit: 'cover'}} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="px-4 py-2">
        <span className="block text-lg font-bold text-foreground">{name}</span>
        <span className="-mt-1 mb-1 block text-sm font-medium leading-loose text-muted-foreground">
          Founder of BAC
        </span>
        <span className="block text-sm text-foreground">{description}</span>
      </div>
    </div>
  );
}

export default function ScrollingTestimonials() {
  const { t } = useTranslation();

  const testimonials: Testimonial[] = [
    {
      name: "John D.",
      image: "https://via.placeholder.com/150",
      description: t("Z&Z provided an unforgettable hunting experience. The luxury accommodations were beyond compare.")
    },
    {
      name: "Sarah M.",
      image: "https://via.placeholder.com/150",
      description: t("The attention to detail and personalized service made our trip truly exceptional.")
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">{t('What Our Clients Say')}</h2>
        <div className="w-full">
          <Marquee className="[--duration:25s]" pauseOnHover applyMask={false}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
