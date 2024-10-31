// src/components/FarmForm.tsx
import React, { useState, useEffect } from "react";
import { Farm } from "../interfaces/Farm";

interface FarmFormProps {
  farm?: Farm;
  onSave: (farm: Farm) => void;
  onCancel: () => void;
}

const FarmForm: React.FC<FarmFormProps> = ({ farm, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Farm>({
    id: farm ? farm.id : 0,
    name: farm ? farm.name : "",
    location: farm ? farm.location : "",
    area: farm ? farm.area : 0,
    cropType: farm ? farm.cropType : "",
  });

  useEffect(() => {
    if (farm) setFormData(farm);
  }, [farm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nome" value={formData.name} onChange={handleChange} />
      <input name="location" placeholder="Localização" value={formData.location} onChange={handleChange} />
      <input name="area" placeholder="Área" type="number" value={formData.area} onChange={handleChange} />
      <input name="cropType" placeholder="Tipo de Cultura" value={formData.cropType} onChange={handleChange} />
      <button type="submit">Salvar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default FarmForm;
