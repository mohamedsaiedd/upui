import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'radio-input',
  styleUrl: 'radio-input.css',
  shadow: true,
})
export class RadioInput {
  @Prop() radiodisabled: boolean;
  @Prop() labeltitle : string ;
  @Prop() labelfor : string ;
  @Prop() radioValue : string ;

  render() {
    return (
      <Host>
        <label class={"upui-radio-input-container " + (this.radiodisabled ? 'upui-radio-disabled' : '')} htmlFor={this.labelfor ? this.labelfor : ''} >
          <span class="upui-radio-input">
            <label class="inputs-container radios-style" htmlFor={this.labelfor ? this.labelfor : ''}>
              <input type="radio" name={this.labelfor ? this.labelfor : ''} id={this.labelfor ? this.labelfor : ''} disabled={this.radiodisabled ? this.radiodisabled : false} value={this.radioValue ? this.radioValue : ''} />
              <span class="checkmark"></span>
            </label>
            <label class="input-label" htmlFor={this.labelfor ? this.labelfor : ''}>{this.labeltitle ? this.labeltitle : ''}</label>
          </span>
        </label>
      </Host>
    );
  }
}
