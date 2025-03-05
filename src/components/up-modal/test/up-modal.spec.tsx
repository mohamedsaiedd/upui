import { newSpecPage } from '@stencil/core/testing';
import { UpModal } from '../up-modal';

describe('up-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UpModal],
      html: `<up-modal></up-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <up-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </up-modal>
    `);
  });
});
