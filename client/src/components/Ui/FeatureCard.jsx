import React from "react";
import MapRouteImage from "../../assets/map-route.png";
import AiImage from "../../assets/artificial-intelligence.png";
import HistoryImage from "../../assets/history.png";

const images = {
  mapRoute: {
    src: MapRouteImage,
    alt: "Mapa de rutas icono",
  },
  ai: {
    src: AiImage,
    alt: "Inteligencia artificial icono",
  },
  history: {
    src: HistoryImage,
    alt: "Historial icono",
  },
};

const FeatureCard = ({ imageName, title, description }) => {
  const image = images[imageName];
  return (
    <div className="flex flex-col items-center gap-4 rounded bg-white p-4 text-center shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl lg:w-1/4">
      <img src={image.src} alt={image.alt} className="h-16" />
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
        <p className="text-base font-normal text-neutral-800">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
