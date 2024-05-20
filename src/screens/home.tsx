import React, { useEffect, useState } from 'react';
import { StyledSelect, StyledSelectContainer, CountryContainer, CountryDetail, CountryName, Ctext, Ctextlight, HeaderContainer, HomeContainer, InputBox, InputBoxContainer, TextContainer, HomeFlag, LoaderC, ErrorDiv } from './style';
import axios from 'axios';
import Nav from '../component/nav';
import { Link, useNavigate } from 'react-router-dom';
import Loader from "react-js-loader";
import { useTheme } from '../contextApi/themeContext';

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

const Home: React.FC = () => {
    const [data, setData] = useState<Country[]>([]);
    const [regions, setRegions] = useState<string[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string>('');
    const [searchData, setSearchData] = useState<string>('');
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false)
    const { isDarkMode } = useTheme();

    useEffect(() => {
        setLoader(true)
        getCountryData()
    }, []);

    const getCountryData = () => {
        axios.get('https://restcountries.com/v3.1/independent?status=true')
            .then((res) => {
                setData(res.data);
                const allRegions = res.data.map((country: Country) => country.region);
                const uniqueRegions = Array.from(new Set(allRegions)).filter(region => region) as string[];
                setRegions(uniqueRegions);
                setLoader(false)
            })
            .catch((error) => {
                setLoader(false)
            });
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const region = e.target.value;
        setSelectedRegion(region);
        setLoader(true)
        axios.get(`https://restcountries.com/v3.1/region/${region}`)
            .then((res) => {
                setData(res.data);
                setLoader(false)
            })
            .catch((error) => {
                setLoader(false)
            });
    }

    const onSearch = () => {
        setLoader(true)
        if (searchData) {
            axios.get(`https://restcountries.com/v3.1/name/${searchData}`)
                .then((res) => {
                    setData(res.data);
                    setLoader(false)
                })
                .catch((error) => {
                    setLoader(false)
                    alert(error.message)
                });
        } else {
            getCountryData()
        }

    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div>
            <Nav />
            <HomeContainer>
                {loader ? <LoaderC>
                    <Loader type="spinner-cub" bgColor={isDarkMode ? '#fafafa' : '#202C36'} color={isDarkMode ? '#fafafa' : '#202C36'} size={100} />
                </LoaderC> : (data.length > 0 ? <>
                    <HeaderContainer>
                        <InputBoxContainer>
                            <img src={isDarkMode ? "/assets/loupe.png" : "/assets/search.svg"} alt="Search Icon" style={{ width: '15px', height: '13px', marginLeft: '30px', cursor: 'pointer' }} onClick={onSearch} />
                            <InputBox type='text' placeholder='Search for a country…' value={searchData} onChange={(e) => { setSearchData(e.target.value) }} onKeyDown={handleKeyDown} />
                        </InputBoxContainer>

                        <StyledSelectContainer>
                            <StyledSelect value={selectedRegion} onChange={handleSelectChange}>
                                <option value="" disabled>
                                    Select an option
                                </option>
                                {regions.map((region) => (
                                    <option value={region} key={region}>{region}</option>
                                ))}
                            </StyledSelect>
                        </StyledSelectContainer>
                    </HeaderContainer>

                    <CountryContainer>
                        {data.map((country) => (

                            <CountryDetail key={country.name.official} onClick={() => { navigate(`/country/${country.name.official}`); }}>
                                <HomeFlag src={country.flags.png} alt={`${country.name.official} flag`} />
                                <TextContainer>
                                    <CountryName>{country.name.official}</CountryName>
                                    <Ctext>Population: <Ctextlight>{country.population.toLocaleString()}</Ctextlight></Ctext>
                                    <Ctext>Region: <Ctextlight>{country.region}</Ctextlight></Ctext>
                                    <Ctext>Capital: <Ctextlight>{country.capital[0]}</Ctextlight></Ctext>
                                </TextContainer>
                            </CountryDetail>

                        ))}
                    </CountryContainer>
                </> : <ErrorDiv>No Data Found</ErrorDiv>)}
            </HomeContainer>
        </div>
    );
}

export default Home;
