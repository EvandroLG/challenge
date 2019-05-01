import throttle from './throttle.js';
import http from './http.js';

export default class ImagesList {
  constructor() {
    this.elements = {};
    this.elements.list = document.getElementById('js-list');

    const apiKey = 'LlwQ1SQb4rPnfzdHZOFH2XO0Lq29kTEU';
    this.page = 0;
    this.apiUrl = new URL('https://api.giphy.com/v1/gifs/search?limit=5&rating=G&lang=en');
    this.apiUrl.searchParams.append('api_key', apiKey);
    this.apiUrl.searchParams.append('offset', this.page);
  }

  _render(data) {
    return data.map((obj) => {
      const original = obj.images.original;
      const src = original.url;
      const width = original.width;
      const height = original.height;

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
}
