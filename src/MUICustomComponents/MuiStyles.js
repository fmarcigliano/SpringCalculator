import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { InputLabel } from "@mui/material";

export const CustomTextField = styled(TextField)`

&& {
  
  margin-top: 10px;
  margin-bottom: 10px;
  width: 200px;

  input {
    color: white;
  }
  

  & label.Mui-focused {
    color: white;
  }

  .MuiInputLabel-root {
    color: white;
  }

  .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }

    &:hover fieldset {
      border-color: white;
    }

    &:disabled {
      color: white;
      background-color: white;
    }

    &.Mui-focused fieldset {
      border-color: white;
    }

      
    }
  }
}
`;

export const CustomSelect = styled(Select)`
&& {
  margin-top: 10px;
  margin-bottom: 20px;
  width: 200px;
  color: white;

  .MuiInputLabel-root {
    color: white;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }

  .MuiSvgIcon-root {
    fill: white;
  }
  
}
`;

export const CustomInputLabel = styled(InputLabel)`
  && {
    padding-top: 10px;
    color: white;

    &.Mui-focused {
      color: white;
      padding-top: 15px;
    }
  }
`;
