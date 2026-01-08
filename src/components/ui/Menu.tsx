import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  path: string;
}

interface MenuProps {
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
}

const menu_items = [
  {
    items: [
      { label: "Modelos", path: "/modelos" },
      { label: "Servicios y Accesorios", path: "/servicios" },
      { label: "Financiación", path: "/financiacion" },
      { label: "Reviews y Comunidad", path: "/comunidad" },
    ],
    separator: "bg-[#E9E9E9]",
  },
  {
    items: [
      { label: "Toyota Mobility Service", path: "/mobility" },
      { label: "Toyota Gazoo Racing", path: "/gazoo" },
      { label: "Toyota Híbridos", path: "/hibridos" },
    ],
    separator: "bg-[#D1D1D1]",
  },
  {
    items: [
      { label: "Concesionarios", path: "/concesionarios" },
      { label: "Test Drive", path: "/test-drive" },
      { label: "Contacto", path: "/contacto" },
    ],
  },
];

const secondary_items: MenuItem[] = [
  { label: "Actividades", path: "/actividades" },
  { label: "Servicios al Cliente", path: "/servicios-cliente" },
  { label: "Ventas Especiales", path: "/ventas" },
  { label: "Innovación", path: "/innovacion" },
  { label: "Prensa", path: "/prensa" },
  { label: "Acerca de...", path: "/acerca" },
];

export const Menu = ({ isMenuOpen, toggleMenuOpen }: MenuProps) => {
  const liClass = "cursor-pointer hover:underline transition-all ";
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
            <ul className="w-full text-end px-10 md:px-15 space-y-2">
              {section.items.map((item) => (
                <li key={item.label} className={liClass}>
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
      <ul className="w-full text-end bg-[#EFEEEF] px-10 md:px-15 py-6 space-y-2 ">
        {secondary_items.map((item) => (
          <li className={liClass}>
            <Link to={item.path} onClick={toggleMenuOpen}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
