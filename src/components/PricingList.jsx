import { pricing } from "../constants/index.js";
import Button from "./Button.jsx";
import { check } from "../assets";

function PricingList() {
  return (
    <ul className="flex max-lg:flex-wrap gap-4  ">
      {pricing.map((item) => (
        <li
          key={item.id}
          className={`border border-n-6 rounded-[2rem] px-6   ${
            item.id === "1" ? "py-14" : "py-8 my-4"
          } w-full lg:w-auto  [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 `}
        >
          {
            <>
              <h4 className="h4 mb-4"> {item.title}</h4>
              <p className="body-2 text-n-1/50 mb-3"> {item.description}</p>
              <div className="flex h-[5.5rem] items-center mb-6">
                {item.price !== null ? (
                  <>
                    <div className="h3">$ </div>
                    <div className="text-[5.5rem]">{item.price}</div>
                  </>
                ) : (
                  ""
                )}
              </div>

              <Button
                classNames={"h-11 w-full mb-6"}
                white={item.price !== null}
                href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
                svgBg
              >
                {item.price !== null ? " Get Started" : "Contact us"}{" "}
              </Button>

              <ul>
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className=" flex items-start py-5 border-t border-n-6"
                  >
                    {" "}
                    <img width={24} height={24} src={check} alt="check" />{" "}
                    <p className="ml-4 body-2"> {feature}</p>{" "}
                  </li>
                ))}
              </ul>
            </>
          }
        </li>
      ))}
    </ul>
  );
}

export default PricingList;
