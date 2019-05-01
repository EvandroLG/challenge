import Search from '../search';

describe('search', () => {
  it('should call update method from ImageList object passing inplay value by parameter', () => {
    const value = 'cars';
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

    expect(mockImageList.update).toHaveBeenCalled();
    expect(mockImageList.update).toHaveBeenCalledWith(value);
  });
});
