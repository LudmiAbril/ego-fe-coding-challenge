interface MenuProps {
  isMenuOpen: boolean;
}
const menu_items = [
  {
    items: [
      "Modelos",
      "Servicios y Accesorios",
      "Financiación",
      "Reviews y Comunidad",
    ],
    separator: "bg-[#E9E9E9]",
  },
  {
    items: [
      "Toyota Mobility Service",
      "Toyota Gazoo Racing",
      "Toyota Híbridos",
    ],
    separator: "bg-[#D1D1D1]",
  },
  {
    items: ["Concesionarios", "Test Drive", "Contacto"],
    separator: null,
  },
];

const secondary_items = [
  "Actividades",
  "Servicios al Cliente",
  "Ventas Especiales",
  "Innovación",
  "Prensa",
  "Acerca de...",
];

export const Menu = ({ isMenuOpen }: MenuProps) => {
  const liClass =
    "cursor-pointer hover:underline transition-all ";
  return (
    <div
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
                <li key={item} className={liClass}>
                  {item}
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
       {secondary_items.map((item)=> (
        <li className={liClass}>{item}</li>
       ))}
      </ul>
    </div>
  );
};
