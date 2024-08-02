import { useMemo } from "react";
import PropTypes from "prop-types";

const MusicFrameComponent = ({
  className = "",
  screenshot20240708At11314,
  alaiBalai,
  propWidth,
}) => {
  const alaiBalaiStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <section
      className={`self-stretch h-[153px] relative shrink-0 text-left text-31xl text-red font-rammetto-one ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden">
        <img
          className="absolute top-[calc(50%_-_350.5px)] left-[calc(50%_-_720px)] w-[1440px] h-[701px] object-cover"
          alt=""
          src={screenshot20240708At11314}
        />
        <div className="absolute top-[0px] left-[calc(50%_-_720px)] [background:linear-gradient(90deg,_rgba(0,_0,_0,_0.4),_rgba(29,_29,_29,_0.4)_50%,_rgba(71,_71,_71,_0.4))] w-full h-full overflow-hidden [mix-blend-mode:linear-burn] z-[1]" />
      </div>
      <div
        className="absolute top-[33.7px] left-[45px] inline-block w-[315px] h-[85.7px] z-[2] mq450:text-11xl mq950:text-21xl"
        style={alaiBalaiStyle}
      >
        {alaiBalai}
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  screenshot20240708At11314: PropTypes.string,
  alaiBalai: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default MusicFrameComponent