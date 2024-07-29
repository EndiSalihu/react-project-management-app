import React from "react";
import { NewTask } from "./NewTask";

const Tasks = ({ tasks, onAdded, onDeleted }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4 max-sm:text-[20px]">Tasks</h2>
      <NewTask onAdded={onAdded} />
      {tasks.length > 0 ? (<ul className="p-4 mt-8 rounded-md flex flex-col gap-5">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex my-4 justify-between bg-stone-400 py-4  px-3 rounded-lg max-lg:w-[300px] max-md:w-[150px] max-sm:flex-col max-sm:gap-5">
                <span>{task.text}</span>
                <button onClick={() => onDeleted(task.id)} className="text-stone-700 hover:text-red-500">Clear</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-stone-800 my-4 max-lg:text-sm">
          This Project does not have any tasks yet.
        </p>
      )}
    </section>
  );
};

export default Tasks;
