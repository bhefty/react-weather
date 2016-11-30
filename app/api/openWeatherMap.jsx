import axios from 'axios'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c8c54ce510c3a7dcbe3aa01d56a66095&units=imperial'

function getTemp(location) {
  let encodedLocation = encodeURIComponent(location)
  let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

  return axios.get(requestUrl).then((res) => {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message)
    } else {
      return res.data.main.temp
    }
  }, (res) => {
    throw new Error(res.data.message)
  })
}

export { getTemp }
