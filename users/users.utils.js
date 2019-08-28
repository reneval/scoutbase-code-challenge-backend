const jwt = require('jsonwebtoken');
const R = require('ramda')
const JWT_SECRET_KEY = "qwerty :)"

async function getUserFromRequest(req) {
    const token = R.pipe(
        R.pick(['cookies', 'headers']),
        R.map(R.prop('token')),
        R.values,
        R.filter(R.complement(R.isNil)),
        R.head,
        R.defaultTo(""),
    )(arr)
    const payload = jwt.verify(token, JWT_SECRET_KEY)
    const userId = R.prop('sub', payload)
    if(userId) {
        const user = getUserById(userId)
        if(user){
            return user
        }
    }
    return null
}
module.exports =  getUserFromRequest