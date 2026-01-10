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