import{i as f,b as h,r as b,x as g,f as y}from"./index-DVkBgnkX.js";import{n as u,c as w,o as v}from"./if-defined-DVOmkLu5.js";var p;(function(e){e.Google="google",e.Github="github",e.Apple="apple",e.Facebook="facebook",e.X="x",e.Discord="discord",e.Farcaster="farcaster"})(p||(p={}));const m=f`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var x=function(e,o,i,l){var r=arguments.length,t=r<3?o:l===null?l=Object.getOwnPropertyDescriptor(o,i):l,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,o,i,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(o,i,t):n(o,i))||t);return r>3&&t&&Object.defineProperty(o,i,t),t};let d=class extends b{constructor(){super(...arguments),this.logo="google"}render(){return g`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};d.styles=[h,m];x([u()],d.prototype,"logo",void 0);d=x([w("wui-logo")],d);const $=f`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var c=function(e,o,i,l){var r=arguments.length,t=r<3?o:l===null?l=Object.getOwnPropertyDescriptor(o,i):l,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,o,i,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(o,i,t):n(o,i))||t);return r>3&&t&&Object.defineProperty(o,i,t),t};let a=class extends b{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return g`
      <button ?disabled=${this.disabled} tabindex=${v(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return this.align==="center"?g` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};a.styles=[h,y,$];c([u()],a.prototype,"logo",void 0);c([u()],a.prototype,"name",void 0);c([u()],a.prototype,"align",void 0);c([u()],a.prototype,"tabIdx",void 0);c([u({type:Boolean})],a.prototype,"disabled",void 0);a=c([w("wui-list-social")],a);export{p as S};
