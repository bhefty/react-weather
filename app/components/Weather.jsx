import React, { Component } from 'react'

import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import { getTemp } from 'openWeatherMap'

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }
  handleSearch(location) {
    this.setState({ isLoading: true })

    getTemp(location).then((temp) => {
      this.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, (errorMessage) => {
      this.setState({ isLoading: false })
      alert(errorMessage)
    })
  }
  render() {
    let { isLoading, temp, location } = this.state

    function renderMessage() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    return (
      <div>
        <h1 className='text-center'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        { renderMessage() }
      </div>

    )
  }
}

export default Weather
