import { newSpecPage } from '@stencil/core/testing';
import { MainBtn } from '../main-btn';

describe('main-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MainBtn],
      html: `<main-btn></main-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <main-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </main-btn>
    `);
  });
});
