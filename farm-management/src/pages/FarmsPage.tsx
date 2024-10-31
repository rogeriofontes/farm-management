// src/pages/FarmsPage.tsx
import React, { useState, useEffect } from "react";
import { Farm } from "../interfaces/Farm";
import { getFarms, addFarm, updateFarm, deleteFarm } from "../api/farmApi";
import FarmForm from "../components/FarmForm";
import FarmList from "../components/FarmList";

const FarmsPage: React.FC = () => {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [editingFarm, setEditingFarm] = useState<Farm | null>(null);

  useEffect(() => {
    loadFarms();
  }, []);

  const loadFarms = async () => {
    const farms = await getFarms();
    setFarms(farms);
  };

  const handleSaveFarm = async (farm: Farm) => {
    if (farm.id === 0) {
      await addFarm(farm);
    } else {
      await updateFarm(farm);
    }
    setEditingFarm(null);
    loadFarms();
  };

  const handleEditFarm = (farm: Farm) => {
    setEditingFarm(farm);
  };

  const handleDeleteFarm = async (id: number) => {
    await deleteFarm(id);
    loadFarms();
  };

  const handleCancelEdit = () => {
    setEditingFarm(null);
  };

  return (
    <div>
      <h2>Gestão de Fazendas</h2>
      {editingFarm ? (
        <FarmForm farm={editingFarm} onSave={handleSaveFarm} onCancel={handleCancelEdit} />
      ) : (
        <FarmForm onSave={handleSaveFarm} onCancel={handleCancelEdit} />
      )}
      <FarmList farms={farms} onEdit={handleEditFarm} onDelete={handleDeleteFarm} />
    </div>
  );
};

export default FarmsPage;
