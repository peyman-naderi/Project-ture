import { TbAirBalloon } from "react-icons/tb";
import { navLinks } from "@/Constant/Constant";
import Link from "next/link";
const Nav = () => {
  return (
    <div className="bg-blue-950 transition-all duration-200 h-[12vh] z-[1000]">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            Tripi
          </h1>
        </div>
        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="group relative text-white text-base font-medium w-fit">
                  {link.label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-300 scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
                </p>
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
