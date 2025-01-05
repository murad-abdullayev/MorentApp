import { AvailabilityFilter } from "@/components/shared/availability-filter";
import { Hero } from "./components/Hero";
import { RentList } from "@/components/shared/RentList";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
import rentService from "@/services/rent";

const HomePage = () => {
  const { data: recommendedData, isLoading: recommendedLoading } = useQuery({
    queryKey: [QUERY_KEYS.RECOMMENDATION_RENTS],
    queryFn: () => rentService.getAll({ type: "recommended" }),
  });

  const recommendedRents = recommendedData?.data.items;

  return (
    <div className="container pt-4 lg:pt-8 pb-8 lg:pb-16 flex flex-col gap-y-6 lg:gap-y-8">
      <Hero />
      <AvailabilityFilter />
      <RentList heading="Popular Cars" />
      <RentList
        heading="Recomendation Cars"
        isLoading={recommendedLoading}
        rents={recommendedRents}
      />
    </div>
  );
};

export default HomePage;
