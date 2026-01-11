import { Link } from "react-router-dom";
import { menu_items, secondary_items } from "../../utils/consts";

interface MenuProps {
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
}

export const Menu = ({ isMenuOpen, toggleMenuOpen }: MenuProps) => {
  const liStyles = "cursor-pointer hover:underline transition-all";
  const ulStyles = "w-full text-end px-10 md:px-15 space-y-2";
  return (
    <nav
      className={`
        ${!isMenuOpen && "hidden"} 
        flex flex-col items-end bg-white z-40
        sticky w-full md:fixed md:right-0 md:left-auto md:w-[20rem] pt-5
      `}
    >
      <div className="w-full pb-5">
        {menu_items.map((section, index) => (
          <div key={index}>
            <ul className={ulStyles}>
              {section.items.map((item) => (
                <li key={item.label} className={liStyles}>
                  <Link to={item.path} onClick={toggleMenuOpen}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {section.separator && (
              <div className={`${section.separator} h-[1px] my-5 mx-6`} />
            )}
          </div>
        ))}
      </div>
      <ul className={`${ulStyles} bg-[#EFEEEF] space-y-2 py-5`}>
        {secondary_items.map((item) => (
          <li className={liStyles}>
            <Link to={item.path} onClick={toggleMenuOpen}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
