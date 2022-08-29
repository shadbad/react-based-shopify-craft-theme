import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Link, Badge } from 'components/atoms';
import './link-icon.scss';

const LinkIcon = React.memo(function ({ className, href, iconName, variant, badgeValue, badgeMax }) {

    return (
        <Link className={`link-icon--${variant} ${className}`} href={href}>

            <Icon className="link-icon__icon" name={iconName} />

            {badgeValue !== null && <Badge className="link-icon__badge" value={badgeValue} max={badgeMax} />}

        </Link>
    );

});

LinkIcon.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['expandOnHover', 'basic']),
    badgeValue: PropTypes.number,
    badgeMax: PropTypes.number
};

LinkIcon.defaultProps = {
    className: '',
    variant: 'basic',
    badgeValue: null,
    badgeMax: null
};

export { LinkIcon };
