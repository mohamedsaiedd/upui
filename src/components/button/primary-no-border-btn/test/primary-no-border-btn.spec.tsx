import { newSpecPage } from '@stencil/core/testing';
import { PrimaryNoBorderBtn } from '../primary-no-border-btn';

describe('primary-no-border-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PrimaryNoBorderBtn],
      html: `<primary-no-border-btn></primary-no-border-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <primary-no-border-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </primary-no-border-btn>
    `);
  });
});
