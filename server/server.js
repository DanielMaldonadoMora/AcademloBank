const { app } = require('./app');

// utils
const { db } = require('./utils/database');

//autenticar base de datos

db.authenticate()
  .then(() => {
    console.log('conectado');
  })
  .catch(err => console.log(err));
//sincronizar nuestros modelos en la db

db.sync()
  .then(() => {
    console.log('conectado');
  })
  .catch(err => console.log(err));

//Puerto
const PORT = 5000;
//mandar a escuchar los cambios del servidor
//Asi se hace con express
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}!!`);
});
//808832 max
//329435 elementor
//725717 Berto
