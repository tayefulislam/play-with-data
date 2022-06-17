import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from '../../Shared/Loading/Loading';

const CountryDetail = () => {

    let { name } = useParams()

    console.log(name)



    const url = `https://restcountries.com/v3.1/name/${name}`;

    const { isLoading, error, data } = useQuery('country', () => fetch(url).then(res => res.json()))









    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(data[0]?.flags?.png)

    return (
        <div>

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">{data[0]?.name?.common}</h1>
                        <h1 class="text-xl font-bold">Official: {data[0]?.name?.official}</h1>

                        <img src={data[0]?.flags.png} alt="" />

                        <p>Area: {data[0]?.area}</p>
                        <p>Population: {data[0]?.population}</p>
                        <p>Time: {data[0]?.timezones[0]}</p>


                        <a className='btn btn-sm btn-error text-white' href={data[0]?.maps?.googleMaps}>Google Map</a>





                    </div>
                </div>
            </div>





        </div>
    );
};

export default CountryDetail;