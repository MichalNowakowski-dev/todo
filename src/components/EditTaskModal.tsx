import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Task } from "../App";

interface Props {
  task: Task;
  editTask: (e: any, task: Task) => void;
}
function EditTaskModal({ task, editTask }: Props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e: any) => {
    e.stopPropagation();
    setShow(true);
  };

  //   const handleEditTask = (task) => {};

  return (
    <>
      <button
        type="button"
        title="Edytuj zadanie"
        aria-label="Edit"
        className="editTask_btn"
        onClick={handleShow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
        </svg>
      </button>

      <Modal
        animation={true}
        show={show}
        onHide={handleClose}
        backdrop={true}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edycja zadania</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => editTask(e, task)} action="/">
            <input
              minLength={3}
              required
              className="form-control editTaskInput"
              type="text"
              placeholder="Wpisz nowe zadanie..."
            />
            <Button type="submit" variant="primary" onClick={handleClose}>
              Potwierdź
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTaskModal;
