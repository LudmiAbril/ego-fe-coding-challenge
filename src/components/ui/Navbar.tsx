import { FiMenu } from "react-icons/fi";
import egoIcon from "../../assets/icons/ego-icon.svg";
import { Menu } from "./Menu";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Link, NavLink, useMatch } from "react-router-dom";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const modelsMatch = useMatch("/modelos");
  const modelDetailMatch = useMatch("/modelos/:id");
  return (
    <nav className="relative">
      <div className="flex justify-between items-center p-4 border-b border-[#CCCCCC]">
        <div className="flex items-center gap-40">
          <Link to={"/"}>
            <img src={egoIcon} alt="EGO icon" />
          </Link>

          <div className="hidden md:flex relative h-full">
            <NavLink
              to="/modelos"
              end
              className={`relative px-7 text-sm font-semibold  ${
                modelsMatch ? "text-[#D0021B]" : "text-gray-400"
              }`}
            >
              Modelos
              {modelsMatch && (
                <span className="absolute left-0 bottom-[-26px] w-full h-[3px] bg-[#D0021B]" />
              )}
            </NavLink>
            <span
              className={`relative px-7 text-sm font-semibold ${
                modelDetailMatch ? "text-[#D0021B]" : "text-gray-400"
              }`}
            >
              Ficha de modelo
              {modelDetailMatch && (
                <span className="absolute left-0 bottom-[-26px] w-full h-[3px] bg-[#D0021B]" />
              )}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-sm">{!isMenuOpen ? "Menú" : "Cerrar"}</p>
          <button onClick={toggleMenu} className="cursor-pointer">
            {!isMenuOpen ? (
              <FiMenu fontSize={"1.5rem"} />
            ) : (
              <CgClose fontSize={"1.5rem"} />
            )}
          </button>
        </div>
      </div>
      <Menu isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenu} />
    </nav>
  );
};
