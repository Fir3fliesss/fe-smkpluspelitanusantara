import React, { Suspense } from 'react';

// Lazy load each component
const VideoPlayerDash = React.lazy(() => import('@/components/VideoPlayer'));
const Profile = React.lazy(() => import('@/components/Profile'));
const BidangKeahlian = React.lazy(() => import('@/components/BidangKeahlian'));
const Sapras = React.lazy(() => import('@/components/Sapras'));
const News = React.lazy(() => import('@/components/News'));
const CallToAction = React.lazy(() => import('@/components/CallToAction'));
const Gallery = React.lazy(() => import('@/components/Gallery'));
const SocialMedia = React.lazy(() => import('@/components/SocialMedia'));
const BannerText = React.lazy(() => import('@/components/BannerText'));

const Loading = () => <div>Loading...</div>; // Fallback UI while loading components

const MainPages: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <section id="video-player">
        <VideoPlayerDash />
      </section>
      <section id="profile">
        <Profile />
      </section>
      <section id="bidang-keahlian">
        <BidangKeahlian />
      </section>
      <section id="banner" className="mt-16">
        <BannerText text="Sarana Pra-Sarana" />
      </section>
      <section id="sapras">
        <Sapras />
      </section>
      <section id="banner" className="md:my-16">
        <BannerText text="Latest News" />
      </section>
      <section id="news">
        <News />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="call-to-action">
        <CallToAction />
      </section>
      <section id="medsoc">
        <SocialMedia />
      </section>
    </Suspense>
  );
};

export default MainPages;
