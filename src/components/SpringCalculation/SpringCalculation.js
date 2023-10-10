import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { steelWeightsTable } from "../../utils/steel-table";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
} from "@mui/material";
import {
  CustomTextField,
  CustomSelect,
  CustomInputLabel,
} from "../../MUICustomComponents/MuiStyles";
import "./SpringCalculation.css";

const SpringCalculation = ({ onSaveSum }, ref) => {
  const [values, setValues] = useState({
    meanDiameter: "",
    totalNumberOfCoils: "",
    steelSpecificGravity: "",
    price: "",
    springQuantity: "",
    innerDiameter: "",
    outerDiameter: "",
    wireDiameter: "",
  });
  const [subtotal, setSubtotal] = useState("");
  const [wastage, setWastage] = useState("");
  const [sum, setSum] = useState("");
  const [diamaterFormulasBoxShown, setDiamaterFormulasBoxShown] =
    useState(false);
  const [diamaterInnerDisabled, setDiamaterInnerDisabled] = useState(true);
  const [diamaterOuterDisabled, setDiamaterOuterDisabled] = useState(true);
  const [meanDiameter, setMeanDiameter] = useState("");
  const [wireDiameter, setWireDiameter] = useState("");
  const [innerDiameter, setInnerDiameter] = useState("");
  const [outerDiameter, setOuterDiameter] = useState("");

  const checkboxDiameterFormulasHandler = () => {
    setDiamaterFormulasBoxShown(!diamaterFormulasBoxShown);
    if (!diamaterFormulasBoxShown) {
      const newValues = {
        ...values,
        meanDiameter: "",
      };
      setValues(newValues);
      setMeanDiameter("");
      calcSum(newValues);
    }
    if (diamaterFormulasBoxShown) {
      const newValues = {
        ...values,
        wireDiameter: "",
        innerDiameter: "",
        outerDiameter: "",
      };
      setWireDiameter("");
      setInnerDiameter("");
      setOuterDiameter("");
      setValues(newValues);
      calcSum(newValues);
    }
  };

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
    const {
      meanDiameter,
      totalNumberOfCoils,
      steelSpecificGravity,
      price,
      springQuantity,
      innerDiameter,
      outerDiameter,
      wireDiameter,
    } = newValues;

    let newMeanDiameter = +meanDiameter;
    let newWireDiameter = +wireDiameter;
    let newInnerDiameter = +innerDiameter;
    let newOuterDiameter = +outerDiameter;

    if (newWireDiameter > 0) setWireDiameter(newWireDiameter);
    if (newWireDiameter <= 0) setWireDiameter("");
    if (newInnerDiameter > 0) setInnerDiameter(newInnerDiameter);
    if (newInnerDiameter <= 0) setInnerDiameter("");
    if (newOuterDiameter > 0) setOuterDiameter(newOuterDiameter);
    if (newOuterDiameter <= 0) setOuterDiameter("");

    if (newInnerDiameter) {
      newMeanDiameter = +newInnerDiameter - +newWireDiameter;
      setDiamaterInnerDisabled(false);
    } else {
      setDiamaterInnerDisabled(true);
    }
    if (newOuterDiameter) {
      newMeanDiameter = +newOuterDiameter + +newWireDiameter;
      setDiamaterOuterDisabled(false);
    }
    if (newMeanDiameter > 0) setMeanDiameter(newMeanDiameter);
    if (newMeanDiameter <= 0) setMeanDiameter("");

    const newSubtotal =
      (+newMeanDiameter + +totalNumberOfCoils + +steelSpecificGravity) * 3.17;
    const newWastage = +newSubtotal * 0.2;
    const newSum = (+newSubtotal + +newWastage) * +price * +springQuantity;

    if (newMeanDiameter && totalNumberOfCoils && steelSpecificGravity) {
      setSubtotal(newSubtotal.toFixed(2));
      setWastage(newWastage.toFixed(2));
    }
    if (
      !newMeanDiameter ||
      !totalNumberOfCoils ||
      !steelSpecificGravity ||
      newSubtotal < 0
    ) {
      setSubtotal("");
      setWastage("");
    }
    if (newSum !== 0) {
      setSum(newSum.toFixed(2));
      onSaveSum(newSum.toFixed(2));
    }
    if (
      !newMeanDiameter ||
      !totalNumberOfCoils ||
      !steelSpecificGravity ||
      !price ||
      !springQuantity ||
      newSum < 0
    )
      setSum("");
  }, [onSaveSum]);

  useEffect(() => {
    calcSum(values);
  }, [values, calcSum]);

  const resetChildStates = () => {
    setValues(() => {
      return {
        price: "",
        totalNumberOfCoils: "",
        springQuantity: "",
        meanDiameter: '',
        innerDiameter: "",
        outerDiameter: "",
        wireDiameter: "",
        steelSpecificGravity: '',
      };
    });
  };

  useImperativeHandle(ref, () => ({
    resetChildStates,
  }));

  const customClassForMeanDiameter = diamaterFormulasBoxShown
    ? "disabled-textfield"
    : "";
  const customClassForDisabledState = !diamaterFormulasBoxShown
    ? "disabled-textfield"
    : "";
  const customClassForInnerDiameter =
    !diamaterOuterDisabled || !diamaterFormulasBoxShown
      ? "disabled-textfield"
      : "";
  const customClassForOuterDiameter =
    !diamaterInnerDisabled || !diamaterFormulasBoxShown
      ? "disabled-textfield"
      : "";

  const containerStyle = {
    display: "grid",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
  };

  return (
    <Box className="springBox">
      <Grid container style={containerStyle}>
        <h2>Resortes</h2>
        <Grid item alignItems="stretch" style={{ display: "flex" }}>
          <CustomTextField 
            onChange={onChange}
            value={values.meanDiameter}
            name="meanDiameter"
            id="meanDiameter"
            type="number"
            label="Diametro Medio"
            disabled={diamaterFormulasBoxShown}
            className={customClassForMeanDiameter}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={diamaterFormulasBoxShown}
                onChange={checkboxDiameterFormulasHandler}
                style={{ marginLeft: 10 }}
              />
            }
            label="No se tiene este valor"
          />
        </Grid>

        <Grid item>
          <CustomTextField
            onChange={onChange}
            value={values.wireDiameter}
            name="wireDiameter"
            id="wireDiameter"
            type="number"
            label="Diametro Alambre"
            disabled={!diamaterFormulasBoxShown}
            className={customClassForDisabledState}
          />
        </Grid>

        <Grid item>
          <CustomTextField
            onChange={onChange}
            value={values.innerDiameter}
            name="innerDiameter"
            id="innerDiameter"
            type="number"
            label="Diametro Interior"
            disabled={!diamaterOuterDisabled || !diamaterFormulasBoxShown}
            className={customClassForInnerDiameter}
          />

          <CustomTextField
            onChange={onChange}
            value={values.outerDiameter}
            name="outerDiameter"
            id="outerDiameter"
            type="number"
            label="Diametro Exterior"
            disabled={!diamaterInnerDisabled || !diamaterFormulasBoxShown}
            className={customClassForOuterDiameter}
          />
        </Grid>

        <Grid>
          <CustomTextField
            onChange={onChange}
            value={values.totalNumberOfCoils}
            name="totalNumberOfCoils"
            id="totalNumberOfCoils"
            type="number"
            label="Total de Espiras"
          />

          <FormControl
            sx={{
              minWidth: 200,
              maxWidth: "100%",
            }}
          >
            <CustomInputLabel>Peso del Acero</CustomInputLabel>
            <CustomSelect
              onChange={onChange}
              value={values.steelSpecificGravity}
              name="steelSpecificGravity"
              id="steelSpecificGravity"
              type="number"
              label="Peso del Acero"
              MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: '#0f3154',
              color: 'white',
              '& .MuiMenuItem-root': {
                padding: 2,
              },
            },
          },}
              }
            >
              {steelWeightsTable.map((option) => (
                <MenuItem key={option.name} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
            </CustomSelect>
          </FormControl>
        </Grid>

        <Grid>
          <CustomTextField
            defaultValue={3.17}
            name="pi"
            id="pi"
            type="number"
            label="Pi"
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomTextField
            onChange={onChange}
            value={subtotal}
            id="subtotal"
            name="subtotal"
            type="number"
            label="Subtotal"
            focused={true}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid>
          <CustomTextField
            onChange={onChange}
            value={wastage}
            id="wastage"
            name="wastage"
            type="number"
            label="Desperdicio 20%"
            focused={true}
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomTextField
            onChange={onChange}
            value={values.price}
            id="price"
            name="price"
            type="number"
            label="Precio"
          />
        </Grid>

        <Grid>
          <CustomTextField
            onChange={onChange}
            value={values.springQuantity}
            id="springQuantity"
            name="springQuantity"
            type="number"
            label="Cantidad de Resortes"
          />

          <CustomTextField
            onChange={onChange}
            value={sum}
            id="sum"
            name="sum"
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
}

export default forwardRef(SpringCalculation);
