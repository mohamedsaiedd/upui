import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gray-outlined-btn',
  styleUrl: 'gray-outlined-btn.css',
  shadow: true,
})
export class GrayOutlinedBtn {
  @Prop() text: string;
  @Prop() plusicon: boolean = false;
  @Prop() imagesrc: string = '';
  @Prop() btndisabled: boolean;
  render() {
    return (
      <Host>
        <button class={'upui-btn upui-gray-outlined-btn ' + (this.btndisabled ? 'upui-gray-outlined-btn-disabled' : '')}>
          {this.plusicon && this.imagesrc === '' ? (
            !this.btndisabled ? (
              <svg class="upui-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="#6b7786" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
              </svg>
            ) : (
              <svg class="upui-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="#b2bac5"
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                />
              </svg>
            )
          ) : null}
          {/* {this.imagesrc && !this.plusicon ? <img class="upui-btn-image" src={this.imagesrc} /> : null} */}
          {this.text}
        </button>
      </Host>
    );
  }
}
