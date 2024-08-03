const LandingPageGallery2 = () => {
    return (
      <div className="w-full relative bg-black h-[640px] text-left text-5xl text-wheat-200 font-manrope">
        <div className="absolute top-[0px] left-[calc(50%_-_181px)] w-[360px] flex flex-row flex-wrap items-center justify-between text-center font-rammetto-one">
          <div className="relative tracking-[0.01em] [text-shadow:2px_0_0_#ffd293,_0_2px_0_#ffd293,_-2px_0_0_#ffd293,_0_-2px_0_#ffd293]">
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
        <div className="absolute bottom-[334px] left-[calc(50%_-_180px)] bg-black w-[360px] h-[106px] overflow-hidden flex flex-col items-end justify-center py-0 px-4 box-border text-base text-red-100">
          <div className="w-56 [backdrop-filter:blur(8px)] bg-black border-red-100 border-[2px] border-solid box-border overflow-hidden flex flex-row items-center justify-end p-5 gap-2.5">
            <img
              className="flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/arrow-1-1.svg"
            />
            <div className="relative font-semibold">Go to Gallery</div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[100%] h-[674px] overflow-hidden text-xs text-wheat-200">
          <div className="absolute top-[640px] left-[calc(50%_-_180px)] w-[360px] h-[640px]" />
          <div className="absolute bottom-[34px] left-[calc(50%_-_180px)] bg-black border-red-200 border-t-[2px] border-solid box-border w-[360px] h-[271px] overflow-hidden">
            <div className="absolute top-[calc(50%_+_67px)] ml-[4rem] flex flex-row items-center justify-start gap-[7px]">
              <div className="relative">All rights reserved</div>
              <div className="w-[21px] rounded-[40px] border-wheat-300 border-[1px] border-solid box-border h-[21px] flex flex-col items-center justify-center p-2.5 text-center">
                <div className="self-stretch relative">&copy;</div>
              </div>
            </div>
            <div className="absolute top-[77px]  w-[100%] h-[147px] overflow-hidden text-base text-black">
              <div className="absolute top-[calc(50%_-_74.5px)] left-[calc(50%_-_102px)] bg-red-200 border-red-200 border-[2px] border-solid overflow-hidden flex flex-row items-center justify-center py-5 px-10">
                <div className="relative font-semibold">Join Community</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between pt-[80px] pl-6 pr-[25px] gap-5">
                <img
                  className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                  loading="lazy"
                  alt=""
                  src="/antdesignspotifyoutlined.svg"
                />
                <img
                  className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                  loading="lazy"
                  alt=""
                  src="/mingcuteyoutubeline.svg"
                />
                <img
                  className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                  loading="lazy"
                  alt=""
                  src="/ritwitterxfill.svg"
                />
                <img
                  className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                  loading="lazy"
                  alt=""
                  src="/mdiinstagram.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LandingPageGallery2;
  