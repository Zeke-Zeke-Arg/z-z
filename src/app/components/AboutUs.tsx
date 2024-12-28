import Image from "next/image";

import cazadorImage from "../assets/images/about us white.webp";
import foundersImage2 from "../assets/images/Z&Z-founders-black.webp";

import Fade from "react-reveal/Fade";

import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const aboutUsDescription1 = t(
    `Zeke & Zeke Outfitters, owned by Zeke Leuci and Zeke Crea, was established in 2022. The two founders have been involved in organizing dove and other game hunting in Argentina for over 25 years, having worked with the best hunting lodges in the business. Their extensive knowledge of the natural habitat of game species and their daily patterns of movement, enables them to develop a novel approach, tailor-made to the demands and needs of the sport hunting visitor.  A curated experience for the highest level of accommodation, dining and relaxation after an energetic day in the field, offers an exclusive opportunity like no other in the country. Every detail is taken care of to ensure the smooth running of each trip.`,
  );

  const aboutUsDescription2 = t(
    `Zeke Crea has been in the business as a hunting and fishing guide for over 25 years. With a passion for hunting and conservation, he understands what makes a successful hunt for visitors from different parts of the world as he guided bird hunters in Argentina and guided fresh water fishing in the rivers of South East Alaska. He has arranged days of world-record beating numbers of shots per day, achieved through excellent relationships with farm owners in key locations of habitat. An understanding of nesting and feeding patterns of each game as well as the natural topography of terrain enables the setting of the challenge.`,
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
          <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-8">
            <h2 className="text-4xl font-bold text-left">
              <span className="text-white-400">{t("About Us")}</span>
              <hr className="w-20 mt-3 bg-primary h-1" />
            </h2>
            <p className="text-gray-300 text-lg " style={{ whiteSpace: "pre-wrap" }}>
              {aboutUsDescription1}
            </p>
            <p className="text-gray-300 text-lg " style={{ whiteSpace: "pre-wrap" }}>
              {aboutUsDescription2}
            </p>
          </div>

          <div className="md:w-1/2 relative flex items-end text-center md:max-w-[60%] md:max-h-[75vh] h-80 md:h-[calc(100vh-80px)] z-10">
            <Image
              src={cazadorImage}
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-3xl rounded-bl-3xl rounded-br-none" // Increased rounding for top left and bottom left
            />

            <div className="relative z-10">
              <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
              <p className="text-white text-lg text-shadow z-20" style={{ whiteSpace: "pre-wrap" }}>
                {enhancedDescription}
              </p>
            </div>

          </div>
        </Fade>
      </section>

    </div>
  );
};

export default AboutUs;
