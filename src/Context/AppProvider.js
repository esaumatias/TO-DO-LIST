import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [allTasks, setAlLTasks] = useState({});
  const [addSubmitted, setAddSubmitted] = useState(false);
  const [newTask, setNewTask] = useState({
    task: '',
    title: '',
    date: '',
    status: 'success',
  });

  return (
    <AppContext.Provider
      value={{
        allTasks,
        setAlLTasks,
        addSubmitted,
        setAddSubmitted,
        newTask,
        setNewTask
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;