var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <h3>
            It's {temp} Celcius in {location}
        </h3>
    )
};

module.exports = WeatherMessage;