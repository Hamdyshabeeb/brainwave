import Section from "./Section";
import { socials } from "../constants";

function Footer() {
  return (
    <Section crosses classNames={"!py-10"}>
      <footer className="max-w-[90%] mx-auto flex gap-7 flex-wrap items-center justify-between max-sm:flex-col">
        <p className="caption text-n-4">
          {" "}
          © {new Date().getFullYear()}. All right reserved{" "}
        </p>

        <ul className="flex gap-4 flex-wrap">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                className="flex  justify-center items-center bg-n-7 transition-colors hover:bg-n-6 w-10 h-10 rounded-full"
              >
                <img
                  src={item.iconUrl}
                  alt={item.title}
                  width={16}
                  height={16}
                />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </Section>
  );
}

export default Footer;
