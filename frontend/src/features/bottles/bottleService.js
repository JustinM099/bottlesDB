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

//get bottles of a user
const getBottles = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

//delete bottle
const deleteBottle = async (bottleId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + bottleId, config)
    window.location.reload()

    return response.data
}



const bottleService = {
    createBottle,
    getBottles,
    deleteBottle
}

export default bottleService