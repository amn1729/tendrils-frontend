// icons imports
import { IconPlus } from "@tabler/icons-react";

// other imports
import { Link, useLocation } from "react-router-dom";

// local imports
import { RoutesMap } from "@/AppRoutes";
import { Logo } from "@/components";
import SelectTheme from "./SelectTheme";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="sticky top-0 z-10">
      <div className="navbar bg-base-100 border-b border-b-base-content/30 min-h-[2rem] 2xl:min-h-[4rem]">
        <div className="navbar-start">
          <Link
            to={RoutesMap.HOME.path}
            className="btn btn-sm 2xl:btn-md 2xl:text-xl bg-gradient-to-r from-primary/60 to-primary text-primary-content"
          >
            <Logo className="fill-primary-content" />
            Tendrils
          </Link>
        </div>
        {/* <div className="navbar-center hidden lg:flex"></div> */}
        <div className="navbar-end">
          <div className="tooltip tooltip-bottom" data-tip="Create Tendril">
            <Link
              to={RoutesMap.CREATE.path}
              className="btn btn-sm 2xl:btn-md 2xl:px-3 btn-ghost font-normal"
            >
              <IconPlus />
            </Link>
          </div>
          <SelectTheme />
          <UserDropdown key={location.pathname} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
