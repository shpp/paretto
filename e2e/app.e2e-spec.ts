import { ParettoPage } from './app.po';

describe('paretto App', function() {
  let page: ParettoPage;

  beforeEach(() => {
    page = new ParettoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
