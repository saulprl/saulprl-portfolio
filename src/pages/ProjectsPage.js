import { Route } from "react-router-dom";

import ProjectDetails from "../components/projects/ProjectDetails";
import Projects from "../components/projects/Projects";

const ProjectsPage = () => {
  return (
    <>
      <Route path="/projects" exact render={() => <Projects />} />
      <Route path="/projects/:id" render={() => <ProjectDetails />} />
    </>
  );
};

export default ProjectsPage;
