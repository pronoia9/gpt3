import { Feature } from '../../components';
import './WhatGPT3.scss';

const features = [
  {
    title: 'What is GPT-3',
    text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.',
  },
  { title: 'Chatbots', text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.' },
  {
    title: 'Knowledgebase',
    text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments by.',
  },
  {
    title: 'Education',
    text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments by.',
  },
];

export default function WhatGPT3() {
  return (
    <div id='whpt3' className='gpt3__whatgpt3 section__margin'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title={features[0].title} text={features[0].text} />
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className='gpt3__whatgpt3-container'>
        {features.slice(1).map((feature) => (
          <Feature key={feature.title} title={feature.title} text={feature.text} />
        ))}
      </div>
    </div>
  );
}