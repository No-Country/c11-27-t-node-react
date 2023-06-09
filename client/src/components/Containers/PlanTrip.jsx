import React, { useState } from "react";
import AutocompleteInput from "../Ui/AutocompleteInput";
import DateRangeInput from "../Ui/DateRangeInput";
import Button from "../Ui/Button";
import Itinerary from "../../assets/itinerary.svg";
import { format } from "date-fns";
import es from "date-fns/locale/es";

const PlanTrip = ({ setItineraryState, setTripData }) => {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handlePlanTrip = () => {
    const formatDate = date => {
      return date ? format(date, "d 'de' MMMM 'de' yyyy", { locale: es }) : "";
    };

    setTripData({
      destino: location,
      fechainicio: formatDate(startDate),
      fechafinal: formatDate(endDate),
    });

    setItineraryState("customize-trip");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 lg:shadow-md">
        <img
          src={Itinerary}
          alt="Plan Trip Image"
          className="h-24 lg:hidden lg:h-96"
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold">Planifica tu proximo viaje</div>
            <div className="text-sm font-semibold text-neutral-800">
              Crea un itinerario y planifica tus próximos viajes
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <AutocompleteInput
              placeholder="Introduce tu destino"
              leftIcon="mapLocationDot"
              value={location}
              setValue={setLocation}
            />
            <DateRangeInput
              placeholder="Desde - Hasta"
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </div>
          <Button
            label="¡Vamos, a personalizar!"
            fullWidth
            onClick={handlePlanTrip}
          />
        </div>
        <img
          src={Itinerary}
          alt="Plan Trip Image"
          className="hidden h-24 lg:block lg:h-96"
        />
      </div>
    </div>
  );
};

export default PlanTrip;
