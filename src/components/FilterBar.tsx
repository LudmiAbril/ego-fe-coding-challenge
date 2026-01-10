import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { filter_options, sorting_options } from "../utils/consts";

interface FilterBarProps {
  onFiltersChange: (newFilters: Partial<SelectedFilters>) => void;
  selectedFilters: SelectedFilters;
}
export const FilterBar = ({
  onFiltersChange,
  selectedFilters,
}: FilterBarProps) => {
  const [dropdownOpen, setDropdownopen] = useState({
    filter: false,
    sort: false,
  });

  const toggleDropdown = (key: keyof typeof dropdownOpen) => {
    setDropdownopen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const dropdownIcon = (open: boolean) => {
    if (open) {
      return <IoIosArrowUp />;
    }
    return <IoIosArrowDown />;
  };

  return (
    <div className="flex justify-between gap-5 w-full py-2 border-b-1 border-[#D8D8D8] items-center">
      <div className="relative md:flex gap-14 items-center">
        <button
          className="font-semibold text-[#373737] flex items-center gap-2"
          onClick={() => toggleDropdown("filter")}
        >
          Filtrar Por
          <div className="md:hidden">{dropdownIcon(dropdownOpen.filter)}</div>
        </button>
        <div
          className={`
      absolute md:static
      left-0 mt-2 md:mt-0
      z-50 md:z-0
      flex flex-col md:flex-row md:gap-10
      bg-white md:bg-transparent
      rounded-md md:rounded-none
      shadow-lg md:shadow-none
      ${dropdownOpen.filter ? "flex" : "hidden"} md:flex
    `}
        >
          {filter_options.map((opt, index, arr) => (
            <button
              key={index}
              className={`${
                index + 1 !== arr.length &&
                "border-b-1 border-[#D8D8D8] md:border-none"
              }
              px-2 py-3 w-40 md:w-fit text-left md:text-center
          md:px-4 md:py-2
          text-xs md:text-md
          md:rounded-full
          text-[#373737]
          hover:bg-[#F7F7F7]
          ${selectedFilters.filter === opt.label ? "bg-[#F7F7F7]" : ""}
        `}
              onClick={() => {
                onFiltersChange({ filter: opt.label });
                toggleDropdown("filter");
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative inline-block">
        <button
          className="font-semibold text-[#373737] cursor-pointer flex items-center gap-2"
          onClick={() => toggleDropdown("sort")}
        >
          Ordenar Por
          {dropdownIcon(dropdownOpen.sort)}
        </button>
        <ul
          className={`${
            !dropdownOpen.sort && "hidden"
          } w-40 md:w-60 mt-2 absolute right-0 bg-white shadow-lg rounded-md flex flex-col z-50 text-xs md:text-sm`}
        >
          {sorting_options.map((opt, index, arr) => (
            <li
              onClick={() => {
                onFiltersChange({ sorting: opt.value }), toggleDropdown("sort");
              }}
              key={index}
              className={`${
                index + 1 !== arr.length && "border-b-1 border-[#D8D8D8]"
              } ${
                selectedFilters.sorting === opt.value && "bg-[#F7F7F7]"
              } md:px-6 px-2 py-3 hover:bg-[#D1D6D634] cursor-pointer`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
