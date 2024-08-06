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
        <div className="w-[350px] flex flex-col items-start justify-start gap-[42px] max-w-full mq450:w-full mq450:items-center mq450:gap-[21px]">
          <Button
            className="text-9xl self-stretch h-20 cursor-pointer"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: { xs: "16px", sm: "30px" },
              background: "#ff2121",
              border: "#ff2121 solid 2px",
              borderRadius: "0px",
              "&:hover": { background: "#ff2121" },
              height: { xs: "40px", sm: "80px" },
              width: { xs: "100%", sm: "auto" },
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
        <div className="flex flex-row items-start justify-start py-0 px-[73px] box-border max-w-full mq450:flex-col mq450:items-center mq450:px-5 mq450:gap-2 mq450:box-border">
          <div className="h-[30px] flex flex-row items-start justify-start gap-[7px]">
            <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
              <div className="relative mq450:text-base">
                All rights reserved &copy;
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
