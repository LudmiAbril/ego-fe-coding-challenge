import { Link } from "react-router-dom";

interface ModelCardProps {
  model: Model;
  isActive: boolean;
  onActivate: () => void;
}
const ModelCard = ({ model, isActive, onActivate }: ModelCardProps) => {
  return (
    <div
      className="group flex flex-col items-center cursor-pointer"
      onTouchEnd={onActivate}
    >
      <h3
        className={`
          font-bold text-xl transition
          ${
            isActive
              ? "text-[var(--active)]"
              : "text-black group-hover:text-[var(--active)]"
          }
        `}
      >
        {model.name}
      </h3>
      <p className="text-sm">
        {model.year} | ${new Intl.NumberFormat("es-AR").format(model.price)}
      </p>
      <div className="max-w-[240px] md:max-w-[240px] md:h-[200px] flex items-center justify-center">
        <img
          src={model.thumbnail}
          alt={`Fotografía del modelo ${model.name}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <Link
        to={`/modelos/${model.id}`}
        className={` ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        } bg-[#191919] px-8 py-2 rounded-full text-white cursor-pointer transition hover:bg-white hover:text-black hover:outline-1 text-sm md:text-md`}
      >
        Ver Modelo
      </Link>
    </div>
  );
};

export default ModelCard;
