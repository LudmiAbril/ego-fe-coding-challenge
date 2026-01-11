import { useMemo } from "react";
import { filter_options } from "../utils/consts";

export const useFilteredModels = (
  models: Model[],
  selectedFilters: SelectedFilters
) => {
  const sortModels = (models: Model[], sorting: SortKey) => {
    if (sorting === "none") return models;
    return [...models].sort((a, b) => {
      switch (sorting) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "year-asc":
          return a.year - b.year;
        case "year-desc":
          return b.year - a.year;
        default:
          return 0;
      }
    });
  };
  return useMemo(() => {
    const filterOption = filter_options.find(
      (opt) => opt.label === selectedFilters.filter
    );
    const filtered =
      filterOption && filterOption.value.length > 0
        ? models.filter((model) => filterOption.value.includes(model.segment))
        : models;

    return sortModels(filtered, selectedFilters.sorting);
  }, [models, selectedFilters.filter, selectedFilters.sorting]);
};
