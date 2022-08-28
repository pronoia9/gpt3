import { Brand, CTA, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import './App.scss';

import { whatGPT3, features } from './data';

export default function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 data={whatGPT3} />
      <Features data={features} />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}