import React from 'react';
import { Link, Icon } from 'components/atoms';
import './link-arrow.scss';

function LinkArrowComponent({ className, text, href }: propTypes) {
    const content = (
        <>
            <span className="link-arrow__text">{text}</span>
            <Icon name="arrow-right" className="link-arrow__icon" />
        </>
    );

    return <Link className={`link-arrow ${className}`} content={content} href={href} />;
}

type propTypes = {
    className?: string;
    text: string;
    href: string;
};

LinkArrowComponent.defaultProps = {
    className: ''
};

const LinkArrow = React.memo(LinkArrowComponent);

export { LinkArrow };
