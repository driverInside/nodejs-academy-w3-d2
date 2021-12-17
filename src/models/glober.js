// const GloberSchema = new mongoose.Schema({ lastName: { type: String, required: true, }})
import { Sequelize, DataTypes } from 'sequelize'
import sequelize from '../db/postgres'

const Glober = sequelize.define('globers', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
})

export default Glober
