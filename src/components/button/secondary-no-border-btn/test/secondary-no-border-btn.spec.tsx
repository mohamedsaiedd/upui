import { newSpecPage } from '@stencil/core/testing';
import { SecondaryNoBorderBtn } from '../secondary-no-border-btn';

describe('secondary-no-border-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SecondaryNoBorderBtn],
      html: `<secondary-no-border-btn></secondary-no-border-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <secondary-no-border-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </secondary-no-border-btn>
    `);
  });
});
