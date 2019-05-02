import apiMock from '../__mocks__/api';
import ImagesList from '../images-list';
import http from '../http';

describe('images-list', () => {
  beforeEach(() => {
    http.get = jest.fn(() => {
      return new Promise(resolve => resolve(apiMock));
    });

    document.body.innerHTML = `
      <ul id="js-list">
      </ul>
    `;
  });

  it('should update list html with the datas provided by the api', async () => {
    const imagesList = new ImagesList();
    await imagesList.update('cat');

    expect(http.get).toHaveBeenCalled();
    expect(
      document.getElementById('js-list').innerHTML
    ).toMatchSnapshot();
  });

  it('should not update list html when api returns empty data', async () => {
    http.get = jest.fn(() => {
      return new Promise(resolve => resolve({
        data: [],
      }));
    });

    const imagesList = new ImagesList();
    await imagesList.update('cat');

    expect(
      document.getElementById('js-list').querySelectorAll('li').length
    ).toEqual(0);
  });

  it('should request and display more images', async () => {
    const imagesList = new ImagesList();
    await imagesList._updateNextPage();
    await imagesList._updateNextPage();

    expect(imagesList.page).toEqual(2);
    expect(http.get).toHaveBeenCalled();
    expect(
      document.getElementById('js-list').innerHTML
    ).toMatchSnapshot();
  });

  it('should not display more images when request returns empty data', async () => {
    http.get = jest.fn(() => {
      return new Promise(resolve => resolve({
        data: [],
      }));
    });

    const imagesList = new ImagesList();
    await imagesList._updateNextPage();

    expect(imagesList.page).toEqual(0);
    expect(
      document.getElementById('js-list').querySelectorAll('li').length
    ).toEqual(0);
  });
});
