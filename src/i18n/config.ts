import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getOptions } from '../app/i18n/settings.mjs';

const resources = {
  en: {
      translation: {
        "Welcome to Z&Z": "Welcome to Z&Z",
        "Experience the Pinnacle of Hunting Excellence": "Experience the Pinnacle of Hunting Excellence",
        "Indulge in the perfect blend of luxury accommodations and high-volume bird hunting": "Indulge in the perfect blend of luxury accommodations and high-volume bird hunting",
        "Explore More": "Explore More",
        "Our Services": "Our Services",
        "Pigeon Hunting": "Pigeon Hunting",
        "Experience unique pigeon hunting and build relationships with farm owners.": "Experience unique pigeon hunting and build relationships with farm owners.",
        "Luxury Accommodations": "Luxury Accommodations",
        "Enjoy 5-star lodging with en-suite bathrooms, gym, pool, and fire-pit.": "Enjoy 5-star lodging with en-suite bathrooms, gym, pool, and fire-pit.",
        "Exclusive Land": "Exclusive Land",
        "Hunt on our privately owned land for a truly exclusive experience.": "Hunt on our privately owned land for a truly exclusive experience.",
        "Gallery": "Gallery",
        "Luxury Lodging": "Luxury Lodging",
        "Exclusive Hunting Areas": "Exclusive Hunting Areas",
        "Client Experiences": "Client Experiences",
        "Scenic Views": "Scenic Views",
        "What Our Clients Say": "What Our Clients Say",
        "Z&Z provided an unforgettable hunting experience. The luxury accommodations were beyond compare.": "Z&Z provided an unforgettable hunting experience. The luxury accommodations were beyond compare.",
        "The attention to detail and personalized service made our trip truly exceptional.": "The attention to detail and personalized service made our trip truly exceptional.",
        "Luxury Charter Service": "Luxury Charter Service",
        "Luxury Private Jet": "Luxury Private Jet",
        "Experience Unparalleled Comfort": "Experience Unparalleled Comfort",
        "Our luxury charter service offers the ultimate in comfort and convenience. Travel in style to your hunting destination with our fleet of state-of-the-art private jets, ensuring a seamless and luxurious journey from start to finish.": "Our luxury charter service offers the ultimate in comfort and convenience. Travel in style to your hunting destination with our fleet of state-of-the-art private jets, ensuring a seamless and luxurious journey from start to finish.",
        "✓ Flexible scheduling to suit your needs": "✓ Flexible scheduling to suit your needs",
        "✓ Gourmet catering options available": "✓ Gourmet catering options available",
        "✓ Experienced and professional flight crew": "✓ Experienced and professional flight crew",
        "✓ Direct flights to remote hunting locations": "✓ Direct flights to remote hunting locations",
        "Book Your Flight": "Book Your Flight",
        "Z&Z Luxury Hunting": "Z&Z Luxury Hunting",
        "Quick Links": "Quick Links",
        "About Us": "About Us",
        "Services": "Services",
        "Contact": "Contact",
        "Contact Us": "Contact Us",
        "Email": "Email",
        "Phone": "Phone",
        "Z&Z Luxury Hunting. All rights reserved.": "Z&Z Luxury Hunting. All rights reserved."
      }
    },
    es: {
      translation: {
        "Welcome to Z&Z": "Bienvenido a Z&Z",
        "Experience the Pinnacle of Hunting Excellence": "Experimente la Excelencia en Caza",
        "Indulge in the perfect blend of luxury accommodations and high-volume bird hunting": "Disfrute de la perfecta combinación de alojamientos de lujo y caza de aves de alto volumen",
        "Explore More": "Explorar Más",
        "Our Services": "Nuestros Servicios",
        "Pigeon Hunting": "Caza de Palomas",
        "Experience unique pigeon hunting and build relationships with farm owners.": "Experimente la caza única de palomas y construya relaciones con los propietarios de granjas.",
        "Luxury Accommodations": "Alojamientos de Lujo",
        "Enjoy 5-star lodging with en-suite bathrooms, gym, pool, and fire-pit.": "Disfrute de alojamiento de 5 estrellas con baños en suite, gimnasio, piscina y fogata.",
        "Exclusive Land": "Terreno Exclusivo",
        "Hunt on our privately owned land for a truly exclusive experience.": "Cace en nuestro terreno privado para una experiencia verdaderamente exclusiva.",
        "Gallery": "Galería",
        "Luxury Lodging": "Alojamiento de Lujo",
        "Exclusive Hunting Areas": "Áreas de Caza Exclusivas",
        "Client Experiences": "Experiencias de Clientes",
        "Scenic Views": "Vistas Panorámicas",
        "What Our Clients Say": "Lo que Dicen Nuestros Clientes",
        "Z&Z provided an unforgettable hunting experience. The luxury accommodations were beyond compare.": "Z&Z proporcionó una experiencia de caza inolvidable. Los alojamientos de lujo fueron incomparables.",
        "The attention to detail and personalized service made our trip truly exceptional.": "La atención al detalle y el servicio personalizado hicieron que nuestro viaje fuera verdaderamente excepcional.",
        "Luxury Charter Service": "Servicio de Vuelos Privados de Lujo",
        "Luxury Private Jet": "Jet Privado de Lujo",
        "Experience Unparalleled Comfort": "Experimente un Confort Sin Igual",
        "Our luxury charter service offers the ultimate in comfort and convenience. Travel in style to your hunting destination with our fleet of state-of-the-art private jets, ensuring a seamless and luxurious journey from start to finish.": "Nuestro servicio de vuelos privados de lujo ofrece lo último en comodidad y conveniencia. Viaje con estilo a su destino de caza con nuestra flota de jets privados de última generación, asegurando un viaje perfecto y lujoso de principio a fin.",
        "✓ Flexible scheduling to suit your needs": "✓ Programación flexible para satisfacer sus necesidades",
        "✓ Gourmet catering options available": "✓ Opciones de catering gourmet disponibles",
        "✓ Experienced and professional flight crew": "✓ Tripulación de vuelo experimentada y profesional",
        "✓ Direct flights to remote hunting locations": "✓ Vuelos directos a ubicaciones de caza remotas",
        "Book Your Flight": "Reserve su Vuelo",
        "Z&Z Luxury Hunting": "Z&Z Caza de Lujo",
        "Quick Links": "Enlaces Rápidos",
        "About Us": "Sobre Nosotros",
        "Services": "Servicios",
        "Contact": "Contacto",
        "Contact Us": "Contáctenos",
        "Email": "Correo Electrónico",
        "Phone": "Teléfono",
        "Z&Z Luxury Hunting. All rights reserved.": "Z&Z Caza de Lujo. Todos los derechos reservados."
      }
    }
  };

i18n
  .use(initReactI18next)
  .init({
    ...getOptions(),
    resources,
    react: {
      useSuspense: false
    }
  });

export default i18n;