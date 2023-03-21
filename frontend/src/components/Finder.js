import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Finder() {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:9000/cibermarket/buscar?${busqueda}`)
      .then((res) => {
        //setResultados(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error('Error al realziar la búsqueda', err);
      });
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={busqueda} onChange={handleChange} />
      <button type='submit'>Buscar</button>
    </form>
  );
}

export default Finder;
