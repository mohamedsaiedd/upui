import { newE2EPage } from '@stencil/core/testing';

describe('secondary-no-border-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<secondary-no-border-btn></secondary-no-border-btn>');

    const element = await page.find('secondary-no-border-btn');
    expect(element).toHaveClass('hydrated');
  });
});
