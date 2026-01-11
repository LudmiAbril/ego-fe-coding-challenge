interface CarrouselCardProps {
  feature: ModelFeature;
}
const CarrouselCard = ({ feature }: CarrouselCardProps) => {
  return (
    <div className="flex flex-col px-2 md:max-w-[300px] text-[var(--title)]">
      <div className="w-full max-w-[250px] aspect-video mb-4 overflow-hidden rounded-md">
        <img
          src={feature.image}
          alt={feature.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="font-bold text-lg mb-2">{feature.name}</h4>
      <div
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: feature.description }}
      />
    </div>
  );
};

export default CarrouselCard;
