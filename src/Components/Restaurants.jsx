import React from 'react'
import './Restaurants.css'

const Restaurants = () => {
    return (
      <div className='restaurent-box'>
          <table className='restaurent-table'>
            <tr className='restaurent-header'>
              Food to eat
            </tr>
            <tr className='restaurent-table-header'>
              Restaurants
            </tr>
            <tr>
              <td>Restaurant 1</td>
            </tr>
            <tr>
              <td>Restaurant 2</td>
            </tr>
          </table>
      </div>
    )
}

export default Restaurants