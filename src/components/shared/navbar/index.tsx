import { NavbarActions } from "./Actions";
import { Search } from "./Search";

export const Navbar = () => {
  return (
    <div className="bg-white py-6 md:py-10">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-x-4 md:gap-x-8 lg:gap-x-16">
          <h1 className="text-[24px] md:text-[32px] font-bold tracking-[-0.96px] leading-[36px] md:leading-[48px] text-primary">
            MORENT
          </h1>
          <Search />
        </div>
        <NavbarActions />
      </div>
    </div>
  );
};
