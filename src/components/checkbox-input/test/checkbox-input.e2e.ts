import { newE2EPage } from '@stencil/core/testing';

describe('checkbox-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<checkbox-input></checkbox-input>');

    const element = await page.find('checkbox-input');
    expect(element).toHaveClass('hydrated');
  });
});
