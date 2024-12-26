import { RentCard } from "@/components/shared/rent-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type Props = {
  heading: string;
  // cars ...
  maxCols?: number;
};

export const RentList = ({ heading, maxCols = 4 }: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center py-2.5">
        <h3 className="pl-3 lg:pl-5 text-secondary-300 font-semibold">
          {heading}
        </h3>
        <Button variant={"link"} asChild>
          <Link to={"/"}>View All</Link>
        </Button>
      </div>
      <div
        className={cn(
          `grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8`,
          maxCols === 4 && "xl:grid-cols-4"
        )}
      >
        <RentCard />
        <RentCard />
        <RentCard />
        <RentCard />
      </div>
    </div>
  );
};
