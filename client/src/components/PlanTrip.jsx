import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AutocompleteInput from "./AutocompleteInput";
import DateRangeInput from "./DateRangeInput";
import Button from "./Button";
import Itinerary from "../assets/itinerary.svg";

const PlanTrip = () => {
  return (
    <div className="flex h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <Header pageType="loggedin" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 ">
          <img
            src={Itinerary}
            alt="Sign Up"
            className="h-24 lg:hidden lg:h-96"
          />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold">
                Planifica tu proximo viaje
              </div>
              <div className="text-sm font-semibold text-neutral-800">
                Crea un itinerario y planifica tus próximos viajes
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <AutocompleteInput
                placeholder="Introduce tu destino"
                leftIcon="mapLocationDot"
              />
              <DateRangeInput placeholder="Desde - Hasta" />
            </div>
            <Button label="¡Vamos, a personalizar!" fullWidth />
          </div>
          <img
            src={Itinerary}
            alt="Sign Up"
            className="h-24 lg:block lg:h-96"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlanTrip;
