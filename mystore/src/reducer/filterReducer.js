import { AllCommonFilerSorting } from "../sortingFunction";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_ALL_PRODUCT":
      return {
        ...state,
        filter_Product: action.payload,
        all_Product: action.payload,
      };

    case "LOAD_VIEW_GRID":
      return { ...state, view_grid: true };
    case "LOAD_VIEW_LIST":
      return { ...state, view_grid: false };

    case "GET_SORT_VALUE":
      console.log("action.payloads :>> ", action.payload);
      return { ...state, sort_value: action.payload };

    case "LOAD_SORT_FILTERED_VALUE":
      const finalValue = AllCommonFilerSorting(
        state.sort_value,
        action.payload
      );

      return { ...state, filter_Product: finalValue };

    case "SEARCH_UPDATED_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        searchFilter: {
          ...state.searchFilter,
          [name]: value, //here we get "name" from action.payload so we are passing dynamic data [name] and value. we can also write " text: value"
        },
      };

    case "UPDATED_SEARCHED_FILTERED_PRODUCTS":
      const { all_Product } = state;
      const allProductData = all_Product;
      const { text, category } = state.searchFilter;
      // console.log("allProductData", allProductData);
      let filteredData;

      if (text) {
        filteredData = allProductData.filter((val) => {
          return val.name.toLowerCase().includes(text);
        });
      }

      //for categoryfilter
      if (category) {
        filteredData = allProductData.filter((val) => {
          return val.name.toLowerCase().includes(category);
        });
      }

      return { ...state, filter_Product: filteredData };

    default:
      return state;
  }
};

export default FilterReducer;
