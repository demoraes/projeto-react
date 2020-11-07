import React, { useState } from 'react';

import './App.css';

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

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;