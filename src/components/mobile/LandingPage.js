import Event1 from "./Event1";

const LandingPage = () => {
  return (
    <div className="w-full h-[640px] relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <img
        className="mt-[-48px] w-[923px] h-[736px] relative object-cover shrink-0 max-w-[257%]"
        alt=""
        src="/1709385318633-3-1@2x.png"
      />
      <header className="w-full h-[] !m-[0] absolute top-[0px] right-[-2px] left-[0px] bg-black border-black border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-between py-2.5 pl-5 pr-[22px] gap-5 z-[1] text-left text-xl text-red-100 font-rammetto-one">
        <a className="[text-decoration:none] relative text-[inherit] whitespace-nowrap">
          RAM MIRYALA
        </a>
        <div className="w-11 bg-black border-red-100 border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-0.5 px-2">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/cil_menu.svg"
          />
        </div>
      </header>
      <Event1 />
    </div>
  );
};

export default LandingPage;