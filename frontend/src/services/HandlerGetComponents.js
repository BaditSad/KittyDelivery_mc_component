import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getComponents = async () => {
  try {
    const response = await axios.get(`${API_URL}/components`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des composants:", error);
    throw error;
  }
};
