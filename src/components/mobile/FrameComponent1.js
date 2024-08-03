import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent1 = ({
  className = "",
  propAlignSelf,
  propFlex,
  screenshot20240708At11314,
  propTop,
  alaiBalai,
  alaiBalaiTextDecoration,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const screenshot20240708At1131Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const alaiBalaiStyle = useMemo(() => {
    return {
      textDecoration: alaiBalaiTextDecoration,
    };
  }, [alaiBalaiTextDecoration]);

  return (
    <section
      className={`self-stretch h-[90px] relative overflow-hidden shrink-0 ${className}`}
      style={frameSectionStyle}
    >
      <img
        className="absolute top-[calc(50%_+_189px)] left-[calc(50%_-_247px)] w-[493px] h-60 object-cover"
        loading="lazy"
        alt=""
        src={screenshot20240708At11314}
        style={screenshot20240708At1131Style}
      />
      <header className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_180px)] w-full overflow-hidden flex flex-row items-start justify-start py-[15px] px-5 box-border gap-0.5 h-full z-[1] text-left text-5xl text-red-100 font-rammetto-one">
        <div className="h-[41px] flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0 box-border">
          <a
            className="[text-decoration:none] relative text-[inherit]"
            style={alaiBalaiStyle}
          >
            {alaiBalai}
          </a>
        </div>
        <div className="h-[60px] w-[70px] [backdrop-filter:blur(8px)] flex flex-col items-start justify-center py-[30px] px-2.5 box-border">
          <img
            className="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/arrow-1.svg"
          />
        </div>
      </header>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  screenshot20240708At11314: PropTypes.string,
  alaiBalai: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propTop: PropTypes.any,
  alaiBalaiTextDecoration: PropTypes.any,
};

export default FrameComponent1