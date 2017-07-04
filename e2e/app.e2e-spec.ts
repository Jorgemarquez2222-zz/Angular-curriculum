import { PruebaAngular2Page } from './app.po';

describe('prueba-angular2 App', function() {
  let page: PruebaAngular2Page;

  beforeEach(() => {
    page = new PruebaAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
