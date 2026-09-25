import React from 'react'

export default function addproduct() {
  return (
    <div className='row'>
        
        <div className = 'col-8'>
          
          <input type="text" className="" placeholder='item name' />

        </div>
        
        <div className="col-2">
          
          <input type="number" className="" placeholder='item price' />

        </div>
        
        <div className="col-2">
          <button className="btn btn-danger">
            add
          </button> 
        </div>
      </div>
  )
}
