import { Chip } from "@mui/material";

const TechnologyChip = (props) => {
  const { technology, clickable, onToggle, selected, sx } = props;

  const toggleSelect = () => {
    onToggle(technology, selected);
  };

  return (
    <Chip
      color={selected ? "primary" : "secondary"}
      label={technology.name}
      icon={technology.icon}
      sx={{ margin: "4px", pl: "4px", ...sx }}
      onClick={clickable ? toggleSelect : null}
    />
  );
};

export default TechnologyChip;
