import React, { useState } from 'react';
import './App.css';

export const FormContent = () => {

  type TaskObject = {
    id: number
    name: string
  }

  const [taskList, setTaskList] = useState<Array<TaskObject>>([])
  const [taskName, setTaskName] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(taskName, setTaskName)

    setTaskList([...taskList,
    {
      id: taskList.length,
      name: taskName
    }
    ])
    setTaskName('')
  }

  return (
    <div>
      <header className="header">
        <span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
            >
            </input>
          </form>
        </span>
      </header>


      <div>
        {taskList.map(task => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>

    </div>
  );
}

