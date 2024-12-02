import SwapIcon from "@/assets/icons/swap.svg";
import { Button } from "@/components/ui/button";
import { CustomSelect } from "../Select";

export const AvailabilityFilter = () => {
  return (
    <div className="grid lg:grid-cols-[1fr_60px_1fr] gap-x-5 lg:gap-x-7 xl:gap-x-[44px] items-center">
      <Card
        heading={
          <div className="flex items-center gap-x-2">
            <span className="inline-block w-4 h-4 border-4 border-[#3563e94d] rounded-full">
              <span className="block w-2 h-2 bg-primary rounded-full" />
            </span>
            <p className="text-secondary-500 font-semibold text-base leading-[20px] tracking-[-0.32px]">
              Pick - Up
            </p>
          </div>
        }
      />
      <Button className="w-fit mx-auto -my-4 lg:my-0 z-10 h-fit p-[18px] rounded-[10px]">
        <img src={SwapIcon} alt="Swap Icon" className="h-6 w-6" />
      </Button>
      <Card
        heading={
          <div className="flex items-center gap-x-2">
            <span className="inline-block w-4 h-4 border-4 border-[#5caffc4d] rounded-full">
              <span className="block w-2 h-2 bg-information rounded-full" />
            </span>
            <p className="text-secondary-500 font-semibold text-base leading-[20px] tracking-[-0.32px]">
              Drop - Off
            </p>
          </div>
        }
      />
    </div>
  );
};

const Card = ({ heading }: { heading: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-[10px] h-[136px] w-full pt-4 lg:pt-6 pb-5 lg:pb-7 px-6  xl:px-12">
      {heading}
      <div className="mt-3 lg:mt-4 grid grid-cols-[1fr_1px_1fr_1px_1fr] gap-x-2 md:gap-x-3 xl:gap-x-6">
        <CustomSelect
          label="Locations"
          options={[
            { label: "Tokyo", value: "Tokyo" },
            { label: "Baku", value: "baku" },
            { label: "Berlin", value: "berlin" },
            { label: "Rome", value: "rome" },
          ]}
          placeholder="Select your city"
        />
        <div className="w-full h-full bg-[#c3d4e966]"></div>
        <CustomSelect
          label="Date"
          options={[
            { label: "Tokyo", value: "Tokyo" },
            { label: "Baku", value: "baku" },
            { label: "Berlin", value: "berlin" },
            { label: "Rome", value: "rome" },
          ]}
          placeholder="Select your date"
        />
        <div className="w-full h-full bg-[#c3d4e966]"></div>
        <CustomSelect
          label="Time"
          options={[
            { label: "Tokyo", value: "Tokyo" },
            { label: "Baku", value: "baku" },
            { label: "Berlin", value: "berlin" },
            { label: "Rome", value: "rome" },
          ]}
          placeholder="Select your time"
        />
      </div>
    </div>
  );
};
