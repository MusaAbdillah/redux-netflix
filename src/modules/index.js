const { combileReducers } = require("redux")
const {
	reducer: movies
} = require("./movies")

module.exports = combileReducers({
	movies
	// another reducers goes here
})