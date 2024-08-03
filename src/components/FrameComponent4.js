import { useState, useCallback } from "react";
import UserDetails from "./UserDetails";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  const [isUserDetailsOpen, setUserDetailsOpen] = useState(false);

  const openUserDetails = useCallback(() => {
    setUserDetailsOpen(true);
  }, []);

  const closeUserDetails = useCallback(() => {
    setUserDetailsOpen(false);
  }, []);

  return (
    <div style={{
      "position":"fixed",
      "zIndex":"99",
      "background":"#000000",
      "width":"100%"
    }}>
      <header
        className={`self-stretch bg-black overflow-hidden flex flex-row items-start justify-between py-2 pr-[38px] pl-[27rem] top-[0] z-[99] sticky gap-[20px] text-left text-15xl text-red-200 font-rammetto-one border-[1px] border-solid border-black mq450:pl-5 mq450:box-border mq750:pl-[280px] mq750:box-border mq750:hidden ${className}`}
      >
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <a href="/"className=" [text-decoration:none] text-red-200 relative whitespace-nowrap">RAM MIRYALA</a>
        </div>
        <div
          className="h-[62px] bg-black box-border overflow-hidden flex flex-row items-start justify-start py-[11px] pr-[34px] pl-[37px] ml-[55vh] whitespace-nowrap cursor-pointer text-9xl font-manrope border-[2px] border-solid border-red-200"
          onClick={openUserDetails}
        >
          <a className="[text-decoration:none] relative font-semibold text-[inherit]">
            Join Community
          </a>
        </div>
      </header>
      {isUserDetailsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUserDetails}
        >
          <UserDetails onClose={closeUserDetails} />
        </PortalPopup>
      )}
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
