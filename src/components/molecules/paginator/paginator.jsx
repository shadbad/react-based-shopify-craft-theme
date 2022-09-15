import { useState, useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import { Button } from 'components/atoms';
import { ButtonIcon } from 'components/molecules';
import './paginator.scss';

const Paginator = function ({ className, size, children }) {

    const totalPages = children.length <= size ? 1 : Math.ceil(children.length / size);

    const [currentPage, setCurrentPage] = useState(1);

    const wrapper = useRef();

    const handle = {

        nextButtonClick: useCallback(() => {

            if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            else setCurrentPage(1);

        }),

        prevButtonClick: useCallback(() => {

            if (currentPage > 1) setCurrentPage(currentPage - 1);
            else setCurrentPage(totalPages);

        }),

        pageLinkClick: useCallback((pageNumber) => setCurrentPage(() => pageNumber))

    };

    useEffect(() => {

        const elementSpec = wrapper.current.getBoundingClientRect();

        if (elementSpec.y < 0) wrapper.current.scrollIntoView({ behavior: 'smooth' });

    }, [currentPage]);

    return (

        <div className={`paginator ${className}`} ref={wrapper}>

            <div className="paginator__wrapper">
                {children.slice((currentPage - 1) * size, (currentPage - 1) * size + size)}
            </div>

            {
                totalPages > 1 && (

                    <div className="paginator__controls">
                        <ButtonIcon
                            className="paginator__prev-page-button"
                            iconName="chevron-left"
                            variant="expandOnHover"
                            onClick={handle.prevButtonClick}
                        />

                        <ul className="paginator__page-links">
                            {
                                [...Array(totalPages)].map((item, index) => (

                                    <Button
                                        className={`paginator__page-link ${index + 1 === currentPage ? 'mark' : ''}`}
                                        key={nanoid()}
                                        variant="plain"
                                        onClick={() => handle.pageLinkClick(index + 1)}
                                    >

                                        {index + 1}

                                    </Button>

                                ))
                            }
                        </ul>

                        <ButtonIcon
                            className="paginator__next-page-button"
                            iconName="chevron-right"
                            variant="expandOnHover"
                            onClick={handle.nextButtonClick}
                        />
                    </div>

                )
            }
        </div>

    );

};

Paginator.propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    size: PropTypes.number.isRequired
};

Paginator.defaultProps = {
    className: ''
};

export { Paginator };
