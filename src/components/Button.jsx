import ButtonSvg from "../assets/svg/ButtonSvg";

function Button({
  classNames,
  href,
  children,
  white,
  px,
  onClick,
  svgBg = false,
}) {
  const classes = `relative font-code  py-6 uppercase block  button inline-flex justify-center items-center h11 transition-colors hover:text-color-1 ${
    classNames ? classNames : " "
  } ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}> {children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a className={classes} href={href} onClick={onClick}>
      <span className={spanClasses}>{children}</span>{" "}
      {svgBg ? ButtonSvg(white) : ""}
    </a>
  );

  return href ? renderLink() : renderButton();
}

export default Button;
