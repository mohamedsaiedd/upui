import { newE2EPage } from '@stencil/core/testing';

describe('secondary-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<secondary-btn></secondary-btn>');

    const element = await page.find('secondary-btn');
    expect(element).toHaveClass('hydrated');
  });
});
