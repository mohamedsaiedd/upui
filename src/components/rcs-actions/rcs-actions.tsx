import { Component, Host, h, Prop,Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'rcs-actions',
  styleUrl: 'rcs-actions.css',
  shadow: true,
})
export class RcsActions {
  @Prop() title: string;
  @Prop() description: string;
  @Prop() actions: string;
  @Event() actionClick: EventEmitter<string>; // Custom event
 
  private handleClick(action: string) {
    this.actionClick.emit(action); // Emit event when action is clicked
  }

  render() {
    return (
      <Host>
        <button class="btn btn-light shadow w-100 p-4">
        <button onClick={() => this.handleClick('Action1')}>Action 1</button>
          <div class="d-flex align-items-center justify-content-between">
            <span class="h5 mb-0">Suggested Actions</span>
            <button
              class="btn btn-light rounded-circle p-2"
              onClick={() => {
                const submenu = document.querySelector('.submenu') as HTMLElement;
                if (submenu) {
                  submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
                  const arrow = document.querySelector('.arrow') as HTMLElement;
                  if (arrow) {
                    arrow.innerHTML = submenu.style.display === 'none' ? '&#9660;' : '&#9650;';
                  }
                }
              }}
            >
              <span class="arrow text-secondary">&#9660;</span>
            </button>
          </div>
          <div class="submenu mt-4">
            <div class="border rounded p-3 mb-3">
              <div class="d-flex align-items-center justify-content-between cursor-pointer">
                <span class="fw-medium">Dialphone</span>
                <span class="arrow text-secondary">&#9660;</span>
              </div>
              <div class="mt-3">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <input type="text" placeholder="Phone Number 1" class="form-control" />
                  <div class="btn btn-light rounded">&#8942;</div>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <input type="text" placeholder="Phone Number 2" class="form-control" />
                  <div class="btn btn-light rounded">&#8942;</div>
                </div>
              </div>
            </div>
            <div class="border rounded p-3">
              <div class="d-flex align-items-center justify-content-between cursor-pointer">
                <span class="fw-medium">Locations</span>
                <span class="arrow text-secondary">&#9660;</span>
              </div>
              <div class="mt-3">
                <div class="d-flex align-items-center justify-content-between p-2 hover-bg-light rounded">
                  <span>Location 1</span>
                  <div class="text-secondary cursor-pointer">&#8942;</div>
                </div>
                <div class="d-flex align-items-center justify-content-between p-2 hover-bg-light rounded">
                  <span>Location 2</span>
                  <div class="text-secondary cursor-pointer">&#8942;</div>
                </div>
              </div>
            </div>
          </div>
        </button>
      </Host>
    );
  }
}
