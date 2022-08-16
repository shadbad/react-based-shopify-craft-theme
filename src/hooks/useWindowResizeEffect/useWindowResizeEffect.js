import { useLayoutEffect } from 'react';

const useWindowResizeEffect = function (callback) {

    useLayoutEffect(() => {

        setTimeout(() => {

            callback();

            window.addEventListener('resize', callback);

            return () => window.removeEventListener('resize', callback);

        }, 50);

    }, []);

};

export { useWindowResizeEffect };
