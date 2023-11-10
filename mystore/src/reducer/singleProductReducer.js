// # In "state" , data are manipulating by using action's payload.
// # In "action" takes two parameter  1) type and 2) payload. that we are receiving from dispatch() function. this dispatch() sending "type and payloads"

const SingleProductData = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "SET_ERROR":
      return { ...state, isLoading: false, isError: true };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isLoading: false,
        isError: true,
        singleProduct: action.payload,
      };

    default:
      return state;
  }
};

export default SingleProductData;
