import { useLayoutEffect } from 'react';

const useBodyLocker = function (lock = false) {

    useLayoutEffect(() => {

        if (lock) {

            window.scrollTo({ top: 0 });
            document.body.classList.add('lock');

        } else {

            document.body.classList.remove('lock');

        }

    });

};

export { useBodyLocker };
