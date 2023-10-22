const sidebarReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen
      }
    default:
      throw new Error(`No maching "${action.type}" action type`);
  }
}

export default sidebarReducer;