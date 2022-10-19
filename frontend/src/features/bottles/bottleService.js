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

//edit bottle
const editBottle = async (bottleId, bottleData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    console.log('BOTTLE SERVICE EDIT BOTTLE TRIGGERED. bottleId: ', bottleId, 'bottleData: ', bottleData, 'token: ' + token)
    const response = await axios.put(API_URL + bottleData.bottleId, bottleData, config)
    window.location.reload()

    return response.data
}

//search bottles
const searchBottles = async (token, query) => {
    console.log("SEARCH BOTTLES TRIGGERED")
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    console.log('SEARCH RESPONSE: ', response)
    const filteredResponse = response.filter(bottle => bottle.includes(query))

    console.log('FILTERED RESPONSE: ', filteredResponse)

    return filteredResponse.data
}


const bottleService = {
    createBottle,
    getBottles,
    deleteBottle,
    editBottle,
    searchBottles
}

export default bottleService