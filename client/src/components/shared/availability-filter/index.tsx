import SwapIcon from "@/assets/icons/swap.svg";
import { Button } from "@/components/ui/button";
import { CustomSelect } from "../Select";
import { useQuery } from "@tanstack/react-query";
import locationService from "@/services/location";
import { useMemo, useState } from "react";
import { SelectOption } from "@/types";
import categoryService from "@/services/category";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { paths } from "@/constants/paths";
import { DatePicker } from "@/components/ui/date-picker";

export const AvailabilityFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rotate, setRotate] = useState(false);
  const { data: locationsResponse } = useQuery({
    queryKey: ["location"],
    queryFn: locationService.getAll,
  });

  const { data: categoryResponse } = useQuery({
    queryKey: ["categories"],
    queryFn: categoryService.getAll,
  });

  const locationsOptions = useMemo(() => {
    if (!locationsResponse) return [];
    return locationsResponse.data.items.map((location) => ({
      value: location._id,
      label: location.name,
    }));
  }, [locationsResponse]);

  const categoryOptions = useMemo(() => {
    if (!categoryResponse) return [];
    return categoryResponse.data.items.map((category) => ({
      value: category._id,
      label: category.name,
    }));
  }, [categoryResponse]);

  const handleSwap = () => {
    setRotate(!rotate);
    const pickupLocation = searchParams.get("pickup-location");
    const dropoffLocation = searchParams.get("dropoff-location");

    if (dropoffLocation)
      searchParams.set("pickup-location", dropoffLocation || "");
    else searchParams.delete("pickup-location");
    if (pickupLocation)
      searchParams.set("dropoff-location", pickupLocation || "");
    else searchParams.delete("dropoff-location");

    setSearchParams(searchParams);
  };

  return (
    <div className="grid lg:grid-cols-[1fr_60px_1fr] gap-x-5 lg:gap-x-7 xl:gap-x-[44px] items-center">
      <Card
        type="pickup"
        locationsOptions={locationsOptions}
        categoryOptions={categoryOptions}
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
      <Button
        onClick={handleSwap}
        className={cn(
          "w-fit mx-auto -my-4 lg:my-0 z-10 h-fit p-[18px] rounded-[10px] transition-all duration-300",
          rotate ? "rotate-180" : "rotate-0"
        )}
      >
        <img src={SwapIcon} alt="Swap Icon" className="h-6 w-6" />
      </Button>
      <Card
        type="dropoff"
        locationsOptions={locationsOptions}
        categoryOptions={categoryOptions}
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

const Card = ({
  locationsOptions,
  heading,
  type,
}: {
  locationsOptions: SelectOption[];
  categoryOptions: SelectOption[];
  heading: React.ReactNode;
  type: "pickup" | "dropoff";
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setsearchParams] = useSearchParams();
  const selectedLocation = searchParams.get(`${type}-location`);
  const selectedDate = searchParams.get(`${type}-date`);

  function handleChange(field: string, value: string) {
    searchParams.set(`${type}-${field}`, value);
    setsearchParams(searchParams);
    if (location.pathname === "/") {
      navigate(paths.LIST + "?" + searchParams.toString());
    }
  }

  return (
    <div className="bg-white rounded-[10px] h-[136px] w-full pt-4 lg:pt-6 pb-5 lg:pb-7 px-6  xl:px-12">
      {heading}
      <div className="mt-3 lg:mt-4 grid grid-cols-[1fr_1px_1fr] gap-x-2 md:gap-x-3 xl:gap-x-6">
        <CustomSelect
          value={selectedLocation}
          onChange={(value) => handleChange("location", value)}
          label="Locations"
          options={locationsOptions}
          placeholder="Select your city"
        />
        <div className="w-full h-full bg-[#c3d4e966]"></div>
        <div>
          <h5 className="text-secondary-500 text-base font-bold leading-[20px] tracking-[-0.32px] mb-1.5">
            Date
          </h5>
          <DatePicker
            hidePastDates
            defaultDate={selectedDate}
            onChange={(date) => handleChange("date", date?.toISOString() || "")}
          />
        </div>
      </div>
    </div>
  );
};
