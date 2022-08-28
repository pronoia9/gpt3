import './Features.scss';

export default function Features({ data }) {
  const { title, text, features } = data;
  
  return (
    <div id='features' className='gpt3__features section__padding'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>{title}</h1>
      </div>
    </div>
  );
}