import { ParretoPage } from './app.po';

describe('parreto App', function() {
  let page: ParretoPage;

  beforeEach(() => {
    page = new ParretoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
