import { useEffect, useState } from 'react';

const useDataProvider = function (resource) {

    const [data, setData] = useState({});
    const [status, setStatus] = useState('loading');
    const [error, setError] = useState('');

    useEffect(() => {

        if (process.env.NODE_ENV === 'production') {

            const URL = `${process.env.REACT_APP_API_BASE}/${process.env[`REACT_APP_API_${resource.toUpperCase()}`]}`;

            fetch(URL)
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

                    setData(() => info);
                    setStatus(() => 'done');

                })
                .catch((err) => setError(err.response || err));

        }

    }, []);

    return { status, error, data };

};

export { useDataProvider };
