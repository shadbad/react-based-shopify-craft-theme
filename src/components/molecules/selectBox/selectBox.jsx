import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { ButtonIconText } from 'components/molecules';
import { useOutsideClickDetector } from 'hooks';
import './select-box.scss';

const SelectBox = React.memo(function ({ className, title, children }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const componentRef = useRef();

    useOutsideClickDetector([componentRef], () => setIsExpanded(false));

    const handle = {

        buttonClick: useCallback(() => setIsExpanded(() => !isExpanded)),

        singleOptionClick: useCallback(() => setIsExpanded(false))

    };

    return (

        <div className={`select-box ${className}`} ref={componentRef}>

            <ButtonIconText
                className="select-box-multi__button"
                trailingIconName={isExpanded ? 'chevron-up' : 'chevron-down'}
                label={title}
                onClick={handle.buttonClick}
                variant="underlineOnHover"
            />

            <div className={`select-box__list ${isExpanded ? 'visible' : ''}`} onClick={handle.singleOptionClick}>
                {children}
            </div>

        </div>

    );

});

SelectBox.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired
};

SelectBox.defaultProps = {
    className: ''
};

export { SelectBox };
