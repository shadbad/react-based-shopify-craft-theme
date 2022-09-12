import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms';
import { ButtonIconText } from 'components/molecules';
import { useOutsideClickDetector } from 'hooks';
import './select-box-multi.scss';

const SelectBoxMulti = React.memo(function ({ className, title, children, onResetClick }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const wrapperRef = useRef();

    useOutsideClickDetector([wrapperRef], () => setIsExpanded(() => false));

    const handle = {

        buttonClick: useCallback(() => setIsExpanded(() => !isExpanded))

    };

    const helpers = {

        getSelectedOptionsCount: () => children.filter((x) => x.props.selected).length

    };

    return (

        <div className={`select-box-multi ${className}`} ref={wrapperRef}>

            <ButtonIconText
                className="select-box-multi__button"
                trailingIconName={isExpanded ? 'chevron-up' : 'chevron-down'}
                label={title}
                onClick={handle.buttonClick}
                variant="underlineOnHover"
            />

            <div className={`select-box-multi__list-wrapper ${isExpanded ? 'visible' : ''}`}>

                <div className="select-box-multi__list-header">

                    <span className="select-box-multi__count">
                        {`${helpers.getSelectedOptionsCount()} selected`}
                    </span>

                    <Button
                        className="select-box-multi__reset-button"
                        variant="link"
                        onClick={onResetClick}
                    >

                        Reset

                    </Button>

                </div>

                <div className="select-box-multi__list">{children}</div>

            </div>

        </div>

    );

});

SelectBoxMulti.propTypes = {

    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    onResetClick: PropTypes.func

};

SelectBoxMulti.defaultProps = {
    className: '',
    onResetClick: null
};

export { SelectBoxMulti };
