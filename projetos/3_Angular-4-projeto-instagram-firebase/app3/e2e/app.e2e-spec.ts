import { App3Page } from './app.po';

describe('app3 App', () => {
  let page: App3Page;

  beforeEach(() => {
    page = new App3Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
