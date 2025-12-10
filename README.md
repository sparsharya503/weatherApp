## Weather Predictor Application
The following application is created with the intension of being able to find the weather of a given region at real time. This application is majorly composed of a landing page with a call to action button that allows you to get started and finally query a certain location.

The application works by 2 steps which include initially trying to find the exact latitude and longitude of the city. Further this latitude and longitude is the used to find the weather properties of that city in real time.
<img width="937" height="455" alt="image" src="https://github.com/user-attachments/assets/97804e1c-185c-4ac0-9e9f-0a9a331bf22e" />
<img width="944" height="340" alt="image" src="https://github.com/user-attachments/assets/f0bfdaf1-22ed-49cd-8d92-eab10f4d6343" />

## Table of Content
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Features](#Features)
4. [Technologies](#Technologies)
5. [Contributing](#Contributing)
6. [Licence](#Licence)

## Installation
1. Clone the repository
```bash
git clone https://github.com/sparsharya503/weatherApp.git
```
2. Install all node dependencies
```bash
npm install
```
3. Create a .env file with
```bash
REACT_APP_URL = "https://weatherapi-com.p.rapidapi.com/alerts.json"
REACT_APP_KEY = "your-key"
REACT_APP_HOST = "weatherapi-com.p.rapidapi.com"
REACT_APP_WEATHER_URL = "https://weatherapi-com.p.rapidapi.com/current.json"
```
4. Start the Server
   ```bash
   npm start
   ```
 ## Usage
 You can use the following project to find the temperature of any city in the world in real time and make any plans basis the realtime temperature.

## Features
The following app allows you to search the temperature, wind velocity, feel like temperature and humidity of a city in realtime.

 ## Technologies
- **Frontend:** React.js, CSS  
- **Icons:** FontAwesome  
- **Routing:** React Router  
- **API:** Active Jobs API (via RapidAPI)  
- **State Management:** React Hooks (`useState`)
- **API Call** - Fetch

  
## Contributing
1. Fork the repository
2. Create a new feature branch
   ```bash
   git checkout -b your-new-branch
   ```
3. Make your changes and commit
   ```bash
   git commit -m "Added Features"
   ```
4. Push to your branch and create a pull request

## License
This project is licensed under the MIT License.
