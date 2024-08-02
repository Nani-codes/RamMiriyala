import PropTypes from "prop-types";

const TrainersTitleContainer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[50px] pb-[99px] box-border max-w-full shrink-0 text-left text-11xl text-red-200 font-rammetto-one mq450:pb-[27px] mq450:box-border mq1275:pb-16 mq1275:box-border mq750:pl-[25px] mq750:pr-[25px] mq750:box-border mq1100:pb-[42px] mq1100:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[59px] max-w-full mq750:gap-[29px]">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[21px] pr-[25px] pl-5">
          <div className="relative mq450:text-lg mq750:text-5xl">
            New album merchandise on sale
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-center text-61xl text-red-500 mq750:gap-[20px]">
          <div className="self-stretch h-[600px] flex flex-row flex-wrap items-center justify-between relative">
            <h1 className="!m-[0] h-[140px] w-[751px] absolute top-[70px] left-[0px] text-inherit font-normal font-inherit inline-block [text-shadow:2px_0_0_#f1d5ae,_0_2px_0_#f1d5ae,_-2px_0_0_#f1d5ae,_0_-2px_0_#f1d5ae] mq450:text-5xl mq750:text-21xl">
              RAM MIRYALA
            </h1>
            <img
              className="h-[280px] w-[280px] absolute !m-[0] top-[0px] left-[1060px] overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/frame-2610627@2x.png"
            />
            <h1 className="!m-[0] h-[140px] w-[433px] absolute top-[390px] left-[0px] text-inherit font-normal font-inherit inline-block mq450:text-5xl mq750:text-21xl">
              EVENT @
            </h1>
            <img
              className="h-[280px] w-[280px] absolute !m-[0] top-[320px] left-[546px] overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/frame-2610629@2x.png"
            />
            <h1 className="!m-[0] h-[140px] w-[401px] absolute top-[390px] left-[939px] text-inherit font-normal font-inherit inline-block [text-shadow:2px_0_0_#f1d5ae,_0_2px_0_#f1d5ae,_-2px_0_0_#f1d5ae,_0_-2px_0_#f1d5ae] mq450:text-5xl mq750:text-21xl">
              MAKAU
            </h1>
          </div>
          <div className="self-stretch h-[600px] flex flex-row flex-wrap items-center justify-between relative">
            <h1 className="!m-[0] h-[140px] w-[272px] absolute top-[70px] left-[0px] text-inherit font-normal font-inherit inline-block mq450:text-5xl mq750:text-21xl">
              LIVE
            </h1>
            <img
              className="h-[280px] w-[280px] absolute !m-[0] top-[0px] left-[297px] overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/frame-2610630@2x.png"
            />
            <h1 className="!m-[0] h-[140px] w-[433px] absolute top-[70px] left-[602px] text-inherit font-normal font-inherit inline-block mq450:text-5xl mq750:text-21xl">
              MUSIC
            </h1>
            <img
              className="h-[280px] w-[280px] absolute !m-[0] top-[0px] left-[1060px] overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/frame-2610632@2x.png"
            />
            <h1 className="!m-[0] h-[140px] w-[636px] absolute top-[390px] left-[0px] text-inherit font-normal font-inherit inline-block [text-shadow:2px_0_0_#f1d5ae,_0_2px_0_#f1d5ae,_-2px_0_0_#f1d5ae,_0_-2px_0_#f1d5ae] mq450:text-5xl mq750:text-21xl">
              BEST PARTY
            </h1>
            <img
              className="h-[280px] w-[280px] absolute !m-[0] top-[320px] left-[653px] overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/frame-2610631@2x.png"
            />
            <h1 className="!m-[0] h-[140px] w-[390px] absolute top-[390px] left-[950px] text-inherit font-normal font-inherit inline-block mq450:text-5xl mq750:text-21xl">
              CHEERS
            </h1>
          </div>
        </div>
        <div className="self-stretch h-[62px] flex flex-row items-start justify-end py-0 px-[50px] box-border max-w-full text-red-100 font-manrope mq450:h-auto mq750:pl-[25px] mq750:pr-[25px] mq750:box-border">
          <div className="w-[437px] [backdrop-filter:blur(8px)] bg-black box-border overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start pt-5 pb-[13.7px] pr-[17px] pl-5 gap-[10px] min-h-[65px] max-w-[calc(100%_-_0px)] border-[3px] border-solid border-red-100">
            <div className="h-[22px] relative font-semibold inline-block mq450:text-lg mq750:text-5xl">
              Go to Gallery
            </div>
            <div className="h-[17.3px] flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[130px]">
              <img
                className="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
                alt=""
                src="/arrow-1-9.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TrainersTitleContainer.propTypes = {
  className: PropTypes.string,
};

export default TrainersTitleContainer;
