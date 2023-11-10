import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductsContext } from "./productcontext";
import filterReducer from "../reducer/filterReducer";

const FilterProductContext = createContext();

const initialState = {
  filter_Product: [],
  all_Product: [],
  view_grid: true,
  sort_value: "lowest",
  searchFilter: { text: "", category: "All" },
};

export const FilterProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const { products } = useProductsContext();

  useEffect(() => {
    dispatch({ type: "LOAD_ALL_PRODUCT", payload: products });
  }, [products]);

  //for grid creating one function
  const DisplayGrid = () => {
    return dispatch({ type: "LOAD_VIEW_GRID" });
  };
  //for listVIEW creating one function
  const DisplayListView = () => {
    return dispatch({ type: "LOAD_VIEW_LIST" });
  };

  //created function for sorting
  const getSortingValue = (e) => {
    dispatch({ type: "GET_SORT_VALUE", payload: e.target.value });
  };

  //function for filtering data after sorting
  useEffect(() => {
    dispatch({ type: "LOAD_SORT_FILTERED_VALUE", payload: products });
    //below is for product data will display once ,user can search any thing.
    dispatch({
      type: "UPDATED_SEARCHED_FILTERED_PRODUCTS",
    });
    dispatch({
      type: "RESET_SEARCHED_FILTERED_PRODUCTS",
    });
  }, [products, state.sort_value, state.searchFilter]);

  //for search filter creating function
  const updateFilterHandlerValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: "SEARCH_UPDATED_VALUE", payload: { name, value } });
  };

  return (
    <FilterProductContext.Provider
      value={{
        ...state,
        DisplayGrid,
        DisplayListView,
        getSortingValue,
        updateFilterHandlerValue,
      }}
    >
      {children}
    </FilterProductContext.Provider>
  );
};

export const UseFilterProductContext = () => {
  return useContext(FilterProductContext);
};
