import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  id,
  customPaddings,
  classNames,
  children,
  crosses,
  crossesOffset,
}) => {
  return (
    <div
      id={id}
      className={`relative ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""} `
      } ${classNames || ""}`}
    >
      {children}

      <div className=" hidden md:block absolute w-0.25 h-full bg-stroke-1 top-0 left-5 lg:left-7.5 xl:left-10 pointer-events-none" />
      <div className=" hidden md:block absolute w-0.25 h-full bg-stroke-1 top-0 right-5 lg:right-7.5 xl:right-10 pointer-events-none" />

      {crosses && (
        <>
          <div
            className={`hidden lg:block absolute h-0.25  bg-stroke-1 top-0 right-7.5 left-7.5 xl:left-10  xl:right-10 ${
              crossesOffset && crossesOffset
            }  pointer-events-none`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
