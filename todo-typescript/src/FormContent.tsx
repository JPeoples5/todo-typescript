import React, { useState } from 'react'
import { Container, Grid, Button, Paper } from '@material-ui/core'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'

type Task = {
  id: string
  text: string
  isCompleted: boolean
}

export const FormContent = () => {

  const [taskList, setTaskList] = useState<Task[]>([])
  const [taskText, setTaskText] = useState<string>('')

  const isCompleted: boolean = false

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (taskText !== '') {
      setTaskList([...taskList,
      {
        id: Date.now().toString(),
        text: taskText,
        isCompleted: isCompleted
      }])
      setTaskText('')
    }
  }

  const handleUpdate = (e: any, id: string) => {
    const updatedTaskList: Task[] = [...taskList]
    updatedTaskList.find((task: Task) => task.id === id ? task.text = e.target.value : null)
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

    <Container>
      <Paper elevation={3}>
        <Grid id='task-input' container xs={12} justify='center'>
          <form onSubmit={handleSubmit}>
            <input
              placeholder='Add a Task'
              type='text'
              value={taskText}
              onChange={e => setTaskText(e.target.value)}
            />
            <Button variant='contained' onClick={handleSubmit}>Add</Button>
          </form>
        </Grid>

        {taskList.map(task => (
          <Grid id='task-list-container' container key={task.id} xs={12} justify='center'>
            <Grid id='task' direction='column' justify='center'>
              {!task.isCompleted ?
                <Button><RadioButtonUncheckedIcon onClick={() => { toggleComplete(task.id) }} /></Button> :
                <Button><CheckCircleOutlineIcon onClick={() => { toggleComplete(task.id) }} /></Button>}
              <input
                type='text'
                value={task.text}
                onChange={(e) => handleUpdate(e, task.id)}
              />
              <Button><DeleteOutlinedIcon onClick={() => { handleDelete(task.id) }} /></Button>
            </Grid>
          </Grid>
        ))}
      </Paper>
    </Container>
  );
}