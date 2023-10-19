import React, { useRef, useState } from "react";
import { TaskCartProps } from "./task.props";
import { deleteTask, markTaskAsCompleted } from "../Tasks/tasksSlice";
import { useDispatch } from "react-redux";
import DoneButton from "../../components/Buttons/DoneButton";
import DeleteButton from "../../components/Buttons/DeleteButton";
import styles from "../../assets/styles/containers/Task/card.module.scss";

const TaskCart: React.FC<TaskCartProps> = ({
  id,
  description,
  status,
  category,
  icon,
}) => {
  const dispatch = useDispatch();
  const handleCompleted = () => {
    dispatch(markTaskAsCompleted(id));
  };
  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  const [isOpen, setIsOpen] = useState(false);
  const isPending = !isOpen && !status;
  const isDone = !isOpen && status;
  const openRadioRef = useRef(null);
  const closeRadioRef = useRef(null);
  const commonAccordionClass = status
    ? styles["accordion--2"]
    : styles["accordion--1"];

  return (
    <div className={styles["container-card"]}>
      <label
        className={`${styles.accordion} ${commonAccordionClass}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <input
          className={styles["accordion__open"]}
          ref={openRadioRef}
          type="radio"
          name={`accordion-1`}
          checked={isOpen}
        />
        <input
          className={styles["accordion__close"]}
          ref={closeRadioRef}
          type="radio"
          name={`accordion-1`}
          checked={!isOpen}
        />
        <div className={styles["accordion__tab"]}>
          {status ? "DONE" : "CHECK!"}
        </div>
        <div className={styles["accordion__wrapper"]}>
          <dl className={styles["accordion__box"]}>
            <dt className={styles["accordion__patition"]}>
              <span className={styles["accordion__number"]}>
                <img src={icon} width={50} alt="" />
              </span>
              <span className={styles["accordion__title"]}>
                {category}
                {isPending && (
                  <div
                    className={`${styles["rubber_stamp"]} ${styles.pending} `}
                  >
                    Pending
                  </div>
                )}
                {isDone && (
                  <div className={`${styles["rubber_stamp"]} ${styles.done} `}>
                    Done
                  </div>
                )}
              </span>
            </dt>

            <dd className={styles["accordion__text"]}>
              {description}
              {!status && <DeleteButton onHandleClick={handleDelete} />}
            </dd>


          </dl>
        </div>
        <label className={styles["accordion__button"]}>
          {(!status && <DoneButton onHandleClick={handleCompleted} />) || (
            <span className={styles["accordion__buttonText"]}>Zakończone</span>
          )}
        </label>
      </label>
    </div>
  );
};

export default TaskCart;
