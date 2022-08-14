import { useLayoutEffect } from 'react';

const useWindowResizeEffect = function (callback) {

    useLayoutEffect(() => {

        callback();

        window.addEventListener('resize', callback);

        return () => window.removeEventListener('resize', callback);

    }, []);

};

export { useWindowResizeEffect };
