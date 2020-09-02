import React, { useState } from 'react'
import { Container, Grid, Button } from '@material-ui/core'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'

type Task = {
  id: string
  name: string
  isCompleted: boolean
}

export const FormContent = () => {

  const [taskList, setTaskList] = useState<Task[]>([])
  const [taskName, setTaskName] = useState<string>('')

  const isCompleted: boolean = false

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (taskName !== '') {
      setTaskList([...taskList,
      {
        id: Date.now().toString(),
        name: taskName,
        isCompleted: isCompleted
      }])
      setTaskName('')
    }
  }

  const handleUpdate = (e: any, id: string) => {
    const updatedTaskList: Task[] = [...taskList]
    updatedTaskList.find((task: Task) => task.id === id ? task.name = e.target.value : null)
    setTaskList(updatedTaskList)
  }

  const handleDelete = (id: string) => {
    const updatedTaskList: Task[] = taskList.filter((task: Task) => task.id !== id)
    setTaskList(updatedTaskList)
  }

  const toggleComplete = (id: string) => {
    const updatedTaskList: Task[] = [...taskList]
    updatedTaskList.find((task: Task) => task.id === id ? task.isCompleted = !task.isCompleted : null)
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
            <Grid item key={task.id} xs={12}>
              {task.isCompleted === false ?
                <RadioButtonUncheckedIcon onClick={() => { toggleComplete(task.id) }} /> :
                <CheckCircleOutlineIcon onClick={() => { toggleComplete(task.id) }} />}
              <input
                type='text'
                value={task.name}
                onChange={(e) => handleUpdate(e, task.id)}
              />
              <Button><DeleteOutlinedIcon onClick={() => { handleDelete(task.id) }} /></Button>
            </Grid>
          ))}
        </Grid>

      </Container>
    </div>
  );
}