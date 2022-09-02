import { useLayoutEffect } from 'react';

const useWindowResizeEffect = function (callback) {

    useLayoutEffect(() => {

        callback();
        let timer;

        const debouncedCallback = function () {

            if (timer) clearTimeout(timer);

            timer = setTimeout(callback, 500);

        };

        window.addEventListener('resize', debouncedCallback);

        return () => window.removeEventListener('resize', debouncedCallback);

    }, []);

};

export { useWindowResizeEffect };
