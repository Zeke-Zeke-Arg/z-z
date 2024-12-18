import Image from "next/image";

import FoodAndWineImage from "../assets/images/FoodAndWine.webp";
import MassageImage2 from "../assets/images/masaje1.webp";

import Fade from "react-reveal/Fade";

import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const FoodAndWineDescription = t(
    `At ZEKE & ZEKE We pride ourselves in our Fine dining and curated wine selection. This region is known as the best 
    “beef country” in Argentina, and as such, we purchase our beef from the most respected butcher in Cordoba. Our 
    first-class, 5-star chef will delight you with his incredible presentation of freshly prepared and delicious meals, 
    each dish is a celebration of flavors, with fresh, local ingredients transformed into sophisticated and delicious 
    creations.`,
  );

  const MassageDescription = t(
    `After an intense day of hunting, enjoy an upper or full body massage from one of our professionally trained massage 
    therapists. Their services can be booked upon request.`,
  );

  return (
    <div id="ServiceFoodAndMassage" className="pt-20">
      {" "}
      {/* Added padding-top here */}
      <section className="flex flex-col md:flex-row">
        <Fade bottom duration={1000} delay={400}>
          <div className="md:w-1/2 flex flex-col justify-center p-8 px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-6 text-left">
              <span className="text-white-400">{t("Food & Wine")}</span>
              <hr className="w-20 mt-3 bg-primary h-1" />
            </h2>
            <p className="text-gray-300 text-lg mb-8" style={{ whiteSpace: "pre-wrap" }}>
              {FoodAndWineDescription}
            </p>
          </div>

          <div className="md:w-1/2 relative md:max-w-[60%] md:max-h-[75vh] h-80 md:h-[calc(100vh-80px)]">
            <Image
              src={FoodAndWineImage}
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
            src={MassageImage2}
            alt="Founders"
            layout="fill"
            objectFit="cover"
            className="rounded-tr-3xl rounded-br-3xl rounded-bl-none" // Increased rounding for top right and bottom right
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center p-8 px-4 md:px-8">
          <Fade bottom duration={1000} delay={400}>
            <h2 className="text-4xl font-bold mb-6 text-left">
              <span className="text-white-400">{t("Massages")}</span>
              <hr className="w-20 mt-3 bg-primary h-1" />
            </h2>
            <p className="text-gray-300 text-lg mb-8" style={{ whiteSpace: "pre-wrap" }}>
              {MassageDescription}
            </p>

          </Fade>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
