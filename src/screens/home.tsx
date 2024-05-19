import React, { useEffect, useState } from 'react';
import { StyledSelect, StyledSelectContainer, CountryContainer, CountryDetail, CountryName, Ctext, Ctextlight, HeaderContainer, HomeContainer, InputBox, InputBoxContainer, TextContainer } from './style';
import axios from 'axios';
import Nav from '../component/nav';
import { Link } from 'react-router-dom';

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

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/independent?status=true')
            .then((res) => {
                setData(res.data);
                const allRegions = res.data.map((country: Country) => country.region);
                const uniqueRegions = Array.from(new Set(allRegions)).filter(region => region) as string[];
                setRegions(uniqueRegions);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const region = e.target.value;
        setSelectedRegion(region);
        axios.get(`https://restcountries.com/v3.1/region/${region}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    const onSearch = () => {
        axios.get(`https://restcountries.com/v3.1/name/${searchData}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <div>
            <Nav />
            <HomeContainer>
                <HeaderContainer>
                    <InputBoxContainer>
                        <img src="/assets/search.svg" alt="Search Icon" style={{ width: '15px', height: '13px', marginLeft: '30px', cursor: 'pointer' }} onClick={onSearch} />
                        <InputBox type='text' placeholder='Search for a country…' value={searchData} onChange={(e) => { setSearchData(e.target.value) }} />
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
                        <Link to={`/country/${country.name.official}`}>
                            <CountryDetail key={country.name.official}>
                                <img src={country.flags.png} alt={`${country.name.official} flag`} style={{ width: '100%', height: '160px' }} />
                                <TextContainer>
                                    <CountryName>{country.name.official}</CountryName>
                                    <Ctext>Population: <Ctextlight>{country.population.toLocaleString()}</Ctextlight></Ctext>
                                    <Ctext>Region: <Ctextlight>{country.region}</Ctextlight></Ctext>
                                    <Ctext>Capital: <Ctextlight>{country.capital[0]}</Ctextlight></Ctext>
                                </TextContainer>
                            </CountryDetail>
                        </Link>
                    ))}
                </CountryContainer>
            </HomeContainer>
        </div>
    );
}

export default Home;
