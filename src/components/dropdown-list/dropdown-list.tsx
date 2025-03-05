import { Component, Host, Prop, State, h , Element} from '@stencil/core';

@Component({
  tag: 'dropdown-list',
  styleUrl: 'dropdown-list.css',
  shadow: true,
})
export class DropdownList {
  @Prop() label: string;
  @Prop() dropdowndisabled: boolean;
  @State() isListOpen: boolean = false;
  @State() arrowUp: boolean = false;
  @State() selectedOption: string = 'Choose';
  @Element() el: HTMLElement;

  componentDidLoad() {
    document.addEventListener('click', this.handleOutsideClick.bind(this));
    const slotElement = this.el.shadowRoot.querySelector('slot');
    slotElement.addEventListener('click', this.handleSlotClick.bind(this));
  }

  handleSlotClick(e: Event) {
    const clickedItem = e.target as HTMLElement;
    this.selectedOption = clickedItem.innerText;
  }

  toggleDropdown(e : Event) {
    e.stopPropagation();
    if (!this.dropdowndisabled) {
      this.isListOpen = !this.isListOpen;
      this.arrowUp = !this.arrowUp;
    }
  }

  handleOutsideClick(e: Event) {
    const target = e.target as HTMLElement;
    if (!target.closest('.upui-dropdown-input-container') && !target.closest('.upui-ul-items-container')) {
      this.isListOpen = false;
      this.arrowUp = false;
    }
  }
 
  disconnectedCallback() {
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
    const slotElement = this.el.shadowRoot.querySelector('slot');
    slotElement.removeEventListener('click', this.handleSlotClick.bind(this));
  }
  
  render() {
    return (
      <Host>
        <div class={'upui-dropdown-container ' + (this.dropdowndisabled ? 'upui-dropdown-disabled' : '')}>
          <p class="upui-dropdown-label">{this.label ? this.label : ''}</p>
          <div class="upui-dropdown-input-container" tabindex="0" onClick={(e) => this.toggleDropdown(e)}>
            <p class="upui-dropdown-title">{this.selectedOption}</p>
            {!this.dropdowndisabled ? (
              this.isListOpen ? (
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5L5 0L10 5H0Z" fill="#0C5CC5" />
                </svg>
              ) : (
                <svg class={this.arrowUp ? 'arrow-up' : ''} width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0L5 5L10 0H0Z" fill="#6B7786" />
                </svg>
              )
            ) : (
              <svg class={this.arrowUp ? 'arrow-up' : ''} width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0H0Z" fill="#B2BAC5" />
              </svg>
            )}
          </div>
          <ul class={`upui-ul-items-container ${this.isListOpen ? '' : 'display-none'}`}>
            <slot></slot>
          </ul>
        </div>
      </Host>
    );
  }
}
