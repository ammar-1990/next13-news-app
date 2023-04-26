import { Bars3Icon } from "@heroicons/react/24/outline";
import NavLinks from "./NavLinks";
import SearchInput from "./SearchInput";
import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";


const Header = () => {

  return (
    <header>
      <div className="flex items-center p-4 md:p-10 w-full">
        <div className="">
          <Bars3Icon className="h-6  cursor-pointer" />
        </div>
<Logo />
        

        <div className=" flex space-x-3 items-center">
          <DarkModeButton />

          <button className=" px-4 hidden sm:block md:px-6 py-2 rounded-full text-xs  text-white capitalize bg-slate-800">
            subscribe now
          </button>
        </div>
      </div>

      <NavLinks />
      <SearchInput />
    </header>
  );
};

export default Header;
