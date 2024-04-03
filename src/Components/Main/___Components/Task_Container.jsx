import React from "react";
import Static_Container from "./Static_Container";

const Task_Container = ({
  tasks_container_className,
  task_className,
  todo,
  label_className,
  deleteTask,
  todo_length,
  statistic_container_className,
  setTodo,
}) => {
  const checkboxChecker = (task_id) => {
    setTodo(
      todo.map((item) =>
        item.id === task_id ? { ...item, isComplated: !item.isComplated } : item
      )
    );
  };
  return (
    <>
      <div className={tasks_container_className}>
        {todo.map((item) => {
          return (
            <div key={item.id} className={task_className}>
              <div className="text_cont">
                <div className="checkbox_cont">
                  <input
                    id={`cb${item.id}`}
                    className="checkbox_input"
                    type="checkbox"
                    checked={item.isComplated}
                    onChange={() => checkboxChecker(item.id)}
                  />
                  <label
                    htmlFor={`cb${item.id}`}
                    className={label_className}
                  ></label>
                </div>
                <span
                  style={{
                    textDecoration: item.isComplated ? "line-through" : "none",
                  }}
                  className="task_item"
                >
                  {item.task}
                </span>
              </div>
              <i
                onClick={() => deleteTask(item)}
                className="delete_icon fa-sharp fa-solid fa-x"
              ></i>
            </div>
          );
        })}
      </div>
      <Static_Container
        statistic_container_className={statistic_container_className}
        item_left={todo_length}
      />
    </>
  );
};

export default Task_Container;
