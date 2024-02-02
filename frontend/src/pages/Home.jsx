import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { WorldService } from '../services/WorldService';

const Home = () => {
  const [worldData, setWorldData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await WorldService.getAll();
        setWorldData(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <header>
        <h1>Welcome to My React App</h1>
      </header>
      <section>
        <p>This is the home page of my React application. Explore and enjoy!</p>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {worldData && (
          <div>
            <p>Data from WorldService:</p>
            <pre>{JSON.stringify(worldData, null, 2)}</pre>
          </div>
        )}
        <Link to="/world">Go to World</Link>
      </section>
    </div>
  );
};

export default Home;