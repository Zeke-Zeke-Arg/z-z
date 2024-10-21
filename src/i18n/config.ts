import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "Welcome to Z&Z": "Welcome to Z&Z",
      "Experience the Pinnacle of Hunting Excellence":
        "Experience the Pinnacle of Hunting Excellence",
      "Indulge in the perfect blend of luxury accommodations and high-volume bird hunting":
        "Indulge in the perfect blend of luxury accommodations and high-volume bird hunting",
      "Explore More": "Explore More",
      "Our Services": "Our Services",
      "Pigeon Hunting": "Pigeon Hunting",
      "Experience unique pigeon hunting and build relationships with farm owners.":
        "Experience unique pigeon hunting and build relationships with farm owners.",
      "Luxury Accommodations": "Luxury Accommodations",
      "Enjoy 5-star lodging with en-suite bathrooms, gym, pool, and fire-pit.":
        "Enjoy 5-star lodging with en-suite bathrooms, gym, pool, and fire-pit.",
      "Exclusive Land": "Exclusive Land",
      "Hunt on our privately owned land for a truly exclusive experience.":
        "Hunt on our privately owned land for a truly exclusive experience.",
      "Our Experience": "Our Experience",
      "Luxury Lodging": "Luxury Lodging",
      "Exclusive Hunting Areas": "Exclusive Hunting Areas",
      "Client Experiences": "Client Experiences",
      "Scenic Views": "Scenic Views",
      "What Our Clients Say": "What Our Clients Say",
      "Z&Z provided an unforgettable hunting experience. The luxury accommodations were beyond compare.":
        "Z&Z provided an unforgettable hunting experience. The luxury accommodations were beyond compare.",
      "The attention to detail and personalized service made our trip truly exceptional.":
        "The attention to detail and personalized service made our trip truly exceptional.",
      "Luxury Charter Service": "Luxury Charter Service",
      "Luxury Private Jet": "Luxury Private Jet",
      "Experience Unparalleled Comfort": "Experience Unparalleled Comfort",
      "Our luxury charter service offers the ultimate in comfort and convenience. Travel in style to your hunting destination with our fleet of state-of-the-art private jets, ensuring a seamless and luxurious journey from start to finish.":
        "Our luxury charter service offers the ultimate in comfort and convenience. Travel in style to your hunting destination with our fleet of state-of-the-art private jets, ensuring a seamless and luxurious journey from start to finish.",
      "✓ Flexible scheduling to suit your needs":
        "✓ Flexible scheduling to suit your needs",
      "✓ Gourmet catering options available":
        "✓ Gourmet catering options available",
      "✓ Experienced and professional flight crew":
        "✓ Experienced and professional flight crew",
      "✓ Direct flights to remote hunting locations":
        "✓ Direct flights to remote hunting locations",
      "Book Your Flight": "Book Your Flight",
      "Z&Z Luxury Hunting": "Z&Z Luxury Hunting",
      "Quick Links": "Quick Links",
      "About Us": "About Us",
      Services: "Services",
      Contact: "Contact",
      "Contact Us": "Contact Us",
      Email: "Email",
      Phone: "Phone",
      "Z&Z Outfiters. All rights reserved.":
        "Z&Z Outfiters. All rights reserved.",
      "Dove hunting": "Dove hunting",
      "Córdoba has for many years been reputed to be the best place in the world for dove hunting. Everyone who visits Córdoba is amazed by the number of doves they see and the size of the flocks for high volume dove hunting, the concentration can vary throughout the year, Zeke & Zeke makes sure you kill as many as you want , this is due to our non- stop scauting, great knowledge and the experience gained over the years.":
        "Córdoba has for many years been reputed to be the best place in the world for dove hunting. Everyone who visits Córdoba is amazed by the number of doves they see and the size of the flocks for high volume dove hunting, the concentration can vary throughout the year, Zeke & Zeke makes sure you kill as many as you want , this is due to our non- stop scauting, great knowledge and the experience gained over the years.",
      "Dove Hunting": "Dove Hunting",
      "Our Accommodations": "Our Accommodations",
      "Escape to our accommodations, designed for relaxation and unforgettable moments. Unwind, create memories, and enjoy a peaceful atmosphere, far from daily stress.":
        "Escape to our accommodations, designed for relaxation and unforgettable moments. Unwind, create memories, and enjoy a peaceful atmosphere, far from daily stress.",
      "Our Rooms": "Our Rooms",
      "Relax in comfort at our lodge with six double rooms, each with en-suite bathrooms and air conditioning. Enjoy stunning mountain views, sunsets, and unwind by the fire pit or heated outdoor pool. Perfect for private hunting retreats, accommodating up to 12 guests.":
        "Relax in comfort at our lodge with six double rooms, each with en-suite bathrooms and air conditioning. Enjoy stunning mountain views, sunsets, and unwind by the fire pit or heated outdoor pool. Perfect for private hunting retreats, accommodating up to 12 guests.",
      Relaxation: "Relaxation",
      "After a long day, unwind and recharge in complete comfort. Our relaxation services are available daily, providing the perfect way to ease into the evening and enhance your stay.":
        "After a long day, unwind and recharge in complete comfort. Our relaxation services are available daily, providing the perfect way to ease into the evening and enhance your stay.",
      "Let's Talk": "Let's Talk",
      "High Volume Dove Hunting Package:": "High Volume Dove Hunting Package:",
      "All-inclusive experience with meals, drinks, and lodging":
        "All-inclusive experience with meals, drinks, and lodging",
      "Professional guides and full-time coordinator":
        "Professional guides and full-time coordinator",
      "Airport transfers and ground transportation":
        "Airport transfers and ground transportation",
      "Optional add-ons: shells, gun rental, hunting license":
        "Optional add-ons: shells, gun rental, hunting license",
      "Dove and Pigeon Deluxe Package (4 Nights/5 Days):":
        "Dove and Pigeon Deluxe Package (4 Nights/5 Days):",
      "4-night stay in deluxe lodge, 6 hunting sessions":
        "4-night stay in deluxe lodge, 6 hunting sessions",
      "All-inclusive with meals, drinks, and transportation":
        "All-inclusive with meals, drinks, and transportation",
      "Gun rental, hunting license, and 1000-2000 shells included":
        "Gun rental, hunting license, and 1000-2000 shells included",
      "Optional add-ons for non-hunters and extra amenities":
        "Optional add-ons for non-hunters and extra amenities",
      "Our Lodge": "Our Lodge",
      "Zeke & Zeke Outfitters was established in 2022, leveraging over 35 years of combined experience in Argentina's dove hunting industry.": "Zeke & Zeke Outfitters was established in 2022, leveraging over 35 years of combined experience in Argentina's dove hunting industry.",
      "Drawing from our extensive backgrounds working with some of the country's top hunting lodges, we've created a new standard for delivering premium hunting adventures.": "Drawing from our extensive backgrounds working with some of the country's top hunting lodges, we've created a new standard for delivering premium hunting adventures.",
      "With more than 20 years of experience in hunting and fishing, we've helped hunters achieve world-record results by utilizing our deep expertise and close relationships with local farm owners, securing access to the best hunting grounds.": "With more than 20 years of experience in hunting and fishing, we've helped hunters achieve world-record results by utilizing our deep expertise and close relationships with local farm owners, securing access to the best hunting grounds.",
      "Our mission is to offer an unparalleled hunting experience, combining our passion for the sport with a personalized approach that guarantees success and enjoyment for every guest.": "Our mission is to offer an unparalleled hunting experience, combining our passion for the sport with a personalized approach that guarantees success and enjoyment for every guest.",
      "At Zeke & Zeke Outfitters, you can expect nothing less than excellence in every aspect of your journey.": "At Zeke & Zeke Outfitters, you can expect nothing less than excellence in every aspect of your journey.",
      "Enjoy world-class pigeon hunting across vast agricultural lands, offering unmatched bird activity and guided hunts. Experience personalized services and immersive outdoor action for all skill levels.":"Enjoy world-class pigeon hunting across vast agricultural lands, offering unmatched bird activity and guided hunts. Experience personalized services and immersive outdoor action for all skill levels.",
      "Indulge in premium lodging featuring spacious suites, gourmet dining, and modern amenities. After a day in the field, relax in comfort with access to a pool, gym, and serene surroundings.": "Indulge in premium lodging featuring spacious suites, gourmet dining, and modern amenities. After a day in the field, relax in comfort with access to a pool, gym, and serene surroundings.",
      "Hunt on privately-owned, expansive properties reserved exclusively for our clients. These well-maintained areas provide a secluded and rich hunting experience, away from public access.":"Hunt on privately-owned, expansive properties reserved exclusively for our clients. These well-maintained areas provide a secluded and rich hunting experience, away from public access.",
      "Subject": "Subject",
    },
  },
  es: {
    translation: {
      "Welcome to Z&Z": "Bienvenido a Z&Z",
      "Experience the Pinnacle of Hunting Excellence":
        "Experimente la Excelencia en Caza",
      "Indulge in the perfect blend of luxury accommodations and high-volume bird hunting":
        "Disfrute de la perfecta combinación de alojamientos de lujo y caza de aves de alto volumen",
      "Explore More": "Explorar Más",
      "Our Services": "Nuestros Servicios",
      "Pigeon Hunting": "Caza de Palomas",
      "Experience unique pigeon hunting and build relationships with farm owners.":
        "Experimente la caza única de palomas y construya relaciones con los propietarios de granjas.",
      "Luxury Accommodations": "Alojamientos de Lujo",
      "Enjoy 5-star lodging with en-suite bathrooms, gym, pool, and fire-pit.":
        "Disfrute de alojamiento de 5 estrellas con baños en suite, gimnasio, piscina y fogata.",
      "Exclusive Land": "Terreno Exclusivo",
      "Hunt on our privately owned land for a truly exclusive experience.":
        "Cace en nuestro terreno privado para una experiencia verdaderamente exclusiva.",
      "Our Experience": "Nuestra experiencia",
      "Luxury Lodging": "Alojamiento de Lujo",
      "Exclusive Hunting Areas": "Áreas de Caza Exclusivas",
      "Client Experiences": "Experiencias de Clientes",
      "Scenic Views": "Vistas Panorámicas",
      "What Our Clients Say": "Lo que Dicen Nuestros Clientes",
      "Z&Z provided an unforgettable hunting experience. The luxury accommodations were beyond compare.":
        "Z&Z proporcionó una experiencia de caza inolvidable. Los alojamientos de lujo fueron incomparables.",
      "The attention to detail and personalized service made our trip truly exceptional.":
        "La atención al detalle y el servicio personalizado hicieron que nuestro viaje fuera verdaderamente excepcional.",
      "Luxury Charter Service": "Servicio de Vuelos Privados de Lujo",
      "Luxury Private Jet": "Jet Privado de Lujo",
      "Experience Unparalleled Comfort": "Experimente un Confort Sin Igual",
      "Our luxury charter service offers the ultimate in comfort and convenience. Travel in style to your hunting destination with our fleet of state-of-the-art private jets, ensuring a seamless and luxurious journey from start to finish.":
        "Nuestro servicio de vuelos privados de lujo ofrece lo último en comodidad y conveniencia. Viaje con estilo a su destino de caza con nuestra flota de jets privados de última generación, asegurando un viaje perfecto y lujoso de principio a fin.",
      "✓ Flexible scheduling to suit your needs":
        "✓ Programación flexible para satisfacer sus necesidades",
      "✓ Gourmet catering options available":
        "✓ Opciones de catering gourmet disponibles",
      "✓ Experienced and professional flight crew":
        "✓ Tripulación de vuelo experimentada y profesional",
      "✓ Direct flights to remote hunting locations":
        "✓ Vuelos directos a ubicaciones de caza remotas",
      "Book Your Flight": "Reserve su Vuelo",
      "Z&Z Luxury Hunting": "Z&Z Caza de Lujo",
      "Quick Links": "Enlaces Rápidos",
      "About Us": "Sobre Nosotros",
      Services: "Servicios",
      Contact: "Contacto",
      "Contact Us": "Contáctenos",
      Email: "Correo Electrónico",
      Phone: "Teléfono",
      "Z&Z Outfiters. All rights reserved.":
        "Z&Z Outfiters. Todos los derechos reservados.",
      "Dove hunting": "Caza de palomas",
      "Córdoba has for many years been reputed to be the best place in the world for dove hunting. Everyone who visits Córdoba is amazed by the number of doves they see and the size of the flocks for high volume dove hunting, the concentration can vary throughout the year, Zeke & Zeke makes sure you kill as many as you want , this is due to our non- stop scauting, great knowledge and the experience gained over the years.":
        "Córdoba ha sido considerada durante muchos años como el mejor lugar del mundo para la caza de palomas. Todos los que visitan Córdoba quedan asombrados por la cantidad de palomas que ven y el tamaño de las bandadas para la caza de palomas de alto volumen. La concentración puede variar a lo largo del año, pero Zeke & Zeke se asegura de que mates tantas como quieras, esto se debe a nuestro scouting constante, gran conocimiento y la experiencia adquirida a lo largo de los años.",
      "Dove Hunting": "Caza de Palomas",
      "Our Accommodations": "Nuestros Alojamientos",
      "Escape to our accommodations, designed for relaxation and unforgettable moments. Unwind, create memories, and enjoy a peaceful atmosphere, far from daily stress.":
        "Escápese a nuestros alojamientos, diseñados para la relajación y momentos inolvidables. Relájese, cree recuerdos y disfrute de una atmósfera tranquila, lejos del estrés diario.",
      "Our Rooms": "Nuestras Habitaciones",
      "Relax in comfort at our lodge with six double rooms, each with en-suite bathrooms and air conditioning. Enjoy stunning mountain views, sunsets, and unwind by the fire pit or heated outdoor pool. Perfect for private hunting retreats, accommodating up to 12 guests.":
        "Relájese con comodidad en nuestro lodge con seis habitaciones dobles, cada una con baño privado y aire acondicionado. Disfrute de impresionantes vistas a las montañas, puestas de sol y relájese junto a la fogata o en la piscina exterior climatizada. Perfecto para retiros de caza privados, con capacidad para hasta 12 huéspedes.",
      Relaxation: "Relajación",
      "After a long day, unwind and recharge in complete comfort. Our relaxation services are available daily, providing the perfect way to ease into the evening and enhance your stay.":
        "Después de un largo día, relájese y recargue energías con total comodidad. Nuestros servicios de relajación están disponibles diariamente, proporcionando la manera perfecta de relajarse por la noche y mejorar su estancia.",
      "Let's Talk": "Hablemos",
      "High Volume Dove Hunting Package:":
        "Paquete de Caza de Palomas de Alto Volumen:",
      "All-inclusive experience with meals, drinks, and lodging":
        "Experiencia todo incluido con comidas, bebidas y alojamiento",
      "Professional guides and full-time coordinator":
        "Guías profesionales y coordinador de tiempo completo",
      "Airport transfers and ground transportation":
        "Traslados al aeropuerto y transporte terrestre",
      "Optional add-ons: shells, gun rental, hunting license":
        "Opciones adicionales: cartuchos, alquiler de armas, licencia de caza",
      "Dove and Pigeon Deluxe Package (4 Nights/5 Days):":
        "Paquete Deluxe de Palomas y Pichones (4 Noches/5 Días):",
      "4-night stay in deluxe lodge, 6 hunting sessions":
        "Estancia de 4 noches en lodge de lujo, 6 sesiones de caza",
      "All-inclusive with meals, drinks, and transportation":
        "Todo incluido con comidas, bebidas y transporte",
      "Gun rental, hunting license, and 1000-2000 shells included":
        "Alquiler de armas, licencia de caza y 1000-2000 cartuchos incluidos",
      "Optional add-ons for non-hunters and extra amenities":
        "Opciones adicionales para no cazadores y servicios extra",
      "Our Lodge": "Nuestro Lodge",
      "Zeke & Zeke Outfitters was established in 2022, leveraging over 35 years of combined experience in Argentina's dove hunting industry.": "Zeke & Zeke Outfitters se estableció en 2022, aprovechando más de 35 años de experiencia combinada en la industria de la caza de palomas en Argentina.",
      "Drawing from our extensive backgrounds working with some of the country's top hunting lodges, we've created a new standard for delivering premium hunting adventures.": "Basándonos en nuestros amplios antecedentes trabajando con algunos de los mejores lodges de caza del país, hemos creado un nuevo estándar para ofrecer aventuras de caza premium.",
      "With more than 20 years of experience in hunting and fishing, we've helped hunters achieve world-record results by utilizing our deep expertise and close relationships with local farm owners, securing access to the best hunting grounds.": "Con más de 20 años de experiencia en caza y pesca, hemos ayudado a cazadores a lograr resultados de récord mundial al aprovechar nuestra profunda experiencia y estrechas relaciones con los propietarios de fincas locales, asegurando acceso a los mejores terrenos de caza.",
      "Our mission is to offer an unparalleled hunting experience, combining our passion for the sport with a personalized approach that guarantees success and enjoyment for every guest.": "Nuestra misión es ofrecer una experiencia de caza inigualable, combinando nuestra pasión por el deporte con un enfoque personalizado que garantiza éxito y disfrute para cada invitado.",
      "At Zeke & Zeke Outfitters, you can expect nothing less than excellence in every aspect of your journey.": "En Zeke & Zeke Outfitters, puedes esperar nada menos que excelencia en cada aspecto de tu travesía.",
    "Enjoy world-class pigeon hunting across vast agricultural lands, offering unmatched bird activity and guided hunts. Experience personalized services and immersive outdoor action for all skill levels.":"Disfruta de la caza de palomas de clase mundial en vastas tierras agrícolas, que ofrecen una actividad aviar inigualable y cacerías guiadas. Experimenta servicios personalizados y una acción al aire libre inmersiva para todos los niveles de habilidad.",
    "Indulge in premium lodging featuring spacious suites, gourmet dining, and modern amenities. After a day in the field, relax in comfort with access to a pool, gym, and serene surroundings.":"Disfruta de un alojamiento de primera clase que ofrece suites amplias, gastronomía gourmet y comodidades modernas. Después de un día en el campo, relájate con comodidad con acceso a una piscina, gimnasio y un entorno sereno.",
    "Hunt on privately-owned, expansive properties reserved exclusively for our clients. These well-maintained areas provide a secluded and rich hunting experience, away from public access.":"Caza en propiedades privadas y expansivas reservadas exclusivamente para nuestros clientes. Estas áreas bien mantenidas ofrecen una experiencia de caza apartada y rica, lejos del acceso público.",
    "Subject": "Asunto",
    "Message": "Mensaje",
    "Send": "Enviar"
  },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["navigator"],
    },
  });

export default i18n;
