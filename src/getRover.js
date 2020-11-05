const axios = require('axios');
require('dotenv').config();

async function getPicsAsync(date, camera, page) {
    let URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=' + page + '&camera=' + camera + '&earth_date=' + date + '&api_key=' + process.env.API_KEY;

    if (camera === 'all') {
        URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=' + page + '&earth_date=' + date + '&api_key=' + process.env.API_KEY;
    }

    try {
        const response = await axios.get(URL);
        return response.data.photos;
    } catch (err) {
        return undefined;
    }
}

module.exports = {
    getPicsAsync
};