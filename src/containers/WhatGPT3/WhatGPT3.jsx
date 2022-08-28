import { Feature } from '../../components';
import './WhatGPT3.scss';

export default function WhatGPT3({ data }) {
  const { feature, title, text, features } = data;
  
  return (
    <div id='wgpt3' className='gpt3__whatgpt3 section__margin'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title={feature.title} text={feature.text} />
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>{title}</h1>
        <p>{text}</p>
      </div>

      <div className='gpt3__whatgpt3-container'>
        {features.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}