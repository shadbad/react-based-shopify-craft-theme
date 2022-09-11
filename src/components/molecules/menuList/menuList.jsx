import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link, Button, Icon } from 'components/atoms';
import { useOutsideClickDetector } from 'hooks';
import './menu-list.scss';

const MenuList = React.memo(function ({ className, links, variant, onItemClick }) {

    const linkVariant = variant === 'metro' ? 'underlineOnHover' : 'plain';

    useOutsideClickDetector('.menu-list__item.expand', () => {

        document.querySelector('.menu-list__item.expand').classList.remove('expand');

    }, []);

    return (

        <menu className={`menu-list--${variant} ${className}`}>

            {
                links.map((item) => {

                    if (item.subs && item.subs.length > 0) return MenuList.renderSubMenu(variant, item, onItemClick);

                    return (

                        <li key={item.id} className="menu-list__item">

                            <Link
                                className="menu-list__link"
                                href={item.url}
                                variant={linkVariant}
                                onClick={onItemClick}
                            >

                                {item.title}

                            </Link>

                        </li>

                    );

                })
            }

        </menu>

    );

});

MenuList.propTypes = {

    className: PropTypes.string,

    variant: PropTypes.oneOf(['stack', 'metro']),

    links: PropTypes.arrayOf(PropTypes.shape({

        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired

    })).isRequired,

    onItemClick: PropTypes.func

};

MenuList.defaultProps = {
    className: '',
    variant: 'metro',
    onItemClick: null
};

MenuList.renderSubMenu = function (variant, rootItem, onItemClick) {

    const handleSubmenuSwitchClick = useCallback(({ target }) => {

        const container = target.closest('menu[class^="menu-list"]');

        const currentItem = target.closest('.menu-list__item');

        Array
            .from(container.querySelectorAll('.menu-list__sub-wrapper.expand'))
            .forEach((item) => {

                if (item !== currentItem) item.classList.remove('expand');

            });

        target.closest('.menu-list__item').classList.toggle('expand');

    });

    const handleSubmenuBackButtonClick = useCallback(({ target }) => {

        target.closest('.menu-list__sub-wrapper').classList.remove('expand');

    });

    const handleItemClick = useCallback((event) => {

        const { target } = event;

        target.closest('.menu-list__sub-wrapper').classList.remove('expand');

        if (onItemClick) onItemClick(event);

    });

    return (

        <li key={rootItem.id} className="menu-list__item menu-list__sub-wrapper">

            <Button className="menu-list__button" onClick={handleSubmenuSwitchClick} variant="plain">
                <span>{rootItem.title}</span>
                {
                    (variant === 'metro') && (
                        <>
                            <Icon className="menu-list__button-icon down" name="chevron-down" />
                            <Icon className="menu-list__button-icon up" name="chevron-up" />
                        </>
                    )
                }

                {
                    (variant === 'stack') && (
                        <Icon className="menu-list__button-icon" name="arrow-right" />
                    )
                }
            </Button>

            <ul className="menu-list__sub-list">

                {
                    (variant === 'stack') && (
                        <li className="menu-list__sub-list-item">
                            <Button className="menu-list__sub-list-back" variant="plain" onClick={handleSubmenuBackButtonClick}>
                                <Icon className="menu-list__sub-list-back-icon" name="arrow-left" />
                                <span>{rootItem.title}</span>
                            </Button>
                        </li>
                    )
                }

                {

                    rootItem.subs.map((item) => (

                        <li key={item.id} className="menu-list__sub-list-item">

                            <Link
                                className="menu-list__sub-list-link"
                                href={item.url}
                                variant="plain"
                                onClick={handleItemClick}
                            >

                                {item.title}

                            </Link>

                        </li>

                    ))

                }
            </ul>

        </li>

    );

};

export { MenuList };
