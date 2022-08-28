import { Brand, CTA, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import './App.scss';

import { navbar, header, brands, whatGPT3, features, possibility, cta, blog, footer } from './data';

export default function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar data={navbar} />
        <Header data={header} />
      </div>
      <Brand data={brands} />
      <WhatGPT3 data={whatGPT3} />
      <Features data={features} />
      <Possibility data={possibility} />
      <CTA data={cta} />
      <Blog data={blog} />
      <Footer data={footer} />
    </div>
  );
}