const moviesSrc = require('./moviesMock');
const R = require('ramda')
const JWT_SECRET_KEY = "qwerty :)"
const jwt = require('jsonwebtoken');
const usersLens = R.lensProp('users');

let data = {
    ...moviesSrc,
    users: []
}

const getAllMovies = R.always(R.prop("movies", data))

function getMovieById({ movieId }) {
    const id = Number(movieId)
    return R.pipe(
        R.prop("movies"),
        R.find(R.propEq("id", id))
    )(data)
}

function getPersonById(ids, role = "actors") {
    return R.pipe(
        R.prop(role),
        R.filter(
            R.propSatisfies(R.includes(R.__, ids), 'id')
        ),
    )(data)
}

function getUserById({ id }) {
    const res =  R.pipe(
        R.view(usersLens),
        R.find(R.propEq("id", id))
    )(data)
    return res
}
function getUserByUsername({ username }) {
    return R.pipe(
        R.view(usersLens),
        R.find(R.propEq("username", username))
    )(data)
}

function createUser(user) {
    const existingUser = getUserByUsername(user)
    if(existingUser){
        throw new Error ('User already exists')
    }
    R.view(usersLens)
    data = R.over(usersLens, R.append(user), data);
    return user
}

function getAllUsers() {
    return R.prop("users", data)
}

function findUser({ username, password }) {
    const user = R.pipe(
        R.view(usersLens),
        R.filter(
            R.where({ 
                username: R.equals(username), 
                password: R.equals(password) }
            )
        ),
        R.head
    )(data)
    return user
}

function getUserByToken(token){
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
    return getUserById(payload)
}

module.exports = {
    data,
    getPersonById,
    getUserById,
    getAllMovies,
    getMovieById,
    createUser,
    findUser,
    getUserByToken,
    getAllUsers
}