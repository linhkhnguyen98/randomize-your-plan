import React from 'react'
import './Restaurants.css'

const Restaurants = () => {
    return (
      <div className='restaurant-box'>
          <table className='restaurant-table'>
            <tr className='restaurant-header'>
              Food to eat
            </tr>
            <tr className='restaurant-table-header'>
              <div className='restaurant-list-header'>
                <div className='list-title2'>List</div>
                <button className='btn2'>Add</button>
              </div>
            </tr>
            <tr>
              Restaurant 1
            </tr>
              <tr>
              Restaurant 2
            </tr>
          </table>
      </div>
    )
}

export default Restaurants