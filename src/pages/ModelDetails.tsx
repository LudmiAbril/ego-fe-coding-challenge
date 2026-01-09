import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div className="flex flex-col items-center mx-5 my-9 md:mx-40 md:my-10">
      {loading === true && <p>Loading...</p>}
      {modelDetails !== null && (
        <>
          <div className="flex flex-col md:flex-row items-center gap-9">
            <div className="w-full max-w-[550px]">
              <img
                src={modelDetails?.photo}
                alt={`Fotografía de ${modelDetails?.name}`}
                className="w-full h-auto object-contain"
              />
            </div>
            <div>
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
          <div>{/* carrousel */}</div>
          <div>
            <div>
              <p></p>
              <p></p>
            </div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ModelDetails;
