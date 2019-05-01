import ImageList from './images-list.js';
import Search from './search.js';
import Buttons from './buttons.js';

document.addEventListener('DOMContentLoaded', () => {
  const imageList = new ImageList();
  imageList.updateOnScroll();

  new Search(imageList).initialize();
  new Buttons().initialize();
}, false);
