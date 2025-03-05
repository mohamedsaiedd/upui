import { newSpecPage } from '@stencil/core/testing';
import { GrayOutlinedBtn } from '../gray-outlined-btn';

describe('gray-outlined-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GrayOutlinedBtn],
      html: `<gray-outlined-btn></gray-outlined-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <gray-outlined-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gray-outlined-btn>
    `);
  });
});
