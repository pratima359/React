import axios from "axios";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from "../reducer/singleProductReducer";
import { mockProductData } from "../components/mockData";

const SingleProductContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  singleProduct: {},
};

export const SingleProductContextProvider = ({ children }) => {
  //below "url" is coming from singleReducer

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      // const response = await axios.get(url);
      const response = mockProductData;
      // const singleProductData = response.data;
      const singleProductData = response;

      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProductData });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SingleProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </SingleProductContext.Provider>
  );
};

////below is written one function to use the "SingleProductContext", by using useContext()

export const useSingleProductContext = () => {
  return useContext(SingleProductContext);
};
