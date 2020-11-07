# Mars Curiosity Rover
- [App info](#app-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [License](#license)

## App info
The app sends http requests from the browser using the fetch api, including the camera and date you choose as<br> query parameters to an express server.  
The express server sends http requests to NASA's API using axios and gets back the rover's images for the date<br> and camera you specified, finally the server sends back the response at the browser to render the images.   
#### Author  
**Elia Tryfonas**

## Technologies
- Node.js
- Express
- Axios
- ejs
- tailwindcss
## Setup
To run this project you need a valid api key from NASA. You can get one for free at [https://api.nasa.gov]([https://api.nasa.gov)  
Create a **.env** file and add your key.
```
API_KEY ='your-api-key' 
```
then run the following commands inside the root folder
```
npm install
cd public
npm install
cd ..
npm run start
```
or this if you are using bash terminal  
```
npm run build && npm start
```
The site runs on [http://localhost:3000](http://localhost:3000)  
Enjoy Mars!
## License
This project is licensed under the MIT License.


