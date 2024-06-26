/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { RxReload } from 'react-icons/rx';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Card = ({ selectedRegion, searchedCountry, setSearchedCountry }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState('');

  const fetchAllCountries = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://restcountries.com/v3.1/all');

      if (!response) {
        throw new Error('Opps, something went wrong'); // or return a placeholder, error message, or loading state
      }
      const data = response.data; // assigning responses from the server-data
      
            // Filtering countries based on chosen region
      const filteredCountries = selectedRegion
        ? data.filter((country) => country.region === selectedRegion)
        : data;

      setCountries(filteredCountries);
      setIsLoading(false); // This sets the loading to false whether the request succeeds or fails

    } catch (error) {
      // handling errors
      setError(error.message);
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, [selectedRegion, searchedCountry]);

  return (
    <>
    <div className='grid pb-20 mt-10 gap-10 px-10 laptop:grid-cols-4 mobile:grid-cols-1 tablet:grid-cols-3'>
      {isLoading ? (
       <div className=' dark:text-white flex justify-center pb-2  w-full '>
        <button type="button" className=" dark:bg-[#2B3844] shadow-lg flex items-center rounded-md gap-3 py-2 px-2" disabled>
        <RxReload className='dark:text-white animate-spin' /> 
        <h1 className=' '>Loading</h1>
        </button>
      </div>
      ) : null}
      
      {/* filtering country by search request */} 

      { searchedCountry? searchedCountry.map((country, index) => (
      <Link key={index}  to={`/infopage/${country.name.common}`}>
      <div className='top mobile:w-[100%] mobile:m-auto rounded-lg bg-white dark:bg-[#2B3844] dark:text-[#fff] h-[350px] font-Nunito shadow-lg '>
          <div>
            <img src={country.flags.png} alt={country.name.common} className=' w-[100%] h-[180px] rounded-t-lg ' />
          </div>
          <div className=' my-3 px-5 w-full'>
            <h1 className=' text-[16px] w-full font-extrabold text-wrap'>{country.name.common}</h1>
          </div>
          <div className=' flex flex-col gap-2 pl-5 text-[14px]'>
            <div className='flex gap-2'>
              <p className=' font-semibold'>Population:</p>
              <span>{country.population}</span>
            </div>
            <div className='flex gap-2'>
              <p className=' font-semibold'>Region:</p>
              <span>{country.region}</span>
            </div>
            <div className='flex gap-2 mb-5 '>
              <p className=' font-semibold'>Capital:</p> <span className=' w-full text-wrap'>{country.capital}</span>
            </div>
          </div>
        </div></Link>
      )) : countries.map((country, index) => (
        <Link  key={index} to={`/infopage/${country.name.common}`}>
        <div  className='top mobile:w-[100%] mobile:m-auto rounded-lg bg-white dark:bg-[#2B3844] dark:text-[#fff] h-[360px] font-Nunito shadow-lg '>
          <div>
            <img src={country.flags.png} alt={country.name.common} className=' w-[100%] h-[180px] rounded-t-lg ' />
          </div>
          <div className=" my-3 px-5 w-full">
            <h1 className=' text-[16px] font-extrabold w-full text-wrap'>{country.name.common}</h1>
          </div>
          <div className=' flex flex-col gap-2 pl-5 text-[14px]'>
            <div className='flex gap-2'>
              <p className=' font-semibold'>Population:</p>
              <span>{country.population}</span>
            </div>
            <div className='flex gap-2'>
              <p className=' font-semibold'>Region:</p>
              <span>{country.region}</span>
            </div>
            <div className='flex gap-2 mb-5 '>
              <p className=' font-semibold'>Capital:</p> <span className=' w-full text-wrap'>{country.capital}</span>
            </div>
          </div>
        </div></Link>
      ))}
    </div>
    </>
  );
};

export default Card;