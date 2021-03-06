import React from "react";
import Header from "./Components/Layout/Header";
import Cloud from "./Components/Weather/Cloud";
import WeatherCard from "./Components/Weather/WeatherCard";
import SearchCity from "./Components/Weather/SearchCity";
import Footer from "./Components/Layout/Footer";

const Api_KEY = process.env.REACT_APP_WEATHER_API_KEY;
// const Api_URL = process.env.REACT_APP_WEATHER_API_URL;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bg: "",
      city: "",
      icon: "",
      temp: "",
      celsius: "",
      tempMax: "",
      tempMin: "",
      humidity: "",
      description: "",
      errorMessage: false,
    };
    // Reference: https://openweathermap.org/weather-conditions  //
    // ======================================================== //

    // Weather Icons
    this.weatherIcon = {
      thunderstorm_weather: "wi-thunderstorm",
      drizzle_weather: "wi-raindrops",
      // rain: "wi-storm-showers",
      rainLight_weather: "wi-rain ",
      rainFreezing_weather: "wi-rain-mix",
      rainShower_weather: "wi-showers",
      snow_weather: "wi-snow",
      atmosphere_weather: "wi-fog",
      clear_weather: "wi-day-sunny",
      // clouds_weather: "wi-day-fog",
      cloudFew_weather: "wi-cloud ",
      cloudScatered_weather: "wi-cloudy-gusts",
      cloudOvercast_weather: "wi-cloudy",
    };

    // Weather Background
    this.weatherBackground = {
      thunderstormWeather: "bg-thunderstorm",
      drizzleWeather: "bg-sleet",
      rainWeather: "bg-storm-showers",
      snowWeather: "bg-snow",
      atmosphereWeather: "bg-fog",
      clearWeather: "bg-day-sunny",
      cloudsWeather: "bg-day-fog",
    };
  }

  // Weather Icons
  weatherIcons(icons, rangeId) {
    if (rangeId >= 200 && rangeId < 232) {
      this.setState({ icon: icons.thunderstorm_weather });
    } else if (rangeId >= 300 && rangeId <= 321) {
      this.setState({ icon: icons.drizzle_weather });
    }
    // else if (rangeId >= 500 && rangeId <= 531) {
    //   this.setState({ bg: icons.rainWeather });
    // }
    else if (rangeId >= 500 && rangeId <= 504) {
      this.setState({ icon: icons.rainLight_weather });
    } else if (rangeId === 511) {
      this.setState({ icon: icons.rainFreezing_weather });
    } else if (rangeId >= 520 && rangeId <= 531) {
      this.setState({ icon: icons.rainShower_weather });
    }
    //
    else if (rangeId >= 600 && rangeId <= 622) {
      this.setState({ icon: icons.snow_weather });
    } else if (rangeId >= 701 && rangeId <= 781) {
      this.setState({ icon: icons.atmosphere_weather });
    } else if (rangeId === 800) {
      this.setState({ icon: icons.clear_weather });
    }
    //  else if (rangeId >= 801 && rangeId <= 804) {
    //   this.setState({ icon: icons.cloudsWeather });
    // }
    else if (rangeId === 801) {
      this.setState({ icon: icons.cloudFew_weather });
    } else if (rangeId === 802) {
      this.setState({ icon: icons.cloudScatered_weather });
    } else if (rangeId >= 803 && rangeId <= 804) {
      this.setState({ icon: icons.cloudOvercast_weather });
    }

    //
    else {
      this.setState({ icon: icons.cloudsWeather });
    }
  }

  // Weather Backgrounds

  weatherBackgrounds(background, rangeId) {
    if (rangeId >= 200 && rangeId < 232) {
      this.setState({ bg: background.thunderstormWeather });
    } else if (rangeId >= 300 && rangeId <= 321) {
      this.setState({ bg: background.drizzleWeather });
    } else if (rangeId >= 500 && rangeId <= 531) {
      this.setState({ bg: background.rainWeather });
    } else if (rangeId >= 600 && rangeId <= 622) {
      this.setState({ bg: background.snowWeather });
    } else if (rangeId >= 701 && rangeId <= 781) {
      this.setState({ bg: background.atmosphereWeather });
    } else if (rangeId === 800) {
      this.setState({ bg: background.clearWeather });
    } else if (rangeId >= 801 && rangeId <= 804) {
      this.setState({ bg: background.cloudsWeather });
    } else {
      this.setState({ bg: background.cloudsWeather });
    }
  }

  calCelsius(temp) {
    let celsius = Math.floor(temp - 273.15);
    return celsius;
  }

  checkWeather = async (event) => {
    event.preventDefault();

    const city = event.target.elements.city.value;

    if (city) {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&dt={dt}&type=hour&appid=${Api_KEY}`
        // `https://api.openweathermap.org/data/2.5/onecall??q=${city}&dt={dt}&type=hour&appid=${Api_KEY}`
      );

      const weatherData = await api_call.json();
      this.setState({
        city: `${weatherData.name}`,
        main: weatherData.weather[0].main,

        celsius: this.calCelsius(weatherData.main.temp),
        temp_max: this.calCelsius(weatherData.main.temp_max),
        temp_min: this.calCelsius(weatherData.main.temp_min),
        humidity: weatherData.main.humidity,
        description: weatherData.weather[0].description,
        errorMessage: false,
      });

      // Setting icons + backgrounds
      this.weatherIcons(this.weatherIcon, weatherData.weather[0].id);
      this.weatherBackgrounds(
        this.weatherBackground,
        weatherData.weather[0].id
      );
      console.log(weatherData);
    } else {
      this.setState({
        errorMessage: true,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Cloud />

        <SearchCity
          loadweather={this.checkWeather}
          errorMessage={this.state.errorMessage}
        />
        <WeatherCard
          cityName={this.state.city} // City
          weatherIcon={this.state.icon} // Icons
          weatherBackground={this.state.bg} // Background
          tempCelsius={this.state.celsius} // Main Temprature
          tempMax={this.state.temp_max} // Mximum Temprature
          tempMin={this.state.temp_min} // Minimum Temprature
          humidity={this.state.humidity} // Humidity Temprature
          description={this.state.description} // Temprature Condition
        />

        <Footer />
      </div>
    );
  }
}

export default App;
