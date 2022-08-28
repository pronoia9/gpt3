import './Possibility.scss';

export default function Possibility({ data }) {
  const { image, pre, title, text, post } = data;
  return (
    <div id='possibility' className='gpt3__possibility section__padding'>
      <div className='gpt3__possibility-image'>
        <img src={image} alt='possibility' />
      </div>

      <div className='gpt3__possibility-content'>
        <h4>{pre}</h4>
        <h1 className='gradient__text'>{title}</h1>
        <p>{text}</p>
        <h4>{post}</h4>
      </div>
    </div>
  );
}