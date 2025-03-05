import { newSpecPage } from '@stencil/core/testing';
import { SecondaryBtn } from '../secondary-btn';

describe('secondary-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SecondaryBtn],
      html: `<secondary-btn></secondary-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <secondary-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </secondary-btn>
    `);
  });
});
