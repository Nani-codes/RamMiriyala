import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const UserDetails = ({ className = "", onClose }) => {
  return (
    <div
      className={`w-[1243px] relative [backdrop-filter:blur(10px)] bg-gray-100 box-border overflow-hidden flex flex-col items-start justify-start pt-4 pb-[68px] pr-[17px] pl-[168px] gap-[25px] leading-[normal] tracking-[normal] max-w-full max-h-full text-left text-11xl text-wheat-100 font-manrope border-[3px] border-solid border-red-200 mq450:gap-[16px] mq450:pl-5 mq450:box-border mq675:gap-[31px] mq675:pl-[84px] mq675:box-border ${className}`}
    >
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[11px] box-border gap-[17px] max-w-full text-left text-15xl text-wheat-100 font-manrope">
        <button className="bg-black self-stretch flex flex-row items-start justify-end">
          <img
            className="h-10 w-10  relative overflow-hidden shrink-0"
            onClick={onClose}
            loading="lazy"
            alt=""
            src="/mdicancelbold.svg"
          />
        </button>
        <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block max-w-full mq450:text-xl mq750:text-8xl">
          Don’t miss a detail... be the first to know what’s happening
        </h3>
      </section>
      <section className="w-[903px] flex flex-row items-start justify-start pt-0 px-[31px] pb-[27px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[81px] flex-1 font-manrope text-5xl text-wheat-200 max-w-full"
              placeholder="Name"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#f1d5ae" },
                "& .MuiInputBase-root": {
                  height: "81px",
                  borderRadius: "0px 0px 0px 0px",
                  fontSize: "24px",
                },
                "& .MuiInputBase-input": { color: "rgba(241, 213, 174, 0.4)" },
              }}
            />
          </div>
          <TextField
            className="[border:none] bg-[transparent] self-stretch h-[81px] font-manrope text-5xl text-wheat-200"
            placeholder="Whatsapp number"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#f1d5ae" },
              "& .MuiInputBase-root": {
                height: "81px",
                borderRadius: "0px 0px 0px 0px",
                fontSize: "24px",
              },
              "& .MuiInputBase-input": { color: "rgba(241, 213, 174, 0.4)" },
            }}
          />
        </div>
      </section>
      <div className="w-[924px] h-[78px] flex flex-row items-start justify-center py-0 pr-5 pl-0 box-border max-w-full">
        <Button
          className="h-20 w-[352px] max-w-[calc(100%_-_0px)] mq450:pl-5 mq450:pr-5 mq450:box-border"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#ff1616",
            fontSize: "30",
            background: "#000",
            border: "#ff1616 solid 2px",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#000" },
            width: 352,
            height: 80,
          }}
        >
          Be a member
        </Button>
      </div>
      <div className="w-[924px] flex flex-row items-start justify-center py-0 pr-5 pl-0 box-border max-w-full">
        <div className="w-[350px] flex flex-col items-start justify-start gap-[19px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-[29px]">
            <div className="relative mq450:text-lg mq750:text-5xl">
              Follow us for more on
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
            <a href="https://open.spotify.com/artist/4A2XSc4OJjuPY4l6NjnrDj?si=u0O6cPUQTE-QrV8a8wSW2w">
              <img
                className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
                loading="lazy"
                alt=""
                src="/antdesignspotifyoutlined1.svg"
              />
            </a>
            <a href="https://youtube.com/@rammiriyalaofficial?si=n-MMJVoOsLNAO0HI">
              <img
                className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
                loading="lazy"
                alt=""
                src="/mingcuteyoutubeline1.svg"
              />
            </a>
            <a href="https://x.com/Ram_Miriyala?t=oxjYP1mADp_ynHs-D1kD3A&s=09">
              <img
                className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
                loading="lazy"
                alt=""
                src="/ritwitterxfill1.svg"
              />
            </a>
            <a href="https://www.instagram.com/miriyala_ram?igsh=MXNvZWc1MjYzbWRxaA==">
              <img
                className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
                loading="lazy"
                alt=""
                src="/mdiinstagram1.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

UserDetails.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default UserDetails;
