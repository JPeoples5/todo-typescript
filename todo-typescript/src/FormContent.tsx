import React, { useState, ChangeEvent } from 'react'
import './App.css'
import { Container, Grid, Button } from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'

type Task = {
  id: string
  name: string
}

export const FormContent = () => {

  const [taskList, setTaskList] = useState<Task[]>([])
  const [taskName, setTaskName] = useState<string>('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setTaskList([...taskList,
    {
      id: Date.now().toString(),
      name: taskName
    }])
    setTaskName('')

  }

  const handleDelete = (id: string) => {
    const updatedTaskList: Task[] = taskList.filter((task: Task) => task.id !== id)
    setTaskList(updatedTaskList)
  }

  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Add a Task'
            type='text'
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
          />
          <Button variant='contained' onClick={handleSubmit}>Add</Button>
        </form>

        <Grid container>
          {taskList.map(task => (
            <Grid item key={task.id + 1} xs={12}>
              <input
                type='text'
                value={task.name}
                onChange={() => { }}
              />
              {console.log(task.id)}
              <Button><DeleteOutlinedIcon onClick={() => { handleDelete(task.id) }} /></Button>
            </Grid>
          ))}
        </Grid>

      </Container>
    </div>
  );
}

