import React, { Component } from 'react'

let WeatherMessage = ({ temp, location }) => {
  return (
    <div>
      <p>
        It is {temp} in {location}.
      </p>
    </div>
  )
}

export default WeatherMessage
