// import { RentCard } from "@/components/shared/rent-card";
import { Filters } from "./components/Filter";
import { AvailabilityFilter } from "@/components/shared/availability-filter";
import { RenderIf } from "@/components/shared/RenderIf";
import { RentCard } from "@/components/shared/rent-card";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { Button } from "@/components/ui/button";
import { LIST_TAKE_COUNT } from "@/constants";
import { QUERY_KEYS } from "@/constants/query-keys";
import rentService from "@/services/rent";
import { Rent } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const RentListPage = () => {
  const [searchParams] = useSearchParams();

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.RENT_LIST, searchParams.toString()],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      rentService.getAll(
        {
          take: LIST_TAKE_COUNT,
          skip: pageParam,
        },
        searchParams.toString()
      ),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const hasNextPage =
        lastPage.data.total > lastPage.data.skip + lastPage.data.take;
      if (!hasNextPage) return null;
      return lastPage.data.skip + lastPage.data.take;
    },
  });

  const rents = useMemo(() => {
    if (!data) return [];
    return data.pages.reduce((prev: Rent[], page) => {
      return [...prev, ...page.data.items];
    }, []);
  }, [data]);

  return (
    <div className="grid xl:grid-cols-[360px,1fr]">
      <ScrollToTop />
      <Filters />
      <div className="bg-white" />
      <div className="flex flex-col gap-y-6 lg:gap-y-8 pt-6 lg:pt-8 px-6 lg:px-8 pb-16">
        <AvailabilityFilter />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          <RenderIf condition={isLoading}>
            {[...Array(LIST_TAKE_COUNT)].map((_, index) => (
              <RentCard.Skeleton key={index} />
            ))}
          </RenderIf>
          {rents.map((rent) => (
            <RentCard key={rent._id} rent={rent} />
          ))}
        </div>
        {hasNextPage ? (
          <Button onClick={() => fetchNextPage()}>Load More</Button>
        ) : (
          <p className="text-secondary-300 text-center text-base lg:text-lg leading-[150%] tracking-[-0.28px]">
            No more rents to show
          </p>
        )}
      </div>
    </div>
  );
};
