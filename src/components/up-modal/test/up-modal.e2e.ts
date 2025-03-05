import { newE2EPage } from '@stencil/core/testing';

describe('up-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<up-modal></up-modal>');

    const element = await page.find('up-modal');
    expect(element).toHaveClass('hydrated');
  });
});
