export const initialState = {
   favourites: []
};

export const reducer = (state, action) => {
   console.log(action)

   switch (action.type) {
      case 'ADD_TO_THE_FAVOURITE_LIST':
         return {
            ...state,
            favourites: [...state.favourites, ...action.favourites]
         };

      case 'REMOVE_FROM_THE_FAVOURITE_LIST':
         return {
            ...state,
            favourites: state.favourites.filter(product => product.id !== action.id)
         };

      default:
         return state;
   }
}

export default reducer;