import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carrousel } from "../components/Carrousel";
const ModelDetails = () => {
  const { id } = useParams<{ id: string }>();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [modelDetails, setModelDetails] = useState<Model>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/api/models/${id}`);
        if (!response.ok) throw new Error("Error en la red");
        const data = await response.json();
        console.log(data);
        setModelDetails(data);
      } catch (error) {
        console.error("Error al obtener modelos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className="flex flex-col items-center py-9 md:py-14 pb-14 md:pb-30">
      {loading === true && <p className="text-center mt-50">Cargando...</p>}
      {!loading && modelDetails !== null && (
        <>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-20 mb-10 px-[15px]">
            <div className="w-full max-w-[300px] md:max-w-[600px]">
              <img
                src={modelDetails?.photo}
                alt={`Fotografía de ${modelDetails?.name}`}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="max-w-[600px]">
              <p className="font-semibold mb-[8px] text-[#373737] text-lg">
                {modelDetails?.name}
              </p>
              <h3 className="text-3xl font-bold text-[#373737] mb-[20px]">
                {modelDetails?.title}
              </h3>
              <div
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: modelDetails?.description }}
              />
            </div>
          </div>
          <Carrousel modelFeatures={modelDetails?.model_features ?? []} />
          <div className="flex flex-col gap-20 md:gap-40 mt-20 px-[15px]">
            {modelDetails?.model_highlights?.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col flex-col-reverse items-center gap-8 md:gap-20 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="max-w-[400px]">
                  <h4 className="text-[20px] text-[#373737] font-semibold mb-4">
                    {item.title}
                  </h4>
                  <div
                    className="text-gray-500 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
                <img
                  src={item.image}
                  alt="imagen"
                  className="w-120 rounded-md"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ModelDetails;
