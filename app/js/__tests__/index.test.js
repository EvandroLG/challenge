import ImagesList from '../images-list';
import Search from '../search';
import Buttons from '../buttons';
import '../index';

describe('index', () => {
  it('should initialize the ImageList, Search and Buttons components', () => {
    ImagesList.prototype.updateOnScroll = jest.fn();
    Search.prototype.initialize = jest.fn();
    Buttons.prototype.initialize = jest.fn();

    document.dispatchEvent(new Event('DOMContentLoaded'));

    expect(ImagesList.prototype.updateOnScroll).toHaveBeenCalled();
    expect(Search.prototype.initialize).toHaveBeenCalled();
    expect(Buttons.prototype.initialize).toHaveBeenCalled();
  });
});
