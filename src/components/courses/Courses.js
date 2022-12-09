import { lazy, Suspense, useMemo, useState } from "react";

import { CardContent, Skeleton } from "@mui/material";

import CertificateImage from "./CertificateImage";

import { courses } from "../../data/data";

const CourseItem = lazy(() => import("./CourseItem"));

const Courses = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificate, setCertificate] = useState(null);

  const showCertificateHandler = (cert) => {
    setCertificate(cert);
    setShowCertificate(true);
  };

  const closeCertificateHandler = () => {
    setShowCertificate(false);
    setCertificate(null);
  };

  const coursesList = useMemo(
    () =>
      courses.map((crs) => (
        <Suspense
          key={crs.id}
          fallback={
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ height: "125px", mx: "auto", mb: "8px" }}
            />
          }
        >
          <CourseItem course={crs} onShowCertificate={showCertificateHandler} />
        </Suspense>
      )),
    []
  );

  return (
    <>
      <CardContent>{coursesList}</CardContent>
      <CertificateImage
        open={showCertificate}
        onClose={closeCertificateHandler}
        image={certificate}
      />
    </>
  );
};

export default Courses;
