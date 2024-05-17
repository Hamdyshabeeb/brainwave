import TagLine from "./TagLine";

const Heading = ({ classNames, title, text, tag }) => {
  return (
    <div
      className={`${
        classNames ? classNames : ""
      } max-w-[50rem]  mx-auto mb-12 lg:mb-20 tagline  `}
    >
      {tag && <TagLine classNames={"mb-4 md:justify-center"}>{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4"> {text}</p>}
    </div>
  );
};

export default Heading;
