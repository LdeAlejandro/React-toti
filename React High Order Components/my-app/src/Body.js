import React from 'react'
import withTask from './withTask'

function Body({tasks}) {
  return (
    <div>Counting on Body: {tasks.length}</div>
  )
}

export default withTask(Body);