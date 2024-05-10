import Button from "./Button";
import Section from "./Section";
import { curve, heroBackground, robot } from "../assets";
import Generating from "./Generating";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const scrolParallexRef = useRef(null);

  return (
    <Section crosses id="hero" customPaddings={"py-10 lg:py-16 xl:py-20"}>
      <section className="max-w-[90%] mx-auto text-center">
        <div className="max-w-[62rem] mx-auto mb-[4rem] md:mb-20 lg:mb-[6rem] z-2 relative">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                className="absolute top-full w-full xl:-mt-2"
                src={curve}
                alt=""
              />
            </span>
          </h1>
          <p className="mb-6 lg:mb-8 body-1 max-w-3xl mx-auto text-n-2">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button white={true} href="/pricing" svgBg classNames={"h-11 z-10"}>
            Get Started
          </Button>
        </div>
        <div
          className="relative max-w-[23rem] md:max-w-5xl  mx-auto"
          ref={scrolParallexRef}
        >
          {/** hero image   */}
          <div className="bg-conic-gradient relative z-10 rounded-xl  xl:mb-24 p-0.5">
            <div className=" h-[1.4rem] bg-n-10 rounded-t-[0.7rem] " />
            <div
              className="aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490]
            rounded-b-[0.7rem]  overflow-hidden"
            >
              <img
                src={robot}
                alt="AI"
                className="w-full scale-[1.7] md:scale-[1] translate-y-[12%]  md:translate-y-[-8%]  lg:translate-y-[-23%]"
              />
            </div>
            {/** Left Icons Of hero Image */}
            <ScrollParallax isAbsolutelyPositioned>
              <ul className="hidden xl:flex p-1 rounded-xl border border-n-1/10  bg-n-9/50 backdrop-blur absolute bottom-1/3 -left-[5rem] ">
                {heroIcons.map((icon, index) => (
                  <li key={index} className="p-5">
                    <img src={icon} width={24} height={24} alt="" />
                  </li>
                ))}
              </ul>
            </ScrollParallax>

            <Generating classNames="absolute bottom-[4.5rem] md:bottom-[5.5rem]  left-1/2 -translate-x-1/2  " />
            <ScrollParallax isAbsolutelyPositioned>
              <Notification
                title="Code generation"
                classeNames="hidden lg:flex absolute bottom-1/2 -right-[5rem]"
              />
            </ScrollParallax>
            <Gradient />
          </div>
          {/** Hero background */}
          <div className=" absolute -top-[54%]  w-[234%] -z-1  left-1/2 -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img src={heroBackground} className="w-full" alt="" />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos classNames="hidden lg:block" />
      </section>
      <BottomLine />
    </Section>
  );
};

export default Hero;
