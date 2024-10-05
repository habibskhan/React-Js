import React from "react";
import styles from "./TodoListV2.module.scss";
import AddButton, { SelectButton } from "./Button";
import MenuItem from "@mui/material/MenuItem";
import TodoModal from "./TodoModal";

const AppHeader = () => {
  return (
    <>
      <div className={styles.app_head_sec1}>
        <h1 className={`mb-3 ${styles.heading}`}>hello from header</h1>
        <div className={styles.btn_container}>
          <AddButton type="button">Add Task</AddButton>
          <SelectButton>
            {/* <option value="All">All</option>
          <option value="Complete">Complete</option>
          <option value="InComplete">InComplete</option> */}

            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Complete">Complete</MenuItem>
            <MenuItem value="InComplete">InComplete</MenuItem>
          </SelectButton>
        </div>
        <TodoModal />
      </div>
    </>
  );
};

export default AppHeader;
