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

const cta = {};

const blog = {};

const footer = {};

export { navbar, header, brands, whatGPT3, features, possibility, cta, blog, footer };