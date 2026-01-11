import { useEffect, useState } from "react";
import ModelCard from "../components/ModelCard";
import { FilterBar } from "../components/FilterBar";
import { getModels } from "../services/models-service";
import { useFilteredModels } from "../hooks/UseFilters";

const Models = () => {
  const [loading, setLoading] = useState(false);
  const [models, setModels] = useState<Model[]>([]);
  const [mobileActiveId, setMobileActiveId] = useState<number | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    filter: "Todos",
    sorting: "none",
  });
  const filteredModels = useFilteredModels(models, selectedFilters);
  const onChangeFilters = (newFilters: Partial<SelectedFilters>) => {
    setSelectedFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setLoading(true);
        const data = await getModels();
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
      <h2 className="text-4xl font-bold text-[var(--title)] mb-7">
        Descubrí todos los modelos
      </h2>
      <FilterBar
        onFiltersChange={onChangeFilters}
        selectedFilters={selectedFilters}
      />
      {loading && (
        <p className="text-center mt-30 animate-pulse">Cargando...</p>
      )}
      {!loading && models !== null && (
        <div className="flex flex-wrap justify-center items-center gap-9 md:gap-30 mt-14">
          {filteredModels.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              isActive={mobileActiveId === model.id}
              onActivate={() => setMobileActiveId(model.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Models;
