import { FiMenu } from "react-icons/fi";
import egoIcon from "../../assets/icons/ego-icon.svg";
import { Menu } from "./Menu";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className="relative">
      <div className="flex justify-between items-center p-4 border-b border-[#CCCCCC]">
        <Link to={"/"}>
          <img src={egoIcon} alt="EGO icon" />
        </Link>
        <div>{/* dos pestañas web */}</div>
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
