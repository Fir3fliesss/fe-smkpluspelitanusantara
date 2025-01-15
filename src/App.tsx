import React from 'react';
import Header from './components/Header';
import VideoPlayerDash from './components/VideolayerDash';
import Profile from './components/Profile';
import BidangKeahlian from './components/BidangKeahlian';
import Sapras from './components/Sapras';
// import LastestNews from './components/LastestNews';
import News from './components/News';
import CallToAction from './components/CallToAction';
import Gallery from './components/Gallery';
import SocialMedia from './components/SocialMedia';
import Form from './components/Form';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="dark:bg-slate-900">
      <Header />

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

      {/* <section id="latest-news">
        <LastestNews />
      </section> */}

      <section id="call-to-action">
        <CallToAction />
      </section>

      <section id="galeri">
        <Gallery />
      </section>

      <section id="sosmed">
        <SocialMedia />
      </section>

      <section id="form">
        <Form />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
