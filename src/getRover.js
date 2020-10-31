const axios = require('axios');
const key = 'YCfgVEYdoH6KYHDq1H8ou0NbMZAcnb55ocNmmaGq';

async function getPicsAsync(date, camera, page) {
    let URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=' + page + '&camera=' + camera + '&earth_date=' + date + '&api_key=' + key;

    if (camera === 'all') {
        URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=' + page + '&earth_date=' + date + '&api_key=' + key;
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