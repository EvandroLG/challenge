import Search from '../search';

describe('search', () => {
  function verifySearch(value, callback) {
    document.body.innerHTML = `
      <form id="js-form">
          <input
              type="text"
              id="js-search"
              value="${value}"
          >
      </form>
    `;

    const mockImageList = {
      update: jest.fn(),
    };

    new Search(mockImageList).initialize();
    const e = new Event('submit');
    document.getElementById('js-form').dispatchEvent(e);

    callback(mockImageList.update);
  }

  it('should call update method from ImageList object passing inplay value by parameter', () => {
    const value = 'cats';

    verifySearch(value, (method) => {
      expect(method).toHaveBeenCalled();
      expect(method).toHaveBeenCalledWith(value);
    });
  });

  it('should not call update method from ImageList object passing when value is empty', () => {
    verifySearch('', (method) => {
      expect(method).not.toHaveBeenCalled();
    });
  });
});
