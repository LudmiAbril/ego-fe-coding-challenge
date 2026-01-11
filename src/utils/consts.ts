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

export const menu_items = [
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

export const secondary_items: MenuItem[] = [
  { label: "Actividades", path: "/actividades" },
  { label: "Servicios al Cliente", path: "/servicios-cliente" },
  { label: "Ventas Especiales", path: "/ventas" },
  { label: "Innovación", path: "/innovacion" },
  { label: "Prensa", path: "/prensa" },
  { label: "Acerca de...", path: "/acerca" },
];