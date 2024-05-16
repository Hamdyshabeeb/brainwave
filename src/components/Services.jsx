import Heading from "./Heading";
import Section from "./Section";
import { service1, service2, service3, check, check2 } from "../assets";
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
          <Gradient />
        </div>
      </section>
    </Section>
  );
};

export default Services;
