import React from "react";
import Slack from "../assets/slack.png";
import Amazon from "../assets/amazon.png";
import Woocommerce from "../assets/woocommerce.png";
import Meundies from "../assets/meundies.png";
import Sitepoint from "../assets/sitepoint.png";

const LogoAnimation = () => {
  const logos = [Slack, Amazon, Woocommerce, Meundies, Sitepoint];

  return (
    <div className="w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start">
      <div className="w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
        Proud partner at <br /> Hubspot & Segment
      </div>
      <div className="flex whitespace-nowrap animate-marquee">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="company logo"
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all "
          />
        ))}

        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt="company logo"
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all "
          />
        ))}
      </div>
    </div>
  );
};

export default LogoAnimation;
