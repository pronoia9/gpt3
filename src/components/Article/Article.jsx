import './Article.scss';

export default function Article({ id, title, image, date, button, group }) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={image} alt={`blog-${id}`} />
      </div>

      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date.toDateString().slice(3).replace(' 202', ', 202')}</p>
          <h3>{title}</h3>
        </div>
        <p>{button.title}</p>
      </div>
    </div>
  );
}