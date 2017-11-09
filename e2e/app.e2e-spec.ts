import { ExamPage } from './app.po';

describe('exam App', () => {
  let page: ExamPage;

  beforeEach(() => {
    page = new ExamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
