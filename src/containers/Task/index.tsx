import React, { FC, useState } from "react";
import { TaskCartProps } from "./task.props";
import { deleteTask, markTaskAsCompleted } from "../Tasks/tasksSlice";
import { useDispatch } from "react-redux";
import DoneButton from "../../components/Buttons/DoneButton";
import styles from "../../assets/styles/containers/Task/card.module.scss";
import AccordionPartition from "./CardTask/accordionPartition";
import AccordionToogle from "./CardTask/accordionToogle";
import AccordionTitle from "./CardTask/accordionTitle";

const TaskCart: FC<TaskCartProps> = ({
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
        <AccordionToogle
          name={`accordion-1`}
          checkedStatus={isOpen}
          className={styles["accordion__open"]}
        />
        <AccordionToogle
          name={`accordion-1`}
          checkedStatus={!isOpen}
          className={styles["accordion__close"]}
        />
        <AccordionTitle
          status={status}
          styles={styles["accordion__tab"]}
        />
        <AccordionPartition
          category={category}
          isPending={isPending}
          isDone={isDone}
          status={status}
          icon={icon}
          description={description}
          handleDelete={handleDelete}

        />
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
