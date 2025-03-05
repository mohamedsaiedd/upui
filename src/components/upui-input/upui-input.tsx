import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'upui-input',
  styleUrl: 'upui-input.css',
  shadow: true,
})
export class UpuiInput {

   @Prop() label: string;
   @Prop() type: string= "text";
   @Prop() placeholder: string = '';
   @Prop({ mutable: true }) value: string = '';
   @Prop() name: string = '';
   @Prop() inputId: string = '';
   @Prop() readonly: boolean = false;
   @Event() valueChanged: EventEmitter<string>;
 
   private handleInput(event: Event) {
     const target = event.target as HTMLInputElement;
     this.value = target.value;
     this.valueChanged.emit(this.value);
   }

  render() {
    return (
      <div class="form-group">
        <input 
          class="upui-input"
          type={this.type} 
          id={this.inputId} 
          name={this.name}
          value={this.value} 
          placeholder={this.placeholder}
          onInput={(event) => this.handleInput(event)}
          disabled={this.readonly}
        />
        {this.label && <label htmlFor={this.inputId} class="control-label">{this.label}</label>}
      </div>
    );
  }
}
