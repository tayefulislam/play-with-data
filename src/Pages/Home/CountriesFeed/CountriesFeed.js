import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom'
const CountriesFeed = () => {

    const navigate = useNavigate()

    const url = `https://restcountries.com/v3.1/all`;

    const { isLoading, error, data } = useQuery('allContries', () => fetch(url).then(res => res.json()))

    if (isLoading) {

        return <Loading></Loading>

    }

    console.log(data)
    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-2'>


                {
                    data.map(country => <div class="card w-full bg-base-100 shadow-xl">
                        <figure><img className='h-48' src={country?.flags?.png} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                {country?.name.common}
                                <div class="badge badge-secondary h-full">{country?.capital ? country?.capital : 'Capital not found'}</div>
                            </h2>

                            <div class="card-actions justify-end">
                                <div onClick={() => navigate(`/detail/${country?.name.common}`)} class="badge badge-outline">Details</div>

                            </div>
                        </div>
                    </div>)
                }




            </div>

        </div>
    );
};

export default CountriesFeed;