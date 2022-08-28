import './Footer.scss';

export default function Footer({ data }) {
  const { title, button, logo, address, sections, copyright } = data;
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>{title}</h1>

        <div className='gpt3__footer-btn'>
          <p>{button.title}</p>
        </div>
      </div>

      <div className='gpt3__footer-links'>
        {/* 1st col */}
        <div className='gpt3__footer-links_logo'>
          <img src={logo} alt='logo' />
          <p>{address}</p>
        </div>

        {sections.map((section, i) => (
          <div key={i} className='gpt3__footer-links_div'>
            <h4>{section.title}</h4>
            {section.props.map((prop, i) => (
              <p key={i}>{prop.title}</p>
            ))}
          </div>
        ))}
      </div>

      <div className='gpt3__footer-copyright'>{copyright}</div>
    </div>
  );
}