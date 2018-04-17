import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import  'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const API_KEY = "4488a7803edff56d348a1f49eddbe95d";
//initialize component
//Creating instance off app

class App extends React.Component {
//Object containing key value we need
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    //Setting e - event for not reloading page
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`);
    //Need to convert it to json - everything understands it
    const data = await api_call.json();
    //Making check if values are entered and then render
    if (city && country) {
    // console.log(data);
    this.setState({
      temperature: data.list[0].main.temp - 273.15,
      city: data.city.name,
      country: data.city.country,
      humidity: data.list[0].main.humidity,
      description: data.list[0].weather[0].description,
      error: ""
    });
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the values first"
    });
  }
  }
  //return something method
          //Setting props, value for function, thanks to that we have access to this function in Form.js
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                  <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather} />
                    <Weather
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      error={this.state.error}
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


//to make it available for other files to import

export default App;
