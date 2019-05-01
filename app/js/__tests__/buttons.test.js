import Buttons from '../buttons';

describe('buttons', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="js-button-list">1 column</button>
      <button id="js-button-column">3 columns</button>
      <ul id="js-list">
      </ul>
    `;
  });

  it('should change list class when user clicks on button', () => {
    new Buttons().initialize();
    document.getElementById('js-button-column').click();

    expect(
      document.getElementById('js-list').classList.contains('list--column')
    ).toBeTruthy();
  });

  it('should change list class when user clicks on button', () => {
    new Buttons().initialize();
    document.getElementById('js-button-column').click();
    document.getElementById('js-button-list').click();

    expect(
      document.getElementById('js-list').classList.contains('list--column')
    ).toBeFalsy();
  });
});
