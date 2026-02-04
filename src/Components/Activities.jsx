import React from 'react'
import './Activities.css'

const Activities = () => {
    return (
      <div className='activies-box'>
          <table className='activities-table'>
            <tr className='activities-header'>
              Things to do
            </tr>
            <tr className='activities-table-header'>
              <div className='activities-list-header'>
                <div className='list-title1'>List</div>
                <button className='btn1'>Add</button>
              </div>
            </tr>
            <tr>
              Activity 1
            </tr>
              <tr>
              Activity 2
            </tr>
          </table>
      </div>
    )
}

export default Activities