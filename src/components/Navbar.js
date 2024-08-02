import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  return (
    <section
      className={` self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[130px] box-border gap-[30px] max-w-full text-left text-15xl text-red-200 font-manrope mq450:pb-[244px] mq450:box-border mq1100:pb-[375px] mq1100:box-border ${className}`}
    >
      <FrameComponent4 />
      <div style={{"marginTop":"12vh","marginLeft":"20vh","zIndex":"99"}} className="fixed self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
      <div className="w-[1240px] shadow-[2px_2px_10px_4px_rgba(255,_22,_22,_0.2)] [backdrop-filter:blur(8px)] bg-gray-300 overflow-hidden shrink-0 flex flex-row items-start justify-between py-[27px] px-[35px] box-border gap-[20px] max-w-full z-[1] mq1100:flex-wrap">
          <a href="/Music" class="[text-decoration:none] relative text-[inherit] inline-block min-w-[94px] mq450:text-xl mq750:text-8xl tm-6 group relative w-max hover:text-wheat-100 ">
            <span>Music</span>
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-wheat-100 group-hover:w-full"></span>
          </a>
          <a href="/About" class="[text-decoration:none] relative text-[inherit] inline-block min-w-[94px] mq450:text-xl mq750:text-8xl tm-6 group relative w-max hover:text-wheat-100 ">
            <span>About</span>
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-wheat-100 group-hover:w-full"></span>
          </a>
          <a href="/Events" class="[text-decoration:none] relative text-[inherit] inline-block min-w-[94px] mq450:text-xl mq750:text-8xl tm-6 group relative w-max hover:text-wheat-100 ">
            <span>Events</span>
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-wheat-100 group-hover:w-full"></span>
          </a>
          <a href="/News" class="[text-decoration:none] relative text-[inherit] inline-block min-w-[94px] mq450:text-xl mq750:text-8xl tm-6 group relative w-max hover:text-wheat-100 ">
            <span>News</span>
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-wheat-100 group-hover:w-full"></span>
          </a>
          <a href="/Shop" class="[text-decoration:none] relative text-[inherit] inline-block min-w-[94px] mq450:text-xl mq750:text-8xl tm-6 group relative w-max hover:text-wheat-100 ">
            <span>Shop</span>
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-wheat-100 group-hover:w-full"></span>
          </a>
          <a href="/Gallery" class="[text-decoration:none] relative text-[inherit] inline-block min-w-[94px] mq450:text-xl mq750:text-8xl tm-6 group relative w-max hover:text-wheat-100 ">
            <span>Gallery</span>
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-wheat-100 group-hover:w-full"></span>
          </a>

        </div>
      </div>
    </section>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
