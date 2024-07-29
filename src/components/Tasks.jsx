import React from "react";
import { NewTask } from "./NewTask";

const Tasks = ({ tasks, onAdded, onDeleted }) => {
  return (
    <section className="tasks">
      <h2>Tasks</h2>
      <NewTask onAdded={onAdded} />
      {tasks.length > 0 ? (<ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <span>{task.text}</span>
                <button onClick={() => onDeleted(task.id)}>Clear</button>
              </li>
            );
          })}
        </ul>) : (<p>This Project does not have any tasks yet.</p>)}
    </section>
  );
};

export default Tasks;
