import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import { getTasks } from '../Services/FetchApi';

function AppProvider({ children }) {
  const [allTasks, setAlLTasks] = useState({});

  useEffect(() => {
    getTasks().then((data) => {
      if(data.statusCode !== 400) {
        setAlLTasks(data);
      }
    });
  }, [setAlLTasks])

  return (
    <AppContext.Provider
      value={{
        allTasks,
        setAlLTasks,
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;