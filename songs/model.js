const Sequelize = require('sequelize')
const sequelize = require('../db')
//const Playlist = require('../playlists/model')

const Song = sequelize.define('songs', {
  title: {
    type: Sequelize.STRING,
    field: 'title',
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING,
    field: 'artist',
    allowNull: false
  },
  album: {
    type: Sequelize.STRING,
    field: 'artist',
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'songs'
})

module.exports = Song