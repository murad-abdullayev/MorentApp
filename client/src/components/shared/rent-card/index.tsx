import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants/paths";

import HeartFilledImg from "@/assets/icons/heart-filled-red.svg";
import HeartOutlinedImg from "@/assets/icons/heart-outlined.svg";
import TransmissionImg from "@/assets/icons/transmission.svg";
import FuelImg from "@/assets/icons/fuel.svg";
import PeopleImg from "@/assets/icons/people.svg";
import { Skeleton } from "@/components/ui/skeleton";
import { Rent } from "@/types";

type Props = {
  rent: Rent;
};

export const RentCard = ({ rent }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const { _id, name, category, fuel, gearBox, images, capacity, price } = rent;
  const mainImage = images[0];

  return (
    <div className="w-full bg-white rounded-[10px] p-4 lg:p-6">
      <div className="flex justify-between">
        <div>
          <Link
            to={paths.DETAIL(_id)}
            className="font-bold text-secondary-500 text-base lg:text-xl leading-[150%] tracking-[-0.6px] cursor-pointer hover:underline"
          >
            {name}
          </Link>
          <p className="text-secondary-300 text-xs lg:text-sm leading-[150%] tracking-[-0.28px]">
            {category.name}
          </p>
        </div>
        <button className="h-fit" onClick={() => setIsLiked(!isLiked)}>
          <img src={isLiked ? HeartFilledImg : HeartOutlinedImg} alt="heart" />
        </button>
      </div>
      <Link
        className="mt-8 lg:mt-12 relative cursor-pointer"
        to={paths.DETAIL(_id)}
      >
        <img src={mainImage} alt="car" className="w-full h-32 object-contain" />
        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.00)0%,#FFF_100%)] w-full h-[68px] absolute bottom-0" />
      </Link>
      <div className="flex justify-between items-center mt-5 lg:mt-9">
        <div className="flex gap-1.5 items-center">
          <img src={FuelImg} alt="fuel" />
          <p className="text-secondary-300 text-sm font-medium leading-[24px] tracking-[-0.28px]">
            {fuel}L
          </p>
        </div>
        <div className="flex gap-1.5 items-center">
          <img src={TransmissionImg} alt="transmission" />
          <p className="text-secondary-300 text-sm font-medium leading-[24px] tracking-[-0.28px]">
            {gearBox}
          </p>
        </div>
        <div className="flex gap-1.5 items-center">
          <img src={PeopleImg} alt="people" />
          <p className="text-secondary-300 text-sm font-medium leading-[24px] tracking-[-0.28px]">
            {capacity} People
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 lg:mt-6">
        <p className="text-secondary-500 text-xl font-bold">
          ${price}/ <span className="text-sm text-secondary-300">day</span>
        </p>
        <Button>Rent Now</Button>
      </div>
    </div>
  );
};

RentCard.Skeleton = function () {
  return (
    <div className="w-full bg-white rounded-[10px] p-4 lg:p-6">
      <div className="flex justify-between">
        <div>
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
      <div className="mt-8 lg:mt-12 relative">
        <Skeleton className="w-full h-32" />
        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.00)0%,#FFF_100%)] w-full h-[68px] absolute bottom-0" />
      </div>
      <div className="flex justify-between items-center mt-5 lg:mt-9">
        <div className="flex gap-1.5 items-center">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-12" />
        </div>
        <div className="flex gap-1.5 items-center">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="flex gap-1.5 items-center">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 lg:mt-6">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-10 w-20 rounded-md" />
      </div>
    </div>
  );
};
