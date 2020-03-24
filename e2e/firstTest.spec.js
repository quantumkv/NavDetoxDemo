import {by, expect, element, waitFor} from 'detox';

describe('Example', () => {
  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome_screen'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await waitFor(element(by.id('hello_button')))
      .toBeVisible()
      .whileElement(by.id('scroll_view_first'))
      .scroll(100, 'down');
    await element(by.id('hello_button')).tap();
    await expect(element(by.id('home_screen'))).toBeVisible();
  });

  it('should navigate using header button', async () => {
    await expect(element(by.id('header_button'))).toBeVisible();
    await element(by.id('header_button')).tap();
    await expect(element(by.id('third_screen'))).toBeVisible();
  });
});
