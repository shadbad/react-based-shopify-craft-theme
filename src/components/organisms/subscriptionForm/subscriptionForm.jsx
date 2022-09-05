import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { TextHeading, TextField } from 'components/atoms';
import { ButtonIcon } from 'components/molecules';
import './subscription-form.scss';

const SubscriptionForm = React.memo(function ({ className, theme }) {

    const [email, setEmail] = useState('');

    const handle = {

        change: useCallback(({ target }) => setEmail(target.value)),

        submit: useCallback(() => {

            console.log('submit');

        })

    };

    return (
        <div className={`subscription-form--${theme} ${className}`}>

            <TextHeading type={2} className="subscription-form__heading">
                Don&lsquo;t miss out
            </TextHeading>

            <p className="subscription-form__description">
                Subscribe to our mailing list for insider news, product launches, and more.
            </p>

            <div className="subscription-form__wrapper">

                <TextField
                    className="subscription-form__text-field"
                    type="email"
                    label="Email"
                    value={email}
                    onChange={handle.change}
                    onEnterPress={handle.submit}
                />

                <ButtonIcon className="subscription-form__submit-button" iconName="arrow-right" variant="basic" onClick={handle.submit} />
            </div>
        </div>
    );

});

SubscriptionForm.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark'])
};

SubscriptionForm.defaultProps = {
    className: '',
    theme: 'light'
};

export { SubscriptionForm };
