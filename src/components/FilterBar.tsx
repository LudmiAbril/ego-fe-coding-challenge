import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { filter_options, sorting_options } from "../utils/consts";

type DropdownKey = "filter" | "sort" | null;

interface FilterBarProps {
  onFiltersChange: (newFilters: Partial<SelectedFilters>) => void;
  selectedFilters: SelectedFilters;
}
export const FilterBar = ({
  onFiltersChange,
  selectedFilters,
}: FilterBarProps) => {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const dropdownIcon =
    openDropdown === "filter" ? <IoIosArrowUp /> : <IoIosArrowDown />;
  const triggerButtonClass =
    "font-semibold text-[#373737] flex items-center gap-2";
  const dropdownContainerClass =
    "bg-white shadow-lg rounded-md z-50 text-[#191919]";
  const dropdownItemBaseClass = "px-2 py-3 cursor-pointer transition-colors";

  const toggleDropdown = (key: DropdownKey) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const handleFilterClick = (label: string) => {
    onFiltersChange({ filter: label });
    toggleDropdown("filter");
  };

  return (
    <nav className="flex justify-between gap-5 w-full py-2 border-b-1 border-[#D8D8D8] items-center">
      <div className="relative md:flex gap-14 items-center">
        <button
          className="font-semibold text-[#373737] flex items-center gap-2"
          onClick={() => toggleDropdown("filter")}
        >
          Filtrar Por
          <div className="md:hidden">{dropdownIcon}</div>
        </button>
        <ul
          className={`
              ${dropdownContainerClass}
      absolute md:static
      left-0 mt-2 md:mt-0 md:z-0 flex flex-col md:flex-row md:gap-10 md:bg-transparent md:rounded-none md:shadow-none
      ${openDropdown === "filter" ? "flex" : "hidden"} md:flex w-40
    `}
        >
          {filter_options.map((opt, index, arr) => (
            <li
              key={opt.label}
              className={`${
                index + 1 !== arr.length &&
                "border-b-1 border-[#D8D8D8] md:border-none"
              }
              ${dropdownItemBaseClass} md:w-fit text-left md:text-center
          md:px-4 md:py-2
          text-xs md:text-base
          md:rounded-full
          hover:bg-[#F7F7F7]
          ${selectedFilters.filter === opt.label ? "bg-[#F7F7F7]" : ""}
        `}
              onClick={() => {
                handleFilterClick(opt.label);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative inline-block">
        <button
          className={`${triggerButtonClass} cursor-pointer`}
          onClick={() => toggleDropdown("sort")}
        >
          Ordenar Por
          {dropdownIcon}
        </button>
        <ul
          className={`${
            openDropdown !== "sort" && "hidden"
          } ${dropdownContainerClass} w-43 md:w-60 mt-2 absolute right-0 flex flex-col text-xs md:text-sm`}
        >
          {sorting_options.map((opt, index, arr) => (
            <li
              onClick={() => {
                onFiltersChange({ sorting: opt.value }), toggleDropdown("sort");
              }}
              key={opt.label}
              className={`${
                index + 1 !== arr.length && "border-b-1 border-[#D8D8D8]"
              } ${
                selectedFilters.sorting === opt.value && "bg-[#F7F7F7]"
              } md:px-6 ${dropdownItemBaseClass} hover:bg-[#D1D6D634] `}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
