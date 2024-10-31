import Image from "next/image";

import cazadorImage from "../assets/images/about us white.jpg";
import foundersImage2 from "../assets/images/Z&Z-founders-black.png";

import Fade from "react-reveal/Fade";

import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const aboutUsDescription1 = t(
    `Zeke & Zeke Outfitters is owned by Zeke Leuci and Zeke Crea and was born in 2022, the year when we decided to start our operation by adopting our experience and knowledge acquired during more than 35 years combined operating dove hunting in Argentina, we are taking advantage of all these years where we worked in hunting lodges who were considered the best in the business, and we have developed a new version of doing it. We had only rescued the best of the best to provide an unprecedented experience like no other in the country.`,
  );

  const aboutUsDescription2 = t(
    `Zeke Crea has been in the business as a hunting and fishing guide for more than 20 years, offering the best hunts around the country for several hunting lodges, being responsible for many hunters breaking world records of thousands of doves killed in one day and making them always achieved their goals, this is due to extensive knowledge and an excellent relationship with farm owners if you want the best flyways you could get, Zeke is the man you want to be in charge.`,
  );

  const enhancedDescription = t(
    `Together we ensure to provide you with excellence. We invite you to come and have the best experience of your life with us.`,
  );

  return (
    <div id="about-us" className="pt-20"> {/* Added padding-top here */}
      <section className="flex flex-col md:flex-row">
        <Fade bottom duration={1000} delay={400}>
          <div className="md:w-1/2 flex flex-col justify-center p-8">
            <h2 className="text-4xl font-bold mb-6 text-left">
              <span className="text-white-400">{t("The Founders")}</span>
              <hr className="w-20 mt-3 bg-primary h-1" />
            </h2>
            <p className="text-gray-300 text-lg mb-8" style={{ whiteSpace: "pre-wrap" }}>
              {aboutUsDescription1}
            </p>
            <p className="light-text-gold text-xl" style={{ whiteSpace: "pre-wrap" }}>
              {enhancedDescription}
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
  
        <div className="md:w-1/2 flex flex-col justify-center p-8">
          <Fade bottom duration={1000} delay={400}>
            <h2 className="text-4xl font-bold mb-6 text-left">
              <span className="text-white-400">{t("About Us")}</span>
              <hr className="w-20 mt-3 bg-primary h-1" />
            </h2>
            <p className="text-gray-300 text-lg mb-8" style={{ whiteSpace: "pre-wrap" }}>
              {aboutUsDescription2}
            </p>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
