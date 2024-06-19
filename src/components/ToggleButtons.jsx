/* eslint-disable react/prop-types */
import * as React from "react"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"

export default function ColorToggleButton({ handleYearChange }) {
  const [alignment, setAlignment] = React.useState("Bachelor 1")

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
    handleYearChange(newAlignment) // Pass the new alignment value to parent
  }

  return (
    <ToggleButtonGroup
      data-aos="fade-bottom"
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange} // Use onChange for ToggleButtonGroup
      aria-label="Platform"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 3,
      }}
    >
      <ToggleButton
        value="Bachelor 1"
        sx={{
          color: "white",
          backgroundColor: "",
          borderBottom: "1px solid white",
          "&.Mui-selected": {
            backgroundColor: "#5926b1",
            color: "white",
          },
        }}
      >
        Bachelor 1
      </ToggleButton>
      <ToggleButton
        value="Bachelor 2"
        sx={{
          color: "white",
          backgroundColor: "",
          borderBottom: "1px solid white",
          "&.Mui-selected": {
            backgroundColor: "#5926b1",
            color: "white",
          },
        }}
      >
        Bachelor 2
      </ToggleButton>
      <ToggleButton
        value="Bachelor 3"
        sx={{
          color: "white",
          backgroundColor: "",
          borderBottom: "1px solid white",
          "&.Mui-selected": {
            backgroundColor: "#5926b1",
            color: "white",
          },
        }}
      >
        Bachelor 3
      </ToggleButton>
      <ToggleButton
        value="Master 1"
        sx={{
          color: "white",
          backgroundColor: "",
          borderBottom: "1px solid white",
          "&.Mui-selected": {
            backgroundColor: "#5926b1",
            color: "white",
          },
        }}
      >
        Master 1
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
