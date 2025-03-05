import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'collapsed-menu',
  styleUrl: 'collapsed-menu.css',
  shadow: true,
})
export class CollapsedMenu {
  @Prop() header : string = '' ;
  @Prop() collapsedisabled : boolean = false ;
  @State() closed : boolean = true ; 

  toggleArrow(){
    if(!this.collapsedisabled){
      this.closed = !this.closed ;
    }
  }

  render() {
    return (
      <Host>
        <div class="upui-collapse-menu-container">
          <div class={"upui-collapse-header " + (this.collapsedisabled ? 'upui-collapse-disabled' : '')} onClick={()=> this.toggleArrow()} tabindex="0">
            <p>{this.header ? this.header : 'Upland UI Collapse Header'}</p>
            <svg class={this.closed ? 'arrow-down' : 'arrow-rotate'} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m12 8.59 6 6L16.59 16 12 11.42 7.41 16 6 14.59z" fill="#6B7786" fill-rule="nonzero"></path>
            </svg>
          </div>
          <div class={"upui-collapse-body " + (!this.closed ? 'animate-menu' : '')}>
            <slot name="collapse-body"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
