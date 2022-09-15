import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import { TextHeading } from 'components/atoms';
import { Video, Carousel, CardQuote, Collage, LinkImage, CardInfo, CardPost } from 'components/molecules';
import { useJumpToTop } from 'hooks';
import './landing-template.scss';

const LandingTemplate = function ({ content, posts }) {

    useJumpToTop();

    return (

        <>
            <TextHeading type={1} className="landing__heading">{content.heading}</TextHeading>

            <Collage className="landing__multi-link-collage">

                {
                    content.multiLinkCollage.map((item) => (
                        <LinkImage
                            className="landing__multi-link-collage-item"
                            key={item.id}
                            title={item.title}
                            imageUrl={item.image}
                            href={item.url}
                        />
                    ))
                }

            </Collage>

            <div className="landing__video">

                <TextHeading type={3} className="landing__video-heading">{content.videoPromotion.title}</TextHeading>

                <Video className="landing__video-player" source={content.videoPromotion.video} cover={content.videoPromotion.cover} />

            </div>

            <div className="landing__testimonies">

                <TextHeading type={4} className="landing__testimonies-heading">{content.testimonies.title}</TextHeading>

                <Carousel className="landing_testimonies-carousel" gap={4 * 16} columnMin={200} columnMax={400}>

                    {
                        content.testimonies.items.map((item) => <CardQuote key={item.id} quote={item.quote} author={item.author} />)
                    }

                </Carousel>

            </div>

            <div className="landing__single-link-collage">
                <TextHeading type={4} className="landing__single-link-collage-heading">
                    {content.singleLinkCollage.title}
                </TextHeading>

                <Collage className="landing__single-link-collage">

                    <LinkImage
                        className="landing__multi-link-collage-item"
                        title={content.singleLinkCollage.link.title}
                        imageUrl={content.singleLinkCollage.link.image}
                        href={content.singleLinkCollage.link.url}
                    />

                    {
                        content.singleLinkCollage.images.map((image) => (

                            <span
                                key={nanoid()}
                                style={{ backgroundImage: `url(${image})` }}
                            />

                        ))
                    }

                </Collage>
            </div>

            <div className="landing__info">

                {
                    content.info.map((item) => (

                        <CardInfo
                            key={nanoid()}
                            className="landing__info-item"
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />

                    ))
                }

            </div>

            <div className="landing__posts">

                <TextHeading type={3} className="landing__posts-heading">{content.blog.title}</TextHeading>

                <Carousel className="landing__posts-carousel" gap={1.5 * 16} columnMin={400} columnMax={500}>

                    {

                        posts.map((item) => (

                            <CardPost
                                key={nanoid()}
                                title={item.title}
                                href={item.url}
                                date={item.date}
                                summary={item.summary}
                                cover={item.cover}
                            />

                        ))

                    }

                </Carousel>

            </div>

        </>

    );

};

LandingTemplate.propTypes = {

    content: PropTypes.shape({

        heading: PropTypes.string,

        multiLinkCollage: PropTypes.arrayOf(PropTypes.shape({

            id: PropTypes.string,
            title: PropTypes.string,
            url: PropTypes.string,
            image: PropTypes.string

        })),

        videoPromotion: PropTypes.shape({

            title: PropTypes.string,
            cover: PropTypes.string,
            video: PropTypes.string

        }),

        testimonies: PropTypes.shape({

            title: PropTypes.string,

            items: PropTypes.arrayOf(PropTypes.shape({

                id: PropTypes.string,

                quote: PropTypes.string,

                author: PropTypes.string

            }))

        }),

        singleLinkCollage: PropTypes.shape({

            title: PropTypes.string,

            link: PropTypes.shape({

                id: PropTypes.string,

                title: PropTypes.string,

                url: PropTypes.string,

                image: PropTypes.string

            }),

            images: PropTypes.arrayOf(PropTypes.string)

        }),

        info: PropTypes.arrayOf(PropTypes.shape({

            title: PropTypes.string,

            description: PropTypes.string,

            image: PropTypes.string

        })),

        blog: PropTypes.shape({

            title: PropTypes.string

        })

    }).isRequired,

    posts: PropTypes.arrayOf(PropTypes.shape({

        title: PropTypes.string,

        url: PropTypes.string,

        date: PropTypes.number,

        cover: PropTypes.string,

        summary: PropTypes.string,

        body: PropTypes.string

    })).isRequired

};

export { LandingTemplate };
