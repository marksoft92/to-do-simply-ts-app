import React from "react";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../app/store";
import { selectLoading, selectTasks } from "./tasksSlice";
import { fetchTasks } from "./fetchTasks";
import List from "./list";

const mapStateToProps = (state: RootState) => {
  console.log(state);
  return {
    tasks: selectTasks(state),
    loading: selectLoading(state),
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
  };
};

const ConnectedList = connect(mapStateToProps, mapDispatchToProps)(List);

const TasksList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <ConnectedList />
    </>
  );
};

export default TasksList;
