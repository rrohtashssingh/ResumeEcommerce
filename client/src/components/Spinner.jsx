import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from './layout/Layout';

const Spinner = ({ path = 'login' }) => {
    const location = useLocation();

    const [count, setCount] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000);
        count === 0 && navigate(`/${path}`, {
            state: location.pathname,
        })
        return () => clearInterval(interval)
    }, [count, navigate, location, path]);

    return (
        <Layout>
            <div className="text-center flex flex-col justify-center items-center">
                <h1 className='text-xl font-semibold'> redirecting to you... {count}s</h1>
                <div className='loader'></div>
            </div>
        </Layout>
    )
}

export default Spinner;