import ImageList from './images-list.js';
import Search from './search.js';

document.addEventListener('DOMContentLoaded', () => {
  const imageList = new ImageList();
  imageList.updateOnScroll();

  new Search(imageList).initialize();
}, false);
