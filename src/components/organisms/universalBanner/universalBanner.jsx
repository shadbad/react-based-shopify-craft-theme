import React from 'react';
import { useSelector } from 'react-redux';
import { LinkArrow } from 'components/molecules';
import './universal-banner.scss';

const UniversalBanner = React.memo(function () {

    const announcement = useSelector((state) => state.announcement);

    if (announcement.isLoading) return <div className="universal-banner--loading" />;

    if (!announcement.isLoading && announcement.error !== '') {

        // TODO: toast an appropriate message instead of console log

        console.error('Universal banner organism: ', announcement.error);

        return <div className="universal-banner--error" />;

    }

    return (

        <div className="universal-banner">

            <div className="universal-banner__wrapper">

                {
                    announcement.url !== '' ?
                        (
                            <LinkArrow className="universal-banner__link" href={announcement.url}>
                                {announcement.text}
                            </LinkArrow>
                        )
                        :
                        (
                            <span className="universal-banner__text">
                                {announcement.text}
                            </span>
                        )
                }

            </div>

        </div>

    );

});

export { UniversalBanner };
