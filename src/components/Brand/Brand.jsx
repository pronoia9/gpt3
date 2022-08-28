import './Brand.scss';
import { images } from './imports';

export default function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      {images.map((brand, i) => (
        <div key={brand}>
          <img src={brand} alt={`brand-${i}`} />
        </div>
      ))}
    </div>
  );
}