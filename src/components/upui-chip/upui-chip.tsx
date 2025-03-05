import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'upui-chip',
  styleUrl: 'upui-chip.css',
  shadow: true
})
export class MyChip {
  @Prop() text!: string;
  @Prop() selected?: boolean = false;
  @Prop() removable?: boolean = false;
  @Prop() size?: 'small' | 'medium' | 'large' = 'medium';

  @Event() chipClick!: EventEmitter<void>;
  @Event() chipRemove!: EventEmitter<void>;

  private handleClick = () => {
    this.chipClick.emit();
  }

  private handleRemove = (e: MouseEvent) => {
    e.stopPropagation();
    this.chipRemove.emit();
  }

  render() {
    return (
      <div 
        class={{
          'chip': true,
          'chip--selected': this.selected,
          [`chip--${this.size}`]: true
        }} 
        onClick={this.handleClick}
      >
        {this.selected && (
          <span class="check-icon">✓</span>
        )}
        <span class="chip-text">{this.text}</span>
        {this.removable && (
          <button 
            class="remove-button" 
            onClick={this.handleRemove}
            type="button"
          >
            ×
          </button>
        )}
      </div>
    );
  }
}