const mongoose = require('mongoose')
const { mongodb } = require('../Key/key')


mongoose.connect(mongodb.Uri, {
  useNewUrlParser: true
}).then(db => console.log('Base de datos conectada'))
  .catch(err => console.log(err))