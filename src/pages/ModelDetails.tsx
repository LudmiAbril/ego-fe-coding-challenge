import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface ModelDetails {}
const ModelDetails = () => {
  const { id } = useParams<{ id: string }>();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [modelDetails, setModelDetails] = useState<ModelDetails>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/api/models/${id}`);
        if (!response.ok) throw new Error("Error en la red");
        const data = await response.json();
        setModelDetails(data);
      } catch (error) {
        console.error("Error al obtener modelos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, []);

  return <div>ModelDetails</div>;
};

export default ModelDetails;
