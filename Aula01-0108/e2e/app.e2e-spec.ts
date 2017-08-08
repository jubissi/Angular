import { Exec01Page } from './app.po';

describe('exec01 App', () => {
  let page: Exec01Page;

  beforeEach(() => {
    page = new Exec01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
