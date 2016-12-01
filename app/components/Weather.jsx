import React, { Component } from 'react'

import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import { getTemp } from 'openWeatherMap'
import ErrorModal from 'ErrorModal'

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }
  componentDidMount() {
    let location = this.props.location.query.location

    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  }

  componentWillReceiveProps(newProps) {
    let location = newProps.location.query.location

    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  }

  handleSearch(location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    })

    getTemp(location).then((temp) => {
      this.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, (e) => {
      this.setState({
        isLoading: false,
        errorMessage: e.message
      })
    })
  }
  render() {
    let { isLoading, temp, location, errorMessage } = this.state

    function renderMessage() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        )
      }
    }

    return (
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        { renderMessage() }
        { renderError() }
      </div>

    )
  }
}

export default Weather
