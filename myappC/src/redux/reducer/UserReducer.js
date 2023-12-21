const initialState = {
  isAuthenticated: false,
  usersData: {
    userOjb: [],
  },
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, usersData: action.payload, isAuthenticated: true };

    case "LOGOUT":
      return { ...state, usersData: null, isAuthenticated: false };

    default:
      return state;
  }
};

export default UserReducer;
