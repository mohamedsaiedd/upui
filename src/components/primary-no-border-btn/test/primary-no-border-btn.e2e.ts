import { newE2EPage } from '@stencil/core/testing';

describe('primary-no-border-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<primary-no-border-btn></primary-no-border-btn>');

    const element = await page.find('primary-no-border-btn');
    expect(element).toHaveClass('hydrated');
  });
});
