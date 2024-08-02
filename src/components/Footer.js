import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import UserDetails from "./UserDetails";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  const [isUserDetailsOpen, setUserDetailsOpen] = useState(false);

  const openUserDetails = useCallback(() => {
    setUserDetailsOpen(true);
  }, []);

  const closeUserDetails = useCallback(() => {
    setUserDetailsOpen(false);
  }, []);

  return (
    <>
      <section
        className={`self-stretch bg-black box-border overflow-hidden flex flex-col items-center justify-start pt-[75px] px-5 pb-2.5 gap-[110px] max-w-full text-left text-xl text-wheat-400 font-manrope border-t-[4px] border-solid border-red-100 mq450:gap-[55px] mq450:pt-[49px] mq450:pb-5 mq450:box-border ${className}`}
      >
        <div className="w-[350px] flex flex-col items-start justify-start gap-[42px] max-w-full mq450:gap-[21px]">
          <Button
            className="self-stretch h-20 cursor-pointer"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "30",
              background: "#ff2121",
              border: "#ff2121 solid 2px",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#ff2121" },
              height: 80,
            }}
            onClick={openUserDetails}
          >
            Join Community
          </Button>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
            <img
              className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
              loading="lazy"
              alt=""
              src="/antdesignspotifyoutlined.svg"
            />
            <img
              className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
              loading="lazy"
              alt=""
              src="/mingcuteyoutubeline.svg"
            />
            <img
              className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
              loading="lazy"
              alt=""
              src="/ritwitterxfill.svg"
            />
            <img
              className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
              loading="lazy"
              alt=""
              src="/mdiinstagram.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[73px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[30px] flex flex-row items-start justify-start gap-[7px]">
            <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
              <div className="relative mq450:text-base">
                All rights reserved
              </div>
            </div>
            <div className="h-[31px] w-[31px] rounded-21xl box-border flex flex-row items-start justify-start py-[1.5px] pr-[9px] pl-2.5 text-center border-[1px] border-solid border-wheat-400">
              <div className="relative inline-block min-w-[10px] mq450:text-base">
                C
              </div>
            </div>
          </div>
        </div>
      </section>
      {isUserDetailsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUserDetails}
        >
          <UserDetails onClose={closeUserDetails} />
        </PortalPopup>
      )}
    </>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
