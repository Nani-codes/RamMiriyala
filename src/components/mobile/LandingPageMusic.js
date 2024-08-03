import FrameComponent1 from "./FrameComponent1";
import FrameComponent4 from "./FrameComponent4";

const LandingPageMusic = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[77px] box-border leading-[normal] tracking-[normal]">
      <section className="self-stretch h-[300px] relative overflow-hidden shrink-0">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_240px)] max-h-full w-[600.8px] object-cover"
          alt=""
          src="/frame-2610597@3x.png"
        />
        <header className="absolute top-[0px] left-[calc(50%_-_180px)] overflow-hidden flex flex-row items-start justify-start py-[15px] px-5 box-border gap-0.5 w-full z-[1] text-left text-5xl text-red-100 font-rammetto-one">
          <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit]">
              Janaganamana
            </a>
          </div>
          <div className="h-[60px] w-[70px] [backdrop-filter:blur(8px)] flex flex-col items-start justify-center py-[30px] px-2.5 box-border">
            <img
              className="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/arrow-1.svg"
            />
          </div>
        </header>
      </section>
      <FrameComponent1
        screenshot20240708At11314="/screenshot-20240708-at-113148am-1-2@2x.png"
        alaiBalai="Alai balai"
      />
      <FrameComponent4 />
    </div>
  );
};

export default LandingPageMusic