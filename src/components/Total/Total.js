import React, { useRef, useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { CustomTextField } from "../../MUICustomComponents/MuiStyles";
import SpringCalculation from "../SpringCalculation/SpringCalculation";
import LaborCalculation from "../LaborCalculation/LaborCalculation";

var springSumTotal = 0
var laborSumTotal = 0

const Total = () => {
  const [totalCost, setTotalCost] = useState("");
  const saveSpringSumHandler = (e) => {
    springSumTotal = e
  }
  const saveLaborSumHandler = (e) => {
    laborSumTotal = e
  }
  const onClickHandler = () => {
    if(springSumTotal && laborSumTotal) setTotalCost((+springSumTotal + +laborSumTotal).toFixed(2))
  }
    
  const childRefSpring = useRef(null);
  const childRefLabor = useRef(null);

  const resetHandler = () => {
    if (childRefSpring.current) {
      childRefSpring.current.resetChildStates();
    }
    if (childRefLabor.current) {
      childRefLabor.current.resetChildStates();
    }

    springSumTotal = 0
    laborSumTotal = 0
    setTotalCost('')
  }

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box>
      <SpringCalculation onSaveSum={saveSpringSumHandler} ref={childRefSpring}/>
      <LaborCalculation onSaveSum={saveLaborSumHandler} ref={childRefLabor}/>
        <Box className="totalCost">
          <Grid container style={containerStyle}>
          <h2>Total</h2>
            <Grid item >
              <CustomTextField
                value={totalCost}
                name="totalCost"
                id="totalCost"
                type="number"
                label="Total"
                focused={true}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item alignItems="stretch" style={{ display: "flex" }}>
              <Button onClick={resetHandler} color="secondary" variant="contained">Borrar</Button>
              <Button onClick={onClickHandler} color="primary" variant="contained">Sumar</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
  );
};

export default Total;
