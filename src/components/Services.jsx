import Heading from "./Heading";
import Section from "./Section";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id={"how-to-use"}>
      <section className="max-w-[90%] mx-auto">
        <Heading
          classNames={"md:text-center"}
          title={"Generative AI made for creators."}
          text={"Brainwave unlocks the potential of AI-powered applications"}
        />

        <div className="relative">
          <div className="flex items-center border border-n-1/10 relative z-1 p-8 lg:p-20 rounded-3xl h-[39rem] xl:h-[46rem] overflow-hidden  ">
            <div className=" absolute top-0 left-0 w-full md:w-3/4 xl:w-auto h-full pointer-events-none  ">
              <img
                src={service1}
                width={800}
                height={730}
                className=" w-full h-full object-cover md:object-right "
                alt="Smarts AI"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI </h4>
              <p className="body-2 mb-[3rem] text-n-3">
                {" "}
                Brainwave unlocks the potential of AI-powered applications
              </p>

              <ul className="body-2">
                {brainwaveServices.map((service, index) => (
                  <li key={index} className="flex py-4 border-t border-n-6">
                    <img width={24} height={24} src={check} alt="" />
                    <p className="ml-5">{service}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating classNames="absolute bottom-[1rem] md:bottom-[2rem] border border-n-6  left-1/2 -translate-x-1/2  " />
          </div>

          <div className=" grid mt-5 lg:grid-cols-2 gap-4">
            <div className=" overflow-hidden  relative z-1 min-h-[39rem] border border-n-1/10 rounded-3xl  ">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  width={630}
                  height={750}
                  className="w-full h-full object-cover"
                  alt="robot"
                />
              </div>
              <div className="flex relative z-1 flex-col w-full h-full bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-12 ">
                <PhotoChatMessage />

                <div className="flex flex-col mt-auto mb-10 relative z-1">
                  <h4 className="h4 mb-4">Photo editing</h4>
                  <p className="body-2 text-n-3">
                    Automatically enhance your photos using our AI app&#39;s
                    photo editing feature. Try it now!
                  </p>
                </div>
              </div>
            </div>
            <div className="  z-1 relative min-h-[39rem] lg:min-h-[46rem] p-4 rounded-3xl bg-n-7">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 text-n-3 mb-[2rem]">
                  The world&#39;s most powerful AI photo and video art
                  generation engine. What will you create?
                </p>

                <ul className="flex justify-between items-center">
                  {" "}
                  {brainwaveServicesIcons.map((icon, index) => (
                    <li
                      key={index}
                      className={`relative aspect - square rounded-2xl overflow-hidden  ${
                        index === 2
                          ? "p-3 md:p-5 bg-conic-gradient"
                          : "p-2 md:p-4 bg-n-6"
                      }`}
                    >
                      {index === 2 ? (
                        <span className="absolute rounded-2xl bg-n-7 inset-[1px]"></span>
                      ) : (
                        ""
                      )}
                      <img
                        src={icon}
                        alt=""
                        width={24}
                        height={24}
                        className="relative z-1"
                      />{" "}
                    </li>
                  ))}{" "}
                </ul>
              </div>
              <div className="relative rounded-xl overflow-hidden w-full min-h-[20rem] md:min-h-[25rem] flex-1">
                <div className=" absolute inset-0 bg-n-8 pointer-events-none ">
                  <img
                    src={service3}
                    alt=" scarey robot"
                    className="w-full h-full object-cover"
                    width={520}
                    height={400}
                  />
                  <VideoChatMessage />
                  <VideoBar />
                </div>
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </section>
    </Section>
  );
};

export default Services;
