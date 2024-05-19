import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../component/nav';
import { Arrow, BackBtn, BackText, HomeContainer } from './style';

interface Country {
    name: {
        official: string;
    };
    population: number;
    region: string;
    capital: string[];
    flags: {
        png: string;
        svg: string;
    };
}

const CountryDetails: React.FC = () => {
    const { countryName } = useParams<{ countryName: string }>();
    const [countryDetails, setCountryDetails] = useState<Country | null>(null);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((res) => {
                setCountryDetails(res.data[0]);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [countryName]);

    const handleBackClick = () => {
    };

    return (
        <div>
            <Nav />
            <HomeContainer>
                <BackBtn onClick={handleBackClick}>
                    <Arrow>←</Arrow>
                    <BackText>Back</BackText>
                </BackBtn>
                {countryDetails ? (
                    <div>
                        <img src={countryDetails.flags.png} alt={`${countryDetails.name.official} flag`} style={{ width: '560px', height: '401px' }} />
                        <h1>{countryDetails.name.official}</h1>
                        <p>Population: {countryDetails.population.toLocaleString()}</p>
                        <p>Region: {countryDetails.region}</p>
                        <p>Capital: {countryDetails.capital[0]}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </HomeContainer>
        </div>
    );
}

export default CountryDetails;
