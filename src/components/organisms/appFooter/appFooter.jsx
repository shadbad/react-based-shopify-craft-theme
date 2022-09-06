import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Sitemap, CardInfo } from 'components/molecules';
import { SubscriptionForm } from 'components/organisms';
import './app-footer.scss';

const AppFooter = React.memo(function () {

    const content = useSelector((state) => state.content);

    if (!content.isLoading && content.error === '') {

        const sitemapData = content.data.layout.sitemap;
        const missionData = content.data.layout.mission;
        const creditCards = ['visa', 'mastercard', 'american-express', 'paypal', 'diners-club', 'discover'];

        return (

            <footer className="app-footer">

                <div className="app-footer__wrapper">

                    <SubscriptionForm className="app-footer__subscription-form" theme="dark" />

                    <Sitemap className="app-footer__sitemap" title={sitemapData.title} links={sitemapData.links} theme="dark" />

                    <CardInfo className="app-footer__mission" title={missionData.title} description={missionData.description} />

                </div>

                <hr className="app-footer__separator" />

                <div className="app-footer__wrapper">

                    <ul className="app-footer__credit-cards">
                        {
                            creditCards.map((item) => (

                                <li key={nanoid()} className="app-footer__credit-card-item">
                                    <img width={0} height={0} src={`/images/credit-cards/${item}.svg`} alt={item} />
                                </li>

                            ))
                        }
                    </ul>

                    <small className="app-footer__copyright">

                        ©
                        {new Date().getFullYear()}
                        ,
                        <a href="https://themes.shopify.com/themes/craft/styles/default" target="_blank" rel="noreferrer">theme-craft-demo</a>

                        <a href="https://www.shopify.com/" target="_blank" rel="noreferrer">Powered by Shopify</a>

                    </small>

                </div>

            </footer>

        );

    }

    return <footer />;

});

export { AppFooter };
