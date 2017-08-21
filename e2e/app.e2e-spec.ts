import { Ng2CrudPage } from './app.po';

describe('ng2-crud App', () => {
  let page: Ng2CrudPage;

  beforeEach(() => {
    page = new Ng2CrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
