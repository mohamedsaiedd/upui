import { newSpecPage } from '@stencil/core/testing';
import { CollapsedMenu } from '../collapsed-menu';

describe('collapsed-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CollapsedMenu],
      html: `<collapsed-menu></collapsed-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <collapsed-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </collapsed-menu>
    `);
  });
});
