import http from '../http';

describe('http', () => {
  it('should call fetch api passing url as parameter', () => {
    window.fetch = jest.fn(() => {
      return new Promise((resolve) => resolve({
        json: () => {}
      }));
    });

    const url = 'http://www.uber.com';
    http.get(url);

    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });
});
