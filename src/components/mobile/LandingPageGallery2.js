const LandingPageGallery2 = () => {
    return (
      <div className="w-full relative bg-black h-[250px] text-left text-5xl text-black font-manrope">
        <div className="absolute top-[0px] left-[calc(50%_-_181px)] w-[360px] flex flex-row flex-wrap items-center justify-between text-center font-rammetto-one">
          <div className="relative tracking-[0.01em] tex-black [text-shadow:2px_0_0_#ffd293,_0_2px_0_#ffd293,_-2px_0_0_#ffd293,_0_-2px_0_#ffd293]">
            BEST PARTY
          </div>
          <img
            className="w-[120px] relative h-[120px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-2610631@2x.png"
          />
          <div className="relative tracking-[0.01em] text-red-200 opacity-[0.4]">
            CHEERS
          </div>
        </div>
        <a href="/gallery" className="[text-decoration:none]  absolute bottom-[25px] left-[calc(50%_-_180px)] bg-black w-[360px] h-[106px] overflow-hidden flex flex-col items-end justify-center py-0 px-4 box-border text-base text-red-100">
          <div className="w-56 [backdrop-filter:blur(8px)] bg-black border-red-100 border-[2px] border-solid box-border overflow-hidden flex flex-row items-center justify-end p-5 gap-2.5">
            <img
              className="flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/arrow-1-1.svg"
            />
            <div className="relative font-semibold">Go to Gallery</div>
          </div>
        </a>
      </div>
    );
  };
  
  export default LandingPageGallery2;
  