import { useEffect, useState } from 'react';

const useDataProvider = function (resource, params = {}, dependencies = []) {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {

        if (process.env.NODE_ENV === 'production') {

            const URL = `${process.env.REACT_APP_API_BASE}/${process.env[`REACT_APP_API_${resource.toUpperCase()}`]}`;

            const options = {
                method: 'get',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            };

            setStatus('loading');

            fetch(URL, options)
                .then((response) => response.json())
                .then((info) => {

                    setData(() => info);
                    setStatus(() => 'done');

                })
                .catch((err) => setError(err.response || err));

        } else {

            import('./dummyData.json')
                .then((module) => module[resource.toUpperCase()])
                .then((info) => {

                    if (resource.toUpperCase() === 'PRODUCTS') {

                        const keywords = params.query.toLowerCase().split(' ').filter((item) => item !== '');
                        return info.filter((item) => keywords.some((keyword) => item.title.toLowerCase().includes(keyword)));

                    }

                    return info;

                })
                .then((info) => {

                    setData(() => info);
                    setStatus(() => 'done');

                })
                .catch((err) => setError(err.response || err));

        }

    }, dependencies);

    return { status, error, data };

};

export { useDataProvider };
