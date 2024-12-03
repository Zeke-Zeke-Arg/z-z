import Image from "next/image";

import cazadorImage from "../assets/images/about us white.webp";
import foundersImage2 from "../assets/images/Z&Z-founders-black.webp";

import Fade from "react-reveal/Fade";

import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const aboutUsDescription1 = t(
    `Zeke & Zeke Outfitters, owned by Zeke Leuci and Zeke Crea, was born in 2022. The two founders have been involved in organising dove and other game hunting in Argentina for over 35 years between them, having worked with the best hunting lodges in the business. Their extensive knowledge of the natural habitat of game species and their daily patterns of movement enables them to develop a novel approach, tailor-made to the demands and needs of the sporting visitor.  A curated offering for the highest level of accommodation, dining and relaxation after an energetic day in the field, ensures an exclusive experience like no other in the country. Every detail is taken care of to ensure the smooth running of each trip.`,
  );

  const aboutUsDescription2 = t(
    `Zeke Crea has been in the business as a hunting and fishing guide for over 20 years. With a passion for hunting and conservation, he understands what makes a successful hunt for visitors from different parts of the world. He has arranged days of world-record beating numbers of shots per day, achieved through excellent relationships with farm owners in key locations of habitat. An understanding of nesting and feeding patterns of each game as well as the natural topography of terrain enables the setting of the challenge. The team of Zeke & Zeke invites you to dream your ideal day and we will ensure you have the best experience.`,
  );

  const enhancedDescription = t(
    `The team of Zeke & Zeke invites you to dream your ideal day and we will ensure you have the best experience.`,
  );

  return (
    <div id="about-us" className="pt-20">
      {" "}
      {/* Added padding-top here */}
      <section className="flex flex-col md:flex-row">
        <Fade bottom duration={1000} delay={400}>
          <div className="md:w-1/2 flex flex-col justify-center p-8 px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-6 text-left">
              <span className="text-white-400">{t("About Us")}</span>
              <hr className="w-20 mt-3 bg-primary h-1" />
            </h2>
            <p className="text-gray-300 text-lg mb-8" style={{ whiteSpace: "pre-wrap" }}>
              {aboutUsDescription1}
            </p>
          </div>

          <div className="md:w-1/2 relative md:max-w-[60%] md:max-h-[75vh] h-80 md:h-[calc(100vh-80px)]">
            <Image
              src={cazadorImage}
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-3xl rounded-bl-3xl rounded-br-none" // Increased rounding for top left and bottom left
            />
          </div>
        </Fade>
      </section>

      <section className="flex flex-col md:flex-row mt-10">
        <div className="md:w-1/2 relative md:max-w-[60%] md:max-h-[75vh] h-80 md:h-[calc(100vh-80px)]">
          <Image
            src={foundersImage2}
            alt="Founders"
            layout="fill"
            objectFit="cover"
            className="rounded-tr-3xl rounded-br-3xl rounded-bl-none" // Increased rounding for top right and bottom right
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center p-8 px-4 md:px-8">
          <Fade bottom duration={1000} delay={400}>
            <p className="text-gray-300 text-lg mb-8" style={{ whiteSpace: "pre-wrap" }}>
              {aboutUsDescription2}
            </p>
            <p className="text-gray-300 text-lg mb-8" style={{ whiteSpace: "pre-wrap" }}>
              {enhancedDescription}
            </p>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
