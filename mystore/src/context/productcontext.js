import axios from "axios";
import { useContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { Children } from "react";
import { createContext } from "react";
// to import "ProductReducer", we can use by using alias . giving any name in alias.
import reducer from "../reducer/productReducer";
import { mockProductData } from "../components/mockData";

const ProductsContext = createContext();

// const ourApi = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

export const ProductContextProvider = ({ children }) => {
  //after get api data we will store by using useReducer hook

  const [state, dispatch] = useReducer(reducer, initialState);

  //# Below code is for only get apis data
  const getProducts = async () => {
    dispatch({ type: "SET_LOADING" });

    try {
      // const response = await axios.get(ourApi);
      // const products = response.data;
      const response = mockProductData;
      const products = response; //if api is not then we are using mockdata
      //this "products" response we will send in reducer for action, and that we will send by dispatch(). like below example

      dispatch({ type: "SET_PRODUCT_DATA_TO_STATE", payload: products });
    } catch (error) {
      dispatch({ type: "IF_ERROR_DISPLAY_ERROR" });
    }
  };

  //# useEffect is used to render call of functions
  useEffect(() => {
    getProducts();
  }, []);
  //end of code is for only get api data

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

//below is written one function to use the provider
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
