/* eslint-disable jsx-a11y/media-has-caption */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'components/molecules';
import './video.scss';

const Video = React.memo(function ({ className, source, cover }) {

    const handle = {
        playButtonClick: useCallback(({ target }) => {

            const container = target.closest('.video');
            container.classList.add('play');
            const player = container.querySelector('video');
            setTimeout(() => {

                player.play();

            }, 1000);

        }),

        videoEnded: useCallback(({ target }) => {

            target.closest('.video').classList.remove('play');

        })
    };

    return (

        <div className="video" style={{ backgroundImage: `url(${cover})` }}>

            <video className={`video__player ${className}`} controls controlsList="nofullscreen nodownload" onEnded={handle.videoEnded}>
                <source src={source} type="video/mp4" />
                Sorry, your browser doesn&rsquo; t support embedded videos.
            </video>

            <ButtonIcon className="video__play-button" iconName="play" variant="basic" onClick={handle.playButtonClick} />

        </div>
    );

});

Video.propTypes = {
    className: PropTypes.string,
    source: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
};

Video.defaultProps = {
    className: ''
};

export { Video };
