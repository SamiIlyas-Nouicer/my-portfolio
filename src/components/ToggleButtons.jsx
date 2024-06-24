import * as React from "react"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

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

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"))
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <ToggleButtonGroup
      data-aos="fade-bottom"
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Year Selection"
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        justifyContent: "center",
        alignItems: isSmallScreen ? "flex-start" : "center",
        gap: isSmallScreen ? 1 : isMediumScreen ? 2 : 3,
        padding: isSmallScreen ? "1rem" : "0.5rem",
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
            padding: isSmallScreen ? "0.5rem 1rem" : "0.75rem 1.5rem",
            fontSize: isSmallScreen ? "0.875rem" : "1rem",
          }}
        >
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
