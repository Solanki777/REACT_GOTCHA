import React from 'react'

export default function Footer() {
  return (
    <div className='row fixed-bottom'>
        <div className='col-8'>
            <button className='btn btn-primary'>
                Reset
            </button>
        </div>
        <div className='col-2 bg-dark'>
            here the values are displyed
            
        </div>

        <div className='col-2'>
            <button className='btn btn-danger'>
                PayNow
            </button>
        </div>
    </div>
  )
}
