import PropTypes from "prop-types";
import { useState } from "react";

const Menu = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] z-50">
        <main className="self-stretch [backdrop-filter:blur(8px)] overflow-hidden shrink-0 flex flex-col items-center justify-between pb-[30px] box-border z-[1]">
          <header className="w-full sticky top-0 bg-black border-black border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-between py-2.5 pr-[22px] gap-5 z-[1] text-left text-xl text-red-100 font-rammetto-one">
            <a className="[text-decoration:none] relative text-[inherit] whitespace-nowrap">
              RAM MIRYALA
            </a>
            <div
              className="w-11 bg-black border-red-100 border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-0.5 px-2 cursor-pointer"
              onClick={toggleMenu}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={menuOpen ? "/iconoir_cancel.svg" : "/cil_menu.svg"}
              />
            </div>
          </header>
          {menuOpen && (
            <>
              <section className="self-stretch flex flex-col items-center justify-start gap-[15px] text-left text-5xl text-red-100 font-manrope">
                <div className="flex flex-row items-center justify-center py-2.5 px-[66px]">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[67px]">
                    Music
                  </a>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[66px]">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[68px]">
                    About
                  </a>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[62px]">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[76px]">
                    Events
                  </a>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[71px]">
                  <div className="relative inline-block min-w-[58px]">Shop</div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[61px]">
                  <div className="relative inline-block min-w-[78px]">Gallery</div>
                </div>
                <div className="self-stretch border-red-100 border-[2px] border-solid flex flex-row items-center justify-center py-[7px] px-[22px]">
                  <div className="relative">Join community</div>
                </div>
              </section>
              <div className="self-stretch flex flex-row items-center justify-between pt-[15px] pl-6 pr-[25px] gap-5">
                <img
                  className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                  loading="lazy"
                  alt=""
                  src="/antdesignspotifyoutlined.svg"
                />
                <img
                  className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                  loading="lazy"
                  alt=""
                  src="/mingcuteyoutubeline.svg"
                />
                <img
                  className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                  loading="lazy"
                  alt=""
                  src="/ritwitterxfill.svg"
                />
                <img
                  className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                  loading="lazy"
                  alt=""
                  src="/mdiinstagram.svg"
                />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;
