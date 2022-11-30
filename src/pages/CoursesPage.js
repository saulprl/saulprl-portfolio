import { Route } from "react-router-dom";
import CertificateImage from "../components/courses/CertificateImage";
import Courses from "../components/courses/Courses";

const CoursesPage = () => {
  return (
    <>
      <Route path="/courses" render={() => <Courses />} />
      <Route path="/courses/:id" exact render={() => <CertificateImage />} />
    </>
  );
};

export default CoursesPage;
