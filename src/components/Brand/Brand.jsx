import './Brand.scss';

export default function Brand({ data }) {
  return (
    <div className='gpt3__brand section__padding'>
      {data.map((brand, i) => (
        <div key={brand}>
          <img src={brand} alt={`brand-${i}`} />
        </div>
      ))}
    </div>
  );
}