import PropTypes from "prop-types";
import { useState } from "react";
import PortalPopup from "../PortalPopup";
import UserDetails from "../UserDetails";

const Menu = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] z-50">
        <main className="self-stretch [backdrop-filter:blur(20px)] overflow-hidden shrink-0 flex flex-col items-center justify-between box-border z-[1]">
          <header className="w-full sticky top-0 bg-black border-black border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-between py-2.5 pr-[22px] gap-5 z-[1] text-left text-xl text-red-100 font-rammetto-one">
            <a
              href="/"
              className="[text-decoration:none] ml-[1rem] relative text-[inherit] whitespace-nowrap"
            >
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
              <section className="self-stretch flex flex-col items-center justify-center gap-[15px] text-left text-5xl text-red-100 font-manrope">
                <div className="flex flex-row items-center justify-center py-2.5 px-[66px]">
                  <a
                    href="/music"
                    className="[text-decoration:none] relative text-[inherit] inline-block min-w-[67px] group relative w-max hover:text-wheat-100"
                  >
                    <span>Music</span>
                    <span className="absolute -bottom-1 left-0 w-150px transition-all h-0.5 bg-wheat-100 group-hover:w-full"></span>
                  </a>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[66px]">
                  <a
                    href="/about"
                    className="[text-decoration:none] relative text-[inherit] inline-block min-w-[67px] group relative w-max hover:text-wheat-100"
                  >
                    <span>About</span>
                    <span className="absolute -bottom-1 left-0 w-150px transition-all h-0.5 bg-wheat-100 group-hover:w-full"></span>
                  </a>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[62px]">
                  <a
                    href="/Events"
                    className="[text-decoration:none] relative text-[inherit] inline-block min-w-[67px] group relative w-max hover:text-wheat-100"
                  >
                    <span>Events</span>
                    <span className="absolute -bottom-1 left-0 w-150px transition-all h-0.5 bg-wheat-100 group-hover:w-full"></span>
                  </a>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[71px]">
                  <a
                    href="/shop"
                    className="[text-decoration:none] relative text-[inherit] inline-block min-w-[67px] group relative w-max hover:text-wheat-100"
                  >
                    <span>Shop</span>
                    <span className="absolute -bottom-1 left-0 w-150px transition-all h-0.5 bg-wheat-100 group-hover:w-full"></span>
                  </a>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[61px]">
                  <a
                    href="/gallery"
                    className="[text-decoration:none] relative text-[inherit] inline-block min-w-[67px] group relative w-max hover:text-wheat-100"
                  >
                    <span>Gallery</span>
                    <span className="absolute -bottom-1 left-0 w-150px transition-all h-0.5 bg-wheat-100 group-hover:w-full"></span>
                  </a>
                </div>
                <div
                  className="w-[15rem] ml-[5rem] self-stretch border-red-100 border-[2px] border-solid flex flex-row items-center justify-center py-[7px] px-[22px] cursor-pointer"
                  onClick={togglePopup}
                >
                  <div className="relative">Join community</div>
                </div>
              </section>
              <div className="mb-[16rem] self-stretch flex flex-row items-center justify-between pt-[60px] pl-[4.5rem] pr-[44px] ">
                <a href="https://open.spotify.com/artist/4A2XSc4OJjuPY4l6NjnrDj?si=u0O6cPUQTE-QrV8a8wSW2w">
                  <img
                    className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                    loading="lazy"
                    alt=""
                    src="/antdesignspotifyoutlined.svg"
                  />
                </a>
                <a href="https://youtube.com/@rammiriyalaofficial?si=n-MMJVoOsLNAO0HI">
                  <img
                    className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                    loading="lazy"
                    alt=""
                    src="/mingcuteyoutubeline.svg"
                  />
                </a>
                <a href="https://x.com/Ram_Miriyala?t=oxjYP1mADp_ynHs-D1kD3A&s=09">
                  <img
                    className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                    loading="lazy"
                    alt=""
                    src="/ritwitterxfill.svg"
                  />
                </a>
                <a href="https://www.instagram.com/miriyala_ram?igsh=MXNvZWc1MjYzbWRxaA==">
                  <img
                    className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                    loading="lazy"
                    alt=""
                    src="/mdiinstagram.svg"
                  />
                </a>
              </div>
            </>
          )}
        </main>
      </div>
      {isPopupOpen && (
        <PortalPopup
          onOutsideClick={togglePopup}
          overlayColor="rgba(0, 0, 0, 0.5)"
        >
          <UserDetails onClose={togglePopup} />
        </PortalPopup>
      )}
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;
