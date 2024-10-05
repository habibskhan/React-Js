import React, { useState } from "react";
import styles from "./TodoListV2.module.scss";
import { Button } from "@mui/material";
import { getClasses } from "../../../../sources/utils/getClasses";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

const AddButton = ({children, type, ...rest}) => {
  const [isColor, setIscolor] = useState("primary");
  // const [isType, setIsType] = useState("");

  const ButtonColor = () => {
    if (isColor === "primary") {
      setIscolor("success");
    }
  };

  const ButtonColorOut = () => {
    if (isColor === "success") {
      setIscolor("primary");
    }
  };

  return (
    <>
      <div className={styles.button_sec1}>
        <Button
          //   sx={{
          //     "& .MuiButtonBase-root-MuiButton-root" : {
          //         textTransform: "capitalize",
          //     },
          //   }}
          // type={isType === "submit" ? "submit" : "button"}
          type={type === "submit" ? "submit" : "button"}
          // type={SubmitType}
          className={styles.add_btn}
          // className={getClasses([styles.add_btn])}
          variant="contained"
          // onClick={ButtonColor}
          color={isColor}
          onMouseDown={ButtonColor}
          onMouseLeave={ButtonColorOut}
          {...rest}
        >
          {/* Add Task */}
          {children}
        </Button>
      </div>
    </>
  );
};

const SelectButton = ({ children, ...rest }) => {
  const [addTask, setAddTask] = useState("");

  const handleChange = (event) => {
    setAddTask(event.target.value);
  };

  return (
    <>
      <FormControl
        sx={{
          m: 0,
          minWidth: 120,
        }}
        size="small"
        // error
      >
        <InputLabel id="demo-select-small-label">Add Task</InputLabel>
        <Select
          sx={{
            "&:focus": {
              borderColor: "red",
            },
            "& .MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused":
              {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "red",
                },
              },
          }}
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={addTask}
          label="Add Task"
          onChange={handleChange}
          // renderValue={(value) => `${value}`}
          {...rest}
        >
          {children}
          {/* <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Complete">Complete</MenuItem>
        <MenuItem value="InComplete">InComplete</MenuItem> */}
        </Select>
        {/* <FormHelperText>Error</FormHelperText> */}
      </FormControl>
    </>
  );
};

export { SelectButton };
export default AddButton;
