import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
const BACKEND_URL = "https://maxs-axes-default-rtdb.firebaseio.com";

export const storeGuitar = async (guitarData) => {
  const response = await axios.post(BACKEND_URL + "/guitars.json", guitarData);
  const id = response.data.name;
  return id;
};

export const addNewGuitar = async (guitarInfo) => {
  await storeGuitar(guitarInfo);
};

export const fetchGuitars = async () => {
  try {
    const response = await axios.get(BACKEND_URL + "/guitars.json");
    const guitars = [];
    const data = response.data;
    for (const key in data) {
      const guitarObj = {
        id: key,
        brand: data[key].brand,
        model: data[key].model,
        price: data[key].price,
        description: data[key].description,
        // userID: data[key].userID,
      };
      guitars.push(guitarObj);
    }
    return guitars;
  } catch (error) {
    console.error("There was an error fetching guitars:", error);
    throw error;
  }
};

// export const updateGuitar = async (id, guitarData) => {

//   const response = await axios.patch(
//     BACKEND_URL + `/inventory/${id}.json`,
//     guitarData
//   );
//   return response.data;
// };

// export const deleteGuitar = (id) => {
//   return axios.delete(BACKEND_URL + `/inventory/${id}.json`);
// };
