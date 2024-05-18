import Heading from "./Heading";
import Section from "./Section";

function Roadmap() {
  return (
    <Section id={"roadmap"}>
      <section className="max-w-[90%] mx-auto">
        <Heading
          classNames={" text-center"}
          title={"What we’re working on"}
          tag={"Ready to get started"}
        />
      </section>
    </Section>
  );
}

export default Roadmap;
