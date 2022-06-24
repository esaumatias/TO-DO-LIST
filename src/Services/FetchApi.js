export const getTasks = async () => {
    const URL = `http://localhost:8000/tasks`;
    try {
      const response = await fetch(URL, {
        method: "get",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log(error);
    }
  };

  export const createTask = async (task) => {
    const { tasks, date, status } = task;
    const URL = `http://localhost:8000/tasks`;
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          tasks: tasks,
          date: date,
          status: status,
        }),
      });
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log(error);
    }
  };

  export const remove = async (id) => {
    const URL = `http://localhost:8000/tasks/${id}`;
    try {
      const response = await fetch(URL, {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log(error);
    }
  };