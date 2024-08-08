import PropTypes from "prop-types";

const EventImage = ({ className = "", emptyOne }) => {
    return (
    <div
      className={`h-[501px] w-[420px]  relative bg-black border-red-100 border-b-[1px] border-solid box-border overflow-hidden shrink-0 leading-[normal] tracking-[normal] mq340:h-auto mq340:min-h-[501] ${className}`}
    >
      <img
        className="absolute h-full top-[0px] right-[-7px] bottom-[0px] max-h-full w-[557px] object-cover"
        alt=""
        src={emptyOne}
      />
      <section className="absolute bottom-[0px] left-[calc(50%_-_210px)] [backdrop-filter:blur(5px)] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.7)_30%,_rgba(0,_0,_0,_0.8)_70%,_#000)] w-full flex flex-col items-start justify-start py-2.5 pl-5 pr-0 box-border gap-2.5 max-w-full z-[1] text-center text-xl text-wheat font-manrope">
        <div className="relative leading-[28px] font-medium inline-block min-w-[83px]">
          19th July
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-5 text-left text-5xl text-red-100 font-rammetto-one">
          <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[195px]">
            <div className="self-stretch relative leading-[32px]">
              <p className="m-0">{`Live @ `}</p>
              <p className="m-0">Odeum by Prism</p>
            </div>
            <div className="self-stretch relative text-lg leading-[28px] font-manrope text-wheat-100 whitespace-nowrap">
              8:30 pm - 11:59 pm
            </div>
          </div>
          <div className="h-[60px] w-20 [backdrop-filter:blur(8px)] flex flex-col items-end justify-end py-[30px] px-[15px] box-border">
            <img
              className="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/arrow-1.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

EventImage.propTypes = {
  className: PropTypes.string,
  emptyOne: PropTypes.string,

};
export default EventImage