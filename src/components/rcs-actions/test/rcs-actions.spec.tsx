import { newSpecPage } from '@stencil/core/testing';
import { RcsActions } from '../rcs-actions';

describe('rcs-actions', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RcsActions],
      html: `<rcs-actions></rcs-actions>`,
    });
    expect(page.root).toEqualHtml(`
      <rcs-actions>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rcs-actions>
    `);
  });
});
