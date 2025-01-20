import React from 'react';
import VideoPlayerDash from '@/components/VideolayerDash';
import Profile from '@/components/Profile';
import BidangKeahlian from '@/components/BidangKeahlian';
import Sapras from '@/components/Sapras';
import News from '@/components/News';
import CallToAction from '@/components/CallToAction';
import Gallery from '@/components/Gallery';
import SocialMedia from '@/components/SocialMedia';
import BannerText from '@/components/BannerText';

const MainPages: React.FC = () => {
    return (
        <>
           <section id="video-player">
                <VideoPlayerDash />
            </section>
            <section id="profile">
                <Profile />
            </section>
            <section id="bidang-keahlian">
                <BidangKeahlian />
            </section>
            <section id="banner" className='mt-16'>
                <BannerText text="Sarana Pra-Sarana" />
            </section>
            <section id="sapras">
                <Sapras />
            </section>
            <section id="banner" className='my-16'>
                <BannerText text="Latest News" />
            </section>
            <section id="news">
                <News />
            </section>
            <section id="call-to-action">
                <CallToAction />
            </section>
            <section id="gallery">
                <Gallery />
            </section>
            <section id="medsoc">
                <SocialMedia />
            </section>
        </>
    )
}

export default MainPages;
