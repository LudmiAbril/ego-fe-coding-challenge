import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export const filter_options: { label: string; value: string[] }[] = [
  { label: "Todos", value: [] },
  { label: "Autos", value: ["Sedan", "Hatchback"] },
  { label: "Pickups y comerciales", value: ["Pickups y Comerciales"] },
  { label: "SUVs y Crossovers", value: ["SUVs"] },
];

export const sorting_options: { label: string; value: SortKey }[] = [
  { label: "Nada", value: "none" },
  { label: "De menor a mayor precio", value: "price-asc" },
  { label: "De mayor a menor precio", value: "price-desc" },
  { label: "Más nuevos primero", value: "year-desc" },
  { label: "Más viejos primero", value: "year-asc" },
];
interface FilterBarProps {
  onFiltersChange: (newFilters: Partial<SelectedFilters>) => void;
  selectedFilters: SelectedFilters;
}
export const FilterBar = ({
  onFiltersChange,
  selectedFilters,
}: FilterBarProps) => {
  const [isSortMenuOpen, setIsSortMenuOpen] = useState<boolean>(false);
  const toggleSortDropdown = () => {
    setIsSortMenuOpen((prev) => !prev);
  };
  const dropdownIcon = isSortMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />;

  return (
    <div className="flex justify-between gap-5 w-full py-2 border-b-1 border-[#D8D8D8] items-center">
      <div className="flex gap-14 items-center">
        <button className="font-semibold text-[#373737] cursor-pointer md:cursor-auto">
          Filtrar Por
        </button>
        <div className="flex gap-10 md:flex hidden">
          {filter_options.map((opt, index) => (
            <button
              key={index}
              className={`${
                selectedFilters.filter === opt.label && "bg-[#F7F7F7]"
              } cursor-pointer px-4 py-2 rounded-full text-[#373737] hover:bg-[#F7F7F7]`}
              onClick={() => onFiltersChange({ filter: opt.label })}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative inline-block">
        <button
          className="font-semibold text-[#373737] cursor-pointer flex items-center gap-2"
          onClick={toggleSortDropdown}
        >
          Ordenar Por
          {dropdownIcon}
        </button>
        <ul
          className={`${
            !isSortMenuOpen && "hidden"
          } w-60 mt-2 absolute right-0 bg-white shadow-lg rounded-md flex flex-col z-50 text-sm`}
        >
          {sorting_options.map((opt, index, arr) => (
            <li
              onClick={() => {
                onFiltersChange({ sorting: opt.value }), toggleSortDropdown();
              }}
              key={index}
              className={`${
                index + 1 !== arr.length && "border-b-1 border-[#D8D8D8]"
              } ${
                selectedFilters.sorting === opt.value && "bg-[#F7F7F7]"
              } px-6 py-3 hover:bg-[#D1D6D634] cursor-pointer`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
