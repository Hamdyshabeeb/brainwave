import Section from "./Section";

import { check, brainwaveSymbol } from "../assets";
import { collabContent, collabText, collabApps } from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";

function Collaboration() {
  return (
    <Section crosses>
      <section className="max-w-[90%] mx-auto lg:flex ">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3">
                <div className="flex items-center ">
                  {" "}
                  <img src={check} alt="check" width={24} height={24} />{" "}
                  <h6 className="body-2 ml-5 "> {item.title}</h6>{" "}
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4"> {item.text} </p>
                )}
              </li>
            ))}
          </ul>

          <Button classNames="h-11">Try it now </Button>
        </div>

        <div className="mt-4 lg:ml-auto xl:w-[38rem]">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {" "}
            {collabText}
          </p>

          <div className="  flex w-[22rem] aspect-square rounded-full border border-n-6 mx-auto relative">
            <div className="flex w-60 border aspect-square m-auto rounded-full  border-n-6">
              <div className="flex rounded-full p-[0.2rem] m-auto aspect-square w-[6rem] justify-center items-center bg-conic-gradient">
                <div className="w-full h-full rounded-full bg-n-8 flex justify-center align-center">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>{" "}
              </div>
            </div>
            <ul>
              {collabApps.map((icon, index) => (
                <li
                  key={icon.id}
                  className={`absolute h-1/2 w-[3.2rem] top-0  left-1/2
                   origin-bottom -translate-x-1/2 rotate-${index * 45}`}
                >
                  <div
                    className={`absolute w-full border aspect-square flex  border-n-1/15 rounded-xl bg-n-7 -translate-y-1/2 -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      src={icon.icon}
                      alt={icon.title}
                      width={icon.width}
                      height={icon.height}
                      className={`m-auto`}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </section>
    </Section>
  );
}

export default Collaboration;
