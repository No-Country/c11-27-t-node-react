import React from "react";
import InputTags from "../Ui/InputTags";
import Button from "../Ui/Button";
import Itinerary2 from "../../assets/itinerary2.svg";

const CustomizeTrip = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 ">
        <img
          src={Itinerary2}
          alt="Customize Trip Image"
          className="h-24 lg:hidden lg:h-96"
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold">Personaliza tu aventura</div>
            <div className="text-sm font-semibold text-neutral-800">
              Selecciona tus intereses para obtener un itinerario hecho a tu
              medida
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <InputTags
              placeholder="Agrega tus intereses aquí..."
              leftIcon="heart"
            />
          </div>
          <Button label="¡Crea tu aventura!" fullWidth />
        </div>
        <img
          src={Itinerary2}
          alt="Customize Trip Image"
          className="hidden h-24 lg:block lg:h-96"
        />
      </div>
    </div>
  );
};

export default CustomizeTrip;
