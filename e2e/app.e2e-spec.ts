import { Lab15AssignmentPage } from './app.po';

describe('lab15-assignment App', () => {
  let page: Lab15AssignmentPage;

  beforeEach(() => {
    page = new Lab15AssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
