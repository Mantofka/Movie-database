export const initialState = {
    movies: []
};

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [...state.movies, action.item]
            }
    }
}


export default reducer;