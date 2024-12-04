import { Link } from "react-router-dom";
import { Links } from "./Links";

export const Footer = () => {
  return (
    <div className="bg-white pt-6 pb-4 absolute z-30 w-full">
      <div className="container px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-y-6 md:gap-y-0">
          <div className="flex flex-col gap-y-3 max-w-[280px]">
            <Link to={"/"}>
              <h1 className="text-[18px] sm:text-[22px] md:text-[28px] font-bold tracking-[-0.96px] leading-[24px] sm:leading-[32px] md:leading-[40px] text-primary">
                MORENT
              </h1>
            </Link>
            <p className="text-xs sm:text-sm md:text-base text-footer opacity-60">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <Links />
        </div>

        <div className="w-full h-[1px] my-5 bg-[#c3d4e966]"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-3 sm:gap-y-0">
          <p className="font-semibold text-secondary-500 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 tracking-[-0.32px] text-center">
            ©2024 MORENT. All rights reserved
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-4 md:gap-[60px]">
            <p className="font-semibold text-secondary-500 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 tracking-[-0.32px] text-center">
              Privacy & Policy
            </p>
            <p className="font-semibold text-secondary-500 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 tracking-[-0.32px] text-center">
              Terms & Condition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
