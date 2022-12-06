import { useEffect, useState } from "react";

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

import { technologies as techData } from "../../data/data";

const TechnologyChip = (props) => {
  const { technology, clickable, onToggle, selected, sx } = props;

  // const [selected, setSelected] = useState(props.selected);
  const technologies = techData;

  // useEffect(() => {
  //   if (clickable) {
  //     onToggle(technology, selected);
  //   }
  // }, [selected, clickable, technology, onToggle]);

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
    // setSelected((prevState) => !prevState);
    onToggle(technology);
  };

  // useEffect(() => {
  //   if (onToggle) onToggle(technology, selected);
  // }, [onToggle, technology, selected]);

  // const isSelected = () => {
  //   return selected;
  //   // for (const filter of filters) {
  //   //   if (filter.name === technology.name) {
  //   //     return true;
  //   //   }
  //   // }
  // };

  return (
    <Chip
      color={selected ? "primary" : "secondary"}
      label={technology.name}
      icon={icon}
      sx={{ margin: "4px", pl: "4px", ...sx }}
      onClick={clickable ? toggleSelect : null}
    />
  );
};

export default TechnologyChip;
