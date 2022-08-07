import React from 'react';
import PropTypes from 'prop-types';

import { Announcement } from 'components/atoms';

const Header = function ({ announcement }) {

    return (
        <header>

            {announcement && <Announcement text={announcement.text} url={announcement.url} />}

            <div className="wrapper">
                <p>this is the header</p>
            </div>

        </header>
    );

};

Header.propTypes = {
    announcement: PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string
    })

};

Header.defaultProps = {
    announcement: null
};

export { Header };
