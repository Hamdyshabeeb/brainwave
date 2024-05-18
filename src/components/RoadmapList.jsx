import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import TagLine from "./TagLine";
import { Gradient } from "./design/Roadmap";
function RoadmapList() {
  return (
    <ul className=" grid md:grid-cols-2 gap-4 pb-[7rem]">
      {roadmap.map((item) => (
        <li
          key={item.id}
          className={`relative  rounded-[2.25rem] p-0.25 flex flex-col md:even:translate-y-[7rem]   ${
            item.colorful ? " bg-conic-gradient  " : "bg-n-8 border border-n-6"
          }`}
        >
          <div className="  bg-n-8 inset-0.25 rounded-[2.25rem]    absolute">
            <img
              src={grid}
              className="w-full   "
              alt="grid"
              width={550}
              height={550}
            />
          </div>

          <div className="flex justify-between items-center mb-8 md:mb-16 px-8 pt-8 xl:pt-15 xl:px-15  overflow-hidden relative z-1 mx-w-[27rem]">
            <TagLine> {item.date}</TagLine>

            <div className="bg-white text-n-8 rounded px-4 py-1 flex items-center">
              {" "}
              <img
                src={item.status === "done" ? check2 : loading1}
                alt="status"
                width={16}
                height={16}
                className="mr-2.5"
              />
              <div className="tagline">{item.status}</div>
            </div>
          </div>

          <div className="relative z-1 mb-10">
            <img
              src={item.imageUrl}
              alt={item.title}
              width={628}
              height={426}
              className="w-full"
            />
          </div>

          <div className="relative z-1 px-8 xl:px-15 pb-8 xl:pb-15">
            <h4 className="h4 mb-4">{item.title}</h4>
            <p className="body-2 text-n-4"> {item.text}</p>
          </div>
        </li>
      ))}

      <Gradient />
    </ul>
  );
}

export default RoadmapList;
