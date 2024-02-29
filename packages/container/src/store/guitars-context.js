import React, { createContext, useReducer, useContext, useState } from "react";
import axios from "axios";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_GUITARS_BEGIN,
  GET_GUITARS_SUCCESS,
  GET_GUITARS_ERROR,
} from "../actions";

export const GuitarsContext = createContext({
  guitars: [],
  addGuitar: ({ brand, model, price, description }) => {},
  setGuitars: (guitars) => {},
  deleteGuitar: (id) => {},
  updateGuitar: (id, { model, price, brand, description }) => {},
  isSidebarOpen: false,
});

function guitarsReducer(state, action) {
  switch (action.type) {
    // case 'ADD_Guitar':
    //   return [action.payload, ...state];
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      return action.payload.sort();
    case "UPDATE":
      const updatableGuitarIndex = state.findIndex(
        (guitar) => guitar.id === action.payload.id
      );
      const updatableGuitar = state[updatableGuitarIndex];
      const updatedItem = { ...updatableGuitar, ...action.payload.data };
      const updatedGuitars = [...state];
      updatedGuitars[updatableGuitarIndex] = updatedItem;
      return updatedGuitars;
    default:
      return state;
  }
}

export function GuitarsContextProvider({ children }) {
  const [guitarsState, dispatch] = useReducer(guitarsReducer, []);
  const [isSidebarOpen, SetIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
    SetIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
    SetIsSidebarOpen(false);
  };

  function addGuitar(guitarData) {
    dispatch({ type: "ADD", payload: guitarData });
  }

  const fetchGuitars = async (url) => {
    dispatch({ type: GET_GUITARS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_GUITARS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_GUITARS_ERROR });
    }
  };

  const value = {
    guitars: guitarsState,
    addGuitar,
    openSidebar,
    fetchGuitars,
    closeSidebar,
    isSidebarOpen,
  };

  return (
    <GuitarsContext.Provider value={value}>{children}</GuitarsContext.Provider>
  );
}

// make sure use
export const useGuitarsContext = () => {
  return useContext(GuitarsContext);
};
