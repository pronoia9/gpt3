import './Feature.scss';

export default function Feature({ title = 'NO TITLE', text = 'NO TEXT' }) {
  return (
    <div className='gpt3__features-container_feature'>
      <div className='gpt3__features-container_feature-title'>
        <div />
        <h1>{title}</h1>
      </div>

      <div className='gpt3__features-container_feature-text'>{text}</div>
    </div>
  );
}