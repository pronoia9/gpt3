import { Feature } from '../../components';
import './Features.scss';

export default function Features({ data }) {
  const { title, text, features } = data;

  return (
    <div id='features' className='gpt3__features section__padding'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>{title}</h1>
        <p>{text}</p>
      </div>
      <div className='gpt3__features-container'>
        {features.map((f) => (
          <Feature key={f.title} title={f.title} text={f.text} />
        ))}
      </div>
    </div>
  );
}