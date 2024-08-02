import MusicFrameComponent from "./MusicFrameComponent";

const LandingMusic = () => {
  return (
    <div className="w-full mt-[5rem] h-[100vh] relative flex flex-col items-start justify-start pt-0 px-0 pb-[12px] box-border leading-[normal] tracking-[normal] mq450:h-auto">
      <main className="self-stretch h-[1024px] bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[152px] box-border max-w-full mq700:pb-16 mq700:box-border mq950:pb-[99px] mq950:box-border">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[567px] box-border bg-[url('/public/frame-2610597@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 max-w-full mq950:pb-[369px] mq950:box-border">
          <img
            className="h-[720px] w-[1442px] relative object-cover hidden max-w-full"
            alt=""
            src="/screenshot-20240708-at-113148am-1@2x.png"
          />
          <header className="flex-1 bg-gray-200 overflow-hidden flex flex-row items-start justify-between py-[33px] px-[45px] box-border max-w-full gap-5 z-[1] text-left text-31xl text-red font-rammetto-one mq950:pl-[22px] mq950:pr-[22px] mq950:box-border">
            <div className="relative">Janaganamana</div>
            <div className="w-[70px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
              <div className="self-stretch h-[60px] [backdrop-filter:blur(8px)] flex flex-col items-start justify-center py-[30px] px-2.5 box-border">
                <img
                  className="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/arrow-1.svg"
                />
              </div>
            </div>
          </header>
        </div>
        <MusicFrameComponent
          screenshot20240708At11314="/screenshot-20240708-at-113148am-1-1@2x.png"
          alaiBalai="Alai balai"
        />
        <MusicFrameComponent
          screenshot20240708At11314="/screenshot-20240708-at-113148am-1-2@2x.png"
          alaiBalai="Kallu Thaaga"
          propWidth="434px"
        />
      </main>
    </div>
  );
};

export default LandingMusic;