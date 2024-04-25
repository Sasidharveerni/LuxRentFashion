const initialState = { address: '' };

export const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Added address':
      return {
        ...state,
        address: action.payload.address,
      };
    default:
      return state;
  }
};
