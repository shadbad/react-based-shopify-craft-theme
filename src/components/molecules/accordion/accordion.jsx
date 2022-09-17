import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonIconText } from 'components/molecules';
import './accordion.scss';

const Accordion = React.memo(function ({ className, iconName, title, children }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const handle = {
        buttonClick: useCallback(() => setIsExpanded(!isExpanded))
    };

    return (
        <div className={`accordion ${isExpanded ? 'expanded' : ''} ${className}`}>

            <ButtonIconText
                leadingIconName={iconName}
                className="accordion__toggle-button"
                trailingIconName={isExpanded ? 'chevron-up' : 'chevron-down'}
                label={title}
                onClick={handle.buttonClick}
                variant="plain"
            />

            <div className="accordion__content">{children}</div>

        </div>
    );

});

Accordion.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    iconName: PropTypes.string
};

Accordion.defaultProps = {
    className: '',
    iconName: ''
};

export { Accordion };
