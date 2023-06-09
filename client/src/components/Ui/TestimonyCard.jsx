import React from "react";
import AlexImage from "../../assets/user1.jpg";
import EmmaImage from "../../assets/user2.jpg";
import SofiaImage from "../../assets/user3.jpg";
import RichardImage from "../../assets/user4.jpg";

const images = {
  Alex: {
    src: AlexImage,
    alt: "Foto de perfil de Alex",
  },
  Emma: {
    src: EmmaImage,
    alt: "Foto de perfil de Emma",
  },
  Sofia: {
    src: SofiaImage,
    alt: "Foto de perfil de Sofia",
  },
  Richard: {
    src: RichardImage,
    alt: "Foto de perfil de Richard",
  },
};

const TestimonyCard = ({ imageName, userName, testimony }) => {
  const image = images[imageName];
  return (
    <div className="flex flex-col items-center gap-4 rounded bg-white p-4 text-center shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl lg:w-1/4">
      <img
        src={image.src}
        alt={image.alt}
        className="aspect-square h-24 rounded-full"
      />
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-neutral-900">{userName}</h2>
        <p className="text-base font-normal italic text-neutral-800">
          "{testimony}"
        </p>
      </div>
    </div>
  );
};

export default TestimonyCard;
