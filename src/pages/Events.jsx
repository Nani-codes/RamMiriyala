import React from "react";
import Navbar from "../components/Navbar";
import MediaQuery from "react-responsive";
import Menu from "../components/mobile/Menu";
import EventsPage from "../components/events/EventsPage";
function Events() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "fit-content",
          background: "#000000",
        }}
      >
        <MediaQuery minWidth={1400}>
          <Navbar />
          <div class="mt-[10rem] w-[100%] fit-content relative bg-black  flex flex-row items-start justify-start pt-[0px] px-[172px] pb-0 box-border leading-[normal] tracking-[normal] text-left text-[34px] text-red-100 font-rammetto-one lg:pl-[86px] lg:pr-[86px] lg:box-border mq1050:h-auto mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[43px] mq750:pr-[43px] mq750:box-border">
            <main class="w-[100%] flex flex-col items-start justify-start pt-0 px-0  box-border gap-5 shrink-0 mq1050:pb-[31px] mq1050:box-border mq450:pb-5 mq450:box-border">
              <header class="self-stretch border-red-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start gap-10 top-[0]  text-center text-5xl text-red-100 font-rammetto-one gap-5">
                <img
                  class="h-[110px] w-[110px] relative overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/Frame 2610652.png"
                />

                <div class="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.4)_25%,_rgba(0,_0,_0,_0.6)_48%,_rgba(0,_0,_0,_0.8)_75%,_#000)] overflow-hidden flex flex-row items-center justify-between p-4 box-border max-w-full gap-5">
                  <div class="w-[342px] flex flex-row items-start justify-start gap-5 max-w-full">
                    <div class="w-[68px] flex flex-col items-center justify-start">
                      <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[68px] whitespace-nowrap">
                        19th
                      </a>
                      <a class="[text-decoration:none] self-stretch relative text-lg font-light font-manrope text-wheat-100">
                        July
                      </a>
                    </div>
                    <div class="flex-1 flex flex-col items-start justify-start text-left text-wheat-100 font-manrope">
                      <div class="relative leading-[41px] font-semibold whitespace-nowrap mq1050:hidden">
                        Live @ Grease Monkey
                      </div>
                      <div class="self-stretch relative text-lg leading-[27px] font-light whitespace-nowrap mq1050:hidden">
                        8:30 pm - 11:59 pm
                      </div>
                    </div>
                  </div>
                  <div class="w-[167px] flex flex-row items-center justify-end py-[15px] px-0 box-border gap-[30px]">
                    <button class="cursor-pointer border-red-100 border-[2px] border-solid py-[5px] px-3.5 bg-gray-100 flex-1 [backdrop-filter:blur(4px)] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray hover:border-tomato hover:border-[2px] hover:border-solid hover:box-border">
                      <a class="[text-decoration:none] relative text-base font-medium font-manrope text-red-100 text-left inline-block min-w-[73px]">
                        Book now
                      </a>
                    </button>
                    <img
                      class="h-8 w-8 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/3dicons.png"
                    />
                  </div>
                </div>
              </header>
              <header class="self-stretch border-red-200 border-b-[1px] border-solid box-border flex flex-row flex-wrap items-center justify-start gap-10 max-w-full text-center text-5xl text-red-100 font-rammetto-one gap-5">
                <img
                  class="h-[110px] w-[110px] relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/two.png"
                />

                <div class="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.4)_25%,_rgba(0,_0,_0,_0.6)_48%,_rgba(0,_0,_0,_0.8)_75%,_#000)] overflow-hidden flex flex-row items-center justify-between p-4 box-border min-w-[578px] max-w-full gap-5 mq1050:flex-wrap mq1050:min-w-full">
                  <div class="w-[427px] flex flex-row items-start justify-start gap-5 max-w-full mq450:flex-wrap">
                    <div class="w-[68px] flex flex-col items-center justify-start">
                      <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px] mq450:text-lgi">
                        20th
                      </a>
                      <a class="[text-decoration:none] self-stretch relative text-lg font-light font-manrope text-wheat-100">
                        July
                      </a>
                    </div>
                    <div class="flex-1 flex flex-col items-start justify-start min-w-[220px] max-w-full text-left text-wheat-100 font-manrope">
                      <div class="relative leading-[41px] font-semibold mq450:text-lgi mq450:leading-[33px]">
                        Soul Sunday @ Hard rock cafe
                      </div>
                      <div class="self-stretch relative text-lg leading-[27px] font-light whitespace-nowrap">
                        8:30 pm - 11:59 pm
                      </div>
                    </div>
                  </div>
                  <div class="w-[167px] flex flex-row items-center justify-end py-[15px] px-0 box-border gap-[30px]">
                    <button class="cursor-pointer border-red-100 border-[2px] border-solid py-[5px] px-3.5 bg-gray-100 flex-1 [backdrop-filter:blur(4px)] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray hover:border-tomato hover:border-[2px] hover:border-solid hover:box-border">
                      <a class="[text-decoration:none] relative text-base font-medium font-manrope text-red-100 text-left inline-block min-w-[73px]">
                        Book now
                      </a>
                    </button>
                    <img
                      class="h-8 w-8 relative object-cover"
                      alt=""
                      src="/3dicons.png"
                    />
                  </div>
                </div>
              </header>
              <header class="self-stretch border-red-200 border-b-[1px] border-solid box-border flex flex-row flex-wrap items-center justify-start gap-10 max-w-full text-center text-5xl text-red-100 font-rammetto-one gap-5">
                <img
                  class="h-[110px] w-[110px] relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/three.png"
                />

                <div class="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.4)_25%,_rgba(0,_0,_0,_0.6)_48%,_rgba(0,_0,_0,_0.8)_75%,_#000)] overflow-hidden flex flex-row items-center justify-between p-4 box-border min-w-[578px] max-w-full gap-5 mq1050:min-w-full mq750:flex-wrap">
                  <div class="w-[376px] flex flex-row items-start justify-start gap-5 max-w-full mq450:flex-wrap">
                    <div class="w-[75px] flex flex-col items-center justify-start">
                      <a class="[text-decoration:none] self-stretch relative text-[inherit] inline-block min-w-[75px] mq450:text-lgi">
                        27th
                      </a>
                      <a class="[text-decoration:none] self-stretch relative text-lg font-light font-manrope text-wheat-100">
                        July
                      </a>
                    </div>
                    <div class="flex-1 flex flex-col items-start justify-start min-w-[183px] text-left text-wheat-100 font-manrope">
                      <div class="relative leading-[41px] font-semibold mq450:text-lgi mq450:leading-[33px]">
                        @ Odeum by Prism
                      </div>
                      <div class="self-stretch relative text-xl leading-[27px] font-light whitespace-nowrap mq450:text-base mq450:leading-[22px]">
                        8:30 pm - 11:59 pm
                      </div>
                    </div>
                  </div>
                  <div class="w-[167px] flex flex-row items-center justify-end py-[15px] px-0 box-border gap-[30px]">
                    <button class="cursor-pointer border-red-100 border-[2px] border-solid py-[5px] px-3.5 bg-gray-100 flex-1 [backdrop-filter:blur(4px)] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray hover:border-tomato hover:border-[2px] hover:border-solid hover:box-border">
                      <a class="[text-decoration:none] relative text-base font-medium font-manrope text-red-100 text-left inline-block min-w-[73px]">
                        Book now
                      </a>
                    </button>
                    <img
                      class="h-8 w-8 relative object-cover"
                      alt=""
                      src="/3dicons.png"
                    />
                  </div>
                </div>
              </header>
              <header class="self-stretch border-red-200 border-b-[1px] border-solid box-border flex flex-row flex-wrap items-center justify-start gap-10 max-w-full text-center text-5xl text-red-100 font-rammetto-one gap-5">
                <img
                  class="h-[110px] w-[110px] relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/four.png"
                />

                <div class="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.4)_25%,_rgba(0,_0,_0,_0.6)_48%,_rgba(0,_0,_0,_0.8)_75%,_#000)] overflow-hidden flex flex-row items-center justify-between p-4 box-border min-w-[578px] max-w-full gap-5 mq1050:flex-wrap mq1050:min-w-full">
                  <div class="w-[442px] flex flex-row items-start justify-start gap-5 max-w-full mq750:flex-wrap">
                    <div class="w-[75px] flex flex-col items-center justify-start">
                      <a class="[text-decoration:none] self-stretch relative text-[inherit] inline-block min-w-[75px] mq450:text-lgi">
                        28th
                      </a>
                      <a class="[text-decoration:none] self-stretch relative text-xl font-light font-manrope text-wheat-100 mq450:text-base">
                        July
                      </a>
                    </div>
                    <div class="flex-1 flex flex-col items-start justify-start min-w-[226px] max-w-full text-left text-wheat-100 font-manrope">
                      <div class="relative leading-[41px] font-semibold mq450:text-lgi mq450:leading-[33px]">
                        Sing with me @ Heart cup cafe
                      </div>
                      <div class="self-stretch relative text-xl font-light whitespace-nowrap mq450:text-base">
                        8:30 pm - 11:59 pm
                      </div>
                    </div>
                  </div>
                  <div class="w-[167px] flex flex-row items-center justify-end py-[15px] px-0 box-border gap-[30px]">
                    <button class="cursor-pointer border-red-100 border-[2px] border-solid py-[5px] px-3.5 bg-gray-100 flex-1 [backdrop-filter:blur(4px)] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray hover:border-tomato hover:border-[2px] hover:border-solid hover:box-border">
                      <a class="[text-decoration:none] relative text-base font-medium font-manrope text-red-100 text-left inline-block min-w-[73px]">
                        Book now
                      </a>
                    </button>
                    <img
                      class="h-8 w-8 relative object-cover"
                      alt=""
                      src="/3dicons.png"
                    />
                  </div>
                </div>
              </header>
              <header class="self-stretch border-red-200 border-b-[1px] border-solid box-border flex flex-row flex-wrap items-center justify-start gap-10 max-w-full text-center text-5xl text-red-100 font-rammetto-one gap-5">
                <img
                  class="h-[110px] w-[110px] relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/three.png"
                />

                <div class="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.4)_25%,_rgba(0,_0,_0,_0.6)_48%,_rgba(0,_0,_0,_0.8)_75%,_#000)] overflow-hidden flex flex-row items-center justify-between p-4 box-border min-w-[578px] max-w-full gap-5 mq1050:min-w-full mq750:flex-wrap">
                  <div class="w-[342px] flex flex-row items-start justify-start gap-5 max-w-full mq450:flex-wrap">
                    <div class="w-[68px] flex flex-col items-center justify-start">
                      <a class="[text-decoration:none] w-[76px] relative text-[inherit] inline-block min-w-[76px] mq450:text-lgi">
                        09th
                      </a>
                      <a class="[text-decoration:none] self-stretch relative text-lg font-light font-manrope text-wheat-100">
                        Aug
                      </a>
                    </div>
                    <div class="flex-1 flex flex-col items-start justify-start min-w-[165px] text-left text-wheat-100 font-manrope">
                      <div class="relative leading-[41px] font-semibold mq450:text-lgi mq450:leading-[33px]">
                        Live @ Grease Monkey
                      </div>
                      <div class="self-stretch relative text-lg leading-[27px] font-light whitespace-nowrap">
                        8:30 pm - 11:59 pm
                      </div>
                    </div>
                  </div>
                  <div class="w-[167px] flex flex-row items-center justify-end py-[15px] px-0 box-border gap-[30px]">
                    <button class="cursor-pointer border-red-100 border-[2px] border-solid py-[5px] px-3.5 bg-gray-100 flex-1 [backdrop-filter:blur(4px)] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray hover:border-tomato hover:border-[2px] hover:border-solid hover:box-border">
                      <a class="[text-decoration:none] relative text-base font-medium font-manrope text-red-100 text-left inline-block min-w-[73px]">
                        Book now
                      </a>
                    </button>
                    <img
                      class="h-8 w-8 relative object-cover"
                      alt=""
                      src="/3dicons.png"
                    />
                  </div>
                </div>
              </header>
              <header class="self-stretch border-red-200 border-b-[1px] border-solid box-border flex flex-row flex-wrap items-center justify-start gap-10 max-w-full text-center text-5xl text-red-100 font-rammetto-one gap-5">
                <img
                  class="h-[110px] w-[110px] relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="two.png"
                />

                <div class="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.4)_25%,_rgba(0,_0,_0,_0.6)_48%,_rgba(0,_0,_0,_0.8)_75%,_#000)] overflow-hidden flex flex-row items-center justify-between p-4 box-border min-w-[578px] max-w-full gap-5 mq1050:flex-wrap mq1050:min-w-full">
                  <div class="w-[427px] flex flex-row items-start justify-start gap-5 max-w-full mq450:flex-wrap">
                    <div class="w-[68px] flex flex-col items-center justify-start">
                      <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[68px] mq450:text-lgi">
                        10th
                      </a>
                      <a class="[text-decoration:none] self-stretch relative text-lg font-light font-manrope text-wheat-100">
                        Aug
                      </a>
                    </div>
                    <div class="flex-1 flex flex-col items-start justify-start min-w-[220px] max-w-full text-left text-wheat-100 font-manrope">
                      <div class="relative leading-[41px] font-semibold mq450:text-lgi mq450:leading-[33px]">
                        Soul Sunday @ Hard rock cafe
                      </div>
                      <div class="self-stretch relative text-lg leading-[27px] font-light whitespace-nowrap">
                        8:30 pm - 11:59 pm
                      </div>
                    </div>
                  </div>
                  <div class="w-[167px] flex flex-row items-center justify-end py-[15px] px-0 box-border gap-[30px]">
                    <button class="cursor-pointer border-red-100 border-[2px] border-solid py-[5px] px-3.5 bg-gray-100 flex-1 [backdrop-filter:blur(4px)] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray hover:border-tomato hover:border-[2px] hover:border-solid hover:box-border">
                      <a class="[text-decoration:none] relative text-base font-medium font-manrope text-red-100 text-left inline-block min-w-[73px]">
                        Book now
                      </a>
                    </button>
                    <img
                      class="h-8 w-8 relative object-cover"
                      alt=""
                      src="/3dicons.png"
                    />
                  </div>
                </div>
              </header>
              <header class="self-stretch border-red-200 border-b-[1px] border-solid box-border flex flex-row flex-wrap items-center justify-start gap-10 max-w-full text-center text-5xl text-red-100 font-rammetto-one gap-5">
                <img
                  class="h-[110px] w-[110px] relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/four.png"
                />

                <div class="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.4)_25%,_rgba(0,_0,_0,_0.6)_48%,_rgba(0,_0,_0,_0.8)_75%,_#000)] overflow-hidden flex flex-row items-center justify-between p-4 box-border min-w-[578px] max-w-full gap-5 mq1050:min-w-full mq750:flex-wrap">
                  <div class="w-[376px] flex flex-row items-start justify-start gap-5 max-w-full mq450:flex-wrap">
                    <div class="w-[75px] flex flex-col items-center justify-start">
                      <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px] mq450:text-lgi">
                        07th
                      </a>
                      <a class="[text-decoration:none] self-stretch relative text-lg font-light font-manrope text-wheat-100">
                        Sep
                      </a>
                    </div>
                    <div class="flex-1 flex flex-col items-start justify-start min-w-[183px] text-left text-wheat-100 font-manrope">
                      <div class="relative leading-[41px] font-semibold mq450:text-lgi mq450:leading-[33px]">
                        @ Odeum by Prism
                      </div>
                      <div class="self-stretch relative text-xl leading-[27px] font-light whitespace-nowrap mq450:text-base mq450:leading-[22px]">
                        8:30 pm - 11:59 pm
                      </div>
                    </div>
                  </div>
                  <div class="w-[167px] flex flex-row items-center justify-end py-[15px] px-0 box-border gap-[30px]">
                    <button class="cursor-pointer border-red-100 border-[2px] border-solid py-[5px] px-3.5 bg-gray-100 flex-1 [backdrop-filter:blur(4px)] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray hover:border-tomato hover:border-[2px] hover:border-solid hover:box-border">
                      <a class="[text-decoration:none] relative text-base font-medium font-manrope text-red-100 text-left inline-block min-w-[73px]">
                        Book now
                      </a>
                    </button>
                    <img
                      class="h-8 w-8 relative object-cover"
                      alt=""
                      src="/3dicons.png"
                    />
                  </div>
                </div>
              </header>
              <header class="self-stretch border-red-200 border-b-[1px] border-solid box-border flex flex-row flex-wrap items-center justify-start gap-10 max-w-full text-center text-5xl text-red-100 font-rammetto-one gap-5">
                <img
                  class="h-[110px] w-[110px] relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/two.png"
                />

                <div class="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.4)_25%,_rgba(0,_0,_0,_0.6)_48%,_rgba(0,_0,_0,_0.8)_75%,_#000)] overflow-hidden flex flex-row items-center justify-between p-4 box-border min-w-[578px] max-w-full gap-5 mq1050:flex-wrap mq1050:min-w-full">
                  <div class="w-[442px] flex flex-row items-start justify-start gap-5 max-w-full mq750:flex-wrap">
                    <div class="w-[75px] flex flex-col items-center justify-start">
                      <a class="[text-decoration:none] self-stretch relative text-[inherit] inline-block min-w-[75px] mq450:text-lgi">
                        28th
                      </a>
                      <a class="[text-decoration:none] self-stretch h-[27px] relative text-xl font-light font-manrope text-wheat-100 inline-block mq450:text-base">
                        July
                      </a>
                    </div>
                    <div class="flex-1 flex flex-col items-start justify-start min-w-[226px] max-w-full text-left text-wheat-100 font-manrope">
                      <div class="relative leading-[41px] font-semibold mq450:text-lgi mq450:leading-[33px]">
                        Sing with me @ Heart cup cafe
                      </div>
                      <div class="self-stretch h-[27px] relative text-xl font-light inline-block whitespace-nowrap mq450:text-base">
                        8:30 pm - 11:59 pm
                      </div>
                    </div>
                  </div>
                  <div class="w-[167px] flex flex-row items-center justify-end py-[15px] px-0 box-border gap-[30px]">
                    <button class="cursor-pointer border-red-100 border-[2px] border-solid py-2 px-3.5 bg-gray-100 h-[38px] flex-1 [backdrop-filter:blur(4px)] box-border overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray hover:border-tomato hover:border-[2px] hover:border-solid hover:box-border">
                      <a class="[text-decoration:none] self-stretch w-[73px] relative text-base font-medium font-manrope text-red-100 text-left inline-block">
                        Book now
                      </a>
                    </button>
                    <img
                      class="h-8 w-8 relative object-cover"
                      alt=""
                      src="/3dicons.png"
                    />
                  </div>
                </div>
              </header>
            </main>
          </div>
        </MediaQuery>
      </div>
      <MediaQuery maxWidth={900}>
        <Menu></Menu>
        <EventsPage></EventsPage>
      </MediaQuery>
    </div>
  );
}

export default Events;
