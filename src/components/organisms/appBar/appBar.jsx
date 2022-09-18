import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as uiActions } from 'store/slices/ui.slice';
import { LinkIcon, ButtonIcon } from 'components/molecules';
import './app-bar.scss';

const AppBar = React.memo(function () {

    const dispatch = useDispatch();
    const isMenuDrawerOpen = useSelector((state) => state.ui.isMenuDrawerOpen);
    const cartItems = useSelector((state) => state.cart.items);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="app-bar">

            <div className="app-bar__wrapper">

                <LinkIcon
                    className="app-bar__cart"
                    href="/cart"
                    iconName="cart"
                    variant="expandOnHover"
                    badgeValue={totalQuantity}
                    badgeMax={99}
                />

                <LinkIcon
                    className="app-bar__company"
                    href="/"
                    iconName="logo"
                />

                <ButtonIcon
                    className="app-bar__search"
                    iconName="search"
                    variant="expandOnHover"
                    onClick={() => dispatch(uiActions.toggleSearchVisibility())}
                />

                <ButtonIcon
                    className="app-bar__menu"
                    iconName={isMenuDrawerOpen ? 'cross' : 'menu'}
                    variant="expandOnHover"
                    onClick={() => dispatch(uiActions.toggleMenuDrawer())}
                />

            </div>

        </div>
    );

});

export { AppBar };
