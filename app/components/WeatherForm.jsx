import React, { Component } from 'react'

class WeatherForm extends Component {
  constructor(props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  onFormSubmit(e) {
    e.preventDefault()

    let location = this.refs.location.value

    if (location.length > 0) {
      this.refs.location.value = ''
      this.props.onSearch(location)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref='location' placeholder='Enter city name'/>
          <button className='button expanded hollow'>Get Weather</button>
        </form>
      </div>
    )
  }
}

export default WeatherForm
