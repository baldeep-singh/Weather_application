import React from 'react';
import {Card,Button,Container} from 'react-bootstrap';
import {useEffect} from 'react';
import './index.css';
import moment from 'moment';

const Weather = ({weatherData}) => {
    return (
        <div className="main">
        <p className="header">{weatherData.city}</p>
        <div className="flex">
            <p className="day"> {moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
            <p className="description">null</p>
        </div>

        <div className="flex">
            <p className="temp">Temprature: {weatherData.temp} </p>
            <p className="temp">Humidity: {weatherData.humidity}</p>
        </div>

        <div className="flex">
            <p className="sunrise-sunset">Sunrise:null</p>
            <p className="sunrise-sunset">Sunset: null</p>
        </div>

    </div>
  )
}

export default Weather