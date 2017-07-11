import { AppTutorialJsonPage } from './app.po';

describe('app-tutorial-json App', () => {
  let page: AppTutorialJsonPage;

  beforeEach(() => {
    page = new AppTutorialJsonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
