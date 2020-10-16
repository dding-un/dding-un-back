const { User } = require('../models')
const response = require('../response')

const login = async (req, res) => {
  const { uid, pw } = req.body
  if (!uid || !pw)
    return response(res, 400)
  try {
    let user = await User.findOne({ where: { uid, pw } })
    if (!user)
      return response(res, 404)

    return response(res, 200, user)
  } catch (e) {
    console.error(e)
    return response(res, 500)
  }
}

module.exports = {
  login
}