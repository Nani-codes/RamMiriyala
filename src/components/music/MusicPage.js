const MusicPage = () => {
    return (
      <div className="fit-content flex flex-row items-start justify-start pt-[6rem] px-5 pb-0 box-border leading-[normal] tracking-[normal]">
        <main className="mb-[15rem] flex-1 flex flex-col items-start justify-start gap-10">
          <section className="self-stretch flex flex-col items-start justify-start gap-5 text-left text-5xl text-red-100 font-rammetto-one">
            <div className="self-stretch flex flex-col items-start justify-start">
              <a className="[text-decoration:none] self-stretch relative text-[inherit]">
                Mattini kapadudham
              </a>
              <div className="self-stretch relative text-xl leading-[28px] font-manrope text-wheat-100">
                Let’s join hands to save soil.
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/Frame 2610715mattini.svg"
            />
            <div className="flex flex-row items-center justify-start gap-4">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/antdesignspotifyoutlined.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/mingcuteyoutubeline.svg"
              />
            </div>
          </section>
          <section className="self-stretch flex flex-col items-start justify-start gap-5 text-left text-5xl text-red-100 font-rammetto-one">
            <div className="self-stretch flex flex-col items-start justify-start">
              <a className="[text-decoration:none] self-stretch relative leading-[36px] text-[inherit]">
                Alai balai
              </a>
              <div className="self-stretch relative text-xl leading-[28px] font-manrope text-wheat-100">
                Let’s do Alai Balai, live together in harmony and break all the
                barriers.
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/Frame 2610715.svg"
            />
            <div className="flex flex-row items-center justify-start gap-4">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/antdesignspotifyoutlined.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/mingcuteyoutubeline.svg"
              />
            </div>
          </section>
        </main>
      </div>
    );
  };
  
  export default MusicPage;