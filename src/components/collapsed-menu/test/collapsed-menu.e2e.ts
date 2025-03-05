import { newE2EPage } from '@stencil/core/testing';

describe('collapsed-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<collapsed-menu></collapsed-menu>');

    const element = await page.find('collapsed-menu');
    expect(element).toHaveClass('hydrated');
  });
});
