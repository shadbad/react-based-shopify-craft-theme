import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonIconText } from 'components/molecules';
import './accordion.scss';

const Accordion = React.memo(function ({ className, id, title, children }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const handle = {
        buttonClick: useCallback(({ target }, identifier) => {

            Array.from(target.closest('.accordion').parentNode.querySelectorAll('.accordion.expanded'))
                .forEach((item) => {

                    if (item.getAttribute('data-id') !== identifier) item.querySelector('.accordion__toggle-button').click();

                });

            setIsExpanded(!isExpanded);

        })
    };

    return (
        <div data-id={id} key={id} className={`accordion ${isExpanded ? 'expanded' : ''} ${className}`}>

            <ButtonIconText
                className="accordion__toggle-button"
                trailingIconName={isExpanded ? 'chevron-up' : 'chevron-down'}
                label={title}
                onClick={(event) => handle.buttonClick(event, id)}
                variant="plain"
            />

            <div className="accordion__content">{children}</div>

        </div>
    );

});

Accordion.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

Accordion.defaultProps = {
    className: ''
};

export { Accordion };
