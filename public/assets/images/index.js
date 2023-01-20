import avatar from '../images/avatar/avatar-1.jpg';
import aboutImage from '../images/background/aboutPageBannerImg.png';
import footertImage from '../images/background/Final-footer.png';
import footertImageBg from '../images/background/footer-bg.png';
import homeIndustrySectionBg from '../images/background/image 57.png';
import industryBanner from '../images/background/industries.png';
import testimonialBg from '../images/background/testimonials-bg.png';
import youtube from '../images/background/YouTube.png';
import blog from '../images/blogs/blog-1.png';
import client1 from '../images/clients/client-1.png';
import client2 from '../images/clients/client-2.png';
import client3 from '../images/clients/client-3.png';
import industry1 from '../images/industry/industry-1.png';
import team from '../images/teams/team1.png';
export const images = [
  avatar,
  aboutImage,
  footertImage,
  footertImageBg,
  homeIndustrySectionBg,
  youtube,
  testimonialBg,
  industryBanner,
  blog,
  client1,
  client2,
  client3,
  industry1,
  team,
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
