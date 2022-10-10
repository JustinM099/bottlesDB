import axios from 'axios'

const API_URL = '/api/wines/'

//create new bottle
const createBottle = async (bottleData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, bottleData, config)

    return response.data
}

const bottleService = {
    createBottle
}

export default bottleService