import Heading from "./Heading";
import Section from "./Section";
import RoadmapList from "./RoadmapList";
import Button from "./Button";

function Roadmap() {
  return (
    <Section id={"roadmap"}>
      <section className="max-w-[90%] mx-auto">
        <Heading
          classNames={" text-center"}
          title={"What we’re working on"}
          tag={"Ready to get started"}
        />

        <RoadmapList />

        <div className="mt-12 md:mt-15 xl:mt-20 mx-auto w-fit">
          {" "}
          <Button classNames={"h-11"} href="/roadmap" svgBg>
            {" "}
            Our roadmap
          </Button>
        </div>
      </section>
    </Section>
  );
}

export default Roadmap;
