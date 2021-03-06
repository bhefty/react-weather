import React, { Component } from 'react'

let WeatherMessage = ({ temp, location }) => {
  return (
    <div>
      <h3 className='text-center'>
        It is {temp} in {location}.
      </h3>
    </div>
  )
}

export default WeatherMessage
