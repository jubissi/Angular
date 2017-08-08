import { PizzariaXadrezPage } from './app.po';

describe('pizzaria-xadrez App', function() {
  let page: PizzariaXadrezPage;

  beforeEach(() => {
    page = new PizzariaXadrezPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
