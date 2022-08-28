import { Article } from '../../components';
import './Blog.scss';

export default function Blog({ data }) {
  const { title, posts } = data;
  return (
    <div id='blog' className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>{title}</h1>
      </div>

      <div className='gpt3__blog-container'>
        {posts.map((post) => (
          <div className={`gpt3__blog-container_group${post.group}`} key={post.id}>
            <Article {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}