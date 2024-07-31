import InstanceContainer from "../components/InstanceContainer";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import SingerDescription from "../components/SingerDescription";
import StageMoment from "../components/StageMoment";
import TrainersTitleContainer from "../components/TrainersTitleContainer";
import Footer from "../components/Footer";

const Desktop = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <img
        className="w-full h-[1034px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/1709385318633-3-1@2x.png"
      />
      <InstanceContainer />
      <FrameComponent2 />
      <section className="self-stretch h-[671px] relative overflow-hidden shrink-0 max-w-full text-left text-31xl text-red-200 font-rammetto-one mq750:h-auto mq750:min-h-[671]">
        <img
          className="absolute top-[calc(50%_-_350.5px)] left-[calc(50%_-_720px)] w-[1440px] h-[701px] object-cover"
          alt=""
          src="/screenshot-20240708-at-113148am-1@2x.png"
        />
        <div className="absolute top-[calc(50%_-_335.5px)] left-[calc(50%_-_720px)] [background:linear-gradient(90deg,_rgba(0,_0,_0,_0.4),_rgba(29,_29,_29,_0.4)_50%,_rgba(71,_71,_71,_0.4))] w-full overflow-hidden flex flex-row items-start justify-between py-[33px] pr-[100px] pl-[50px] box-border gap-[20px] max-w-full z-[1] mq450:pr-5 mq450:box-border mq750:flex-wrap mq750:justify-center mq750:pl-[25px] mq750:box-border">
          <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-11xl mq750:text-21xl">
            Janaganamana
          </h3>
          <div className="w-[70px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
            <div className="self-stretch h-[60px] [backdrop-filter:blur(8px)] bg-gray-300 flex flex-col items-start justify-center py-[30px] px-2.5 box-border">
              <img
                className="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/arrow-1.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch h-[150px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full text-left text-31xl text-red-200 font-rammetto-one">
        <div className="mt-[-259px] h-[701px] flex-1 relative max-w-full">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover"
            alt=""
            src="/screenshot-20240708-at-113148am-1-1@2x.png"
          />
          <div className="absolute top-[259px] left-[0px] [background:linear-gradient(90deg,_rgba(0,_0,_0,_0.4),_rgba(29,_29,_29,_0.4)_50%,_rgba(71,_71,_71,_0.4))] w-[1440px] h-[150px] overflow-hidden [mix-blend-mode:linear-burn] z-[1]">
            <h3 className="m-0 absolute top-[33px] left-[50px] text-inherit font-normal font-inherit z-[2] mq450:text-11xl mq750:text-21xl">
              Alai balai
            </h3>
          </div>
        </div>
      </section>
      <div className="w-[482px] h-[822px] relative overflow-hidden shrink-0 hidden max-w-full z-[5]" />
      <FrameComponent3 />
      <SingerDescription />
      <StageMoment />
      <TrainersTitleContainer />
      <Footer />
    </div>
  );
};

export default Desktop;
