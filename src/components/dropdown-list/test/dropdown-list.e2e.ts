import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dropdown-list></dropdown-list>');

    const element = await page.find('dropdown-list');
    expect(element).toHaveClass('hydrated');
  });
});
