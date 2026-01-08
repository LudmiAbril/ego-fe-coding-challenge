import { FiMenu } from "react-icons/fi";
import egoIcon from "../../assets/icons/ego-icon.svg";
import { Menu } from "./Menu";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className="relative">
      <div className="flex justify-between items-center p-4 border-b border-[#CCCCCC]">
        <div>
          <img src={egoIcon} alt="EGO icon" />
        </div>
        <div>{/* dos pestañas web */}</div>
        <button
          className="cursor-pointer flex items-center gap-3"
          onClick={toggleMenu}
        >
          <p className="text-sm">{!isMenuOpen ? "Menú" : "Cerrar"}</p>
          <button>
            {!isMenuOpen ? (
              <FiMenu fontSize={"1.5rem"} />
            ) : (
              <CgClose fontSize={"1.5rem"} />
            )}
          </button>
        </button>
      </div>
      <Menu isMenuOpen={isMenuOpen} />
    </nav>
  );
};
