import { newSpecPage } from '@stencil/core/testing';
import { DropdownList } from '../dropdown-list';

describe('dropdown-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DropdownList],
      html: `<dropdown-list></dropdown-list>`,
    });
    expect(page.root).toEqualHtml(`
      <dropdown-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dropdown-list>
    `);
  });
});
