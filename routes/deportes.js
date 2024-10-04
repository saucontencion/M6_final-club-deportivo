const { Router } = require('express');
const { buscartodos} = require('../controllers/deportes')
const router = Router();

router.get('/', buscartodos );
app.post("/",  buscartodos);
  

module.exports = router;