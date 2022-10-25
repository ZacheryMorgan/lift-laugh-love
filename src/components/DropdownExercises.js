import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";

const DropdownExercises = ({
  exercises,
  setBodyPartSearch,
  setEquipmentSearch,
  setTargetSearch,
  setExercises,
}) => {
  const bodyPartArray = [
    ...new Set(exercises.map((exercise) => exercise.bodyPart)),
  ];
  const equipmentArray = [
    ...new Set(exercises.map((exercise) => exercise.equipment)),
  ];
  const targetArray = [
    ...new Set(exercises.map((exercise) => exercise.target)),
  ];

  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [selectedTarget, setSelectedTarget] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    if (event.target.name === "target") {
      setSelectedTarget(value);
    } else if (event.target.name === "bodyPart") {
      setSelectedBodyPart(value);
    } else if (event.target.name === "equipment") {
      setSelectedEquipment(value);
    }
  };

  const handleClick = () => {
    setSelectedBodyPart("");
    setSelectedEquipment("");
    setSelectedTarget("");
    setExercises(exercises);
  };

  useEffect(() => {
    const setAllSearches = () => {
      setBodyPartSearch(selectedBodyPart);
      setEquipmentSearch(selectedEquipment);
      setTargetSearch(selectedTarget);
    };
    setAllSearches();
  }, [selectedBodyPart, selectedEquipment, selectedTarget]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginBottom: "45px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          marginBottom: "45px",
        }}
      >
        <FormControl fullWidth sx={{ marginRight: "10px" }}>
          <InputLabel
            id="bodypart-select-label"
            style={{ color: "white", fontWeight: "600" }}
          >
            Body Part
          </InputLabel>
          <Select
            style={{
              backgroundColor: "#226cb6",
              color: "white",
            }}
            labelId="bodypart-select-label"
            id="bodypart-select"
            value={selectedBodyPart}
            label="Body Part"
            onChange={handleChange}
            name="bodyPart"
          >
            <MenuItem value="">none</MenuItem>
            {bodyPartArray.map((bodyPart, index) => (
              <MenuItem key={index} value={bodyPart}>
                {bodyPart}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginRight: "10px" }}>
          <InputLabel
            id="target-select-label"
            style={{ color: "white", fontWeight: "600" }}
          >
            Target
          </InputLabel>
          <Select
            style={{
              backgroundColor: "#226cb6",
              color: "white",
            }}
            labelId="target-select-label"
            id="target-select"
            value={selectedTarget}
            label="Target"
            onChange={handleChange}
            name="target"
          >
            <MenuItem value="">none</MenuItem>
            {targetArray.map((target, index) => (
              <MenuItem key={index} value={target}>
                {target}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel
            id="equipment-select-label"
            style={{ color: "white", fontWeight: "600" }}
          >
            Equipment
          </InputLabel>
          <Select
            style={{
              backgroundColor: "#226cb6",
              color: "white",
            }}
            labelId="equipment-select-label"
            id="equipment-select"
            value={selectedEquipment}
            label="Equipment"
            onChange={handleChange}
            name="equipment"
          >
            <MenuItem value="">none</MenuItem>
            {equipmentArray.map((equipment, index) => (
              <MenuItem key={index} value={equipment}>
                {equipment}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Button onClick={handleClick} variant="contained" color="error">
        Clear Filters
      </Button>
    </div>
  );
};

export default DropdownExercises;
