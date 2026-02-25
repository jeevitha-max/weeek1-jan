
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data));
  }, []);

  return (
    <div>
      <h1>Freelance Marketplace</h1>
      {projects.map(p => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p>Budget: {p.budget}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
