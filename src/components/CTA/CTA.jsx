import './CTA.scss';

export default function CTA({ data }) {
  const { text, title, button } = data;

  return (
    <div id='cta' className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p>{text}</p>
        <h3>{title}</h3>
      </div>
      <div className='gpt3__cta-button'>
        <button type='button'>{button.text}</button>
      </div>
    </div>
  );
}