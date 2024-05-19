import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../component/nav';
import { Arrow, BackBtn, BackText, BorderText, BoundriesC, BoundriesCntryName, BoundriesCntryNameC, ChiledContainer, Container, Ctext, Ctextlight, DetailContainer, FlagContainer, HomeContainer } from './style';

interface Country {
    name: {
        official: string;
        common: string;
    };
    population: number;
    region: string;
    subregion?: string;
    capital?: string[];
    flags: {
        png: string;
        svg: string;
    };
    borders?: string[];
    tld?: string[];
    currencies?: { [key: string]: { name: string } };
    languages?: { [key: string]: string };
}

const CountryDetails: React.FC = () => {
    const { countryName } = useParams<{ countryName: string }>();
    const [countryDetails, setCountryDetails] = useState<Country | null>(null);
    const [borderCountries, setBorderCountries] = useState<string[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((res) => {
                const country = res.data[0];
                setCountryDetails(country);

                if (country.borders) {
                    axios.get(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(',')}`)
                        .then((res) => {
                            const borderCountryNames = res.data.map((country: Country) => country.name.common);
                            setBorderCountries(borderCountryNames);
                        })
                        .catch((error) => {
                            console.error('Error fetching border countries:', error);
                        });
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [countryName]);

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div>
            <Nav />
            <HomeContainer style={{ paddingBottom: '100px' }}>
                <BackBtn onClick={handleBackClick}>
                    <Arrow>←</Arrow>
                    <BackText>Back</BackText>
                </BackBtn>
                {countryDetails ? (
                    <FlagContainer>
                        <img src={countryDetails.flags.svg} alt={`${countryDetails.name.official} flag`} style={{ width: '48%', height: '400px', borderRadius: '15px' }} />
                        <DetailContainer>
                            <h1>{countryDetails.name.official}</h1>
                            <Container>
                                <ChiledContainer>
                                    <Ctext>Native name: <Ctextlight>{countryDetails.name.common}</Ctextlight></Ctext>
                                    <Ctext>Population: <Ctextlight>{countryDetails.population.toLocaleString()}</Ctextlight></Ctext>
                                    <Ctext>Region: <Ctextlight>{countryDetails.region}</Ctextlight></Ctext>
                                    <Ctext>Sub Region: <Ctextlight>{countryDetails.subregion || 'N/A'}</Ctextlight></Ctext>
                                    <Ctext>Capital: <Ctextlight>{countryDetails.capital ? countryDetails.capital[0] : 'N/A'}</Ctextlight></Ctext>
                                </ChiledContainer>
                                <ChiledContainer>
                                    <Ctext>Top Level Domain: <Ctextlight>{countryDetails.tld ? countryDetails.tld.join(', ') : 'N/A'}</Ctextlight></Ctext>
                                    <Ctext>Currencies: <Ctextlight>{countryDetails.currencies ? Object.values(countryDetails.currencies).map(currency => currency.name).join(', ') : 'N/A'}</Ctextlight></Ctext>
                                    <Ctext>Languages: <Ctextlight>{countryDetails.languages ? Object.values(countryDetails.languages).join(', ') : 'N/A'}</Ctextlight></Ctext>
                                </ChiledContainer>
                            </Container>
                            <BoundriesC>
                                <Ctext>
                                    Border Countries:
                                </Ctext>
                                <BoundriesCntryNameC>
                                    {borderCountries.length > 0 ? borderCountries.map((countryName) => (
                                        <BoundriesCntryName key={countryName}>
                                            <BorderText>{countryName}</BorderText>
                                        </BoundriesCntryName>
                                    )) : <Ctextlight>N/A</Ctextlight>}
                                </BoundriesCntryNameC>
                            </BoundriesC>
                        </DetailContainer>
                    </FlagContainer>
                ) : (
                    <p>Loading...</p>
                )}
            </HomeContainer>
        </div>
    );
}

export default CountryDetails;
