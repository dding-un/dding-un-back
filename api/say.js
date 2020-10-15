const { Say, User, Like } = require('../models')
const response = require('../response')

const create = async (req, res) => {
  const { content } = req.body
  const userId = 1

  if (!content)
  return reposnse(res, 400)

  try {
    let created = await Say.create({ content, userId })
    if (!created)
      return reposnse(res, 400)

    return response(res, 201, created)
  } catch (e) {
    console.error(e)
    return reposnse(res, 500)
  }
}

const read = async (req, res) => {
  try {
    let say = await Say.findAll( {
      attributes: ['id', 'content'],
      include: {
        model: User,
        attributes: ['id', 'name']
      }
    })
    
    return response(res, 200, say)
  } catch (e) {
    console.error(e)
    return reposnse(res, 500)
  }
}

const remove = async (req, res) => {
  const { sayId } = req.body
  try {
    let removed = await Say.destroy({ where: { id: sayId } })
    if (!removed)
      return response(res, 400)
    
    return response(res, 200)
  } catch (e) {
    console.error(e)
    return response(res, 500)
  }
}

const like = async (req, res) => {
  const { sayId } = req.body

  try {
    
  } catch (e) {
    console.error(e)
    return response(res, 500)
  }
}

module.exports = {
  create,
  read,
  remove
}