import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'main-btn',
  styleUrl: 'main-btn.css',
  shadow: true,
})
export class MainBtn {
  render() {
    return (
      <button class="main-btn">
        <slot name="icon">jjj</slot>
      </button>
    );
  }
}
