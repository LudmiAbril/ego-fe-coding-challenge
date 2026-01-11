import { FiMenu } from "react-icons/fi";
import egoIcon from "../../assets/icons/ego-icon.svg";
import { Menu } from "./Menu";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Link, NavLink, useMatch } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const modelsMatch = useMatch("/modelos");
  const modelDetailMatch = useMatch("/modelos/:id");
  const underlineStyles =
    "absolute left-0 bottom-[-26px] w-full h-[3px] bg-[var(--active)]";
  const tabStyles = (match: boolean) => {
    return `relative px-7 text-sm font-semibold  ${
      match ? "text-[#D0021B]" : "text-gray-400"
    }`;
  };
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const menuIcon = !isMenuOpen ? (
    <FiMenu fontSize={"1.5rem"} />
  ) : (
    <CgClose fontSize={"1.5rem"} />
  );
  const menuText = !isMenuOpen ? "Menú" : "Cerrar";

  return (
    <nav className="relative">
      <div className="flex justify-between items-center p-4 border-b border-[#CCCCCC]">
        <div className="flex items-center gap-40">
          <Link to={"/"}>
            <img src={egoIcon} alt="Logo de EGO" />
          </Link>
          <div className="hidden md:flex relative h-full">
            <NavLink
              to="/modelos"
              end
              className={tabStyles(Boolean(modelsMatch))}
            >
              Modelos
              {modelsMatch && <span className={underlineStyles} />}
            </NavLink>
            <span className={tabStyles(Boolean(modelDetailMatch))}>
              Ficha de modelo
              {modelDetailMatch && <span className={underlineStyles} />}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm">{menuText}</p>
          <button onClick={toggleMenu} className="cursor-pointer">
            {menuIcon}
          </button>
        </div>
      </div>
      <Menu isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenu} />
    </nav>
  );
};
