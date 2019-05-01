import ImagesList from '../images-list';
import Search from '../search';
import '../index';

describe('index', () => {
  it('should initialize the ImageList and Search components', () => {
    ImagesList.prototype.updateOnScroll = jest.fn();
    Search.prototype.initialize = jest.fn();

    document.dispatchEvent(new Event('DOMContentLoaded'));

    expect(ImagesList.prototype.updateOnScroll).toHaveBeenCalled();
    expect(Search.prototype.initialize).toHaveBeenCalled();
  });
});
