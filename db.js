const Sequelize = require('sequelize')

const connectionString = 'postgres://qzieokwmdtvowh:188f62abfbf6a7451b3ddc03c3386b09865b69edb4de8afc8f2204ee2681cab8@ec2-54-75-231-3.eu-west-1.compute.amazonaws.com:5432/ddbn56g37im49d' || 'http://localhost:4000'

//
//const connectionString = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const sequelize = new Sequelize(connectionString, {define: { timestamps: false }})

sequelize.sync({/*force:true*/} )
  .then(() => {
    console.log('Sequelize updated database schema')
  })
  .catch(console.error)

module.exports = sequelize