import { isInTestEnv } from '../../env/index.js'
import { data } from '../../../../data/mock-weather-api-data.js'

// Penser bien à ajouter votre clé d'API
const ACCESS_KEY = '931f119b9236cc4743d277b1e73b6e77'

const _retrieveWeatherForecastApiData = coordinates => fetch(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${coordinates.lat},${coordinates.lng}`)
    .then(res => res.json())
    .catch(err => console.log("Oh no", err))


export const retrieveWeatherForecastData = async (coordinates) => {
    if (isInTestEnv()) {
        return data
    }

    return await _retrieveWeatherForecastApiData(coordinates)
}