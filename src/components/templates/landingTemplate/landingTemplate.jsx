import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TextHeading } from 'components/atoms';
import { Video, Carousel, CardQuote, Collage, LinkImage, CardInfo, CardPost } from 'components/molecules';
import { UniversalBanner, AppBar, NavBar, NavDrawer, SearchBar } from 'components/organisms';

import 'assets/styles/globals.scss';
import './landing-template.scss';

const LandingTemplate = function () {

    const content = useSelector((state) => state.content);
    const posts = useSelector((state) => state.blog.posts);
    const landingContent = content.data.landing;

    return (
        <>
            <header>

                <UniversalBanner />

                <AppBar />

                <NavBar />

            </header>

            {
                !content.isLoading && content.error === '' && (

                    <main className="landing">

                        <div className="landing__wrapper">

                            <TextHeading type={1} className="landing__heading">{landingContent.heading}</TextHeading>

                            <Collage className="landing__multi-link-collage">

                                {
                                    landingContent.multiLinkCollage.map((item) => (
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

                                <TextHeading type={3} className="landing__video-heading">{landingContent.videoPromotion.title}</TextHeading>

                                <Video className="landing__video-player" source={landingContent.videoPromotion.video} cover={landingContent.videoPromotion.cover} />

                            </div>

                            <div className="landing__testimonies">

                                <TextHeading type={4} className="landing__testimonies-heading">{landingContent.testimonies.title}</TextHeading>

                                <Carousel className="landing_testimonies-carousel" gap={4 * 16} columnMin={200} columnMax={400}>

                                    {
                                        landingContent.testimonies.items.map((item) => <CardQuote key={item.id} quote={item.quote} author={item.author} />)
                                    }

                                </Carousel>

                            </div>

                            <div className="landing__single-link-collage">
                                <TextHeading type={4} className="landing__single-link-collage-heading">
                                    {landingContent.singleLinkCollage.title}
                                </TextHeading>

                                <Collage className="landing__single-link-collage">

                                    <LinkImage
                                        className="landing__multi-link-collage-item"
                                        title={landingContent.singleLinkCollage.link.title}
                                        imageUrl={landingContent.singleLinkCollage.link.image}
                                        href={landingContent.singleLinkCollage.link.url}
                                    />

                                    {
                                        landingContent.singleLinkCollage.images.map((image) => (

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
                                    landingContent.info.map((item) => (

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

                                <TextHeading type={3} className="landing__posts-heading">{landingContent.blog.title}</TextHeading>

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
                        </div>

                    </main>

                )
            }

            <NavDrawer />

            <SearchBar />
        </>
    );

};

export { LandingTemplate };
