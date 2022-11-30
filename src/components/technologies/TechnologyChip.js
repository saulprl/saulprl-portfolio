import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Chip } from "@mui/material";

import { FaNodeJs, FaReact } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
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

import {
  addFilter,
  removeFilter,
  resetProjects,
  selectFilters,
  selectTechnologies,
} from "../../store/projectsSlice";

const TechnologyChip = (props) => {
  const { technology, clickable, sx } = props;

  const [selected, setSelected] = useState(false);

  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const technologies = useSelector(selectTechnologies);

  useEffect(() => {
    if (clickable) {
      if (selected) {
        dispatch(addFilter({ technology: technology }));
      } else {
        dispatch(resetProjects());
        dispatch(removeFilter({ technology: technology }));
      }
    }
  }, [dispatch, selected, clickable, technology]);

  let icon;
  switch (technology) {
    case technologies.flutter:
      icon = <SiFlutter />;
      break;
    case technologies.dart:
      icon = <SiDart />;
      break;
    case technologies.react:
      icon = <FaReact />;
      break;
    case technologies.javascript:
      icon = <SiJavascript />;
      break;
    case technologies.angular:
      icon = <SiAngular />;
      break;
    case technologies.typescript:
      icon = <SiTypescript />;
      break;
    case technologies.java:
    case technologies.javafx:
      icon = <SiJava />;
      break;
    case technologies.csharp:
      icon = <TbCSharp />;
      break;
    case technologies.nodejs:
      icon = <FaNodeJs />;
      break;
    case technologies.sqlite:
      icon = <SiSqlite />;
      break;
    case technologies.mongo:
      icon = <SiMongodb />;
      break;
    case technologies.postgres:
      icon = <SiPostgresql />;
      break;
    case technologies.mysql:
      icon = <SiMysql />;
      break;
    case technologies.sqlserver:
      icon = <SiMicrosoftsqlserver />;
      break;
    case technologies.firebase:
      icon = <SiFirebase />;
      break;
    case technologies.files:
      icon = <SiFiles />;
      break;
    default:
      icon = <GrTechnology />;
      break;
  }

  const toggleSelect = () => {
    setSelected((prevState) => !prevState);
  };

  const isSelected = () => {
    if (selected) {
      return true;
    }
    for (const filter of filters) {
      if (filter.name === technology.name) {
        return true;
      }
    }
    return false;
  };

  return (
    <Chip
      color={isSelected() ? "primary" : "default"}
      label={technology.name}
      icon={icon}
      sx={{ margin: "4px", pl: "4px", ...sx }}
      onClick={clickable ? toggleSelect : null}
    />
  );
};

export default TechnologyChip;
