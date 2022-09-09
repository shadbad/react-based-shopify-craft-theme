import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms';
import { ButtonIconText } from 'components/molecules';
import './select-box-multi.scss';

const SelectBoxMulti = React.memo(function ({ className, title, options, onResetClick, onOptionClick }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const [selectedOptions, setSelectedOptions] = useState(new Set());

    const handle = {

        buttonClick: useCallback(() => setIsExpanded(() => !isExpanded)),

        resetClick: useCallback(() => {

            setSelectedOptions(() => new Set());

            if (onResetClick) onResetClick(options.map((item) => item.key));

        }),

        optionClick: useCallback((optionKey) => {

            const clonedSelectedOptions = new Set(selectedOptions);

            if (clonedSelectedOptions.has(optionKey)) clonedSelectedOptions.delete(optionKey);
            else clonedSelectedOptions.add(optionKey);

            setSelectedOptions(() => clonedSelectedOptions);

            if (onOptionClick) onOptionClick(optionKey);

        })

    };

    return (

        <div className={`select-box-multi ${className}`}>

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
                        {`${selectedOptions.size} selected`}
                    </span>

                    <Button
                        className="select-box-multi__reset-button"
                        variant="link"
                        onClick={handle.resetClick}
                    >

                        Reset

                    </Button>

                </div>

                <div className="select-box-multi__list">
                    {
                        options.map((option) => (

                            <ButtonIconText
                                key={option.key}
                                className="select-box-multi__list-item"
                                leadingIconName={selectedOptions.has(option.key) ? 'check-square' : 'square'}
                                label={option.title}
                                onClick={() => handle.optionClick(option.key)}
                            />

                        ))
                    }
                </div>

            </div>

        </div>

    );

});

SelectBoxMulti.propTypes = {

    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({

        key: PropTypes.string,
        title: PropTypes.string

    })).isRequired,
    onResetClick: PropTypes.func,
    onOptionClick: PropTypes.func

};

SelectBoxMulti.defaultProps = {
    className: '',
    onResetClick: null,
    onOptionClick: null
};

export { SelectBoxMulti };
