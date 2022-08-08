import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './company-link.module.scss';

const CompanyLink = React.memo(function ({ className }) {

    return (<Link to="/" className={`${className} ${styles['_']} icon-logo`} />);

});

CompanyLink.propTypes = {
    className: PropTypes.string
};

CompanyLink.defaultProps = {
    className: ''
};

export { CompanyLink };
