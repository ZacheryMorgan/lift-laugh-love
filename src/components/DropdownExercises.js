import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useState, useEffect } from "react";

const DropdownExercises = ({
  exercises,
  setBodyPartSearch,
  setEquipmentSearch,
  setTargetSearch,
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

  useEffect(() => {
    const setAllSearches = () => {
      setBodyPartSearch(selectedBodyPart);
      setEquipmentSearch(selectedEquipment);
      setTargetSearch(selectedTarget);
    };
    setAllSearches();
  }, [selectedBodyPart, selectedEquipment, selectedTarget]);

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="bodypart-select-label">Body Part</InputLabel>
        <Select
          labelId="bodypart-select-label"
          id="bodypart-select"
          value={selectedBodyPart}
          label="Age"
          onChange={handleChange}
          name="bodyPart"
        >
          {bodyPartArray.map((bodyPart, index) => (
            <MenuItem key={index} value={bodyPart}>
              {bodyPart}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="target-select-label">Target</InputLabel>
        <Select
          labelId="target-select-label"
          id="target-select"
          value={selectedTarget}
          label="Age"
          onChange={handleChange}
          name="target"
        >
          {targetArray.map((target, index) => (
            <MenuItem key={index} value={target}>
              {target}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="equipment-select-label">Equipment</InputLabel>
        <Select
          labelId="equipment-select-label"
          id="equipment-select"
          value={selectedEquipment}
          label="Age"
          onChange={handleChange}
          name="equipment"
        >
          {equipmentArray.map((equipment, index) => (
            <MenuItem key={index} value={equipment}>
              {equipment}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropdownExercises;
