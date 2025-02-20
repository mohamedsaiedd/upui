import { newE2EPage } from '@stencil/core/testing';

describe('main-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<main-btn></main-btn>');

    const element = await page.find('main-btn');
    expect(element).toHaveClass('hydrated');
  });
});
