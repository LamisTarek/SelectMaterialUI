"use client";

import React, { useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const CustomArrow = styled("div")(({ theme, color }) => ({
  width: 0,
  height: 0,
  borderLeft: "10px solid transparent",
  borderRight: "10px solid transparent",
  borderTop: `14px solid ${color}`,
  marginLeft: theme.spacing(10),
  marginRight: theme.spacing(5),
  display: "inline-block",
}));

const CustomMenuItem = styled(MenuItem)(({ textcolor }) => ({
  color: textcolor,
  "&:hover": {
    color: textcolor,
    fontWeight: "bold",
  },
}));

const CustomSelect = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedValue, setSelectedValue] = useState("");

  const menuItems = [
    { value: "Saturday", color: "red" },
    { value: "Sunday", color: "orange" },
    { value: "Monday", color: "maroon" },
    { value: "Tuesday", color: "green" },
    { value: "Wednesday", color: "blue" },
    { value: "Thursday", color: "indigo" },
    { value: "Friday", color: "violet" },
  ];

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    const selectedItem = menuItems.find((item) => item.value === value);
    setSelectedColor(selectedItem ? selectedItem.color : "white");
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="custom-select-label">Days</InputLabel>
      <Select
        labelId="custom-select-label"
        value={selectedValue}
        onChange={handleChange}
        label="Days"
        IconComponent={() => <CustomArrow color={selectedColor} />}
        renderValue={(selected) => (
          <Typography style={{ color: selectedColor }}>{selected}</Typography>
        )}
      >
        {menuItems.map((item, index) => (
          <CustomMenuItem key={index} value={item.value} textcolor={item.color}>
            {item.value}
          </CustomMenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
