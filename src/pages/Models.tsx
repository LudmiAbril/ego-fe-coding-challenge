import { useEffect, useMemo, useState } from "react";
import ModelCard from "../components/ModelCard";
import { FilterBar } from "../components/FilterBar";
import { filter_options } from "../utils/consts";

const Models = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [models, setModels] = useState<Model[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    filter: "Todos",
    sorting: "none",
  });

  const onChangeFilters = (newFilters: Partial<SelectedFilters>) => {
    setSelectedFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  const sortModels = (models: Model[], sorting: SortKey) => {
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

  const filteredModels = useMemo(() => {
    const filterOption = filter_options.find(
      (opt) => opt.label === selectedFilters.filter
    );

    const filtered =
      filterOption && filterOption.value.length > 0
        ? models.filter((model) => filterOption.value.includes(model.segment))
        : models;

    return sortModels(filtered, selectedFilters.sorting);
  }, [models, selectedFilters]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/api/models`);
        if (!response.ok) throw new Error("Error en la red");
        const data = await response.json();
        setModels(data);
      } catch (error) {
        console.error("Error al obtener modelos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchModels();
  }, []);

  return (
    <div className="min-h-screen mx-5 my-9 md:mx-40 md:my-10">
      <h2 className="text-4xl font-bold text-[#373737] mb-7">
        Descubrí todos los modelos
      </h2>
      <FilterBar
        onFiltersChange={onChangeFilters}
        selectedFilters={selectedFilters}
      />
      {loading && <p className="text-center mt-30">Cargando...</p>}
      {!loading && models !== null && (
        <>
          <div className="flex flex-wrap justify-center items-center gap-9 md:gap-30 mt-14">
            {filteredModels.map((model, index) => (
              <ModelCard key={index} model={model} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Models;
