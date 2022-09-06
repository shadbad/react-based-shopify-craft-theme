import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actions as userActions } from 'store/slices/user.slice';
import { TextHeading, TextField } from 'components/atoms';
import { ButtonIcon } from 'components/molecules';
import './subscription-form.scss';

const SubscriptionForm = React.memo(function ({ className, theme }) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handle = {

        change: ({ target }) => {

            dispatch(userActions.setEmail(target.value));

        },

        submit: useCallback(({ target }) => {

            target
                .closest('.subscription-form__wrapper')
                .querySelector('input')
                .reportValidity();

            if (user.info.email.trim() !== '') dispatch(userActions.sync());

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
                    required
                    value={user.info.email}
                    onChange={handle.change}
                    onEnterPress={handle.submit}
                />

                <ButtonIcon
                    className={`subscription-form__submit-button ${user.isSyncing ? 'spinner' : ''}`}
                    iconName={user.isSyncing ? 'refresh' : 'arrow-right'}
                    variant="basic"
                    onClick={handle.submit}
                />

                <span className={`subscription-form__message ${user.synced && user.error === '' ? 'visible' : ''}`}>Thanks for subscribing :D</span>

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
