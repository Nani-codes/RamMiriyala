import Event1 from "./Event1";

const LandingPage = () => {
  return (
    <div className="w-full h-[640px] relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <img
        className="mt-[-48px] w-[923px] h-[736px] relative object-cover shrink-0 max-w-[257%]"
        alt=""
        src="/1709385318633-3-1@2x.png"
      />
      <Event1 />
    </div>
  );
};

export default LandingPage;
