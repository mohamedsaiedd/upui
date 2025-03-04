import { newE2EPage } from '@stencil/core/testing';

describe('radio-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<radio-input></radio-input>');

    const element = await page.find('radio-input');
    expect(element).toHaveClass('hydrated');
  });
});
