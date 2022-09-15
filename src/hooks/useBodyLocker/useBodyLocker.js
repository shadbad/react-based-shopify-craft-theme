import { useLayoutEffect } from 'react';

const useBodyLocker = function (lock = false) {

    useLayoutEffect(() => {

        if (lock) {

            document.body.setAttribute('data-y', window.scrollY);
            document.body.classList.add('lock');

        } else {

            window.scrollTo({ top: document.body.getAttribute('data-y') });
            document.body.removeAttribute('data-y');
            document.body.classList.remove('lock');

        }

    });

};

export { useBodyLocker };
