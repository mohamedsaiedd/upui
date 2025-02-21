import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'primary-btn',
  styleUrl: 'primary-btn.css',
  shadow: true,
})

export class PrimaryBtn {
  @Prop() btnText: string;
  @Prop() text: string;

  render() {
    return (
      <Host>
        <button class="primary-btn">{this.text}</button>
      </Host>
    );
  }
}
