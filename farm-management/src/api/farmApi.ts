// src/api/farmApi.ts
import { Farm } from "../interfaces/Farm";

let farms: Farm[] = [
  { id: 1, name: "Fazenda 1", location: "Local 1", area: 50, cropType: "Milho" },
];

export const getFarms = async (): Promise<Farm[]> => {
  return farms;
};

export const addFarm = async (farm: Farm): Promise<void> => {
  farm.id = farms.length + 1;
  farms.push(farm);
};

export const updateFarm = async (updatedFarm: Farm): Promise<void> => {
  farms = farms.map((farm) => (farm.id === updatedFarm.id ? updatedFarm : farm));
};

export const deleteFarm = async (id: number): Promise<void> => {
  farms = farms.filter((farm) => farm.id !== id);
};
