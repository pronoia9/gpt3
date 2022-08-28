// Navbar
import navbarLogo from './assets/logo.svg';
// Header
import headerPeople from './assets/people.png';
import headerAi from './assets/ai.png';
// Brands
import atlassian from './assets/atlassian.png';
import dropbox from './assets/dropbox.png';
import google from './assets/google.png';
import shopify from './assets/shopify.png';
import slack from './assets/slack.png';
// Possibility
import possibilityImage from './assets/possibility.png';
// Blog
import blog01 from './assets/blog01.png';
import blog02 from './assets/blog02.png';
import blog03 from './assets/blog03.png';
import blog04 from './assets/blog04.png';
import blog05 from './assets/blog05.png';

const navbar = {
  logo: navbarLogo,
  links: [
    { title: 'Home', url: '/' },
    { title: 'What is GPT3?', url: '#wgpt3' },
    { title: 'Open AI', url: '#possibility' },
    { title: 'Case Studies', url: '#features' },
    { title: 'Library', url: '#blog' },
  ],
};

const header = {
  title: 'Let’s Build Something amazing with GPT-3 OpenAI',
  text: 'Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.',
  input: { placeholder: 'Your email address' },
  button: { text: 'Get Started' },
  ps: '1,600 people requested access a visit in last 24 hours',
  images: { people: headerPeople, ai: headerAi },
};

const brands = [atlassian, dropbox, google, shopify, slack];

const whatGPT3 = {
  feature: {
    title: 'What is GPT-3',
    text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.',
  },
  title: 'The possibilities are beyond your imagination',
  text: 'Explore The Library',
  features: [
    { title: 'Chatbots', text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.' },
    {
      title: 'Knowledgebase',
      text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments by.',
    },
    {
      title: 'Education',
      text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments by.',
    },
  ],
};

const features = {
  title: 'The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.',
  text: 'Request Early Access to Get Started',
  features: [
    {
      title: 'Improving end distrusts instantly ',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded. ',
    },
    {
      title: 'Become the tended active',
      text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
      title: 'Message or am nothing',
      text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
      title: 'Really boy law county',
      text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
    },
  ],
};

const possibility = {
  image: possibilityImage,
  pre: 'Request Early Access to Get Started',
  title: 'The possibilities are beyond your imagination',
  text: 'Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.',
  post: 'Request Early Access to Get Started',
};

const cta = {
  text: 'Request Early Access to Get Started',
  title: 'Register today & start exploring the endless possiblities.',
  button: { text: 'Get Started' },
};

const blog = {
  title: 'A lot is happening, We are blogging about it.',
  posts: [
    {
      id: 5,
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
      image: blog05,
      date: new Date('Sep 26, 2021'),
      button: { title: 'Read Full Article' },
      group: 'A'
    },
    {
      id: 4,
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
      image: blog04,
      date: new Date('Sep 26, 2021'),
      button: { title: 'Read Full Article' },
      group: 'B'
    },
    {
      id: 3,
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
      image: blog03,
      date: new Date('Sep 26, 2021'),
      button: { title: 'Read Full Article' },
      group: 'B'
    },
    {
      id: 2,
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
      image: blog02,
      date: new Date('Sep 26, 2021'),
      button: { title: 'Read Full Article' },
      group: 'B'
    },
    {
      id: 1,
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
      image: blog01,
      date: new Date('Sep 26, 2021'),
      button: { title: 'Read Full Article' },
      group: 'B'
    },
  ],
};

const footer = {
  title: 'Do you want to step in to the future before others',
  button: { title: 'Request Early Access' },
  logo: navbarLogo,
  address: 'Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved',
  sections: [
    {
      title: 'Links',
      props: [
        { title: 'Overons', url: '/' },
        { title: 'Social Media', url: '/' },
        { title: 'Counters', url: '/' },
        { title: 'Contact', url: '/' },
      ],
    },
    {
      title: 'Company',
      props: [
        { title: 'Terms & Conditions', url: '/' },
        { title: 'Privacy Policy', url: '/' },
        { title: 'Contact', url: '/' },
      ],
    },
    {
      title: 'Get In Touch',
      props: [{ title: 'Crechterwoord K12 182 DK Alknjkcb' }, { title: '085-132567' }, { title: 'info@payme.net' }],
    },
  ],
};

export { navbar, header, brands, whatGPT3, features, possibility, cta, blog, footer };