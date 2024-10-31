// src/components/FarmList.tsx
import React from "react";
import { Farm } from "../interfaces/Farm";

interface FarmListProps {
  farms: Farm[];
  onEdit: (farm: Farm) => void;
  onDelete: (id: number) => void;
}

const FarmList: React.FC<FarmListProps> = ({ farms, onEdit, onDelete }) => {
  return (
    <div>
      {farms.map((farm) => (
        <div key={farm.id}>
          <h3>{farm.name}</h3>
          <p>Localização: {farm.location}</p>
          <p>Área: {farm.area}</p>
          <p>Tipo de Cultura: {farm.cropType}</p>
          <button onClick={() => onEdit(farm)}>Editar</button>
          <button onClick={() => onDelete(farm.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default FarmList;
