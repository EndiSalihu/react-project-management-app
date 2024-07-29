import { useState } from "react";

import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  // Create new project
  const handleStartAddProject = () => {
    setProjects((prev) => ({...prev, selectedProjectId: null}))
  }
  
  // Cancel Project
  const handleCancelAddProject = () => {
    setProjects((prev) => ({...prev, selectedProjectId: undefined}))
  }


  // Save button - add project
  const handleAddProject = (projectData) => {
    const newProject = {...projectData, id: Math.random()};
    setProjects(prev => ({...prev, selectedProjectId: undefined,  projects: [...prev.projects, newProject]}));
  };

  // Select a project (sidebar)
  const handleSelectProject = (id) => {
    setProjects((prev) => ({...prev, selectedProjectId: id}))
  }

  // Delete Project
  const handleDeleteProject = () => {
    setProjects(prev => ({...prev, selectedProjectId: undefined,  projects: prev.projects.filter((project) => project.id !== prev.selectedProjectId)}));
  }

  // Add Tasks
  const handleAddTask = (text) => {
    const newTask = {text: text, projectId: projects.selectedProjectId, id: Math.random()};

    setProjects(prev => ({...prev, tasks: prev.tasks ? [newTask, ...prev.tasks] : [newTask]}));
  };
  

  // Delete Tasks
const handleDeleteTask = (taskId) => {
  setProjects(prev => ({...prev, tasks: prev.tasks.filter(task => task.id !== taskId)}));
};



  // Finding an element by id in array
  const selectedProject = projects.projects.find(project => project.id === projects.selectedProjectId)


  // display the contents
  let content = (
    <SelectedProject
      currentProject={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projects.tasks}
    />
  );


  if(projects.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if(projects.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>

  }


  return (
    <main className="my-14 h-screen flex gap-8 max-lg:gap-3">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        listedProjects={projects.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projects.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
