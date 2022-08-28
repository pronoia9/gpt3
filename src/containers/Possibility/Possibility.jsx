import './Possibility.scss';

export default function Possibility({ data }) {
  const { image, pre, title, text, post } = data;
  return (
    <div id='possibility' className='gpt3__possibility section__padding'>
      <div className='gpt3__possibility-image'>
        <img src={image} alt='possibility' />
      </div>
    </div>
  );
}