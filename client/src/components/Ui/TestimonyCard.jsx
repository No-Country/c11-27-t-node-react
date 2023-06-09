import React from "react";

const images = {
  Alex: {
    src: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Foto de perfil de Alex",
  },
  Emma: {
    src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Foto de perfil de Emma",
  },
  Sofia: {
    src: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Foto de perfil de Sofia",
  },
  Richard: {
    src: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
