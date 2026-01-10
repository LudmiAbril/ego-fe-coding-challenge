import { useState } from "react";
import { Link } from "react-router-dom";

interface ModelCardProps {
  model: Model;
}
const ModelCard = ({ model }: ModelCardProps) => {
  const [hovered, setHovered] = useState(false);
  const toggleHovered = () => {
    setHovered((prev) => !prev);
  };

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onMouseEnter={toggleHovered}
      onMouseLeave={toggleHovered}
    >
      <h3
        className={`${
          hovered ? "text-[#EB0A1E]" : "text-black"
        } font-bold text-xl transition`}
      >
        {model.name}
      </h3>
      <p className="text-[#191919] text-sm">
        {model.year} | {model.price}
      </p>
      <div className="max-w-[240px] md:max-w-[240px] md:h-[200px] flex items-center justify-center">
        <img
          src={model.thumbnail}
          alt={`Fotografía de ${model.name}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <Link
        to={`/model/${model.id}`}
        className={`${
          hovered ? "opacity-100" : "opacity-0"
        } bg-[#191919] px-8 py-2 rounded-full text-bold text-white cursor-pointer transition hover:bg-white hover:text-black hover:outline-1 text-sm md:text-md`}
      >
        Ver Modelo
      </Link>
    </div>
  );
};

export default ModelCard;
