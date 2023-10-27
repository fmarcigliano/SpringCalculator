import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { InputLabel } from "@mui/material";

export const CustomTextField = styled(TextField)`
&& {
  
  margin-top: 10px;
  margin-bottom: 10px;
  width: 200px;
  margin: 12px;

  input {
    color: black;
  }
  

  & label.Mui-focused {
    color: black;
  }

  .MuiInputLabel-root {
    color: black;
  }

  .MuiOutlinedInput-root {
    & fieldset {
      border-color: black;
    }

    &:hover fieldset {
      border-color: black;
    }

    &:disabled {
      color: black;
      background-color: black;
    }

    &.Mui-focused fieldset {
      border-color: black;
    }
    }

      .MuiTypography-root {
        color: black;
      }
    }
  }
`;

export const CustomSelect = styled(Select)`
  && {
    margin: 12px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 200px;
    color: black;

    .MuiInputLabel-root {
      color: black;
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: black;
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: black;
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: black;
    }

    .MuiSvgIcon-root {
      fill: black;
    }
  }
`;

export const CustomInputLabel = styled(InputLabel)`
  && {
    padding-top: 15px;
    padding-left: 15px;
    color: black;

    &.Mui-focused {
      color: black;
      padding-top: 15px;
    }
  }
`;
