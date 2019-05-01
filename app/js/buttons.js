export default class Buttons {
  constructor() {
    this.classes = {};
    this.classes.columnList = 'list--column';
    this.ids = {};
    this.ids.buttonList = 'js-button-list';

    this.elements = {};
    this.elements.btList = document.getElementById(this.ids.buttonList);
    this.elements.btColumn = document.getElementById('js-button-column');
    this.elements.list = document.getElementById('js-list');
  }

  _onClick(e) {
    const isButtonList = e.target.id === this.ids.buttonList;
    const classColumn = this.classes.columnList;

    this.elements.list.classList[isButtonList ? 'remove' : 'add'](classColumn);
  }

  initialize() {
    this.elements.btList.addEventListener('click', this._onClick.bind(this), false);
    this.elements.btColumn.addEventListener('click', this._onClick.bind(this), false);
  }
}
