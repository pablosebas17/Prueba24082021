var express = require('express');
var router = express.Router();
//Productos
const products = require('../Utils/products');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'S&M Print' });
});

router.get('/contacto', function(req, res, next) {
  res.render('pages/contacto', { title: 'S&M | Contacto' });
});

router.get('/productos', (req, res) => {

  products.getAllProducts((error, listOfProducts) => {

    if(error) {
      return res.send('FATAL ERROR');
    }
    
    const JSONProducts = JSON.parse(listOfProducts);
    return res.render('pages/productos', {
      title: 'S&M | Productos',
      JSONProducts
    });
  });
});

router.get('/nosotros', function(req, res, next) {
  res.render('pages/nosotros',{ title: 'S&M Print | Nosotros' });
});

module.exports = router;
