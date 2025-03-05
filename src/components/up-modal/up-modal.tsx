import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'up-modal',
  styleUrl: 'up-modal.css',
  shadow: true,
})
export class UpModal {

  @State() modalOpened : boolean = false ;

  render() {
    return (
      <Host>
        <div class="upui-modal-container">
          <button type="button" onClick={()=> this.modalOpened = true}>Open Modal</button>
          <div class={"disaply-none " +(this.modalOpened ? 'upui-modal-view' : '')}>
            <div class="upui-modal-content">
              <div class="upui-modal-title">
                <div class="upui-modal-title-container">
                  <h2>Header</h2>
                  <svg onClick={()=> this.modalOpened = false } width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#6B7786"/>
                  </svg>
                  </div>
              </div>
              <div class="upui-modal-body">UpUi Modal Body Description</div>
              <div class="upui-modal-footer">
                <button onClick={()=> this.modalOpened = false }>CANCEL</button>
                <button onClick={()=> this.modalOpened = false }>SAVE</button>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
