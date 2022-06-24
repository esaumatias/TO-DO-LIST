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