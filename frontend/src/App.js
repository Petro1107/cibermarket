import './App.css';
import Navigation from './components/Navigation';
import PubCard from './components/PubCard';
import { useEffect, useState } from 'react';

/* hacer el fetch de las cards en este componente para poder pasar los datos
y reutilizarlos en distintas secciones */

function App() {
  const [dataUpdated, setDataUpdated] = useState([true]);
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('http://localhost:9000/cibermarket')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  };

  useEffect(() => {
    getData();
  }, [dataUpdated]);

  return (
    <div className='App'>
      <Navigation />
      <PubCard data={data} />
    </div>
  );
}

export default App;
