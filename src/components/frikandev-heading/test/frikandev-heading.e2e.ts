import { newE2EPage } from '@stencil/core/testing';

describe('frikandev-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<frikandev-heading></frikandev-heading>');

    const element = await page.find('frikandev-heading');
    expect(element).toHaveClass('hydrated');
  });
});
