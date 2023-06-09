import React from "react";
import Button from "../Ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getItinerary } from "../../redux/slices/historySlice";

const HistoryCard = ({ destino, fechainicio, fechafinal, ID_itinerario }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    await dispatch(getItinerary(ID_itinerario));
    navigate(`/itinerary/history/${ID_itinerario}`);
  };

  return (
    <div className="gap-1 rounded bg-neutral-200 p-2 shadow-lg">
      <div>
        <div className="text-lg font-medium text-neutral-800">{destino}</div>
        <div className="text-sm font-normal text-neutral-600">{`${fechainicio} - ${fechafinal}`}</div>
      </div>
      <div className="flex items-center justify-end">
        <Button
          label="Ver itinerario"
          variant="text"
          iconPosition="right"
          iconName="arrowRight"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default HistoryCard;
