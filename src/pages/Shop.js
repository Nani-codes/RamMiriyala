import React from "react";
import Navbar from "../components/Navbar";
function Shop() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#000000",
      }}
    >
      <Navbar />
      <div class="w-full relative bg-black overflow-hidden flex flex-row items-start justify-between pt-[157px] px-[100px] pb-[216px] box-border leading-[normal] tracking-[normal] gap-5 text-left text-[20px] text-red font-rammetto-one mq450:pl-5 mq450:pr-5 mq450:box-border mq975:pl-[50px] mq975:pr-[50px] mq975:box-border mq1025:flex-wrap">
        <div class="w-[84.6px] flex flex-col items-start justify-start pt-[325px] pb-0 pl-0 pr-3.5 box-border mq450:pt-[211px] mq450:box-border">
          <div class="self-stretch h-[60px] [backdrop-filter:blur(8px)] bg-black flex flex-col items-start justify-center py-[30px] px-2.5 box-border [transform:_rotate(180deg)]">
            <img
              class="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0 [transform:_rotate(-180deg)]"
              loading="lazy"
              alt=""
              src="/arrow-1.svg"
            />
          </div>
        </div>
        <div class="w-[618.6px] flex flex-col items-start justify-start gap-10 max-w-full gap-5">
          <div class="self-stretch h-[560px] flex flex-row items-start justify-end max-w-full">
            <div class="self-stretch w-[567.6px] flex flex-col items-end justify-start py-[43px] px-[11px] box-border relative max-w-full">
              <div class="w-full h-full absolute !m-[0] top-[0px] right-[0.5px] bottom-[0px] left-[0px]">
                <img
                  class="absolute top-[60px] left-[0px] w-[500px] h-[500px] overflow-hidden object-cover"
                  alt=""
                  src="/image 1.png"
                />

                <img
                  class="absolute top-[0px] left-[434.5px] w-[132.6px] h-[120px]"
                  loading="lazy"
                  alt=""
                  src="/Frame 2610624.png"
                />
              </div>
              <div class="relative inline-block min-w-[110px] z-[1] mq450:text-[16px]">
                30% off
              </div>
            </div>
          </div>
          <h3 class="m-0 relative text-[30px] font-normal text-red-100 font-[inherit] inline-block max-w-full mq450:text-[18px] mq975:text-[24px]">
            New album merchandise on sale
          </h3>
        </div>
        <div class="w-[70px] flex flex-col items-start justify-start pt-[325px] px-0 pb-0 box-border mq450:pt-[211px] mq450:box-border">
          <div class="self-stretch h-[60px] [backdrop-filter:blur(8px)] bg-black flex flex-col items-start justify-center py-[30px] px-2.5 box-border">
            <img
              class="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/arrow-1-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
