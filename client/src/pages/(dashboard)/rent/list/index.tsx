import { useQuery } from "@tanstack/react-query";
import { columns } from "./columns";
import { QUERY_KEYS } from "@/constants/query-keys";
import rentService from "@/services/rent";
import { Spinner } from "@/components/shared/Spinner";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { paths } from "@/constants/paths";

const DashboardRentsPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.ADMIN_RENTS],
    queryFn: rentService.getAll,
  });

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const items = data?.data?.items || [];

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-primary font-bold text-2xl">Rents</h2>
        <Button asChild>
          <Link to={paths.DASHBOARD.RENTS.CREATE}>Create Rent</Link>
        </Button>
      </div>
      <DataTable columns={columns} data={items} />
    </div>
  );
};

export default DashboardRentsPage;
