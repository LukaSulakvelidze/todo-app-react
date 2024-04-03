import React, { useState } from "react";
import Input from "./___Components/Input";
import Task_Container from "./___Components/Task_Container";
import Filter_cont from "./___Components/Filter_cont";

const Main = ({
  form_className,
  radio_input_className,
  tasks_container_className,
  task_className,
  label_className,
  create_input_className,
  statistic_container_className,
  filter_cont_className,
}) => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [errorMassage, setErrorMassage] = useState(false);

  const addTask = () => {
    if (input.trim() !== "") {
      let newTask = { id: todo.length + 1, task: input, isComplated: false };
      setTodo(todo.concat(newTask));
      setInput("");
      setErrorMassage(false);
    } else {
      setErrorMassage(true);
    }
  };

  const addTaskOnEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  };

  const deleteTask = (task) => {
    setTodo((prev) => prev.filter((item) => item !== task));
  };

  return (
    <main>
      <Input
        border={errorMassage && "1px solid red"}
        form_className={form_className}
        create_input_className={create_input_className}
        onKeyDown={addTaskOnEnter}
        onclick={() => addTask()}
        radio_input_className={radio_input_className}
        value={input}
        onchange={(e) => setInput(e.target.value)}
        error_span={
          errorMassage && (
            <span className="validation_span"> Please enter a task! </span>
          )
        }
      />

      <Task_Container
        tasks_container_className={tasks_container_className}
        task_className={task_className}
        todo={todo}
        label_className={label_className}
        deleteTask={deleteTask}
        todo_length={todo.length}
        setTodo={setTodo}
        statistic_container_className={statistic_container_className}
      />

      <Filter_cont className={filter_cont_className} />
    </main>
  );
};

export default Main;
