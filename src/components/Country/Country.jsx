import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const {region,area,population, name, flags} = props.country // destructuring, as a result we do't have to write props.country every time
    // first method is without destructuring & second method is applicable with destructuring
    return (
        <div className='country'>
            {/* <h3>Country Name: {props.country.name.common} </h3>
            <p>Population: {props.country.population} </p>
            <p>Area: {props.country.area} </p>
            <p><small>Region:{props.country.region} </small></p> */}
            <h3>Country Name: {name.common} </h3>
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <img className='flags-measure' src={flags.png} alt="" />
            <p><small>Region:{region} </small></p>
        </div>
    );
};

export default Country;