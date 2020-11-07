import React, { useState, useEffect } from 'react';

import './App.css';
import backgroundImage from './assets/gabriel.jpg';

import Header from './components/Header';
import api from './services/api';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('repositories');

      setProjects(response.data);
    }
    loadProjects();
  }, []);


  async function handleAddProject() {
    const response = await api.post('repositories', {
      title: 'nenem sendo nenem',
      url: 'link do ennem'
    });

    const project = response.data;

    //setProjects([...projects, `Novo projeto ${Date.now()}`]);
    setProjects([...projects, project]);
  };

  return (
    <>
      <Header title="Project" />

      <img width={300} src={backgroundImage} />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;