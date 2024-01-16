const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => {
    res.send(`
    <h1>Bienvenido</h1>
    <p>${req.dateType}</p>
    <form action='/endroute' method="get">
    <button type="submit">enviar</button>
  </form>
  `);
});


router.use((req, res) => {
    res.status(400).send('<h1>pagina no encontrada</h1>');
});

module.exports = router;

