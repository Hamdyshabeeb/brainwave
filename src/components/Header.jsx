import { brainwave } from "../assets";
import Button from "./Button";
import { navigation } from "../constants/index";
import { useLocation } from "react-router-dom";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const pathName = useLocation();

  function toggleOpenNavigation() {
    setOpenNavigation(!openNavigation);
  }

  function handelNavLinkClick() {
    if (!openNavigation) return;
    setOpenNavigation(false);
  }

  return (
    <header className=" fixed w-full top-0 left-0 z-50 border-b border-n-6 bg-n-8/90">
      <div className="max-w-[90%] mx-auto flex justify-between items-center max-lg:py-4">
        <a href="#hero">
          <img src={brainwave} alt="brainwave" />
        </a>

        <nav
          className={`absolute lg:static top-[5rem] left-0 max-lg:w-full  max-lg:h-[100vh] ${
            openNavigation ? "flex" : "hidden lg:flex"
          }   justify-center items-center bg-n-8`}
        >
          <ul className="flex justify-center items-center flex-col lg:flex-row">
            {navigation.map((item) => (
              <li key={item.id} className={item.onlyMobile ? "lg:hidden" : ""}>
                <Button
                  onClick={handelNavLinkClick}
                  href={item.url}
                  px={"px-6 xl:px-12"}
                  classNames={`text-2xl lg:text-xs   font-normal lg:font-semibold lg:py-8 hover:text-n-1 ${
                    pathName.hash === item.url ? "text-n-1" : "text-n-1/50"
                  }`}
                >
                  {item.title}
                </Button>
              </li>
            ))}
          </ul>
          <HamburgerMenu />
        </nav>

        <ul className="lg:flex items-center hidden ">
          <li>
            {" "}
            <Button href={"#signup"} classNames={` text-n-1/50 hover:text-n-1`}>
              New Account
            </Button>
          </li>

          <li className="ml-4">
            <Button href={"#signin"} classNames={"h-11"} svgBg={true}>
              sign in
            </Button>
          </li>
        </ul>

        <Button
          white={false}
          classNames={"h-11 lg:hidden"}
          px={"px-3"}
          onClick={toggleOpenNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
