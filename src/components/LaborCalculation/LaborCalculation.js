import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { Box, Grid } from "@mui/material";
import { CustomTextField } from "../../MUICustomComponents/MuiStyles";
import './LaborCalculation.css';

const LaborCalculation = (props, ref) => {
  const [values, setValues] = useState({
    costPerHour: "",
    workingHours: "",
  });
  const [subtotalLabor, setSubtotalLabor] = useState("");
  const [employerContributions, setEmployerContributions] = useState("");
  const [manufacturingCost, setManufacturingCost] = useState("");
  const [surfaceTreatment, setSurfaceTreatment] = useState("");
  const [grossMargin, setGrossMargin] = useState("");
  const [totalLabor, setTotalLabor] = useState("");

  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
    calcSum(newValues);
  };

  const calcSum = useCallback((newValues) => {
    const { costPerHour, workingHours } = newValues;

    const newSubtotalLabor = +costPerHour * +workingHours;
    const newEmployerContributions = +newSubtotalLabor * 1;
    const newManufacturingCost = +newSubtotalLabor * 0.5;
    const newSurfaceTreatment = +newSubtotalLabor * 0.07;
    const newGrossMargin =
      (+newSubtotalLabor +
        +newEmployerContributions +
        +newManufacturingCost +
        +newSurfaceTreatment) *
      0.4;
    const newTotalLabor =
      +newSubtotalLabor +
      +newEmployerContributions +
      +newManufacturingCost +
      +newSurfaceTreatment +
      +newGrossMargin;

    if (costPerHour && workingHours) {
      setSubtotalLabor(newSubtotalLabor.toFixed(2));
      setEmployerContributions(newEmployerContributions.toFixed(2));
      setManufacturingCost(newManufacturingCost.toFixed(2));
      setSurfaceTreatment(newSurfaceTreatment.toFixed(2));
      setGrossMargin(newGrossMargin.toFixed(2));
      setTotalLabor(newTotalLabor.toFixed(2));
      props.onSaveSum(newTotalLabor.toFixed(2))
    }
    if (!costPerHour || !workingHours) {
      setSubtotalLabor("");
      setEmployerContributions("");
      setManufacturingCost("");
      setSurfaceTreatment("");
      setGrossMargin("");
      setTotalLabor("");
    }
  }, [props]);

  useEffect(() => {
    calcSum(values);
  }, [values, calcSum]);

  const resetChildStates = () => {
    setValues(() => {
      return {
        costPerHour: "",
        workingHours: "",
      };
    });
  };

  useImperativeHandle(ref, () => ({
    resetChildStates,
  }));

  const containerStyle = {
    display: "grid",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
  };

  return (
    
      <Box className="labor">
        <Grid container style={containerStyle}>
        <Grid >

        <h2>Mano de Obra</h2>
        </Grid>
          <Grid item >
            <CustomTextField
              onChange={onChange}
              value={values.costPerHour}
              name="costPerHour"
              id="costPerHour"
              type="number"
              label="Valor Hora"
            />

            <CustomTextField
              onChange={onChange}
              value={values.workingHours}
              name="workingHours"
              id="workingHours"
              type="number"
              label="Horas de Trabajo"
            />
          </Grid>

          <Grid item >
            <CustomTextField
              onChange={onChange}
              value={subtotalLabor}
              name="subtotalLabor"
              id="subtotalLabor"
              type="number"
              label="Subtotal"
              focused={true}
              InputProps={{
                readOnly: true,
              }}
            />

            <CustomTextField
              onChange={onChange}
              value={employerContributions}
              name="employerContributions"
              id="employerContributions"
              type="number"
              label="CCSS"
              focused={true}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item >
            <CustomTextField
              onChange={onChange}
              value={manufacturingCost}
              name="manufacturingCost"
              id="manufacturingCost"
              type="number"
              label="Costo de Fabricación"
              focused={true}
              InputProps={{
                readOnly: true,
              }}
            />

            <CustomTextField
              onChange={onChange}
              value={surfaceTreatment}
              name="surfaceTreatment"
              id="surfaceTreatment"
              type="number"
              label="Tratamiento Superficial"
              focused={true}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item>
            <CustomTextField
              onChange={onChange}
              value={grossMargin}
              name="grossMargin"
              id="grossMargin"
              type="number"
              label="Margen Bruto"
              focused={true}
              InputProps={{
                readOnly: true,
              }}
            />

            <CustomTextField
              onChange={onChange}
              value={totalLabor}
              name="totalLabor"
              id="totalLabor"
              type="number"
              label="Total"
              focused={true}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
      </Box>
  );
};

export default forwardRef(LaborCalculation);
