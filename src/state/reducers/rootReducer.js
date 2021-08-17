import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return { ...state, serviceSearchResults: action.payload };
    case "SET_APP_DATA":
      return { ...state, appData: action.payload, appDataFetched: true };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "SET_SUCCESS_MESSAGE":
      return {
        ...state,
        messageOpen: true,
        messageType: "success",
        message: action.payload,
      };
    case "CLOSE_MESSAGE":
      return {
        ...state,
        messageOpen: false,
      };
    case "SET_LAYOUT_LOAD_ERROR":
      return {
        ...state,
        layoutLoadError: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
