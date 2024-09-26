import React, { useEffect, useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import DogCard from './components/DogCard';
import axios from 'axios';

const App = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/10');
        setDogs(response.data.message);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    };
    fetchDogs();
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="dog-gallery">
        {dogs.map((dog, index) => (
          <DogCard key={index} imageUrl={dog} />
        ))}
      </div>
    </>
  );
};

export default App;
