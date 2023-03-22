import { newSpecPage } from '@stencil/core/testing';
import { FrikandevHeading } from '../frikandev-heading';

describe('frikandev-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FrikandevHeading],
      html: `<frikandev-heading></frikandev-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <frikandev-heading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </frikandev-heading>
    `);
  });
});
