import { Feature } from '../../components';
import './WhatGPT3.scss';

export default function WhatGPT3() {
  return (
    <div id='whpt3' className='gpt3__whatgpt3 section__margin'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature />
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className='gpt3__whatgpt3-container'>
        <Feature />
      </div>
    </div>
  );
}