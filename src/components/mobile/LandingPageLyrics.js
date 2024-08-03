const LandingPageLyrics = () => {
    return (
      <div className="w-full relative overflow-hidden flex flex-col items-end justify-start pt-[54px] px-2.5 pb-5 box-border gap-[101px] leading-[normal] tracking-[normal]">
        <section className="self-stretch flex flex-col items-start justify-start gap-[67px] text-center text-5xl text-wheat font-manrope">
          <div className="w-[174px] flex flex-row items-start justify-start py-0 px-2.5 box-border">
            <img
              className="h-[100px] flex-1 relative max-w-full overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/-1.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start relative">
            <div className="text-wheat-100 self-stretch relative z-[1]">
              <p className="m-0">Smile-u maya, hoyalu maya</p>
              <p className="m-0">Sweet ga aade, maatalu maya</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Shape-lu maya, chupulu maya</p>
              <p className="m-0">Chupulu gucche matthu sudulu maya</p>
            </div>
            <h2 className="!m-[0] w-[calc(100%_-_20px)] absolute top-[calc(50%_-_50px)] left-[10px] text-[40px] leading-[50px] font-normal font-rammetto-one text-red-400 inline-block z-[2]">
              LIFT YOUR SPIRITS
            </h2>
          </div>
        </section>
        <div className="w-[174px] flex flex-row items-start justify-end py-0 px-2.5 box-border">
          <img
            className="h-[100px] flex-1 relative max-w-full overflow-hidden z-[1]"
            loading="lazy"
            alt=""
            src="/1.svg"
          />
        </div>
      </div>
    );
  };
  

  export default LandingPageLyrics