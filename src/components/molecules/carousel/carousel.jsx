import React, { useCallback, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'components/molecules';
import { useWindowResizeEffect } from 'hooks';
import './carousel.scss';

const Carousel = React.memo(function ({ className, children, gap, columnMin, columnMax }) {

    const container = useRef();

    const initialState = {

        pageCount: 1,
        page: 1,
        trayWidth: 0,
        trayLeft: 0,
        viewWidth: 0,
        columnCount: 0

    };

    const calculate = {

        viewWidth: useCallback((containerRef) => parseFloat(containerRef.current.getBoundingClientRect().width)),

        trayWidth: useCallback((itemsCount, viewWidth, columnCount, gapSize) => {

            const columnWidth = (viewWidth - columnCount * gapSize) / columnCount;

            return (columnWidth + gapSize) * itemsCount;

        }),

        trayLeft: useCallback((page, viewWidth, gapSize) => ((page - 1) * viewWidth * -1) - (gapSize * (page - 1))),

        columnCount: useCallback((width, gapSize, min, max) => {

            let count = 1;
            let columnWidth = width - gapSize;

            while (columnWidth > max) {

                count += 1;
                columnWidth = (width - gapSize * count) / count;

            }

            return count;

        })

    };

    const reducer = (state, action) => {

        if (action.type === 'initialize') {

            const page = 1;
            const viewWidth = calculate.viewWidth(container);
            const columnCount = calculate.columnCount(viewWidth, gap, columnMin, columnMax);
            const trayWidth = calculate.trayWidth(children.length, viewWidth, columnCount, gap);
            const pageCount = Math.ceil(trayWidth / viewWidth);
            const trayLeft = calculate.trayLeft(page, viewWidth, gap);

            return {
                pageCount,
                page,
                trayWidth,
                trayLeft,
                viewWidth,
                columnCount
            };

        }

        if (action.type === 'next') {

            if (state.page === state.pageCount) return state;

            const nextPage = state.page + 1;
            const trayLeft = calculate.trayLeft(nextPage, state.viewWidth, gap);

            return {
                ...state,
                page: nextPage,
                trayLeft
            };

        }

        if (action.type === 'prev') {

            if (state.page === 1) return state;

            const prevPage = state.page - 1;
            const trayLeft = calculate.trayLeft(prevPage, state.viewWidth, gap);

            return {
                ...state,
                page: prevPage,
                trayLeft
            };

        }

        return state;

    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useWindowResizeEffect(() => dispatch({ type: 'initialize' }));

    const handle = {
        prevButtonClick: useCallback(() => dispatch({ type: 'prev' })),

        nextButtonClick: useCallback(() => dispatch({ type: 'next' }))
    };

    return (

        <div ref={container} className={`carousel ${className}`}>

            <div className="carousel__tray-wrapper">

                <ul className="carousel__tray" style={{ left: `${state.trayLeft}px`, columnGap: `${gap}px` }}>
                    {

                        children.map((item, index) => (

                            <li
                                className="carousel__item"
                                key={`item-${index}`}
                                style={{
                                    width: `calc((100% - ${(state.columnCount - 1) * gap}px)/ ${state.columnCount})`
                                }}
                            >
                                {item}
                            </li>

                        ))

                    }
                </ul>

            </div>

            {
                state.pageCount > 1 &&

                (
                    <div className="carousel__pagination">

                        <ButtonIcon
                            className={`carousel__prev-button ${state.page === 1 ? 'disable' : ''}`}
                            iconName="chevron-left"
                            variant="expandOnHover"
                            onClick={handle.prevButtonClick}
                        />

                        <span className="carousel__page-number">

                            <span className="carousel__current-page-number">{state.page}</span>
                            <span className="carousel__page-number-separator">/</span>
                            <span className="carousel__total-pages-count">{state.pageCount}</span>

                        </span>

                        <ButtonIcon
                            className={`carousel__prev-button ${state.page === state.pageCount ? 'disable' : ''}`}
                            iconName="chevron-right"
                            variant="expandOnHover"
                            onClick={handle.nextButtonClick}
                        />

                    </div>
                )
            }

        </div>

    );

});

Carousel.propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    gap: PropTypes.number,
    columnMin: PropTypes.number.isRequired,
    columnMax: PropTypes.number.isRequired
};

Carousel.defaultProps = {
    className: '',
    gap: 24
};

export { Carousel };
