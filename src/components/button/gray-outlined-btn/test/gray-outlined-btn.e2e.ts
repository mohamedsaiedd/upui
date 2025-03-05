import { newE2EPage } from '@stencil/core/testing';

describe('gray-outlined-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gray-outlined-btn></gray-outlined-btn>');

    const element = await page.find('gray-outlined-btn');
    expect(element).toHaveClass('hydrated');
  });
});
