import Section from "./Section";
import { benefits } from "../constants";

import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { GradientLight } from "./design/Benefits";

const Benefits = () => {
  return (
    <Section id="features">
      <section className="max-w-[90%] mx-auto">
        <h2 className="h2 md:mx-auto max-w-[50rem] md:max-w-md lg:max-w-2xl md:text-center mb-12 lg:mb-20 ">
          Chat Smarter,Not Harder with Brainwave
        </h2>
        <ul className="flex gap-8 mb-10 flex-wrap">
          {benefits.map((item) => (
            <li
              key={item.id}
              className="   md:max-w-[24rem] bg-no-repeat bg-[length:100%_100%] relative z-1 "
              style={{
                backgroundImage: `url(./src/${item.backgroundUrl})`,
              }}
            >
              <div className="flex flex-col min-h-[22rem] p-[2.4rem] relative z-2 pointer-events-none">
                <h5 className="h5 mb-5"> {item.title}</h5>

                <p className="body-2 text-n-3"> {item.text}</p>

                <div className="flex mt-auto items-center">
                  <img src={item.iconUrl} alt={item.title} />

                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    {" "}
                    explore more
                  </p>

                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight negativeZ={true} />}

              <div
                className="absolute bg-n-8 inset-0.5  "
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute top-0 left-0 object-cover  w-full h-full opacity-0 transition-opacity hover:opacity-10 ">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </li>
          ))}
          <ClipPath />
        </ul>
      </section>
    </Section>
  );
};

export default Benefits;
