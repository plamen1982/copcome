// TODO - 27
import React from "react";
// import { dark, light } from "@material-ui/core/styles/createPalette";
import { Switch, Button } from "@material-ui/core";

export const ThemeSwitch = ({ darkState, handleThemeChange }) => {
    return (
    <div>
      <Switch checked={darkState} onChange={handleThemeChange} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("Btn clicked!");
        }}
      >
        Empty spaces, what are we looking for... Someone to come... Semen...
If so...Let's get down to business, test 1, 2, 3... Bring these people some seeds... Golden seeds... From the sea/see
      </Button>
    </div>
  );
};