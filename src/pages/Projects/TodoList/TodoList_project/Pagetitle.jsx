import React from "react";
import styles from "./TodoListV2.module.scss";

const Pagetitle = ({ children, ...rest }) => {
  return (
    <>
      <div className={styles.title} {...rest}>
        {children}
      </div>
    </>
  );
};

export default Pagetitle;
