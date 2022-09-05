import React, { useCallback, useState } from 'react';
import { TextHeading, TextField } from 'components/atoms';
import { ButtonIcon } from 'components/molecules';

const SubscriptionForm = React.memo(function () {

    const [email, setEmail] = useState('');

    const handle = {

        change: useCallback(({ target }) => setEmail(target.value)),

        submit: useCallback(() => {

            console.log('submit');

        })

    };

    return (
        <div className="subscription-form">

            <TextHeading type={2} className="subscription-form__heading">
                Don&lsquo;t miss out
            </TextHeading>

            <p className="subscription-form__description">
                Subscribe to our mailing list for insider news, product launches, and more.
            </p>

            <TextField
                className="subscription-form__text-field"
                type="email"
                label="Email"
                value={email}
                error="Please enter a valid email address"
                onChange={handle.change}
                onEnterPress={handle.submit}
            />

            <ButtonIcon iconName="arrow-right" variant="basic" onClick={handle.submit} />

        </div>
    );

});

export { SubscriptionForm };
