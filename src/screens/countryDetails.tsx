import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../component/nav';
import { Arrow, BackBtn, BackText, BorderText, BoundriesC, BoundriesCntryName, BoundriesCntryNameC, ChiledContainer, ChiledContainer2, Container, CtextD, CtextlightD, DetailContainer, ErrorDiv, FlagContainer, FlagImg, HeaderText, HomeContainer, LoaderB, LoaderC } from './style';
import Loader from "react-js-loader";
import { useTheme } from '../contextApi/themeContext';


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
    const [loader, setLoader] = useState(false)
    const { isDarkMode } = useTheme();
    const [bloader, setBloader] = useState(false)

    useEffect(() => {
        setLoader(true)
        axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((res) => {
                const country = res.data[0];
                setCountryDetails(country);
                setLoader(false)
                if (country.borders) {
                    setBloader(true)
                    axios.get(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(',')}`)
                        .then((res) => {
                            const borderCountryNames = res.data.map((country: Country) => country.name.common);
                            setBorderCountries(borderCountryNames);
                            setBloader(false)
                        })
                        .catch((error) => {
                            setBloader(false)
                        });
                }

            })
            .catch((error) => {

                setLoader(false)
            });
    }, [countryName]);

    const handleBackClick = () => {
        navigate('/');
    };

    if (loader) {
        return (
            <div>
                <Nav />
                <HomeContainer style={{ paddingBottom: '100px' }}>
                    <BackBtn onClick={handleBackClick}>
                        <Arrow>←</Arrow>
                        <BackText>Back</BackText>
                    </BackBtn>
                    <LoaderC>
                        <Loader type="spinner-cub" bgColor={isDarkMode ? '#fafafa' : '#202C36'} color={isDarkMode ? '#fafafa' : '#202C36'} size={100} />
                    </LoaderC>
                </HomeContainer>
            </div>
        );
    }

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
                        <FlagImg src={countryDetails.flags.svg} alt={`${countryDetails.name.official} flag`} />
                        <DetailContainer>
                            <HeaderText>{countryDetails.name.official}</HeaderText>
                            <Container>
                                <ChiledContainer>
                                    <CtextD>Native name: <CtextlightD>{countryDetails.name.common}</CtextlightD></CtextD>
                                    <CtextD>Population: <CtextlightD>{countryDetails.population.toLocaleString()}</CtextlightD></CtextD>
                                    <CtextD>Region: <CtextlightD>{countryDetails.region}</CtextlightD></CtextD>
                                    <CtextD>Sub Region: <CtextlightD>{countryDetails.subregion || 'N/A'}</CtextlightD></CtextD>
                                    <CtextD>Capital: <CtextlightD>{countryDetails.capital ? countryDetails.capital[0] : 'N/A'}</CtextlightD></CtextD>
                                </ChiledContainer>
                                <ChiledContainer2>
                                    <CtextD>Top Level Domain: <CtextlightD>{countryDetails.tld ? countryDetails.tld.join(', ') : 'N/A'}</CtextlightD></CtextD>
                                    <CtextD>Currencies: <CtextlightD>{countryDetails.currencies ? Object.values(countryDetails.currencies).map(currency => currency.name).join(', ') : 'N/A'}</CtextlightD></CtextD>
                                    <CtextD>Languages: <CtextlightD>{countryDetails.languages ? Object.values(countryDetails.languages).join(', ') : 'N/A'}</CtextlightD></CtextD>
                                </ChiledContainer2>
                            </Container>
                            <BoundriesC>
                                <CtextD>
                                    Border Countries:
                                </CtextD>
                                {bloader ? <LoaderB>
                                    <Loader type="spinner-cub" bgColor={isDarkMode ? '#fafafa' : '#202C36'} color={isDarkMode ? '#fafafa' : '#202C36'} size={20} />
                                </LoaderB> : <BoundriesCntryNameC>
                                    {borderCountries.length > 0 ? borderCountries.map((countryName) => (
                                        <BoundriesCntryName key={countryName} onClick={() => { navigate(`/country/${countryName}`); }}>
                                            <BorderText>{countryName}</BorderText>
                                        </BoundriesCntryName>
                                    )) : <BorderText style={{ marginTop: '6px' }}>N/A</BorderText>}
                                </BoundriesCntryNameC>}
                            </BoundriesC>
                        </DetailContainer>
                    </FlagContainer>) : <ErrorDiv>No Data Found</ErrorDiv>}
            </HomeContainer>
        </div>
    );
}

export default CountryDetails;
