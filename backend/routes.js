const express = require('express');
//const connection = require('express-myconnection');
const routes = express.Router();
const app = express();

//Buscador

routes.get('/buscar', (req, res) => {
  //res.send('holis');

  const busqueda = req.query;
  const query = `SELECT * FROM productos WHERE nombre_producto LIKE 'Procesador'`;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(query, (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
  // connection.query(query, (error, results) => {
  //   if (error) throw error;
  //   res.json(results);
  // });
});

/*routes.get('/buscar', (req, res) => {
  const busqueda = req.query.busqueda;
  const query = `SELECT * FROM productos WHERE nombre_producto LIKE '%${busqueda}%' OR descripcion LIKE '%${busqueda}%`;
  express.query(query, (error, res) => {
    if (error) {
      console.error('Error al realizar la búsqueda', error);
      res.status(500).send('Error al realizar la búsqueda');
    } else {
      res.json(res);
    }
  });
}); */

//Get

routes.get('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('SELECT * FROM productos', (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

//Post

routes.post('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query('INSERT INTO productos set ?', [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send('Producto agregado con éxito');
    });
  });
});

/* Plantilla para objeto en POST 
{
  "nombre_producto": "Geforce GTX 3070 MSI",
  "descripcion": "Placa de video Geforce GTX 3070 precio único",
  "categoria": "Placas de video",
  "precio": 260000.33
}
*/

//UPDATE

routes.put('/:idproducto', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      'UPDATE productos set ? WHERE idproducto = ?',
      [req.body, req.params.idproducto],
      (err, rows) => {
        if (err) return res.send(err);

        res.send('Producto actualizado exitosamente');
      }
    );
  });
});

//DELETE

routes.delete('/:idproducto', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      'DELETE FROM productos WHERE idproducto = ?',
      [req.params.idproducto],
      (err, rows) => {
        if (err) return res.send(err);

        res.send('Producto eliminado exitosamente');
      }
    );
  });
});

module.exports = routes;
