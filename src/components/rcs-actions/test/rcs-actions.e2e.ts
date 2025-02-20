import { newE2EPage } from '@stencil/core/testing';

describe('rcs-actions', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rcs-actions></rcs-actions>');

    const element = await page.find('rcs-actions');
    expect(element).toHaveClass('hydrated');
  });
});
