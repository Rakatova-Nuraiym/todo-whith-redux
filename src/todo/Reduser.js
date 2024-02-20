const Reducer = (state = [], action) => {
  switch (action.type) {
    case "post":
      return [...state, action.payload];
    case "delete":
      return state.filter((item) => item.id !== action.payload.id);
    case "deleteAll":
      return [];
    case "edit":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload.updates };
        }
        return item;
      });
    case "isCompleted":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    default:
      return state;
  }
};

export default Reducer;
