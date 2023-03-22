import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'frikandev-heading',
  styleUrl: 'frikandev-heading.css',
  shadow: true,
})
export class FrikandevHeading {
  @Prop() size?: number;

  initSize = (): number => {
    if (!this.size || this.size > 6) {
      return 6;
    }

    if (this.size < 1) {
      return 1;
    }

    return Math.floor(this.size);
  };

  render() {
    const Tag = `h${this.initSize()}`;

    return (
      <Host>
        <Tag>
          <slot></slot>
        </Tag>
      </Host>
    );
  }
}
