import { useLayoutEffect } from 'react';

const useOutsideClickDetector = function (surfaceSelectors, handler, dependencies = []) {

    useLayoutEffect(() => {

        const bodyClickHandler = ({ target }) => {

            const surfaces = Array.from(document.querySelectorAll(surfaceSelectors));

            let isOutside = true;

            if (!surfaces || surfaces.length === 0) return;

            surfaces.forEach((surface) => {

                if (surface.contains(target)) isOutside = false;

            });

            if (isOutside) handler();

        };

        document.body.addEventListener('click', bodyClickHandler);

        return () => document.body.removeEventListener('click', bodyClickHandler);

    }, dependencies);

};

export { useOutsideClickDetector };
