import React, { useState, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './text-box.module.scss';

const TextBox = React.memo(function ({ label, type, className, value, iconName, handleValueChange, handleSubmit }) {

    const [isLabelRetracted, setIsLabelRetracted] = useState(false);

    const inputRef = useRef();

    useLayoutEffect(() => {

        if (value === '' && document.activeElement !== inputRef.current) setIsLabelRetracted(() => false);

    }, [value]);

    const eventHandlers = {

        handleContainerClick({ target }) {

            setIsLabelRetracted(() => true);
            const input = target.querySelector(':scope > input');
            if (input) input.focus();

        },

        handleInputBlur({ target }) {

            if (target.value === '') setIsLabelRetracted(() => false);

        }
    };

    return (
        <div
            role="searchbox"
            tabIndex={0}
            className={`${styles.root} ${className}`}
            onClick={eventHandlers.handleContainerClick}
            onKeyUp={eventHandlers.handleContainerClick}
        >

            <input
                ref={inputRef}
                className={styles.input}
                id={`${label}_input`}
                type={type}
                onBlur={eventHandlers.handleInputBlur}
                value={value}
                onChange={handleValueChange}
            />

            <label
                className={`${styles.label} ${isLabelRetracted ? styles.retraced : ''}`}
                htmlFor={`${label}_input`}
            >

                {label}

            </label>

            {
                iconName !== '' &&

                (
                    <span
                        className={`icon-${iconName} ${styles.icon}`}
                        role="link"
                        tabIndex={-1}
                        onClick={handleSubmit}
                        onKeyUp={handleSubmit}
                    />
                )
            }

        </div>
    );

});

TextBox.propTypes = {
    iconName: PropTypes.string,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email']).isRequired,
    className: PropTypes.string,
    value: PropTypes.string,
    handleValueChange: PropTypes.func,
    handleSubmit: PropTypes.func
};

TextBox.defaultProps = {
    iconName: '',
    className: '',
    value: '',
    handleValueChange: null,
    handleSubmit: null
};

export { TextBox };
