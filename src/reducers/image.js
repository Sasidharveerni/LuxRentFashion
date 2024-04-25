const initialState = { img: [], count: [], prices: [], };

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_to_cart':
      const existingIndex = state.img.findIndex((imgUrl) => imgUrl === action.payload.img);
      if (existingIndex !== -1) {
        const newCount = [...state.count];
        newCount[existingIndex]++;

        const newPrices = [...state.prices];
        newPrices[existingIndex] = action.payload.price * newCount[existingIndex];

        return { ...state, count: newCount, prices: newPrices };
      } else {
        return {
          ...state,
          img: [...state.img, action.payload.img],
          count: [...state.count, 1],
          prices: [...state.prices, action.payload.price],
        };
      }
    case 'Remove_from_cart':
      console.log('Attempted to remove');
      return {
        ...state,
        img: state.img.filter((imgUrl) => imgUrl !== action.payload),
        count: state.count.filter((_, index) => state.img[index] !== action.payload),
        prices: state.prices.filter((_, index) => state.img[index] !== action.payload),
      };
    default:
      return state;
  }
};