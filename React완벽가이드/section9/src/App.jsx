import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import { nanoid } from 'nanoid';
import SelectedProject from './components/SelectedProject';

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
    const prjId = nanoid(8);
    setProjectsState((prev) => {
      const newProject = {
        ...prj,
        id: prjId,
      };
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }
  function handleCancleAddProject() {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: undefined };
    });
  }

  function handleSelectedProject(id) {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: id };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = <SelectedProject project={selectedProject} />;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onSaveProject={handleAddProject}
        onCancle={handleCancleAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="flex h-screen gap-8 my-8">
      <Sidebar
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
