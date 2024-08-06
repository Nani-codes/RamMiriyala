import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Event1 = ({ className = "" }) => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-31T00:00:00"); // Set your event date here
    const difference = eventDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={`text-red-100 font-rammetto-one w-full !m-[0] absolute right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(8px)] flex flex-col items-center justify-start z-[1] text-center text-xl text-red-100 font-manrope ${className}`}
    >
      <div className="self-stretch relative font-medium font-manrope">
        Upcoming event
      </div>
      <footer className="self-stretch overflow-hidden flex flex-row items-center justify-between py-2.5 px-2 gap-0 [row-gap:20px] text-left text-base text-red-100 font-rammetto-one">
        <div className="flex flex-row items-center justify-center p-2.5">
          <div className="relative inline-block min-w-[84px]">
            <span>{timeLeft.days} </span>
            <span className="font-manrope">days</span>
          </div>
        </div>
        <div className="relative inline-block min-w-[8px]">:</div>
        <div className="flex flex-row items-center justify-center py-2.5 px-1">
          <div className="relative inline-block min-w-[77px]">
            <span>{timeLeft.hours} </span>
            <span className="font-manrope">hours</span>
          </div>
        </div>
        <div className="relative inline-block min-w-[8px]">:</div>
        <div className="flex flex-row items-center justify-center py-2.5 px-1">
          <div className="relative inline-block min-w-[79px]">
            <span>{timeLeft.minutes} </span>
            <span className="font-manrope">mins</span>
          </div>
        </div>
        <div className="relative inline-block min-w-[8px]">:</div>

        <div className="flex flex-row items-center justify-center py-2.5 px-1">
          <div className="relative inline-block min-w-[79px]">
            <span className="text-white">{timeLeft.seconds} </span>
            <span className="font-manrope">sec</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-2.5 px-1">
          <div className="relative inline-block min-w-[79px]">
            <span className="text-white">{timeLeft.seconds} </span>
            <span className="font-manrope">sec</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

Event1.propTypes = {
  className: PropTypes.string,
};

export default Event1;
