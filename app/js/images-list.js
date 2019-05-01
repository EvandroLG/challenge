import throttle from './throttle.js';
import http from './http.js';

export default class ImagesList {
  constructor() {
    this.elements = {};
    this.elements.list = document.getElementById('js-list');

    const apiKey = 'LlwQ1SQb4rPnfzdHZOFH2XO0Lq29kTEU';
    this.page = 0;
    this.apiUrl = new URL('https://api.giphy.com/v1/gifs/search?limit=20&rating=G&lang=en');
    this.apiUrl.searchParams.append('api_key', apiKey);
    this.apiUrl.searchParams.append('offset', this.page);
  }

  _render(data) {
    return data.map((obj) => {
      const image = obj.images.fixed_height;
      const src = image.url;
      const width = image.width;
      const height = image.height;

      return `
        <li>
            <image src=${src}
                   width=${width}
                   height=${height}
            >
        </li>
      `;
    }).join('');
  }

  async update(value) {
    this.apiUrl.searchParams.set('q', value);
    const json = await http.get(this.apiUrl);

    this.elements.list.innerHTML = this._render(json.data);
    this.page = 0;
  }

  async _updateNextPage() {
    this.page = this.page + 1;
    this.apiUrl.searchParams.set('offset', this.page);
    const json = await http.get(this.apiUrl);

    if (!json.data.length) {
      return;
    }

    this.elements.list.innerHTML += this._render(json.data);
  }

  updateOnScroll() {
    window.addEventListener('scroll', throttle(() => {
      const docEl = document.documentElement;
      const scrollTop = Math.max(docEl.scrollTop, document.body.scrollTop);
      const isBottomOfWindow = (scrollTop + window.innerHeight) === docEl.offsetHeight;

      if (isBottomOfWindow) {
        this._updateNextPage();
      }
    }, 500));
  }
}
