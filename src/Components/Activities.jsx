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
              List
            </tr>
            <tr>
              <td>hiking</td>
            </tr>
            <tr>
              <td>fishing</td>
            </tr>
          </table>
      </div>
    )
}

export default Activities