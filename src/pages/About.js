import React from "react";
import InstanceContainer from "../components/InstanceContainer";
import FrameComponent2 from "../components/FrameComponent2";
import SingerDescription from "../components/SingerDescription";
import StageMoment from "../components/StageMoment";
import TrainersTitleContainer from "../components/TrainersTitleContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function About() {
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
      <div class="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-[63px] px-0 pb-[70px] box-border gap-[58px] leading-[normal] tracking-[normal] text-left text-[34px]  font-rammetto-one gap-[29px]">
        <section class="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-xl text-wheat-100 font-manrope">
          <div class="w-[1040px] flex flex-row  items-start justify-start gap-[26px] max-w-full mq1050:flex-wrap">
            <img
              class="w-[450px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[300px] max-w-full mq1050:flex-1"
              loading="lazy"
              alt=""
              src="/Frame 2610731.png"
            />

            <div class="flex-1 [backdrop-filter:blur(8px)] bg-red-200 border-red-100 border-t-[2px] border-solid border-red-100 border-r-[2px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-3 pb-[15px] pl-4 pr-[15px] min-w-[367px] max-w-full shrink-0 mq450:min-w-full">
              <div class="h-[270px]  flex-1 relative inline-block max-w-full mq450:text-base">
                Ram Miriyala is an Indian playback singer, record producer,
                music composer, film scorer, promo producer and songwriter in
                Telugu cinema. While working as the promo producer at the Radio
                Mirchi, in 2018, Ram along with his colleagues decided to form
                the music band Chowraasta. The primary idea of the band is to
                sing and produce Telugu folk songs in reggae genre. The band
                started producing original songs in 2019, which became
                successful. Songs are based on the real-life issues in the
                society and made him popular.
              </div>
            </div>
          </div>
        </section>
        <section class="w-[1430px] overflow-x-auto flex flex-row items-start justify-start pt-0 px-0 pb-[25px] box-border gap-[25px] max-w-full">
          <img
            class="self-stretch w-[225px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[150px]"
            loading="lazy"
            alt=""
            src="/Frame 2610733.png"
          />

          <img
            class="self-stretch w-[225px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[150px]"
            loading="lazy"
            alt=""
            src="/Frame 2610734.png"
          />

          <img
            class="self-stretch w-[225px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[150px]"
            loading="lazy"
            alt=""
            src="/Frame 2610735.png"
          />

          <img
            class="self-stretch w-[225px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[150px]"
            loading="lazy"
            alt=""
            src="/Frame 2610736.png"
          />

          <img
            class="self-stretch w-[225px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[150px]"
            loading="lazy"
            alt=""
            src="/Frame 2610737.png"
          />

          <img
            class="self-stretch w-[225px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[150px]"
            loading="lazy"
            alt=""
            src="/Frame 2610739.png"
          />

          <img
            class="self-stretch w-[225px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[150px]"
            loading="lazy"
            alt=""
            src="/Frame 2610738.png"
          />
        </section>

        <section class="w-[1384px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-xl text-wheat font-manrope">
          <div class="w-[1040px] flex flex-row items-start justify-start gap-[26px] max-w-full mq1050:flex-wrap">
            <div class="flex-1 [backdrop-filter:blur(8px)] bg-red-100 border-red-1 border-b-[2px] border-solid border-red-1 border-l-[2px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[28.5px] pb-[26px] pl-4 pr-[15px] min-w-[367px] max-w-full shrink-0 mq450:min-w-full">
              <div class="h-[243px] flex-1 text-wheat-100 relative inline-block max-w-full mq450:text-base">
                Ram said that "We are not here for popularity. We are asking
                questions and hoping that people will think about it. It is an
                ongoing process and we will speak about issues that are close to
                our heart". The next year he has sung, composed and written
                "Cheyi Cheyi Kalapaku Ra" for the band during the COVID-19
                lockdown in India. The song is produced to create awareness
                about the disease and the guidelines to be followed.
                <a
                  class="text-[inherit]"
                  href="https://en.wikipedia.org/wiki/Ram_Miriyala#cite_note-5"
                  target="_blank"
                >
                  <span class="[text-decoration:underline]">[5]</span>{" "}
                </a>{" "}
                Ram has stepped out of the band in 2020.
              </div>
            </div>
            <img
              class="w-[450px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1050:flex-1"
              loading="lazy"
              alt=""
              src="/_storage_emulated_0_DCIM_.convert_tmp_files_IMG_7947_20240128122033 (1) 2.png"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
