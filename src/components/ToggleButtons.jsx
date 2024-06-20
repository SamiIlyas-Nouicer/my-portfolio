import * as React from "react"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"

export default function ToggleButtons({ handleYearChange }) {
  const [alignment, setAlignment] = React.useState("Bachelor 1")

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
      switch (newAlignment) {
        case "Bachelor 1":
          handleYearChange(1)
          break
        case "Bachelor 2":
          handleYearChange(2)
          break
        case "Bachelor 3":
          handleYearChange(3)
          break
        case "Master 1":
          handleYearChange(4)
          break
        default:
          break
      }
    }
  }

  return (
    <ToggleButtonGroup
      data-aos="fade-bottom"
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 3,
      }}
    >
      {["Bachelor 1", "Bachelor 2", "Bachelor 3", "Master 1"].map((label) => (
        <ToggleButton
          key={label}
          value={label}
          sx={{
            color: "white",
            borderBottom: "1px solid white",
            "&.Mui-selected": {
              backgroundColor: "#5926b1",
              color: "white",
            },
          }}
        >
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
