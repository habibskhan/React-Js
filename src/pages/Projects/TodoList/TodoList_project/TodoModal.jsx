import React, { useState } from "react";
import styles from "./TodoListV2.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";

const TodoModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className={`${styles.todomodal_sec1}`}>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl fullWidth>
              <div className="mb-2">
                <InputLabel htmlFor="text">Title</InputLabel>
                <Input id="text" aria-describedby="my-helper-text" />
              </div>
              <div className="mb-2">
                <InputLabel htmlFor="text">Title</InputLabel>
                <Input id="text" aria-describedby="my-helper-text" />
              </div>
              <FormHelperText id="my-helper-text" className="mt-2">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default TodoModal;
