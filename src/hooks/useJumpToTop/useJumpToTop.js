import { useLayoutEffect } from 'react';

const useJumpToTop = function () {

    useLayoutEffect(() => {

        window.scrollTo({ top: 0 });

    }, []);

};

export { useJumpToTop };
