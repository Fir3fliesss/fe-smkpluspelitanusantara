import React from 'react';
import VideoPlayerDash from '@/components/VideolayerDash';
import Profile from '@/components/Profile';
import BidangKeahlian from '@/components/BidangKeahlian';
import Sapras from '@/components/Sapras';
import News from '@/components/News';
import CallToAction from '@/components/CallToAction';
import Gallery from '@/components/Gallery';
import SocialMedia from '@/components/SocialMedia';

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
            <section id="sapras">
                <Sapras />
            </section>
            <section id="News">
                <News />
            </section>
            <section id="call-to-action">
                <CallToAction />
            </section>
            <section id="galeri">
                <Gallery />
            </section>
            <section id="sosmed">
                <SocialMedia />
            </section>
        </>
    )
}

export default MainPages;
