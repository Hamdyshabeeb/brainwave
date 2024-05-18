import brackets from "../assets/svg/Brackets";

function TagLine({ children, classNames }) {
  return (
    <div className={`${classNames || ""} flex items-center tagline`}>
      {brackets("left")}
      <div className="text-n-3 mx-3">{children}</div>
      {brackets("right")}
    </div>
  );
}

export default TagLine;
