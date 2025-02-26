import { newSpecPage } from '@stencil/core/testing';
import { RadioInput } from '../radio-input';

describe('radio-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadioInput],
      html: `<radio-input></radio-input>`,
    });
    expect(page.root).toEqualHtml(`
      <radio-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </radio-input>
    `);
  });
});
