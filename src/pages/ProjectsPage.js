import { Route } from "react-router-dom";
import Projects from "../components/projects/Projects";

const ProjectsPage = () => {
  return (
    <>
      <Route path="/projects" exact render={() => <Projects />} />
      <Route path="/projects/:id" exact />
    </>
  );
};

export default ProjectsPage;
