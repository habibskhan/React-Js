import React from "react";
import styles from "./TodoListV2.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Pagetitle from "./Pagetitle";
import AddButton from "./Button";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";


const TodoListV2 = () => {
  return (
    <motion.div>
      <AnimatePresence>
        <section className={styles.todo_sec1}>
          <div className="my-container container">
            {/* <Pagetitle text="TODO List" /> */}
            <Pagetitle>TODO List</Pagetitle>
            <AppHeader />
            <AppContent />
            <div className={styles.app_wrapper}></div>
          </div>
        </section>
      </AnimatePresence>
    </motion.div>
  );
};

export default TodoListV2;
