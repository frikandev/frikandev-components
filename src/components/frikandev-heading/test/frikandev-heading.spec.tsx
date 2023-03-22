import { newSpecPage } from '@stencil/core/testing';
import { FrikandevHeading } from '../frikandev-heading';

describe('frikandev-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FrikandevHeading],
      html: `<frikandev-heading size="1"></frikandev-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <frikandev-heading size="1">
        <mock:shadow-root>
          <h1>
            <slot></slot>
          </h1>
        </mock:shadow-root>
      </frikandev-heading>
    `);
  });
});
