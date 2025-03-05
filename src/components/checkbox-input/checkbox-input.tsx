import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'checkbox-input',
  styleUrl: 'checkbox-input.css',
  shadow: true,
})
export class CheckboxInput {
  @Prop() checkboxdisabled: boolean;
  @Prop() labeltitle: string;
  @Prop() labelfor: string;
  @Prop() checkboxvalue: string;
  render() {
    return (
      <Host>
        <label class={"upui-checkbox-input-container " + (this.checkboxdisabled ? 'upui-checkbox-disabled' : '')} htmlFor={this.labelfor ? this.labelfor : ''} >
          <span class="upui-checkbox-input">
            <label class="inputs-container checkboxes-style" htmlFor={this.labelfor ? this.labelfor : ''}>
              <input type="checkbox" name={this.labelfor ? this.labelfor : ''} id={this.labelfor ? this.labelfor : ''} disabled={this.checkboxdisabled ? this.checkboxdisabled : false} value={this.checkboxvalue ? this.checkboxvalue : ''} />
              <span class="checkmark"></span>
            </label>
            <label class="input-label" htmlFor={this.labelfor ? this.labelfor : ''}>{this.labeltitle ? this.labeltitle : ''}</label>
          </span>
        </label>
      </Host>
    );
  }
}
