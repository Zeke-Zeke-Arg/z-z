import caceria from '@/app/assets/images/caceria.jpg';
import caceria2 from '@/app/assets/images/caceria2.jpg';
import caceria3 from '@/app/assets/images/caceria3.jpg';
import cazador from '@/app/assets/images/cazador.jpg';
import counter from '@/app/assets/images/palomas.jpg';


import diningRoom from "@/app/assets/images/E Dinning room 1.jpg";
import room8 from "@/app/assets/images/E Room 8.jpg";
import jacuzzi from "@/app/assets/images/jacuzzi.jpg";
import { t } from 'i18next';

export const doveHunting = [
    {
      title: t("Dove hunting"),
      description: t("Córdoba has for many years been reputed to be the best place in the world for dove hunting. Everyone who visits Córdoba is amazed by the number of doves they see and the size of the flocks for high volume dove hunting, the concentration can vary throughout the year, Zeke & Zeke makes sure you kill as many as you want , this is due to our non- stop scauting, great knowledge and the experience gained over the years."),
      image: caceria.src,
      alt: t("Dove Hunting"),
    },
    {
      image: caceria2.src,
      alt: t("Dove Hunting"),
    },
    {
      image: caceria3.src,
      alt: t("Dove Hunting"),
    },
    {
      image: cazador.src,
      alt: t("Dove Hunting"),
    },
    {
      image: counter.src,
      alt: t("Dove Hunting"),
    },
  ];

export const lodge = [
  {
    title: t("Our Accommodations"),
    description: t("Escape to our accommodations, designed for relaxation and unforgettable moments. Unwind, create memories, and enjoy a peaceful atmosphere, far from daily stress."),
    image: diningRoom,
    alt: t("Our Accommodations"),
  },
  {
    title: t("Our Rooms"),
    description: t(
      "Relax in comfort at our lodge with six double rooms, each with en-suite bathrooms and air conditioning. Enjoy stunning mountain views, sunsets, and unwind by the fire pit or heated outdoor pool. Perfect for private hunting retreats, accommodating up to 12 guests."
    ),
    image: room8,
    alt: t("Our Rooms"),
  },
  {
    title: t("Relaxation"),
    description: t("After a long day, unwind and recharge in complete comfort. Our relaxation services are available daily, providing the perfect way to ease into the evening and enhance your stay."),
    image: jacuzzi,
    alt: t("Relaxation"),
  },
];

export const aboutUsDescription  =t(`Zeke & Zeke Outfitters was established in 2022, leveraging over 35 years of combined experience in Argentina's dove hunting industry.

Drawing from our extensive backgrounds working with some of the country's top hunting lodges, we've created a new standard for delivering premium hunting adventures.
  
With more than 20 years of experience in hunting and fishing, we've helped hunters achieve world-record results by utilizing our deep expertise and close relationships with local farm owners, securing access to the best hunting grounds.
  
Our mission is to offer an unparalleled hunting experience, combining our passion for the sport with a personalized approach that guarantees success and enjoyment for every guest.
  
At Zeke & Zeke Outfitters, you can expect nothing less than excellence in every aspect of your journey.`)

export const navItems = [
  { name: 'About Us', href: '#about-us' },
  { name: 'Services', href: '#our-services' },
  { name: 'Lodge', href: '#lodge' },
  { name: 'Contact', href: '#contact-form' },
];