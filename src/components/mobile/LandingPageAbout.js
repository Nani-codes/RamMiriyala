import PropTypes from "prop-types";

const LandingPageAbout = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[0px] box-border max-w-full shrink-0 text-center text-31xl text-red-200 font-rammetto-one mq750:pb-[38px] mq750:box-border mq1100:pb-[58px] mq1100:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between  pb-[47px] box-border bg-[url('/public/noisygradients@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full gap-[20px] mq450:pl-5 mq450:pr-5 mq450:pb-5 mq450:box-border mq1275:flex-wrap mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq1100:pt-5 mq1100:pb-[31px] mq1100:box-border">
        <img
          className="h-[914px] w-[1440px] relative object-cover hidden max-w-full"
          alt=""
          src="/noisygradients@2x.png"
        />
        <div className="h-[316px] w-[296px] flex flex-row items-start justify-start pt-[30px] px-0 pb-0 box-border max-w-full">

          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/frame-2610602@2x.png"
          />
        </div>

        <div className="w-[300px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border max-w-full text-13xl text-wheat-100 font-manrope">
          <div className="self-stretch [backdrop-filter:blur(8px)] bg-gray-300 box-border flex flex-col items-start justify-start pt-[46px] px-[18px] pb-[50px] gap-[42px] max-w-full shrink-0 z-[1] border-t-[3px] border-solid border-red-200 border-r-[3px] mq450:pt-5 mq450:pb-[21px] mq450:box-border mq750:gap-[21px] mq1100:pt-[30px] mq1100:pb-8 mq1100:box-border">
            <div className="self-stretch relative mq450:text-lgi mq750:text-7xl">
              Ram Miriyala is an Indian playback singer, record producer, music
              composer, film scorer, promo producer and songwriter in Telugu
              cinema. While working as the promo producer at the Radio Mirchi,
              in 2018, Ram along with his colleagues decided to form the music
              band Chowraasta. The primary idea of the band is to sing and
              produce Telugu folk songs in reggae genre
            </div>
            <a
              href="/about"
              className="[text-decoration:none] self-stretch h-[62px] flex flex-row items-center justify-center py-0 pr-4 pl-[18px] box-border max-w-full text-left text-11xl text-red-200 mq450:h-auto"
            >
              <div className="flex-1 [backdrop-filter:blur(8px)] box-border overflow-hidden flex flex-row items-start justify-start pt-5 pb-[13.7px] pr-[17px] pl-5 gap-[10px] min-h-[65px] max-w-full shrink-0 border-[3px] border-solid border-red-200 mq450:justify-center">
                <div className="h-[17.3px] flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[5rem]">
                  <img
                    className="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/arrow-1-1.svg"
                  />
                </div>
                <div className="h-[22px] relative font-semibold inline-block mq450:text-lg mq750:text-5xl">
                  know more
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

LandingPageAbout.propTypes = {
  className: PropTypes.string,
};

export default LandingPageAbout;
