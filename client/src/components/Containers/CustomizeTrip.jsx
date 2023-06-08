import React, { useState } from "react";
import InputTags from "../Ui/InputTags";
import Button from "../Ui/Button";
import { useNavigate } from "react-router-dom";
import Itinerary2 from "../../assets/itinerary2.svg";
import { useDispatch, useSelector } from "react-redux";
import { generateItinerary } from "../../redux/slices/itinerarySlice";
import Loader from "../Ui/Loader";

const CustomizeTrip = ({ setItineraryState, tripData }) => {
  const iduser = localStorage.getItem("iduser");
  const navigate = useNavigate();

  const isLoading = useSelector(state => state.loading);

  const [tags, setTags] = useState([]);

  const dispatch = useDispatch();

  const handleCreateItinerary = () => {
    if (tags.length === 0) {
      alert("Por favor, agrega al menos un interés antes de continuar.");
      return;
    }

    if (tags.length > 1) {
      alert(
        "Por favor, agrega solo un interés. Actualmente no se admite más de un interés.",
      );
      return;
    }

    const itineraryData = {
      ...tripData,
      intereses: tags,
      userid: iduser,
    };

    dispatch(generateItinerary(itineraryData))
      .unwrap()
      .then(result => {
        navigate(`/itinerary/new/${result.ID}`);
      })
      .catch(error => {
        if (error.message) {
          alert("Hubo un error al generar el itinerario. Intenta nuevamente.");
        }
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 lg:shadow-md">
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
              tags={tags}
              setTags={setTags}
            />
          </div>
          <Button
            label="¡Crea tu aventura!"
            fullWidth
            onClick={handleCreateItinerary}
          />
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
