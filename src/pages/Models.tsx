import { useEffect, useState } from "react";
import ModelCard from "../components/ModelCard";

const Models = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(false);

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
    <div className="mx-5 my-9 md:mx-40 md:my-10">
      <h2 className="text-4xl font-bold text-[#373737] mb-7">
        Descubrí todos los modelos{" "}
      </h2>
      <div>filter bar</div>
      {loading && <p>Loading...</p>}
      {models !== null && (
        <div className="flex flex-wrap justify-center items-center gap-9 md:gap-14">
          {models.map((model, index) => (
            <ModelCard key={index} model={model} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Models;
