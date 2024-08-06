const LandingPageShop = () => {
    return (
      <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-[90px] px-5 box-border gap-1.5 leading-[normal] tracking-[normal] text-center text-xl text-red-100 font-rammetto-one">
        <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        <section className="self-stretch h-80 relative [backdrop-filter:blur(8px)] bg-neutral-800 z-[1]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image 1.png"
          />
          <img
            className="absolute h-1/4 w-[27.72%] top-[-12.5%] right-[-5.53%] bottom-[87.5%] left-[77.81%] max-w-full overflow-hidden max-h-full  z-[1]"
            loading="lazy"
            alt=""
            src="/Frame-offer 1.png"
          />
        </section>
        <div className="self-stretch relative z-[1]">
          New album merchandise on sale
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-5 z-[1]">
          <div className="h-[60px] w-[70px] [backdrop-filter:blur(8px)] bg-black flex flex-col items-start justify-center py-[30px] px-2.5 box-border [transform:_rotate(180deg)]">
            <img
              className="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/arrow-1.svg"
            />
          </div>
          <div className="h-[60px] w-[70px] [backdrop-filter:blur(8px)] bg-black flex flex-col items-start justify-center py-[30px] px-2.5 box-border">
            <img
              className="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/arrow-1.svg"
            />
          </div>
        </div>
      </div>
    );
  };


  export default LandingPageShop