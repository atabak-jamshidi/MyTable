import { useState } from "react";

export const AddTask = () => {
  // *list of works is ordered here
  const [todoList, setTodoList] = useState([]);
  // *take new task from user
  const [newTask, setNewTask] = useState("");

  // todoList: function to add task in todo list with button
  const addingTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };
  // ! delete task from list with X button
  const deleteTask = (id) => {
    setTodoList(
      todoList.filter((task) => {
        return task !== id;
      })
    );
  };

  // ? Main return of Component
  return (
    <div className="AddTask-main-div">
      <input onChange={(event) => setNewTask(event.target.value)} />
      <button onClick={addingTask}>Add Task</button>
      <button>Sajad Button</button>
      <div>
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddTask;
