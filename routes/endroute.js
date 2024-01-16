const express = require('express');
const router = express.Router();

router.get('/btn', (req, res) => {
    res.send(`
      <h1> Ruta Final </h1>
      <p>Bienvenido a la ruta final.</p>
    `);
  });
  
  module.exports = router;