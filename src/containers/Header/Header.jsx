import './Header.scss';

export default function Header({ data }) {
  const { title, text, input, button, ps, images } = data;
  return (
    <div className='gpt3__header section__padding'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>{title}</h1>
        <p>{text}</p>

        <div className='gpt3__header-content__input'>
          <input className='' type='email' placeholder={input.placeholder} />
          <button type='button'>{button.text}</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={images.people} alt='people' />
          <p>{ps}</p>
        </div>
      </div>
      
      <div className='gpt3__header-image'>
        <img src={images.ai} alt='ai' />
      </div>
    </div>
  );
}