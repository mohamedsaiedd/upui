import { newSpecPage } from '@stencil/core/testing';
import { CheckboxInput } from '../checkbox-input';

describe('checkbox-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckboxInput],
      html: `<checkbox-input></checkbox-input>`,
    });
    expect(page.root).toEqualHtml(`
      <checkbox-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkbox-input>
    `);
  });
});
