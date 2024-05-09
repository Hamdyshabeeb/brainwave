import { notification1 } from "../assets";

import { notificationImages } from "../constants";

const Notification = ({ classeNames, title }) => {
  return (
    <div
      className={` bg-n-9/50  flex gap-4 p-4 border border-n-1/10 rounded-xl items-center backdrop-blur  ${
        classeNames || ""
      }`}
    >
      <img
        src={notification1}
        className="rounded-xl"
        width={64}
        height={64}
        alt={title}
      />

      <div>
        <h6 className="text-base font-semibold mb-1 text-left"> {title}</h6>

        <div className="flex justify-between items-center gap-9">
          {" "}
          <ul className="flex gap-1">
            {notificationImages.map((image, index) => (
              <li key={index}>
                {" "}
                <img
                  src={image}
                  className="rounded-full"
                  width={20}
                  height={20}
                  alt=""
                />{" "}
              </li>
            ))}
          </ul>
          <span className="text-n-13 body-2"> 1m ago </span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
