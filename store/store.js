const moviesSrc = require('./moviesMock');
const R = require('ramda')

const data = {
    ...moviesSrc
}
 console.log(data)
const getAllMovies = R.always(R.prop("movies", data))

function getMovieById({movieId}) {
    const id= Number(movieId)

    return R.pipe(
        R.prop("movies"),
        R.find(R.propEq("id", id))
    )(data)
}

function getPersonById(ids, role="actors"){
    return R.pipe(
        R.prop(role),
        R.filter(
          R.propSatisfies(R.includes(R.__, ids), 'id')
      ),
      )(data)
}

function getUserById({userId}) {
    const id= Number(movieId)
    return R.find(R.propEq("id", id), movies)
}

module.exports = {
    data,
    getPersonById,
    getUserById,
    getAllMovies,
    getMovieById
}