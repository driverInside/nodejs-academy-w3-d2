import { v4 as uuidv4 } from 'uuid'
import UserModel from '../models/glober'

const GlobersService = class {
  constuctor () {
    this.UserModel = UserModel
  }

  get () {
    return UserModel.findAll()
  }

  getById (id) {
    return this.UserModel.findOne({ id })
  }

  async create ({ name, password, notes, email }) {
    const id = uuidv4()
    const newGlober = await UserModel.create({
      email,
      password,
      name,
      notes,
      id
    })

    return newGlober
  }

  update (id, data) {
    return false
  }

  delete (id) {
    return id
  }
}

export default GlobersService
