import { useSelector } from "react-redux";

import { Card, CardContent, CardHeader, Chip, Divider } from "@mui/material";

import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAngular,
  SiDart,
  SiFiles,
  SiFirebase,
  SiFlutter,
  SiJava,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiTypescript,
} from "react-icons/si";
import { TbCSharp } from "react-icons/tb";

import { selectTechnologies } from "../../store/projectsSlice";

const Projects = () => {
  const technologies = useSelector(selectTechnologies);

  const setTechnologyIcon = (technology) => {
    switch (technology) {
      case technologies.flutter:
        return <SiFlutter />;
      case technologies.dart:
        return <SiDart />;
      case technologies.react:
        return <FaReact />;
      case technologies.javascript:
        return <SiJavascript />;
      case technologies.angular:
        return <SiAngular />;
      case technologies.typescript:
        return <SiTypescript />;
      case technologies.java:
      case technologies.javafx:
        return <SiJava />;
      case technologies.csharp:
        return <TbCSharp />;
      case technologies.nodejs:
        return <FaNodeJs />;
      case technologies.sqlite:
        return <SiSqlite />;
      case technologies.mongo:
        return <SiMongodb />;
      case technologies.postgres:
        return <SiPostgresql />;
      case technologies.mysql:
        return <SiMysql />;
      case technologies.sqlserver:
        return <SiMicrosoftsqlserver />;
      case technologies.firestore:
      case technologies.rtdb:
        return <SiFirebase />;
      case technologies.files:
        return <SiFiles />;
      default:
        return;
    }
  };

  const techArray = [];
  for (const key of Object.keys(technologies)) {
    techArray.push({
      ...technologies[key],
      icon: setTechnologyIcon(technologies[key]),
    });
  }

  return (
    <>
      <CardContent>
        <Card sx={{ borderRadius: "8px" }}>
          <CardHeader
            title="Technologies & languages"
            titleTypographyProps={{ variant: "h6" }}
          />
          <Divider />
          <CardContent>
            {techArray.map((tech) => (
              <Chip
                label={tech.name}
                icon={tech.icon}
                sx={{ margin: "4px", pl: "4px" }}
              />
            ))}
          </CardContent>
        </Card>
      </CardContent>
    </>
  );
};

export default Projects;
