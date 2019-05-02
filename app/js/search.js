export default class Search {
  constructor(imageList) {
    this.imageList = imageList;

    this.elements = {};
    this.elements.search = document.getElementById('js-form');
    this.elements.inplay = document.getElementById('js-search');
  }

  initialize() {
    this.elements.search.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = this.elements.inplay.value;

      if (value) {
        this.imageList.update(value);
      }
    });
  }
}
