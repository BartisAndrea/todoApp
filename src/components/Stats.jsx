import React from 'react'

export const Stats = ({toDoList}) => {
    let countList = toDoList.length;
  return (
    <div className='stats'>
        <p className='notify'>
            {countList ===0 
            ? 'You are done with all tasks!'
            : `You are not done! You have stll ${countList} tasks!`} </p>
        </div>
  )
}

export default Stats;