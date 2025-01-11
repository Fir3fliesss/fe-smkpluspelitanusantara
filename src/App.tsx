import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import BidangKeahlian from './components/BidangKeahlian';
import Sapras from './components/Sapras';
import LastestNews from './components/LastestNews';
import CallToAction from './components/CallToAction';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="">
      <Header />

      <section id="profile">
        <Profile />
      </section>

      <section id="bidang-keahlian">
        <BidangKeahlian />
      </section>

      <section id="sapras">
        <Sapras />
      </section>

      <section id="latest-news">
        <LastestNews />
      </section>

      <section id="call-to-action">
        <CallToAction />
      </section>

      <section id="sosmed">
        <SocialMedia />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
