import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const calculateTimeLeft = () => {
  const difference = +new Date("2024-08-03T12:00:00") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const FrameComponent2 = ({ className = "" }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Debugging logs to check the state
  console.log('Time left:', timeLeft);

  return (
    <section
      className={`w-[1412px] mt-[17rem] ml-[4rem] flex flex-row items-start justify-center py-0 px-5 box-bordershrink-0 text-center text-15xl text-red-200 font-rammetto-one ${className}`}
    >
      <div className="w-[100%] [backdrop-filter:blur(8px)] bg-gray-200 flex flex-col items-center justify-start gap-[21px]  z-[1]">
        <div className="self-stretch relative mq450:text-xl mq750:text-8xl">
          Upcoming event
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[17px] px-[25px] gap-[20px] text-left text-31xl mq1100:flex-wrap mq1100:justify-center">
          <div className="flex flex-row items-center justify-center p-2.5">
            <div className="relative mq450:text-11xl mq750:text-21xl">
              <span>{timeLeft.days || 0} </span>
              <span className="font-manrope">days</span>
            </div>
          </div>
          <h1 className="m-0 w-[29px] relative text-61xl font-normal font-inherit inline-block mq450:text-5xl mq750:text-21xl">
            :
          </h1>
          <div className="flex flex-row items-center justify-center p-2.5">
            <div className="m-0 relative text-inherit font-inherit mq450:text-11xl mq750:text-21xl">
              <span>{timeLeft.hours || 0} </span>
              <span className="font-manrope">hours</span>
            </div>
          </div>
          <h1 className="m-0 w-[29px] relative text-61xl font-normal font-inherit inline-block mq450:text-5xl mq750:text-21xl">
            :
          </h1>
          <div className="flex flex-row items-center justify-center p-2.5">
            <div className="relative mq450:text-11xl mq750:text-21xl">
              <span>{timeLeft.minutes || 0} </span>
              <span className="font-manrope">mins</span>
            </div>
          </div>
          <h1 className="m-0 w-[29px] relative text-61xl font-normal font-inherit inline-block mq450:text-5xl mq750:text-21xl">
            :
          </h1>
          <div className="flex flex-row items-center justify-center p-2.5">
            <div className="relative mq450:text-11xl mq750:text-21xl">
              <span className="text-white">{timeLeft.seconds || 0} </span>
              <span className="font-manrope">secs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
