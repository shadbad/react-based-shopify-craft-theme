import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link, Button, Icon } from 'components/atoms';
import { useOutsideClickDetector } from 'hooks';
import './menu-list.scss';

const MenuList = React.memo(function ({ className, links, variant }) {

    const linkVariant = variant === 'metro' ? 'underlineOnHover' : 'plain';

    useOutsideClickDetector('.menu-list__item.expand', () => {

        document.querySelector('.menu-list__item.expand').classList.remove('expand');

    }, []);

    return (

        <menu className={`menu-list--${variant} ${className}`}>

            {
                links.map((item) => {

                    if (item.subs && item.subs.length > 0) return MenuList.renderSubMenu(item);

                    return (

                        <li key={item.id} className="menu-list__item">

                            <Link
                                className="menu-list__link"
                                href={item.url}
                                variant={linkVariant}
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

    })).isRequired

};

MenuList.defaultProps = {
    className: '',
    variant: 'metro'
};

MenuList.renderSubMenu = function (rootItem) {

    const handleRootItemClick = useCallback(({ target }) => {

        const container = target.closest('menu[class^="menu-list"]');
        const currentItem = target.closest('.menu-list__item');

        Array
            .from(container.querySelectorAll('.menu-list__item.expand'))
            .forEach((item) => {

                if (item !== currentItem) item.classList.remove('expand');

            });

        target.closest('.menu-list__item').classList.toggle('expand');

    });

    return (

        <li key={rootItem.id} className="menu-list__item">

            <Button className="menu-list__button" onClick={handleRootItemClick} variant="plain">
                <span>{rootItem.title}</span>
                <Icon className="menu-list__button-icon down" name="chevron-down" />
                <Icon className="menu-list__button-icon up" name="chevron-up" />
            </Button>

            <ul className="menu-list__sub-list">
                {
                    rootItem.subs.map((item) => (

                        <li key={item.id} className="menu-list__sub-list-item">

                            <Link
                                className="menu-list__sub-list-link"
                                href={item.url}
                                variant="plain"
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
