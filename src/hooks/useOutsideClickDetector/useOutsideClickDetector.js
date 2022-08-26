import { useLayoutEffect } from 'react';

const useOutsideClickDetector = function (surfaceSelector, handler, dependencies = []) {

    useLayoutEffect(() => {

        const bodyClickHandler = ({ target }) => {

            const surface = document.querySelector(surfaceSelector);

            if (!surface) return;

            if (!surface.contains(target)) handler();

        };

        document.body.addEventListener('click', bodyClickHandler);

        return () => document.body.removeEventListener('click', bodyClickHandler);

    }, dependencies);

};

export { useOutsideClickDetector };
