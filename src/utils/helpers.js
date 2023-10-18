export function sortTasksByStatus(tasks) {
    return tasks.sort((a, b) => {
      if (a.status === true && b.status === false) {
        return 1; 
      } else if (a.status === false && b.status === true) {
        return -1; 
      } else {
        return 0; 
      }
    });
  }
  

  export function updateLocalStorage (state)  {
    localStorage.setItem(
      "tasksData",
      JSON.stringify(sortTasksByStatus(state.list))
    );
  };