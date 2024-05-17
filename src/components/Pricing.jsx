import Section from "./Section";
import { smallSphere, stars } from "../assets";

function Pricing() {
  return (
    <Section id="pricing">
      <section className="max-w-[90%] mx-auto relative ">
        <div className="hidden lg:flex justify-center items-center relative mb-[6.5rem]">
          <img
            src={smallSphere}
            alt="sphere"
            width={255}
            height={255}
            className="relative z-1"
          />

          <div className="absolute w-[60rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src={stars}
              width={950}
              height={400}
              className="w-full"
              alt="stars"
            />
          </div>
        </div>
      </section>
    </Section>
  );
}

export default Pricing;
