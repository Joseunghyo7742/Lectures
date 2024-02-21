import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import { nanoid } from 'nanoid';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(prj) {
    const pjid = nanoid(8);
    setProjectsState((prev) => {
      const newProject = {
        ...prj,
        id: pjid,
      };
      return { ...prev, projects: [...prev.projects, newProject] };
    });
  }
  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSaveProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="flex h-screen gap-8 my-8">
      <Sidebar
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
      />
      {content}
    </main>
  );
}

export default App;
