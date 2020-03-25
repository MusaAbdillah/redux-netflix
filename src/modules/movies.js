const { handleActions } = require("redux-actions")
const FETCH_MOVIES = "movies/FETCH_MOVIES"
const FETCH_MOVIE  = "movies/FETCH_MOVIE"

const initialState = {
	movies: [],
	movie: {}
} 	

// reducer without handleActions
// function reducer(state = initialState, action){
// 	switch(action.type){
// 		case FETCH_MOVIES:
// 			return {

// 			}
// 		case FETCH_MOVIE:
// 			return {

// 			}
// 	}
// }

// reducer with handleActions
module.exports = {
	fetchMoviesActionCreator: (movies) => ({
		type: FETCH_MOVIES,
		movies
	}),
	fetchMovieActionCreator: (index) => ({
		type: FETCH_MOVIE,
		index
	}),
	reducer: handleActions({
		[FETCH_MOVIES]: (state, action) => ({
			...state,
			all: action.movies
		}),
		[FETCH_MOVIE]: (state, action) => ({
			...state,
			current: state.all[action.index - 1]
		})
	}, initialState)
}