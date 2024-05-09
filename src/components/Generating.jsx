import { loading } from "../assets";

const Generating = ({ classNames }) => {
  return (
    <div
      className={` bg-n-8/80  flex gap-4 px-7 py-4 items-center w-[90%] md:w-[45%] rounded-full     ${
        classNames || ""
      }`}
    >
      <img src={loading} width={25} height={25} alt="" />
      <p className="text-base"> AI is generating</p>
    </div>
  );
};

export default Generating;
