import { useLayoutEffect, useState } from 'react';

const useBodyLocker = function (initialLockState = false) {

    const [isLocked, setIsLocked] = useState(initialLockState);

    useLayoutEffect(() => {

        if (isLocked) {

            document.body.setAttribute('data-y', window.scrollY);
            document.body.classList.add('lock');

        } else {

            window.scrollTo({ top: document.body.getAttribute('data-y') });
            document.body.removeAttribute('data-y');
            document.body.classList.remove('lock');

        }

    }, [isLocked]);

    return setIsLocked;

};

export { useBodyLocker };
