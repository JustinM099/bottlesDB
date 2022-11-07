import axios from 'axios'

const API_URL = '/api/mail/'

const createMail = async (mailData) => {

    const response = await axios.post(API_URL, mailData)

    return response.data
}

const mailService = {
    createMail
}

export default mailService