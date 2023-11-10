const ProductReducer = (state, action) => {
  console.log(
    "🚀 ~ file: productReducer.js:2 ~ ProductReducer ~ action:",
    action
  );
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "IF_ERROR_DISPLAY_ERROR":
      return { isError: true, isLoading: false };

    case "SET_PRODUCT_DATA_TO_STATE":
      const featuredFilterData = action.payload.filter((val) => {
        return val.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featuredFilterData,
      };

    default:
      return state;
  }
};

export default ProductReducer;
