import { companyLogos } from "../constants";

const CompanyLogos = ({ classNames }) => {
  return (
    <div className={` ${classNames || ""}`}>
      <h5 className=" mb-24 text-n-1/50 tagline">
        Helping people create beautiful content at
      </h5>

      <ul className="flex justify-around">
        {companyLogos.map((logo, index) => (
          <li key={index} className="">
            <img src={logo} alt="company logo" width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
