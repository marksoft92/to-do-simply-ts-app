import React, { useState } from "react";
import { TaskCartProps } from "./task.props";
import { deleteTask, markTaskAsCompleted } from "../Tasks/tasksSlice";
import { useDispatch } from "react-redux";
import DoneButton from "../../components/Buttons/DoneButton";
import DeleteButton from "../../components/Buttons/DeleteButton";

const TaskCart: React.FC<TaskCartProps> = ({ id, description, status }) => {
  const dispatch = useDispatch();
  const handleCompleted = () => {
    dispatch(markTaskAsCompleted(id));
  };
  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="container-card">
      <label className={`accordion accordion--${status ? "2" : "1"}`}>
        <input
          className="accordion__open"
          id={`open-${id}`}
          type="radio"
          name={`accordion-1`}
          checked={isOpen}
          onChange={handleToggle}
        />
        <input
          className="accordion__close"
          id={`close-${id}`}
          type="radio"
          name={`accordion-1`}
          checked={!isOpen}
          onChange={handleToggle}
        />
        <div className="accordion__tab">{status ? "DONE" : "CHECK!"}</div>
        <div className="accordion__wrapper">
          <dl className="accordion__box">
            <dt className="accordion__patition">
              <span className="accordion__number"></span>
              <span className="accordion__title">Kategoria</span>
            </dt>
            <dd className="accordion__text">
              {description}
              {!status && <DeleteButton onHandleClick={handleDelete} />}
            </dd>
          </dl>
        </div>
        <label className="accordion__button">
          {(!status && <DoneButton onHandleClick={handleCompleted} />) || (
            <span className="accordion__buttonText"> Zakończone </span>
          )}
        </label>
      </label>
    </div>
  );
};

export default TaskCart;
