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
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default CountryDetail;