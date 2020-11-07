import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/gabriel.jpg';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Primeiro projeto', 'Segundo projeto']);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    console.log(projects);
  };

  return (
    <>
      <Header title="Project" />

      <img width={300} src={backgroundImage} />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;