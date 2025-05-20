import { e as $i, U as R, n as c, c as h, o as p, r as u } from './if-defined-DVOmkLu5.js'
import './index-B2osUT2V.js'
import './index-B4eb2ffY.js'
import './index-BGjtclTS.js'
import './index-BaPrYmVj.js'
import './index-BeTGsQ0g.js'
import './index-BfDAOq8h.js'
import { N as yn } from './index-BxwsSeIL.js'
import { W as cs } from './index-Bz4Ul6tQ.js'
import './index-C5GW1wiz.js'
import './index-C22vu2Z6.js'
import './index-CTojmOJx.js'
import { n as ai, e as ri } from './index-Cn1TwpSs.js'
import './index-Cxc8tIRM.js'
import {
  e as $,
  M as A,
  G as Ae,
  O as C,
  J as Ci,
  a as D,
  t as I,
  T as Kt,
  W as M,
  S as O,
  c as S,
  f as T,
  b as _,
  C as b,
  D as bn,
  j as d,
  z as de,
  R as f,
  d as g,
  o as gn,
  p as k,
  x as l,
  A as m,
  l as mn,
  F as oi,
  m as pe,
  B as qi,
  k as v,
  r as w,
  i as x,
  I as xn,
  H as yi
} from './index-DVkBgnkX.js'
import { S as vn } from './index-DcIuyBCN.js'
import './index-DeEXhxyT.js'
import './index-DsF4Gov6.js'
import { M as ki } from './index-QVU1uMUX.js'
import './index-QpqlfPgl.js'
import './index-kA5-QyMM.js'
import './index-swSfGf8i.js'
import './index-vgifefJD.js'

import { n as c, c as h, o as p, U as R, r as u, e as $i } from './if-defined-DVOmkLu5.js'
import './index-QpqlfPgl.js'
import './index-B2osUT2V.js'
import './index-DsF4Gov6.js'
import './index-Cxc8tIRM.js'
import { W as cs } from './index-Bz4Ul6tQ.js'
import './index-BGjtclTS.js'
import './index-vgifefJD.js'
import { e as ri, n as ai } from './index-Cn1TwpSs.js'
import './index-B4eb2ffY.js'
import './index-DeEXhxyT.js'
import { M as ki } from './index-QVU1uMUX.js'
import './index-swSfGf8i.js'
import './index-BfDAOq8h.js'
import './index-CTojmOJx.js'
import './index-C22vu2Z6.js'
import './index-C5GW1wiz.js'
import { S as vn } from './index-DcIuyBCN.js'
import { N as yn } from './index-BxwsSeIL.js'
import './index-BaPrYmVj.js'
import './index-BeTGsQ0g.js'
import './index-kA5-QyMM.js'
const Cn = x`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`
var Q = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let H = class extends w {
  constructor() {
    super(...arguments),
      (this.networkSrc = void 0),
      (this.avatarSrc = void 0),
      (this.balance = void 0),
      (this.isUnsupportedChain = void 0),
      (this.disabled = !1),
      (this.loading = !1),
      (this.address = ''),
      (this.profileName = ''),
      (this.charsStart = 4),
      (this.charsEnd = 6)
  }
  render() {
    return l`
      <button
        ?disabled=${this.disabled}
        class=${p(this.balance ? void 0 : 'local-no-balance')}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address ? R.getTruncateString({ string: this.profileName || this.address, charsStart: this.profileName ? 18 : this.charsStart, charsEnd: this.profileName ? 0 : this.charsEnd, truncate: this.profileName ? 'end' : 'middle' }) : null}
          </wui-text>
        </wui-flex>
      </button>
    `
  }
  balanceTemplate() {
    if (this.isUnsupportedChain)
      return l` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`
    if (this.balance) {
      const e = this.networkSrc
          ? l`<wui-image src=${this.networkSrc}></wui-image>`
          : l`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,
        t = this.loading
          ? l`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`
          : l`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`
      return l`${e} ${t}`
    }
    return null
  }
}
H.styles = [_, T, Cn]
Q([c()], H.prototype, 'networkSrc', void 0)
Q([c()], H.prototype, 'avatarSrc', void 0)
Q([c()], H.prototype, 'balance', void 0)
Q([c({ type: Boolean })], H.prototype, 'isUnsupportedChain', void 0)
Q([c({ type: Boolean })], H.prototype, 'disabled', void 0)
Q([c({ type: Boolean })], H.prototype, 'loading', void 0)
Q([c()], H.prototype, 'address', void 0)
Q([c()], H.prototype, 'profileName', void 0)
Q([c()], H.prototype, 'charsStart', void 0)
Q([c()], H.prototype, 'charsEnd', void 0)
H = Q([h('wui-account-button')], H)
var L = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
class U extends w {
  constructor() {
    var e, t, n, o, i, r
    super(...arguments),
      (this.unsubscribe = []),
      (this.disabled = !1),
      (this.balance = 'show'),
      (this.charsStart = 4),
      (this.charsEnd = 6),
      (this.namespace = void 0),
      (this.caipAddress = (e = d.getAccountData(this.namespace)) == null ? void 0 : e.caipAddress),
      (this.balanceVal = (t = d.getAccountData(this.namespace)) == null ? void 0 : t.balance),
      (this.balanceSymbol =
        (n = d.getAccountData(this.namespace)) == null ? void 0 : n.balanceSymbol),
      (this.profileName = (o = d.getAccountData(this.namespace)) == null ? void 0 : o.profileName),
      (this.profileImage =
        (i = d.getAccountData(this.namespace)) == null ? void 0 : i.profileImage),
      (this.network = (r = d.getNetworkData(this.namespace)) == null ? void 0 : r.caipNetwork),
      (this.networkImage = k.getNetworkImage(this.network)),
      (this.isSupported = C.state.allowUnsupportedChain
        ? !0
        : d.state.activeChain
          ? d.checkIfSupportedNetwork(d.state.activeChain)
          : !0)
  }
  firstUpdated() {
    const e = this.namespace
    e
      ? this.unsubscribe.push(
          d.subscribeChainProp(
            'accountState',
            t => {
              ;(this.caipAddress = t == null ? void 0 : t.caipAddress),
                (this.balanceVal = t == null ? void 0 : t.balance),
                (this.balanceSymbol = t == null ? void 0 : t.balanceSymbol),
                (this.profileName = t == null ? void 0 : t.profileName),
                (this.profileImage = t == null ? void 0 : t.profileImage)
            },
            e
          ),
          d.subscribeChainProp(
            'networkState',
            t => {
              ;(this.network = t == null ? void 0 : t.caipNetwork),
                (this.isSupported = d.checkIfSupportedNetwork(
                  e,
                  t == null ? void 0 : t.caipNetwork
                )),
                (this.networkImage = k.getNetworkImage(t == null ? void 0 : t.caipNetwork))
            },
            e
          )
        )
      : this.unsubscribe.push(
          de.subscribeNetworkImages(() => {
            this.networkImage = k.getNetworkImage(this.network)
          }),
          d.subscribeKey('activeCaipAddress', t => {
            this.caipAddress = t
          }),
          m.subscribeKey('balance', t => (this.balanceVal = t)),
          m.subscribeKey('balanceSymbol', t => (this.balanceSymbol = t)),
          m.subscribeKey('profileName', t => (this.profileName = t)),
          m.subscribeKey('profileImage', t => (this.profileImage = t)),
          d.subscribeKey('activeCaipNetwork', t => {
            ;(this.network = t),
              (this.networkImage = k.getNetworkImage(t)),
              (this.isSupported =
                t != null && t.chainNamespace
                  ? d.checkIfSupportedNetwork(t == null ? void 0 : t.chainNamespace)
                  : !0),
              this.fetchNetworkImage(t)
          })
        )
  }
  updated() {
    this.fetchNetworkImage(this.network)
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    if (!d.state.activeChain) return null
    const e = this.balance === 'show',
      t = typeof this.balanceVal != 'string'
    return l`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${C.state.allowUnsupportedChain ? !1 : !this.isSupported}
        address=${p(g.getPlainAddress(this.caipAddress))}
        profileName=${p(this.profileName)}
        networkSrc=${p(this.networkImage)}
        avatarSrc=${p(this.profileImage)}
        balance=${e ? g.formatBalance(this.balanceVal, this.balanceSymbol) : ''}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace ? `-${this.namespace}` : ''}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `
  }
  async onClick() {
    await d.switchActiveNamespace(this.namespace),
      this.isSupported || C.state.allowUnsupportedChain
        ? A.open()
        : A.open({ view: 'UnsupportedChain' })
  }
  async fetchNetworkImage(e) {
    var t, n
    ;(t = e == null ? void 0 : e.assets) != null &&
      t.imageId &&
      (this.networkImage = await k.fetchNetworkImage(
        (n = e == null ? void 0 : e.assets) == null ? void 0 : n.imageId
      ))
  }
}
L([c({ type: Boolean })], U.prototype, 'disabled', void 0)
L([c()], U.prototype, 'balance', void 0)
L([c()], U.prototype, 'charsStart', void 0)
L([c()], U.prototype, 'charsEnd', void 0)
L([c()], U.prototype, 'namespace', void 0)
L([u()], U.prototype, 'caipAddress', void 0)
L([u()], U.prototype, 'balanceVal', void 0)
L([u()], U.prototype, 'balanceSymbol', void 0)
L([u()], U.prototype, 'profileName', void 0)
L([u()], U.prototype, 'profileImage', void 0)
L([u()], U.prototype, 'network', void 0)
L([u()], U.prototype, 'networkImage', void 0)
L([u()], U.prototype, 'isSupported', void 0)
let Si = class extends U {}
Si = L([h('w3m-account-button')], Si)
let _i = class extends U {}
_i = L([h('appkit-account-button')], _i)
const $n = x`
  :host {
    display: block;
    width: max-content;
  }
`
var J = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
class F extends w {
  constructor() {
    super(...arguments),
      (this.unsubscribe = []),
      (this.disabled = !1),
      (this.balance = void 0),
      (this.size = void 0),
      (this.label = void 0),
      (this.loadingLabel = void 0),
      (this.charsStart = 4),
      (this.charsEnd = 6),
      (this.namespace = void 0),
      (this.caipAddress = d.state.activeCaipAddress)
  }
  firstUpdated() {
    this.namespace
      ? this.unsubscribe.push(
          d.subscribeChainProp(
            'accountState',
            e => {
              this.caipAddress = e == null ? void 0 : e.caipAddress
            },
            this.namespace
          )
        )
      : this.unsubscribe.push(d.subscribeKey('activeCaipAddress', e => (this.caipAddress = e)))
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    return this.caipAddress
      ? l`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${p(this.balance)}
            .charsStart=${p(this.charsStart)}
            .charsEnd=${p(this.charsEnd)}
            namespace=${p(this.namespace)}
          >
          </appkit-account-button>
        `
      : l`
          <appkit-connect-button
            size=${p(this.size)}
            label=${p(this.label)}
            loadingLabel=${p(this.loadingLabel)}
            namespace=${p(this.namespace)}
          ></appkit-connect-button>
        `
  }
}
F.styles = $n
J([c({ type: Boolean })], F.prototype, 'disabled', void 0)
J([c()], F.prototype, 'balance', void 0)
J([c()], F.prototype, 'size', void 0)
J([c()], F.prototype, 'label', void 0)
J([c()], F.prototype, 'loadingLabel', void 0)
J([c()], F.prototype, 'charsStart', void 0)
J([c()], F.prototype, 'charsEnd', void 0)
J([c()], F.prototype, 'namespace', void 0)
J([u()], F.prototype, 'caipAddress', void 0)
let Ii = class extends F {}
Ii = J([h('w3m-button')], Ii)
let Ti = class extends F {}
Ti = J([h('appkit-button')], Ti)
const kn = x`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`
var si = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let He = class extends w {
  constructor() {
    super(...arguments), (this.size = 'md'), (this.loading = !1)
  }
  render() {
    const e = this.size === 'md' ? 'paragraph-600' : 'small-600'
    return l`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading ? 'accent-100' : 'inherit'}>
          <slot></slot>
        </wui-text>
      </button>
    `
  }
  loadingTemplate() {
    return this.loading
      ? l`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`
      : null
  }
}
He.styles = [_, T, kn]
si([c()], He.prototype, 'size', void 0)
si([c({ type: Boolean })], He.prototype, 'loading', void 0)
He = si([h('wui-connect-button')], He)
var me = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
class be extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.size = 'md'),
      (this.label = 'Connect Wallet'),
      (this.loadingLabel = 'Connecting...'),
      (this.open = A.state.open),
      (this.loading = this.namespace
        ? A.state.loadingNamespaceMap.get(this.namespace)
        : A.state.loading),
      this.unsubscribe.push(
        A.subscribe(e => {
          ;(this.open = e.open),
            (this.loading = this.namespace ? e.loadingNamespaceMap.get(this.namespace) : e.loading)
        })
      )
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    return l`
      <wui-connect-button
        size=${p(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace ? `-${this.namespace}` : ''}`}
      >
        ${this.loading ? this.loadingLabel : this.label}
      </wui-connect-button>
    `
  }
  onClick() {
    this.open ? A.close() : this.loading || A.open({ view: 'Connect', namespace: this.namespace })
  }
}
me([c()], be.prototype, 'size', void 0)
me([c()], be.prototype, 'label', void 0)
me([c()], be.prototype, 'loadingLabel', void 0)
me([c()], be.prototype, 'namespace', void 0)
me([u()], be.prototype, 'open', void 0)
me([u()], be.prototype, 'loading', void 0)
let Ai = class extends be {}
Ai = me([h('w3m-connect-button')], Ai)
let Ri = class extends be {}
Ri = me([h('appkit-connect-button')], Ri)
const Sn = x`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`
var At = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Re = class extends w {
  constructor() {
    super(...arguments),
      (this.imageSrc = void 0),
      (this.isUnsupportedChain = void 0),
      (this.disabled = !1)
  }
  render() {
    return l`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `
  }
  visualTemplate() {
    return this.isUnsupportedChain
      ? l`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `
      : this.imageSrc
        ? l`<wui-image src=${this.imageSrc}></wui-image>`
        : l`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `
  }
}
Re.styles = [_, T, Sn]
At([c()], Re.prototype, 'imageSrc', void 0)
At([c({ type: Boolean })], Re.prototype, 'isUnsupportedChain', void 0)
At([c({ type: Boolean })], Re.prototype, 'disabled', void 0)
Re = At([h('wui-network-button')], Re)
const _n = x`
  :host {
    display: block;
    width: max-content;
  }
`
var ce = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
class ie extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.disabled = !1),
      (this.network = d.state.activeCaipNetwork),
      (this.networkImage = k.getNetworkImage(this.network)),
      (this.caipAddress = d.state.activeCaipAddress),
      (this.loading = A.state.loading),
      (this.isSupported = C.state.allowUnsupportedChain
        ? !0
        : d.state.activeChain
          ? d.checkIfSupportedNetwork(d.state.activeChain)
          : !0),
      this.unsubscribe.push(
        de.subscribeNetworkImages(() => {
          this.networkImage = k.getNetworkImage(this.network)
        }),
        d.subscribeKey('activeCaipAddress', e => {
          this.caipAddress = e
        }),
        d.subscribeKey('activeCaipNetwork', e => {
          var t
          ;(this.network = e),
            (this.networkImage = k.getNetworkImage(e)),
            (this.isSupported =
              e != null && e.chainNamespace ? d.checkIfSupportedNetwork(e.chainNamespace) : !0),
            k.fetchNetworkImage((t = e == null ? void 0 : e.assets) == null ? void 0 : t.imageId)
        }),
        A.subscribeKey('loading', e => (this.loading = e))
      )
  }
  firstUpdated() {
    var e, t
    k.fetchNetworkImage(
      (t = (e = this.network) == null ? void 0 : e.assets) == null ? void 0 : t.imageId
    )
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    const e = this.network ? d.checkIfSupportedNetwork(this.network.chainNamespace) : !0
    return l`
      <wui-network-button
        .disabled=${!!(this.disabled || this.loading)}
        .isUnsupportedChain=${C.state.allowUnsupportedChain ? !1 : !e}
        imageSrc=${p(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `
  }
  getLabel() {
    return this.network
      ? !this.isSupported && !C.state.allowUnsupportedChain
        ? 'Switch Network'
        : this.network.name
      : this.label
        ? this.label
        : this.caipAddress
          ? 'Unknown Network'
          : 'Select Network'
  }
  onClick() {
    this.loading ||
      ($.sendEvent({ type: 'track', event: 'CLICK_NETWORKS' }), A.open({ view: 'Networks' }))
  }
}
ie.styles = _n
ce([c({ type: Boolean })], ie.prototype, 'disabled', void 0)
ce([c({ type: String })], ie.prototype, 'label', void 0)
ce([u()], ie.prototype, 'network', void 0)
ce([u()], ie.prototype, 'networkImage', void 0)
ce([u()], ie.prototype, 'caipAddress', void 0)
ce([u()], ie.prototype, 'loading', void 0)
ce([u()], ie.prototype, 'isSupported', void 0)
let Wi = class extends ie {}
Wi = ce([h('w3m-network-button')], Wi)
let Ei = class extends ie {}
Ei = ce([h('appkit-network-button')], Ei)
const In = x`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`
var Rt = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let We = class extends w {
  constructor() {
    super(...arguments), (this.label = ''), (this.description = ''), (this.icon = 'wallet')
  }
  render() {
    return l`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `
  }
}
We.styles = [_, T, In]
Rt([c()], We.prototype, 'label', void 0)
Rt([c()], We.prototype, 'description', void 0)
Rt([c()], We.prototype, 'icon', void 0)
We = Rt([h('wui-notice-card')], We)
var Fi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let qt = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.socialProvider = pe.getConnectedSocialProvider()),
      (this.socialUsername = pe.getConnectedSocialUsername()),
      (this.namespace = d.state.activeChain),
      this.unsubscribe.push(
        d.subscribeKey('activeChain', e => {
          this.namespace = e
        })
      )
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    const e = b.getConnectorId(this.namespace),
      t = b.getAuthConnector()
    if (!t || e !== S.CONNECTOR_ID.AUTH) return (this.style.cssText = 'display: none'), null
    const n = t.provider.getEmail() ?? ''
    return !n && !this.socialUsername
      ? ((this.style.cssText = 'display: none'), null)
      : l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider ?? 'mail'}
        iconSize=${this.socialProvider ? 'xxl' : 'sm'}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${() => {
          this.onGoToUpdateEmail(n, this.socialProvider)
        }}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(n)}</wui-text>
      </wui-list-item>
    `
  }
  onGoToUpdateEmail(e, t) {
    t || f.push('UpdateEmailWallet', { email: e })
  }
  getAuthName(e) {
    return this.socialUsername
      ? this.socialProvider === 'discord' && this.socialUsername.endsWith('0')
        ? this.socialUsername.slice(0, -1)
        : this.socialUsername
      : e.length > 30
        ? `${e.slice(0, -3)}...`
        : e
  }
}
Fi([u()], qt.prototype, 'namespace', void 0)
qt = Fi([h('w3m-account-auth-button')], qt)
var ne = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Y = class extends w {
  constructor() {
    super(),
      (this.usubscribe = []),
      (this.networkImages = de.state.networkImages),
      (this.address = m.state.address),
      (this.profileImage = m.state.profileImage),
      (this.profileName = m.state.profileName),
      (this.network = d.state.activeCaipNetwork),
      (this.preferredAccountType = m.state.preferredAccountType),
      (this.disconnecting = !1),
      (this.loading = !1),
      (this.switched = !1),
      (this.text = ''),
      this.usubscribe.push(
        m.subscribe(e => {
          e.address
            ? ((this.address = e.address),
              (this.profileImage = e.profileImage),
              (this.profileName = e.profileName),
              (this.preferredAccountType = e.preferredAccountType))
            : A.close()
        }),
        m.subscribeKey('preferredAccountType', e => (this.preferredAccountType = e)),
        d.subscribeKey('activeCaipNetwork', e => {
          e != null && e.id && (this.network = e)
        })
      )
  }
  disconnectedCallback() {
    this.usubscribe.forEach(e => e())
  }
  render() {
    var t, n, o
    if (!this.address) throw new Error('w3m-account-settings-view: No account provided')
    const e =
      this.networkImages[
        ((n = (t = this.network) == null ? void 0 : t.assets) == null ? void 0 : n.imageId) ?? ''
      ]
    return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${['0', 'xl', 'm', 'xl']}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${p(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${R.getTruncateString({ string: this.address, charsStart: 4, charsEnd: 6, truncate: 'middle' })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${['0', 'l', 'm', 'l']}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e ? 'image' : 'icon'}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${p(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((o = this.network) == null ? void 0 : o.name) ?? 'Unknown'}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `
  }
  chooseNameButtonTemplate() {
    var i
    const e = (i = this.network) == null ? void 0 : i.chainNamespace,
      t = b.getConnectorId(e),
      n = b.getAuthConnector()
    return !d.checkIfNamesSupported() || !n || t !== S.CONNECTOR_ID.AUTH || this.profileName
      ? null
      : l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `
  }
  authCardTemplate() {
    var i
    const e = (i = this.network) == null ? void 0 : i.chainNamespace,
      t = b.getConnectorId(e),
      n = b.getAuthConnector(),
      { origin: o } = location
    return !n || t !== S.CONNECTOR_ID.AUTH || o.includes(D.SECURE_SITE)
      ? null
      : l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `
  }
  isAllowedNetworkSwitch() {
    const e = d.getAllRequestedCaipNetworks(),
      t = e ? e.length > 1 : !1,
      n =
        e == null
          ? void 0
          : e.find(({ id: o }) => {
              var i
              return o === ((i = this.network) == null ? void 0 : i.id)
            })
    return t || !n
  }
  onCopyAddress() {
    try {
      this.address && (g.copyToClopboard(this.address), O.showSuccess('Address copied'))
    } catch {
      O.showError('Failed to copy')
    }
  }
  togglePreferredAccountBtnTemplate() {
    var i
    const e = (i = this.network) == null ? void 0 : i.chainNamespace,
      t = d.checkIfSmartAccountEnabled(),
      n = b.getConnectorId(e)
    return !b.getAuthConnector() || n !== S.CONNECTOR_ID.AUTH || !t
      ? null
      : (this.switched ||
          (this.text =
            this.preferredAccountType === M.ACCOUNT_TYPES.SMART_ACCOUNT
              ? 'Switch to your EOA'
              : 'Switch to your smart account'),
        l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `)
  }
  onChooseName() {
    f.push('ChooseAccountName')
  }
  async changePreferredAccountType() {
    const e = d.checkIfSmartAccountEnabled(),
      t =
        this.preferredAccountType === M.ACCOUNT_TYPES.SMART_ACCOUNT || !e
          ? M.ACCOUNT_TYPES.EOA
          : M.ACCOUNT_TYPES.SMART_ACCOUNT
    b.getAuthConnector() &&
      ((this.loading = !0),
      await v.setPreferredAccountType(t),
      (this.text =
        t === M.ACCOUNT_TYPES.SMART_ACCOUNT
          ? 'Switch to your EOA'
          : 'Switch to your smart account'),
      (this.switched = !0),
      gn.resetSend(),
      (this.loading = !1),
      this.requestUpdate())
  }
  onNetworks() {
    this.isAllowedNetworkSwitch() && f.push('Networks')
  }
  async onDisconnect() {
    try {
      ;(this.disconnecting = !0),
        await v.disconnect(),
        $.sendEvent({ type: 'track', event: 'DISCONNECT_SUCCESS' }),
        A.close()
    } catch {
      $.sendEvent({ type: 'track', event: 'DISCONNECT_ERROR' }), O.showError('Failed to disconnect')
    } finally {
      this.disconnecting = !1
    }
  }
  onGoToUpgradeView() {
    $.sendEvent({ type: 'track', event: 'EMAIL_UPGRADE_FROM_MODAL' }), f.push('UpgradeEmailWallet')
  }
}
ne([u()], Y.prototype, 'address', void 0)
ne([u()], Y.prototype, 'profileImage', void 0)
ne([u()], Y.prototype, 'profileName', void 0)
ne([u()], Y.prototype, 'network', void 0)
ne([u()], Y.prototype, 'preferredAccountType', void 0)
ne([u()], Y.prototype, 'disconnecting', void 0)
ne([u()], Y.prototype, 'loading', void 0)
ne([u()], Y.prototype, 'switched', void 0)
ne([u()], Y.prototype, 'text', void 0)
Y = ne([h('w3m-account-settings-view')], Y)
const Tn = x`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`
var _e = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let ae = class extends w {
  constructor() {
    super(...arguments),
      (this.avatarSrc = void 0),
      (this.profileName = ''),
      (this.address = ''),
      (this.icon = 'mail')
  }
  render() {
    const e = d.state.activeChain,
      n = b.getConnectorId(e) === S.CONNECTOR_ID.AUTH
    return l`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${n ? this.getIconTemplate(this.icon) : ''}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${R.getTruncateString({ string: this.profileName || this.address, charsStart: this.profileName ? 18 : 4, charsEnd: this.profileName ? 0 : 4, truncate: this.profileName ? 'end' : 'middle' })}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`
  }
  handleClick(e) {
    var t, n
    if (e.target instanceof HTMLElement && e.target.id === 'copy-address') {
      ;(t = this.onCopyClick) == null || t.call(this, e)
      return
    }
    ;(n = this.onProfileClick) == null || n.call(this, e)
  }
  getIconTemplate(e) {
    return l`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e || 'networkPlaceholder'}"
      ></wui-icon-box>
    `
  }
}
ae.styles = [_, T, Tn]
_e([c()], ae.prototype, 'avatarSrc', void 0)
_e([c()], ae.prototype, 'profileName', void 0)
_e([c()], ae.prototype, 'address', void 0)
_e([c()], ae.prototype, 'icon', void 0)
_e([c()], ae.prototype, 'onProfileClick', void 0)
_e([c()], ae.prototype, 'onCopyClick', void 0)
ae = _e([h('wui-profile-button-v2')], ae)
const An = x`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`
var xe = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let ee = class extends w {
  constructor() {
    super(...arguments),
      (this.tabs = []),
      (this.onTabChange = () => null),
      (this.buttons = []),
      (this.disabled = !1),
      (this.localTabWidth = '100px'),
      (this.activeTab = 0),
      (this.isDense = !1)
  }
  render() {
    return (
      (this.isDense = this.tabs.length > 3),
      (this.style.cssText = `
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `),
      (this.dataset.type = this.isDense ? 'flex' : 'block'),
      this.tabs.map((e, t) => {
        var o
        const n = t === this.activeTab
        return l`
        <button
          ?disabled=${this.disabled}
          @click=${() => this.onTabClick(t)}
          data-active=${n}
          data-testid="tab-${(o = e.label) == null ? void 0 : o.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `
      })
    )
  }
  firstUpdated() {
    this.shadowRoot &&
      this.isDense &&
      ((this.buttons = [...this.shadowRoot.querySelectorAll('button')]),
      setTimeout(() => {
        this.animateTabs(0, !0)
      }, 0))
  }
  iconTemplate(e) {
    return e.icon ? l`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>` : null
  }
  onTabClick(e) {
    this.buttons && this.animateTabs(e, !1), (this.activeTab = e), this.onTabChange(e)
  }
  animateTabs(e, t) {
    const n = this.buttons[this.activeTab],
      o = this.buttons[e],
      i = n == null ? void 0 : n.querySelector('wui-text'),
      r = o == null ? void 0 : o.querySelector('wui-text'),
      s = o == null ? void 0 : o.getBoundingClientRect(),
      y = r == null ? void 0 : r.getBoundingClientRect()
    n &&
      i &&
      !t &&
      e !== this.activeTab &&
      (i.animate([{ opacity: 0 }], { duration: 50, easing: 'ease', fill: 'forwards' }),
      n.animate([{ width: '34px' }], { duration: 500, easing: 'ease', fill: 'forwards' })),
      o &&
        s &&
        y &&
        r &&
        (e !== this.activeTab || t) &&
        ((this.localTabWidth = `${Math.round(s.width + y.width) + 6}px`),
        o.animate([{ width: `${s.width + y.width}px` }], {
          duration: t ? 0 : 500,
          fill: 'forwards',
          easing: 'ease'
        }),
        r.animate([{ opacity: 1 }], {
          duration: t ? 0 : 125,
          delay: t ? 0 : 200,
          fill: 'forwards',
          easing: 'ease'
        }))
  }
}
ee.styles = [_, T, An]
xe([c({ type: Array })], ee.prototype, 'tabs', void 0)
xe([c()], ee.prototype, 'onTabChange', void 0)
xe([c({ type: Array })], ee.prototype, 'buttons', void 0)
xe([c({ type: Boolean })], ee.prototype, 'disabled', void 0)
xe([c()], ee.prototype, 'localTabWidth', void 0)
xe([u()], ee.prototype, 'activeTab', void 0)
xe([u()], ee.prototype, 'isDense', void 0)
ee = xe([h('wui-tabs')], ee)
const Rn = x`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`
var G = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let B = class extends w {
  constructor() {
    var e
    super(),
      (this.unsubscribe = []),
      (this.caipAddress = m.state.caipAddress),
      (this.address = g.getPlainAddress(m.state.caipAddress)),
      (this.allAccounts = m.state.allAccounts),
      (this.profileImage = m.state.profileImage),
      (this.profileName = m.state.profileName),
      (this.disconnecting = !1),
      (this.balance = m.state.balance),
      (this.balanceSymbol = m.state.balanceSymbol),
      (this.features = C.state.features),
      (this.namespace = d.state.activeChain),
      (this.chainId = (e = d.state.activeCaipNetwork) == null ? void 0 : e.id),
      this.unsubscribe.push(
        m.subscribeKey('caipAddress', t => {
          ;(this.address = g.getPlainAddress(t)), (this.caipAddress = t)
        }),
        m.subscribeKey('balance', t => (this.balance = t)),
        m.subscribeKey('balanceSymbol', t => (this.balanceSymbol = t)),
        m.subscribeKey('profileName', t => (this.profileName = t)),
        m.subscribeKey('profileImage', t => (this.profileImage = t)),
        C.subscribeKey('features', t => (this.features = t)),
        m.subscribeKey('allAccounts', t => {
          this.allAccounts = t
        }),
        d.subscribeKey('activeChain', t => (this.namespace = t)),
        d.subscribeKey('activeCaipNetwork', t => {
          var n
          if (t) {
            const [o, i] =
              ((n = t == null ? void 0 : t.caipNetworkId) == null ? void 0 : n.split(':')) || []
            o && i && ((this.namespace = o), (this.chainId = i))
          }
        })
      )
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    if (!this.caipAddress) return null
    const e = d.state.activeChain !== S.CHAIN.SOLANA && this.allAccounts.length > 1
    return l`<wui-flex
        flexDirection="column"
        .padding=${['0', 'xl', 'm', 'xl']}
        alignItems="center"
        gap="l"
      >
        ${e ? this.multiAccountTemplate() : this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${g.formatBalance(this.balance, this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${['0', 's', 's', 's']}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`
  }
  onrampTemplate() {
    var n
    if (!this.namespace) return null
    const e = (n = this.features) == null ? void 0 : n.onramp,
      t = D.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace)
    return !e || !t
      ? null
      : l`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `
  }
  orderedFeaturesTemplate() {
    var t
    return (
      ((t = this.features) == null ? void 0 : t.walletFeaturesOrder) ||
      D.DEFAULT_FEATURES.walletFeaturesOrder
    ).map(n => {
      switch (n) {
        case 'onramp':
          return this.onrampTemplate()
        case 'swaps':
          return this.swapsTemplate()
        case 'send':
          return this.sendTemplate()
        default:
          return null
      }
    })
  }
  activityTemplate() {
    var n
    if (!this.namespace) return null
    const e = d.state.activeChain === S.CHAIN.SOLANA
    return ((n = this.features) == null ? void 0 : n.history) &&
      D.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)
      ? l` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!e}
          ?disabled=${e}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100" ?disabled=${e}>
            Activity
          </wui-text>
          ${e ? l`<wui-tag variant="main">Coming soon</wui-tag>` : ''}
        </wui-list-item>`
      : null
  }
  swapsTemplate() {
    var n
    const e = (n = this.features) == null ? void 0 : n.swaps,
      t = d.state.activeChain === S.CHAIN.EVM
    return !e || !t
      ? null
      : l`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `
  }
  sendTemplate() {
    var n
    const e = (n = this.features) == null ? void 0 : n.send,
      t = d.state.activeChain === S.CHAIN.EVM
    return !e || !t
      ? null
      : l`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `
  }
  authCardTemplate() {
    const e = d.state.activeChain,
      t = b.getConnectorId(e),
      n = b.getAuthConnector(),
      { origin: o } = location
    return !n || t !== S.CONNECTOR_ID.AUTH || o.includes(D.SECURE_SITE)
      ? null
      : l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `
  }
  handleSwitchAccountsView() {
    f.push('SwitchAddress')
  }
  handleClickPay() {
    f.push('OnRampProviders')
  }
  handleClickSwap() {
    f.push('Swap')
  }
  handleClickSend() {
    f.push('WalletSend')
  }
  explorerBtnTemplate() {
    return m.state.addressExplorerUrl
      ? l`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `
      : null
  }
  singleAccountTemplate() {
    return l`
      <wui-avatar
        alt=${p(this.caipAddress)}
        address=${p(g.getPlainAddress(this.caipAddress))}
        imageSrc=${p(this.profileImage === null ? void 0 : this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName ? R.getTruncateString({ string: this.profileName, charsStart: 20, charsEnd: 0, truncate: 'end' }) : R.getTruncateString({ string: this.address || '', charsStart: 4, charsEnd: 4, truncate: 'middle' })}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `
  }
  multiAccountTemplate() {
    if (!this.address) throw new Error('w3m-account-view: No account provided')
    const e = this.allAccounts.find(n => n.address === this.address),
      t = m.state.addressLabels.get(this.address)
    return this.namespace === 'bip122'
      ? this.btcAccountsTemplate()
      : l`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${p(this.address)}
        icon="${(e == null ? void 0 : e.type) === M.ACCOUNT_TYPES.SMART_ACCOUNT && d.state.activeChain === S.CHAIN.EVM ? 'lightbulb' : 'mail'}"
        avatarSrc=${p(this.profileImage ? this.profileImage : void 0)}
        profileName=${p(t || this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `
  }
  btcAccountsTemplate() {
    return l`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${p(this.profileImage ? this.profileImage : void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{ label: 'Payment' }, { label: 'Ordinals' }]}
        .onTabChange=${e => {
          var t
          return m.setCaipAddress(
            `bip122:${this.chainId}:${((t = this.allAccounts[e]) == null ? void 0 : t.address) || ''}`,
            this.namespace
          )
        }}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${R.getTruncateString({ string: this.profileName || this.address || '', charsStart: this.profileName ? 18 : 4, charsEnd: this.profileName ? 0 : 4, truncate: this.profileName ? 'end' : 'middle' })}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`
  }
  onCopyAddress() {
    try {
      this.address && (g.copyToClopboard(this.address), O.showSuccess('Address copied'))
    } catch {
      O.showError('Failed to copy')
    }
  }
  onTransactions() {
    $.sendEvent({
      type: 'track',
      event: 'CLICK_TRANSACTIONS',
      properties: { isSmartAccount: m.state.preferredAccountType === M.ACCOUNT_TYPES.SMART_ACCOUNT }
    }),
      f.push('Transactions')
  }
  async onDisconnect() {
    try {
      ;(this.disconnecting = !0),
        await v.disconnect(),
        $.sendEvent({ type: 'track', event: 'DISCONNECT_SUCCESS' }),
        A.close()
    } catch {
      $.sendEvent({ type: 'track', event: 'DISCONNECT_ERROR' }), O.showError('Failed to disconnect')
    } finally {
      this.disconnecting = !1
    }
  }
  onExplorer() {
    const e = m.state.addressExplorerUrl
    e && g.openHref(e, '_blank')
  }
  onGoToUpgradeView() {
    $.sendEvent({ type: 'track', event: 'EMAIL_UPGRADE_FROM_MODAL' }), f.push('UpgradeEmailWallet')
  }
}
B.styles = Rn
G([u()], B.prototype, 'caipAddress', void 0)
G([u()], B.prototype, 'address', void 0)
G([u()], B.prototype, 'allAccounts', void 0)
G([u()], B.prototype, 'profileImage', void 0)
G([u()], B.prototype, 'profileName', void 0)
G([u()], B.prototype, 'disconnecting', void 0)
G([u()], B.prototype, 'balance', void 0)
G([u()], B.prototype, 'balanceSymbol', void 0)
G([u()], B.prototype, 'features', void 0)
G([u()], B.prototype, 'namespace', void 0)
G([u()], B.prototype, 'chainId', void 0)
B = G([h('w3m-account-default-widget')], B)
const Wn = x`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`
var li = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Ke = class extends w {
  constructor() {
    super(...arguments), (this.dollars = '0'), (this.pennies = '00')
  }
  render() {
    return l`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`
  }
}
Ke.styles = [_, Wn]
li([c()], Ke.prototype, 'dollars', void 0)
li([c()], Ke.prototype, 'pennies', void 0)
Ke = li([h('wui-balance')], Ke)
const En = x`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`
var ci = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let qe = class extends w {
  constructor() {
    super(...arguments), (this.text = ''), (this.icon = 'card')
  }
  render() {
    return l`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`
  }
}
qe.styles = [_, T, En]
ci([c()], qe.prototype, 'text', void 0)
ci([c()], qe.prototype, 'icon', void 0)
qe = ci([h('wui-icon-button')], qe)
const Nn = x`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`
var Be = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let he = class extends w {
  constructor() {
    super(...arguments),
      (this.networkSrc = void 0),
      (this.avatarSrc = void 0),
      (this.profileName = ''),
      (this.address = ''),
      (this.icon = 'chevronBottom')
  }
  render() {
    return l`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${R.getTruncateString({ string: this.profileName || this.address, charsStart: this.profileName ? 18 : 4, charsEnd: this.profileName ? 0 : 4, truncate: this.profileName ? 'end' : 'middle' })}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`
  }
  networkImageTemplate() {
    return this.networkSrc
      ? l`<wui-image src=${this.networkSrc}></wui-image>`
      : l`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `
  }
}
he.styles = [_, T, Nn]
Be([c()], he.prototype, 'networkSrc', void 0)
Be([c()], he.prototype, 'avatarSrc', void 0)
Be([c()], he.prototype, 'profileName', void 0)
Be([c()], he.prototype, 'address', void 0)
Be([c()], he.prototype, 'icon', void 0)
he = Be([h('wui-profile-button')], he)
const On = x`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`
var Wt = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Ee = class extends w {
  constructor() {
    super(...arguments), (this.placement = 'top'), (this.variant = 'fill'), (this.message = '')
  }
  render() {
    return (
      (this.dataset.variant = this.variant),
      l`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant === 'fill' ? 'cursor' : 'cursorTransparent'}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`
    )
  }
}
Ee.styles = [_, T, On]
Wt([c()], Ee.prototype, 'placement', void 0)
Wt([c()], Ee.prototype, 'variant', void 0)
Wt([c()], Ee.prototype, 'message', void 0)
Ee = Wt([h('wui-tooltip')], Ee)
const jn = x`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`
var Pn = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Ft = class extends w {
  render() {
    return l`<w3m-activity-list page="account"></w3m-activity-list>`
  }
}
Ft.styles = jn
Ft = Pn([h('w3m-account-activity-widget')], Ft)
const Dn = x`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`
var Ln = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Gt = class extends w {
  render() {
    return l`${this.nftTemplate()}`
  }
  nftTemplate() {
    return l` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`
  }
  onReceiveClick() {
    f.push('WalletReceive')
  }
}
Gt.styles = Dn
Gt = Ln([h('w3m-account-nfts-widget')], Gt)
const Un = x`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`
var ve = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let te = class extends w {
  constructor() {
    super(...arguments),
      (this.icon = 'card'),
      (this.text = ''),
      (this.description = ''),
      (this.tag = void 0),
      (this.iconBackgroundColor = 'accent-100'),
      (this.iconColor = 'accent-100'),
      (this.disabled = !1)
  }
  render() {
    return l`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `
  }
  titleTemplate() {
    return this.tag
      ? l` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`
      : l`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`
  }
}
te.styles = [_, T, Un]
ve([c()], te.prototype, 'icon', void 0)
ve([c()], te.prototype, 'text', void 0)
ve([c()], te.prototype, 'description', void 0)
ve([c()], te.prototype, 'tag', void 0)
ve([c()], te.prototype, 'iconBackgroundColor', void 0)
ve([c()], te.prototype, 'iconColor', void 0)
ve([c({ type: Boolean })], te.prototype, 'disabled', void 0)
te = ve([h('wui-list-description')], te)
const Bn = x`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`
var Gi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let ut = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tokenBalance = m.state.tokenBalance),
      this.unsubscribe.push(
        m.subscribe(e => {
          this.tokenBalance = e.tokenBalance
        })
      )
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    return l`${this.tokenTemplate()}`
  }
  tokenTemplate() {
    var e
    return this.tokenBalance && ((e = this.tokenBalance) == null ? void 0 : e.length) > 0
      ? l`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`
      : l` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`
  }
  tokenItemTemplate() {
    var e
    return (e = this.tokenBalance) == null
      ? void 0
      : e.map(
          t => l`<wui-list-token
          tokenName=${t.name}
          tokenImageUrl=${t.iconUrl}
          tokenAmount=${t.quantity.numeric}
          tokenValue=${t.value}
          tokenCurrency=${t.symbol}
        ></wui-list-token>`
        )
  }
  onReceiveClick() {
    f.push('WalletReceive')
  }
  onBuyClick() {
    $.sendEvent({
      type: 'track',
      event: 'SELECT_BUY_CRYPTO',
      properties: { isSmartAccount: m.state.preferredAccountType === M.ACCOUNT_TYPES.SMART_ACCOUNT }
    }),
      f.push('OnRampProviders')
  }
}
ut.styles = Bn
Gi([u()], ut.prototype, 'tokenBalance', void 0)
ut = Gi([h('w3m-account-tokens-widget')], ut)
const zn = x`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`
var oe = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
const Vn = 3,
  Mn = 48,
  Hn = 430
let q = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.address = m.state.address),
      (this.profileImage = m.state.profileImage),
      (this.profileName = m.state.profileName),
      (this.network = d.state.activeCaipNetwork),
      (this.currentTab = m.state.currentTab),
      (this.tokenBalance = m.state.tokenBalance),
      (this.features = C.state.features),
      (this.networkImage = k.getNetworkImage(this.network)),
      this.unsubscribe.push(
        de.subscribeNetworkImages(() => {
          this.networkImage = k.getNetworkImage(this.network)
        }),
        m.subscribe(e => {
          e.address
            ? ((this.address = e.address),
              (this.profileImage = e.profileImage),
              (this.profileName = e.profileName),
              (this.currentTab = e.currentTab),
              (this.tokenBalance = e.tokenBalance))
            : A.close()
        }),
        d.subscribeKey('activeCaipNetwork', e => (this.network = e)),
        C.subscribeKey('features', e => (this.features = e))
      ),
      this.watchSwapValues()
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e()), clearInterval(this.watchTokenBalance)
  }
  firstUpdated() {
    m.fetchTokenBalance()
  }
  render() {
    if (!this.address) throw new Error('w3m-account-view: No account provided')
    return l`<wui-flex
      flexDirection="column"
      .padding=${['0', 'xl', 'm', 'xl']}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${p(this.address)}
        networkSrc=${p(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${p(this.profileImage ? this.profileImage : void 0)}
        profileName=${p(this.profileName ?? void 0)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()}

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${g.isMobile() && window.innerWidth < Hn ? `${(window.innerWidth - Mn) / Vn}px` : '104px'}
        .tabs=${mn.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`
  }
  orderedWalletFeatures() {
    var n
    const e =
      ((n = this.features) == null ? void 0 : n.walletFeaturesOrder) ||
      D.DEFAULT_FEATURES.walletFeaturesOrder
    return e.every(o => {
      var i
      return !((i = this.features) != null && i[o])
    })
      ? null
      : l`<wui-flex gap="s">
      ${e.map(o => {
        switch (o) {
          case 'onramp':
            return this.onrampTemplate()
          case 'swaps':
            return this.swapsTemplate()
          case 'receive':
            return this.receiveTemplate()
          case 'send':
            return this.sendTemplate()
          default:
            return null
        }
      })}
    </wui-flex>`
  }
  onrampTemplate() {
    var t
    return ((t = this.features) == null ? void 0 : t.onramp)
      ? l`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `
      : null
  }
  swapsTemplate() {
    var n
    const e = (n = this.features) == null ? void 0 : n.swaps,
      t = d.state.activeChain === S.CHAIN.EVM
    return !e || !t
      ? null
      : l`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `
  }
  receiveTemplate() {
    var t
    return ((t = this.features) == null ? void 0 : t.receive)
      ? l`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `
      : null
  }
  sendTemplate() {
    var n
    const e = (n = this.features) == null ? void 0 : n.send,
      t = d.state.activeChain === S.CHAIN.EVM
    return !e || !t
      ? null
      : l`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `
  }
  watchSwapValues() {
    this.watchTokenBalance = setInterval(
      () => m.fetchTokenBalance(e => this.onTokenBalanceError(e)),
      1e4
    )
  }
  onTokenBalanceError(e) {
    e instanceof Error &&
      e.cause instanceof Response &&
      e.cause.status === S.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE &&
      clearInterval(this.watchTokenBalance)
  }
  listContentTemplate() {
    return this.currentTab === 0
      ? l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`
      : this.currentTab === 1
        ? l`<w3m-account-nfts-widget></w3m-account-nfts-widget>`
        : this.currentTab === 2
          ? l`<w3m-account-activity-widget></w3m-account-activity-widget>`
          : l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`
  }
  tokenBalanceTemplate() {
    var e
    if (this.tokenBalance && ((e = this.tokenBalance) == null ? void 0 : e.length) >= 0) {
      const t = g.calculateBalance(this.tokenBalance),
        { dollars: n = '0', pennies: o = '00' } = g.formatTokenBalance(t)
      return l`<wui-balance dollars=${n} pennies=${o}></wui-balance>`
    }
    return l`<wui-balance dollars="0" pennies="00"></wui-balance>`
  }
  onTabChange(e) {
    m.setCurrentTab(e)
  }
  onProfileButtonClick() {
    const { allAccounts: e } = m.state
    e.length > 1 ? f.push('Profile') : f.push('AccountSettings')
  }
  onBuyClick() {
    f.push('OnRampProviders')
  }
  onSwapClick() {
    var e, t, n
    ;(e = this.network) != null &&
    e.caipNetworkId &&
    !D.SWAP_SUPPORTED_NETWORKS.includes((t = this.network) == null ? void 0 : t.caipNetworkId)
      ? f.push('UnsupportedChain', { swapUnsupportedChain: !0 })
      : ($.sendEvent({
          type: 'track',
          event: 'OPEN_SWAP',
          properties: {
            network: ((n = this.network) == null ? void 0 : n.caipNetworkId) || '',
            isSmartAccount: m.state.preferredAccountType === M.ACCOUNT_TYPES.SMART_ACCOUNT
          }
        }),
        f.push('Swap'))
  }
  onReceiveClick() {
    f.push('WalletReceive')
  }
  onSendClick() {
    var e
    $.sendEvent({
      type: 'track',
      event: 'OPEN_SEND',
      properties: {
        network: ((e = this.network) == null ? void 0 : e.caipNetworkId) || '',
        isSmartAccount: m.state.preferredAccountType === M.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    }),
      f.push('WalletSend')
  }
}
q.styles = zn
oe([u()], q.prototype, 'watchTokenBalance', void 0)
oe([u()], q.prototype, 'address', void 0)
oe([u()], q.prototype, 'profileImage', void 0)
oe([u()], q.prototype, 'profileName', void 0)
oe([u()], q.prototype, 'network', void 0)
oe([u()], q.prototype, 'currentTab', void 0)
oe([u()], q.prototype, 'tokenBalance', void 0)
oe([u()], q.prototype, 'features', void 0)
oe([u()], q.prototype, 'networkImage', void 0)
q = oe([h('w3m-account-wallet-features-widget')], q)
var Xi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Xt = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.namespace = d.state.activeChain),
      this.unsubscribe.push(
        d.subscribeKey('activeChain', e => {
          this.namespace = e
        })
      )
  }
  render() {
    if (!this.namespace) return null
    const e = b.getConnectorId(this.namespace),
      t = b.getAuthConnector()
    return l`
      ${t && e === S.CONNECTOR_ID.AUTH ? this.walletFeaturesTemplate() : this.defaultTemplate()}
    `
  }
  walletFeaturesTemplate() {
    return l`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`
  }
  defaultTemplate() {
    return l`<w3m-account-default-widget></w3m-account-default-widget>`
  }
}
Xi([u()], Xt.prototype, 'namespace', void 0)
Xt = Xi([h('w3m-account-view')], Xt)
const Kn = x`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`
var ot = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let ye = class extends w {
  constructor() {
    super(...arguments),
      (this.accountAddress = ''),
      (this.accountType = ''),
      (this.labels = m.state.addressLabels),
      (this.caipNetwork = d.state.activeCaipNetwork),
      (this.socialProvider = pe.getConnectedSocialProvider()),
      (this.balance = 0),
      (this.fetchingBalance = !0),
      (this.shouldShowIcon = !1),
      (this.selected = !1)
  }
  connectedCallback() {
    var e
    super.connectedCallback(),
      qi
        .getBalance(this.accountAddress, (e = this.caipNetwork) == null ? void 0 : e.caipNetworkId)
        .then(t => {
          let n = this.balance
          t.balances.length > 0 &&
            (n = t.balances.reduce((o, i) => o + ((i == null ? void 0 : i.value) || 0), 0)),
            (this.balance = n),
            (this.fetchingBalance = !1),
            this.requestUpdate()
        })
        .catch(() => {
          ;(this.fetchingBalance = !1), this.requestUpdate()
        })
  }
  render() {
    const e = this.getLabel(),
      t = d.state.activeChain,
      n = b.getConnectorId(t)
    return (
      (this.shouldShowIcon = n === S.CONNECTOR_ID.AUTH),
      l`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${['0', '0', 's', '1xs']}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${
            this.shouldShowIcon
              ? l`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType === M.ACCOUNT_TYPES.EOA ? (this.socialProvider ?? 'mail') : 'lightbulb'}
                background="fg-300"
              ></wui-icon-box>`
              : l`<wui-flex .padding="${['0', '0', '0', 's']}"></wui-flex>`
          }
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${R.getTruncateString({ string: this.accountAddress, charsStart: 4, charsEnd: 6, truncate: 'middle' })}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance ? l`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>` : l` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `
    )
  }
  getLabel() {
    var o
    let e = (o = this.labels) == null ? void 0 : o.get(this.accountAddress)
    const t = d.state.activeChain,
      n = b.getConnectorId(t)
    return (
      !e && n === S.CONNECTOR_ID.AUTH
        ? (e = `${this.accountType === 'eoa' ? (this.socialProvider ?? 'Email') : 'Smart'} Account`)
        : e || (e = 'EOA'),
      e
    )
  }
}
ye.styles = [_, T, Kn]
ot([c()], ye.prototype, 'accountAddress', void 0)
ot([c()], ye.prototype, 'accountType', void 0)
ot([c({ type: Boolean })], ye.prototype, 'selected', void 0)
ot([c({ type: Function })], ye.prototype, 'onSelect', void 0)
ye = ot([h('wui-list-account')], ye)
const qn = x`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`
var ze = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let we = class extends w {
  constructor() {
    super(),
      (this.usubscribe = []),
      (this.address = m.state.address),
      (this.profileImage = m.state.profileImage),
      (this.profileName = m.state.profileName),
      (this.accounts = m.state.allAccounts),
      (this.loading = !1),
      this.usubscribe.push(
        m.subscribeKey('address', e => {
          e ? (this.address = e) : A.close()
        })
      ),
      this.usubscribe.push(
        m.subscribeKey('profileImage', e => {
          this.profileImage = e
        })
      ),
      this.usubscribe.push(
        m.subscribeKey('profileName', e => {
          this.profileName = e
        })
      )
  }
  disconnectedCallback() {
    this.usubscribe.forEach(e => e())
  }
  render() {
    if (!this.address) throw new Error('w3m-profile-view: No account provided')
    return l`
      <wui-flex flexDirection="column" gap="l" .padding=${['0', 'xl', 'm', 'xl']}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${p(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName ? R.getTruncateString({ string: this.profileName, charsStart: 20, charsEnd: 0, truncate: 'end' }) : R.getTruncateString({ string: this.address, charsStart: 4, charsEnd: 6, truncate: 'middle' })}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${() => f.push('AccountSettings')}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `
  }
  accountsTemplate() {
    return l`<wui-flex flexDirection="column">
      <wui-flex .padding=${['3xs', 'm', 's', 's']}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map(e => this.accountTemplate(e))}
      </wui-flex>
    </wui-flex>`
  }
  async onSwitchAccount(e) {
    if (((this.loading = !0), b.getAuthConnector())) {
      const n = e.type
      await v.setPreferredAccountType(n)
    }
    m.setShouldUpdateToAddress(e.address, d.state.activeChain), (this.loading = !1)
  }
  accountTemplate(e) {
    return l`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${
        e.address === this.address
          ? ''
          : l`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${() => this.onSwitchAccount(e)}
            .loading=${this.loading}
            >Switch</wui-button
          >`
      }
    </wui-list-account>`
  }
  onCopyAddress() {
    try {
      this.address && (g.copyToClopboard(this.address), O.showSuccess('Address copied'))
    } catch {
      O.showError('Failed to copy')
    }
  }
}
we.styles = qn
ze([u()], we.prototype, 'address', void 0)
ze([u()], we.prototype, 'profileImage', void 0)
ze([u()], we.prototype, 'profileName', void 0)
ze([u()], we.prototype, 'accounts', void 0)
ze([u()], we.prototype, 'loading', void 0)
we = ze([h('w3m-profile-view')], we)
const Fn = x`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`
var Et = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Ne = class extends w {
  constructor() {
    super(...arguments), (this.imageSrc = ''), (this.text = ''), (this.size = '')
  }
  render() {
    return l`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `
  }
}
Ne.styles = [_, T, Fn]
Et([c()], Ne.prototype, 'imageSrc', void 0)
Et([c()], Ne.prototype, 'text', void 0)
Et([c()], Ne.prototype, 'size', void 0)
Ne = Et([h('wui-banner-img')], Ne)
const Gn = x`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`
var ui = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Fe = class extends w {
  constructor() {
    super(),
      (this.metadata = C.state.metadata),
      (this.allAccounts = m.state.allAccounts || []),
      (this.balances = {}),
      (this.labels = m.state.addressLabels),
      (this.currentAddress = m.state.address || ''),
      (this.caipNetwork = d.state.activeCaipNetwork),
      m.subscribeKey('allAccounts', e => {
        this.allAccounts = e
      })
  }
  connectedCallback() {
    super.connectedCallback(),
      this.allAccounts.forEach(e => {
        var t
        qi.getBalance(e.address, (t = this.caipNetwork) == null ? void 0 : t.caipNetworkId).then(
          n => {
            let o = this.balances[e.address] || 0
            n.balances.length > 0 &&
              (o = n.balances.reduce((i, r) => i + ((r == null ? void 0 : r.value) || 0), 0)),
              (this.balances[e.address] = o),
              this.requestUpdate()
          }
        )
      })
  }
  getAddressIcon(e) {
    return e === 'smartAccount' ? 'lightbulb' : 'mail'
  }
  render() {
    var e, t
    return l`
      <wui-flex justifyContent="center" .padding=${['xl', '0', 'xl', '0']}>
        <wui-banner-img
          imageSrc=${p((e = this.metadata) == null ? void 0 : e.icons[0])}
          text=${p((t = this.metadata) == null ? void 0 : t.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${['l', 'xl', 'xl', 'xl']}>
        ${this.allAccounts.map((n, o) => this.getAddressTemplate(n, o))}
      </wui-flex>
    `
  }
  getAddressTemplate(e, t) {
    var s, y, N, E
    const n = (s = this.labels) == null ? void 0 : s.get(e.address),
      o = d.state.activeChain,
      r = b.getConnectorId(o) === S.CONNECTOR_ID.AUTH
    return l`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${
            r
              ? l`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`
              : l`<wui-flex .padding="${['0', '0', '0', 's']}"></wui-flex>`
          }
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${n || R.getTruncateString({ string: e.address, charsStart: 4, charsEnd: 6, truncate: 'middle' })}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${typeof this.balances[e.address] == 'number' ? `$${(y = this.balances[e.address]) == null ? void 0 : y.toFixed(2)}` : l`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${
            ((N = e.address) == null ? void 0 : N.toLowerCase()) ===
            ((E = this.currentAddress) == null ? void 0 : E.toLowerCase())
              ? ''
              : l`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${t}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${() => this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `
          }
        </wui-flex>
      </wui-flex>
    `
  }
  onSwitchAddress(e) {
    const t = d.state.activeCaipNetwork,
      n = t == null ? void 0 : t.chainNamespace,
      o = `${n}:${t == null ? void 0 : t.id}:${e}`
    m.setCaipAddress(o, n), A.close()
  }
}
Fe.styles = Gn
ui([u()], Fe.prototype, 'allAccounts', void 0)
ui([u()], Fe.prototype, 'balances', void 0)
Fe = ui([h('w3m-switch-address-view')], Fe)
const Xn = x`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`
var Yi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let dt = class extends w {
  constructor() {
    super(...arguments), (this.inputElementRef = ri()), (this.checked = void 0)
  }
  render() {
    return l`
      <label>
        <input
          ${ai(this.inputElementRef)}
          type="checkbox"
          ?checked=${p(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `
  }
  dispatchChangeEvent() {
    var e
    this.dispatchEvent(
      new CustomEvent('switchChange', {
        detail: (e = this.inputElementRef.value) == null ? void 0 : e.checked,
        bubbles: !0,
        composed: !0
      })
    )
  }
}
dt.styles = [_, T, bn, Xn]
Yi([c({ type: Boolean })], dt.prototype, 'checked', void 0)
dt = Yi([h('wui-switch')], dt)
const Yn = x`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`
var Qi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let pt = class extends w {
  constructor() {
    super(...arguments), (this.checked = void 0)
  }
  render() {
    return l`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${p(this.checked)}></wui-switch>
      </button>
    `
  }
}
pt.styles = [_, T, Yn]
Qi([c({ type: Boolean })], pt.prototype, 'checked', void 0)
pt = Qi([h('wui-certified-switch')], pt)
const Qn = x`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`
var Ji = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let ht = class extends w {
  constructor() {
    super(...arguments), (this.icon = 'copy')
  }
  render() {
    return l`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `
  }
}
ht.styles = [_, T, Qn]
Ji([c()], ht.prototype, 'icon', void 0)
ht = Ji([h('wui-input-element')], ht)
const Jn = x`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`
var Zn = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Yt = class extends w {
  constructor() {
    super(...arguments), (this.inputComponentRef = ri())
  }
  render() {
    return l`
      <wui-input-text
        ${ai(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `
  }
  clearValue() {
    const e = this.inputComponentRef.value,
      t = e == null ? void 0 : e.inputElementRef.value
    t && ((t.value = ''), t.focus(), t.dispatchEvent(new Event('input')))
  }
}
Yt.styles = [_, Jn]
Yt = Zn([h('wui-search-bar')], Yt)
const Zi = oi`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,
  eo = x`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`
var en = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let wt = class extends w {
  constructor() {
    super(...arguments), (this.type = 'wallet')
  }
  render() {
    return l`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `
  }
  shimmerTemplate() {
    return this.type === 'network'
      ? l` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Zi}`
      : l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`
  }
}
wt.styles = [_, T, eo]
en([c()], wt.prototype, 'type', void 0)
wt = en([h('wui-card-select-loader')], wt)
const to = x`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`
var X = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let z = class extends w {
  render() {
    return (
      (this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && R.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && R.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && R.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && R.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && R.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && R.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && R.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && R.getSpacingStyles(this.margin, 3)};
    `),
      l`<slot></slot>`
    )
  }
}
z.styles = [_, to]
X([c()], z.prototype, 'gridTemplateRows', void 0)
X([c()], z.prototype, 'gridTemplateColumns', void 0)
X([c()], z.prototype, 'justifyItems', void 0)
X([c()], z.prototype, 'alignItems', void 0)
X([c()], z.prototype, 'justifyContent', void 0)
X([c()], z.prototype, 'alignContent', void 0)
X([c()], z.prototype, 'columnGap', void 0)
X([c()], z.prototype, 'rowGap', void 0)
X([c()], z.prototype, 'gap', void 0)
X([c()], z.prototype, 'padding', void 0)
X([c()], z.prototype, 'margin', void 0)
z = X([h('wui-grid')], z)
const io = x`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`
var Ie = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let se = class extends w {
  constructor() {
    super(...arguments),
      (this.size = 'md'),
      (this.name = ''),
      (this.installed = !1),
      (this.badgeSize = 'xs')
  }
  render() {
    let e = 'xxs'
    return (
      this.size === 'lg' ? (e = 'm') : this.size === 'md' ? (e = 'xs') : (e = 'xxs'),
      (this.style.cssText = `
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `),
      this.walletIcon && (this.dataset.walletIcon = this.walletIcon),
      l`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `
    )
  }
  templateVisual() {
    return this.imageSrc
      ? l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`
      : this.walletIcon
        ? l`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`
        : l`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`
  }
}
se.styles = [T, _, io]
Ie([c()], se.prototype, 'size', void 0)
Ie([c()], se.prototype, 'name', void 0)
Ie([c()], se.prototype, 'imageSrc', void 0)
Ie([c()], se.prototype, 'walletIcon', void 0)
Ie([c({ type: Boolean })], se.prototype, 'installed', void 0)
Ie([c()], se.prototype, 'badgeSize', void 0)
se = Ie([h('wui-wallet-image')], se)
const no = x`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`
var rt = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Ce = class extends w {
  constructor() {
    super(),
      (this.observer = new IntersectionObserver(() => {})),
      (this.visible = !1),
      (this.imageSrc = void 0),
      (this.imageLoading = !1),
      (this.wallet = void 0),
      (this.observer = new IntersectionObserver(
        e => {
          e.forEach(t => {
            t.isIntersecting ? ((this.visible = !0), this.fetchImageSrc()) : (this.visible = !1)
          })
        },
        { threshold: 0.01 }
      ))
  }
  firstUpdated() {
    this.observer.observe(this)
  }
  disconnectedCallback() {
    this.observer.disconnect()
  }
  render() {
    var t, n
    const e = ((t = this.wallet) == null ? void 0 : t.badge_type) === 'certified'
    return l`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${p(e ? 'certified' : void 0)}
            >${(n = this.wallet) == null ? void 0 : n.name}</wui-text
          >
          ${e ? l`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>` : null}
        </wui-flex>
      </button>
    `
  }
  imageTemplate() {
    var e, t
    return (!this.visible && !this.imageSrc) || this.imageLoading
      ? this.shimmerTemplate()
      : l`
      <wui-wallet-image
        size="md"
        imageSrc=${p(this.imageSrc)}
        name=${(e = this.wallet) == null ? void 0 : e.name}
        .installed=${(t = this.wallet) == null ? void 0 : t.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `
  }
  shimmerTemplate() {
    return l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`
  }
  async fetchImageSrc() {
    this.wallet &&
      ((this.imageSrc = k.getWalletImage(this.wallet)),
      !this.imageSrc &&
        ((this.imageLoading = !0),
        (this.imageSrc = await k.fetchWalletImage(this.wallet.image_id)),
        (this.imageLoading = !1)))
  }
}
Ce.styles = no
rt([u()], Ce.prototype, 'visible', void 0)
rt([u()], Ce.prototype, 'imageSrc', void 0)
rt([u()], Ce.prototype, 'imageLoading', void 0)
rt([c()], Ce.prototype, 'wallet', void 0)
Ce = rt([h('w3m-all-wallets-list-item')], Ce)
const oo = x`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`
var at = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
const Ni = 'local-paginator'
let $e = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.paginationObserver = void 0),
      (this.loading = !I.state.wallets.length),
      (this.wallets = I.state.wallets),
      (this.recommended = I.state.recommended),
      (this.featured = I.state.featured),
      this.unsubscribe.push(
        I.subscribeKey('wallets', e => (this.wallets = e)),
        I.subscribeKey('recommended', e => (this.recommended = e)),
        I.subscribeKey('featured', e => (this.featured = e))
      )
  }
  firstUpdated() {
    this.initialFetch(), this.createPaginationObserver()
  }
  disconnectedCallback() {
    var e
    this.unsubscribe.forEach(t => t()), (e = this.paginationObserver) == null || e.disconnect()
  }
  render() {
    return l`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${['0', 's', 's', 's']}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `
  }
  async initialFetch() {
    var t
    this.loading = !0
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector('wui-grid')
    e &&
      (await I.fetchWallets({ page: 1 }),
      await e.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: 'forwards',
        easing: 'ease'
      }).finished,
      (this.loading = !1),
      e.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: 'forwards',
        easing: 'ease'
      }))
  }
  shimmerTemplate(e, t) {
    return [...Array(e)].map(
      () => l`
        <wui-card-select-loader type="wallet" id=${p(t)}></wui-card-select-loader>
      `
    )
  }
  walletsTemplate() {
    const e = g.uniqueBy([...this.featured, ...this.recommended, ...this.wallets], 'id')
    return Ae.markWalletsAsInstalled(e).map(
      n => l`
        <w3m-all-wallets-list-item
          @click=${() => this.onConnectWallet(n)}
          .wallet=${n}
        ></w3m-all-wallets-list-item>
      `
    )
  }
  paginationLoaderTemplate() {
    const { wallets: e, recommended: t, featured: n, count: o } = I.state,
      i = window.innerWidth < 352 ? 3 : 4,
      r = e.length + t.length
    let y = Math.ceil(r / i) * i - r + i
    return (
      (y -= e.length ? n.length % i : 0),
      o === 0 && n.length > 0
        ? null
        : o === 0 || [...n, ...e, ...t].length < o
          ? this.shimmerTemplate(y, Ni)
          : null
    )
  }
  createPaginationObserver() {
    var t
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(`#${Ni}`)
    e &&
      ((this.paginationObserver = new IntersectionObserver(([n]) => {
        if (n != null && n.isIntersecting && !this.loading) {
          const { page: o, count: i, wallets: r } = I.state
          r.length < i && I.fetchWallets({ page: o + 1 })
        }
      })),
      this.paginationObserver.observe(e))
  }
  onConnectWallet(e) {
    b.selectWalletConnector(e)
  }
}
$e.styles = oo
at([u()], $e.prototype, 'loading', void 0)
at([u()], $e.prototype, 'wallets', void 0)
at([u()], $e.prototype, 'recommended', void 0)
at([u()], $e.prototype, 'featured', void 0)
$e = at([h('w3m-all-wallets-list')], $e)
const ro = x`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
var Nt = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Oe = class extends w {
  constructor() {
    super(...arguments),
      (this.prevQuery = ''),
      (this.prevBadge = void 0),
      (this.loading = !0),
      (this.query = '')
  }
  render() {
    return (
      this.onSearch(),
      this.loading
        ? l`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`
        : this.walletsTemplate()
    )
  }
  async onSearch() {
    ;(this.query.trim() !== this.prevQuery.trim() || this.badge !== this.prevBadge) &&
      ((this.prevQuery = this.query),
      (this.prevBadge = this.badge),
      (this.loading = !0),
      await I.searchWallet({ search: this.query, badge: this.badge }),
      (this.loading = !1))
  }
  walletsTemplate() {
    const { search: e } = I.state,
      t = Ae.markWalletsAsInstalled(e)
    return e.length
      ? l`
      <wui-grid
        data-testid="wallet-list"
        .padding=${['0', 's', 's', 's']}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map(
          n => l`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(n)}
              .wallet=${n}
              data-testid="wallet-search-item-${n.id}"
            ></w3m-all-wallets-list-item>
          `
        )}
      </wui-grid>
    `
      : l`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `
  }
  onConnectWallet(e) {
    b.selectWalletConnector(e)
  }
}
Oe.styles = ro
Nt([u()], Oe.prototype, 'loading', void 0)
Nt([c()], Oe.prototype, 'query', void 0)
Nt([c()], Oe.prototype, 'badge', void 0)
Oe = Nt([h('w3m-all-wallets-search')], Oe)
var di = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let ft = class extends w {
  constructor() {
    super(...arguments),
      (this.search = ''),
      (this.onDebouncedSearch = g.debounce(e => {
        this.search = e
      }))
  }
  render() {
    const e = this.search.length >= 2
    return l`
      <wui-flex .padding=${['0', 's', 's', 's']} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${
        e || this.badge
          ? l`<w3m-all-wallets-search
            query=${this.search}
            badge=${p(this.badge)}
          ></w3m-all-wallets-search>`
          : l`<w3m-all-wallets-list badge=${p(this.badge)}></w3m-all-wallets-list>`
      }
    `
  }
  onInputChange(e) {
    this.onDebouncedSearch(e.detail)
  }
  onClick() {
    if (this.badge === 'certified') {
      this.badge = void 0
      return
    }
    ;(this.badge = 'certified'),
      O.showSvg('Only WalletConnect certified', {
        icon: 'walletConnectBrown',
        iconColor: 'accent-100'
      })
  }
  qrButtonTemplate() {
    return g.isMobile()
      ? l`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `
      : null
  }
  onWalletConnectQr() {
    f.push('ConnectingWalletConnect')
  }
}
di([u()], ft.prototype, 'search', void 0)
di([u()], ft.prototype, 'badge', void 0)
ft = di([h('w3m-all-wallets-view')], ft)
const ao = x`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`
var Ot = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let je = class extends w {
  constructor() {
    super(...arguments), (this.text = ''), (this.disabled = !1), (this.tabIdx = void 0)
  }
  render() {
    return l`
      <button ?disabled=${this.disabled} tabindex=${p(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `
  }
}
je.styles = [_, T, ao]
Ot([c()], je.prototype, 'text', void 0)
Ot([c({ type: Boolean })], je.prototype, 'disabled', void 0)
Ot([c()], je.prototype, 'tabIdx', void 0)
je = Ot([h('wui-list-button')], je)
const so = x`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`
var st = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let ke = class extends w {
  constructor() {
    super(...arguments),
      (this.unsubscribe = []),
      (this.formRef = ri()),
      (this.email = ''),
      (this.loading = !1),
      (this.error = '')
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  firstUpdated() {
    var e
    ;(e = this.formRef.value) == null ||
      e.addEventListener('keydown', t => {
        t.key === 'Enter' && this.onSubmitEmail(t)
      })
  }
  render() {
    return l`
      <form ${ai(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${p(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `
  }
  submitButtonTemplate() {
    return !this.loading && this.email.length > 3
      ? l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `
      : null
  }
  loadingTemplate() {
    return this.loading
      ? l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`
      : null
  }
  templateError() {
    return this.error
      ? l`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`
      : null
  }
  onEmailInputChange(e) {
    ;(this.email = e.detail.trim()), (this.error = '')
  }
  async onSubmitEmail(e) {
    if (!S.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(n => n === d.state.activeChain)) {
      const n = d.getFirstCaipNetworkSupportsAuthConnector()
      if (n) {
        f.push('SwitchNetwork', { network: n })
        return
      }
    }
    try {
      if (this.loading) return
      ;(this.loading = !0), e.preventDefault()
      const n = b.getAuthConnector()
      if (!n) throw new Error('w3m-email-login-widget: Auth connector not found')
      const { action: o } = await n.provider.connectEmail({ email: this.email })
      $.sendEvent({ type: 'track', event: 'EMAIL_SUBMITTED' }),
        o === 'VERIFY_OTP'
          ? ($.sendEvent({ type: 'track', event: 'EMAIL_VERIFICATION_CODE_SENT' }),
            f.push('EmailVerifyOtp', { email: this.email }))
          : o === 'VERIFY_DEVICE'
            ? f.push('EmailVerifyDevice', { email: this.email })
            : o === 'CONNECT' &&
              (await v.connectExternal(n, d.state.activeChain), f.replace('Account'))
    } catch (n) {
      const o = g.parseError(n)
      o != null && o.includes('Invalid email')
        ? (this.error = 'Invalid email. Try again.')
        : O.showError(n)
    } finally {
      this.loading = !1
    }
  }
  onFocusEvent() {
    $.sendEvent({ type: 'track', event: 'EMAIL_LOGIN_SELECTED' })
  }
}
ke.styles = so
st([c()], ke.prototype, 'tabIdx', void 0)
st([u()], ke.prototype, 'email', void 0)
st([u()], ke.prototype, 'loading', void 0)
st([u()], ke.prototype, 'error', void 0)
ke = st([h('w3m-email-login-widget')], ke)
const lo = x`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`
var jt = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Pe = class extends w {
  constructor() {
    super(...arguments), (this.logo = 'google'), (this.disabled = !1), (this.tabIdx = void 0)
  }
  render() {
    return l`
      <button ?disabled=${this.disabled} tabindex=${p(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `
  }
}
Pe.styles = [_, T, lo]
jt([c()], Pe.prototype, 'logo', void 0)
jt([c({ type: Boolean })], Pe.prototype, 'disabled', void 0)
jt([c()], Pe.prototype, 'tabIdx', void 0)
Pe = jt([h('wui-logo-select')], Pe)
const co = x`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`
var Ve = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
const Oi = 2,
  ji = 6
let fe = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.walletGuide = 'get-started'),
      (this.tabIdx = void 0),
      (this.connectors = b.state.connectors),
      (this.features = C.state.features),
      (this.authConnector = this.connectors.find(e => e.type === 'AUTH')),
      this.unsubscribe.push(
        b.subscribeKey('connectors', e => {
          ;(this.connectors = e),
            (this.authConnector = this.connectors.find(t => t.type === 'AUTH'))
        }),
        C.subscribeKey('features', e => (this.features = e))
      )
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    return l`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `
  }
  topViewTemplate() {
    var n
    const e = this.walletGuide === 'explore'
    let t = (n = this.features) == null ? void 0 : n.socials
    return !t && e
      ? ((t = D.DEFAULT_FEATURES.socials), this.renderTopViewContent(t))
      : t
        ? this.renderTopViewContent(t)
        : null
  }
  renderTopViewContent(e) {
    return e.length === 2
      ? l` <wui-flex gap="xs">
        ${e.slice(0, Oi).map(
          t => l`<wui-logo-select
              data-testid=${`social-selector-${t}`}
              @click=${() => {
                this.onSocialClick(t)
              }}
              logo=${t}
              tabIdx=${p(this.tabIdx)}
            ></wui-logo-select>`
        )}
      </wui-flex>`
      : l` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${() => {
        this.onSocialClick(e[0])
      }}
      logo=${p(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${p(this.tabIdx)}
    ></wui-list-social>`
  }
  bottomViewTemplate() {
    var o
    let e = (o = this.features) == null ? void 0 : o.socials
    const t = this.walletGuide === 'explore'
    return (
      (!this.authConnector || !e || !(e != null && e.length)) &&
        t &&
        (e = D.DEFAULT_FEATURES.socials),
      !e || e.length <= Oi
        ? null
        : e && e.length > ji
          ? l`<wui-flex gap="xs">
        ${e.slice(1, ji - 1).map(
          i => l`<wui-logo-select
              data-testid=${`social-selector-${i}`}
              @click=${() => {
                this.onSocialClick(i)
              }}
              logo=${i}
              tabIdx=${p(this.tabIdx)}
            ></wui-logo-select>`
        )}
        <wui-logo-select
          logo="more"
          tabIdx=${p(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
        ></wui-logo-select>
      </wui-flex>`
          : e
            ? l`<wui-flex gap="xs">
      ${e.slice(1, e.length).map(
        i => l`<wui-logo-select
            data-testid=${`social-selector-${i}`}
            @click=${() => {
              this.onSocialClick(i)
            }}
            logo=${i}
            tabIdx=${p(this.tabIdx)}
          ></wui-logo-select>`
      )}
    </wui-flex>`
            : null
    )
  }
  onMoreSocialsClick() {
    f.push('ConnectSocials')
  }
  async onSocialClick(e) {
    var n, o
    if (!S.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(i => i === d.state.activeChain)) {
      const i = d.getFirstCaipNetworkSupportsAuthConnector()
      if (i) {
        f.push('SwitchNetwork', { network: i })
        return
      }
    }
    if (
      (e &&
        (m.setSocialProvider(e, d.state.activeChain),
        $.sendEvent({ type: 'track', event: 'SOCIAL_LOGIN_STARTED', properties: { provider: e } })),
      e === vn.Farcaster)
    ) {
      f.push('ConnectingFarcaster')
      const i = b.getAuthConnector()
      if (i && !m.state.farcasterUrl)
        try {
          const { url: r } = await i.provider.getFarcasterUri()
          m.setFarcasterUrl(r, d.state.activeChain)
        } catch (r) {
          f.goBack(), O.showError(r)
        }
    } else {
      f.push('ConnectingSocial')
      const i = b.getAuthConnector()
      try {
        if (i && e) {
          if (
            (g.isTelegram() ||
              (this.popupWindow = g.returnOpenHref(
                '',
                'popupWindow',
                'width=600,height=800,scrollbars=yes'
              )),
            this.popupWindow)
          )
            m.setSocialWindow(this.popupWindow, d.state.activeChain)
          else if (!g.isTelegram()) throw new Error('Something went wrong')
          const { uri: r } = await i.provider.getSocialRedirectUri({ provider: e })
          if (!r)
            throw ((n = this.popupWindow) == null || n.close(), new Error('Something went wrong'))
          if ((this.popupWindow && (this.popupWindow.location.href = r), g.isTelegram())) {
            pe.setTelegramSocialProvider(e)
            const s = g.formatTelegramSocialLoginUrl(r)
            return g.openHref(s, '_top')
          }
        }
      } catch {
        ;(o = this.popupWindow) == null || o.close(), O.showError('Something went wrong')
      }
    }
  }
}
fe.styles = co
Ve([c()], fe.prototype, 'walletGuide', void 0)
Ve([c()], fe.prototype, 'tabIdx', void 0)
Ve([u()], fe.prototype, 'connectors', void 0)
Ve([u()], fe.prototype, 'features', void 0)
Ve([u()], fe.prototype, 'authConnector', void 0)
fe = Ve([h('w3m-social-login-widget')], fe)
const uo = x`
  :host {
    padding-bottom: var(--wui-spacing-s);
  }
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`
var pi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Ge = class extends w {
  constructor() {
    super(...arguments), (this.walletGuide = 'get-started')
  }
  render() {
    return this.walletGuide === 'explore'
      ? l`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`
      : l`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${['s', '0', 's', '0']}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${p(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`
  }
  onGetStarted() {
    f.push('Create')
  }
}
Ge.styles = uo
pi([c()], Ge.prototype, 'tabIdx', void 0)
pi([c()], Ge.prototype, 'walletGuide', void 0)
Ge = pi([h('w3m-wallet-guide')], Ge)
const po = x`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`
var tn = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
const Ht = 4
let gt = class extends w {
  constructor() {
    super(...arguments), (this.walletImages = [])
  }
  render() {
    const e = this.walletImages.length < Ht
    return l`${this.walletImages.slice(0, Ht).map(
      ({ src: t, walletName: n }) => l`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${p(n)}
            ></wui-wallet-image>
          `
    )}
      ${e ? [...Array(Ht - this.walletImages.length)].map(() => l` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`) : null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`
  }
}
gt.styles = [_, po]
tn([c({ type: Array })], gt.prototype, 'walletImages', void 0)
gt = tn([h('wui-all-wallets-image')], gt)
const ho = x`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`
var V = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let P = class extends w {
  constructor() {
    super(...arguments),
      (this.walletImages = []),
      (this.imageSrc = ''),
      (this.name = ''),
      (this.tabIdx = void 0),
      (this.installed = !1),
      (this.disabled = !1),
      (this.showAllWallets = !1),
      (this.loading = !1),
      (this.loadingSpinnerColor = 'accent-100')
  }
  render() {
    return l`
      <button ?disabled=${this.disabled} tabindex=${p(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `
  }
  templateAllWallets() {
    return this.showAllWallets && this.imageSrc
      ? l` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `
      : this.showAllWallets && this.walletIcon
        ? l` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `
        : null
  }
  templateWalletImage() {
    return !this.showAllWallets && this.imageSrc
      ? l`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`
      : !this.showAllWallets && !this.imageSrc
        ? l`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`
        : null
  }
  templateStatus() {
    return this.loading
      ? l`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`
      : this.tagLabel && this.tagVariant
        ? l`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`
        : this.icon
          ? l`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`
          : null
  }
}
P.styles = [_, T, ho]
V([c({ type: Array })], P.prototype, 'walletImages', void 0)
V([c()], P.prototype, 'imageSrc', void 0)
V([c()], P.prototype, 'name', void 0)
V([c()], P.prototype, 'tagLabel', void 0)
V([c()], P.prototype, 'tagVariant', void 0)
V([c()], P.prototype, 'icon', void 0)
V([c()], P.prototype, 'walletIcon', void 0)
V([c()], P.prototype, 'tabIdx', void 0)
V([c({ type: Boolean })], P.prototype, 'installed', void 0)
V([c({ type: Boolean })], P.prototype, 'disabled', void 0)
V([c({ type: Boolean })], P.prototype, 'showAllWallets', void 0)
V([c({ type: Boolean })], P.prototype, 'loading', void 0)
V([c({ type: String })], P.prototype, 'loadingSpinnerColor', void 0)
P = V([h('wui-list-wallet')], P)
var lt = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let De = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = b.state.connectors),
      (this.count = I.state.count),
      (this.isFetchingRecommendedWallets = I.state.isFetchingRecommendedWallets),
      this.unsubscribe.push(
        b.subscribeKey('connectors', e => (this.connectors = e)),
        I.subscribeKey('count', e => (this.count = e)),
        I.subscribeKey('isFetchingRecommendedWallets', e => (this.isFetchingRecommendedWallets = e))
      )
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    const e = this.connectors.find(s => s.id === 'walletConnect'),
      { allWallets: t } = C.state
    if (!e || t === 'HIDE' || (t === 'ONLY_MOBILE' && !g.isMobile())) return null
    const n = I.state.featured.length,
      o = this.count + n,
      i = o < 10 ? o : Math.floor(o / 10) * 10,
      r = i < o ? `${i}+` : `${i}`
    return l`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${r}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${p(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets ? 'fg-300' : 'accent-100'}
      ></wui-list-wallet>
    `
  }
  onAllWallets() {
    $.sendEvent({ type: 'track', event: 'CLICK_ALL_WALLETS' }), f.push('AllWallets')
  }
}
lt([c()], De.prototype, 'tabIdx', void 0)
lt([u()], De.prototype, 'connectors', void 0)
lt([u()], De.prototype, 'count', void 0)
lt([u()], De.prototype, 'isFetchingRecommendedWallets', void 0)
De = lt([h('w3m-all-wallets-widget')], De)
var hi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let mt = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = b.state.connectors),
      this.unsubscribe.push(b.subscribeKey('connectors', e => (this.connectors = e)))
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    const e = this.connectors.filter(t => t.type === 'ANNOUNCED')
    return e != null && e.length
      ? l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t => {
          var n, o
          return (n = t.info) != null &&
            n.rdns &&
            I.state.excludedRDNS &&
            I.state.excludedRDNS.includes(
              (o = t == null ? void 0 : t.info) == null ? void 0 : o.rdns
            )
            ? null
            : l`
            <wui-list-wallet
              imageSrc=${p(k.getConnectorImage(t))}
              name=${t.name ?? 'Unknown'}
              @click=${() => this.onConnector(t)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${t.id}`}
              .installed=${!0}
              tabIdx=${p(this.tabIdx)}
            >
            </wui-list-wallet>
          `
        })}
      </wui-flex>
    `
      : ((this.style.cssText = 'display: none'), null)
  }
  onConnector(e) {
    e.id === 'walletConnect'
      ? g.isMobile()
        ? f.push('AllWallets')
        : f.push('ConnectingWalletConnect')
      : f.push('ConnectingExternal', { connector: e })
  }
}
hi([c()], mt.prototype, 'tabIdx', void 0)
hi([u()], mt.prototype, 'connectors', void 0)
mt = hi([h('w3m-connect-announced-widget')], mt)
var Pt = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Xe = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = b.state.connectors),
      (this.loading = !1),
      this.unsubscribe.push(b.subscribeKey('connectors', e => (this.connectors = e))),
      g.isTelegram() &&
        g.isIos() &&
        ((this.loading = !v.state.wcUri),
        this.unsubscribe.push(v.subscribeKey('wcUri', e => (this.loading = !e))))
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    const { customWallets: e } = C.state
    if (!(e != null && e.length)) return (this.style.cssText = 'display: none'), null
    const t = this.filterOutDuplicateWallets(e)
    return l`<wui-flex flexDirection="column" gap="xs">
      ${t.map(
        n => l`
          <wui-list-wallet
            imageSrc=${p(k.getWalletImage(n))}
            name=${n.name ?? 'Unknown'}
            @click=${() => this.onConnectWallet(n)}
            data-testid=${`wallet-selector-${n.id}`}
            tabIdx=${p(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `
      )}
    </wui-flex>`
  }
  filterOutDuplicateWallets(e) {
    const t = pe.getRecentWallets(),
      n = this.connectors
        .map(s => {
          var y
          return (y = s.info) == null ? void 0 : y.rdns
        })
        .filter(Boolean),
      o = t.map(s => s.rdns).filter(Boolean),
      i = n.concat(o)
    if (i.includes('io.metamask.mobile') && g.isMobile()) {
      const s = i.indexOf('io.metamask.mobile')
      i[s] = 'io.metamask'
    }
    return e.filter(s => !i.includes(String(s == null ? void 0 : s.rdns)))
  }
  onConnectWallet(e) {
    this.loading || f.push('ConnectingWalletConnect', { wallet: e })
  }
}
Pt([c()], Xe.prototype, 'tabIdx', void 0)
Pt([u()], Xe.prototype, 'connectors', void 0)
Pt([u()], Xe.prototype, 'loading', void 0)
Xe = Pt([h('w3m-connect-custom-widget')], Xe)
var wi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let bt = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = b.state.connectors),
      this.unsubscribe.push(b.subscribeKey('connectors', e => (this.connectors = e)))
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    const t = this.connectors
      .filter(n => n.type === 'EXTERNAL')
      .filter(n => n.id !== S.CONNECTOR_ID.COINBASE_SDK)
    return t != null && t.length
      ? l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(
          n => l`
            <wui-list-wallet
              imageSrc=${p(k.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name ?? 'Unknown'}
              data-testid=${`wallet-selector-external-${n.id}`}
              @click=${() => this.onConnector(n)}
              tabIdx=${p(this.tabIdx)}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
      : ((this.style.cssText = 'display: none'), null)
  }
  onConnector(e) {
    f.push('ConnectingExternal', { connector: e })
  }
}
wi([c()], bt.prototype, 'tabIdx', void 0)
wi([u()], bt.prototype, 'connectors', void 0)
bt = wi([h('w3m-connect-external-widget')], bt)
var nn = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Qt = class extends w {
  constructor() {
    super(...arguments), (this.unsubscribe = []), (this.tabIdx = void 0)
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    const { featured: e } = I.state
    if (!e.length) return (this.style.cssText = 'display: none'), null
    const t = Ae.filterOutDuplicateWallets(e)
    return l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(
          n => l`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${n.id}`}
              imageSrc=${p(k.getWalletImage(n))}
              name=${n.name ?? 'Unknown'}
              @click=${() => this.onConnectWallet(n)}
              tabIdx=${p(this.tabIdx)}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
  }
  onConnectWallet(e) {
    b.selectWalletConnector(e)
  }
}
nn([c()], Qt.prototype, 'tabIdx', void 0)
Qt = nn([h('w3m-connect-featured-widget')], Qt)
var fi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let xt = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = b.state.connectors),
      this.unsubscribe.push(b.subscribeKey('connectors', e => (this.connectors = e)))
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    var t
    const e = this.connectors.filter(n => n.type === 'INJECTED')
    return !(e != null && e.length) ||
      (e.length === 1 &&
        ((t = e[0]) == null ? void 0 : t.name) === 'Browser Wallet' &&
        !g.isMobile())
      ? ((this.style.cssText = 'display: none'), null)
      : l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(n => {
          var i
          if (!g.isMobile() && n.name === 'Browser Wallet') return null
          const o = (i = n.info) == null ? void 0 : i.rdns
          return !o && !v.checkInstalled(void 0)
            ? ((this.style.cssText = 'display: none'), null)
            : o && I.state.excludedRDNS && I.state.excludedRDNS.includes(o)
              ? null
              : l`
            <wui-list-wallet
              imageSrc=${p(k.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name ?? 'Unknown'}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${n.id}`}
              @click=${() => this.onConnector(n)}
              tabIdx=${p(this.tabIdx)}
            >
            </wui-list-wallet>
          `
        })}
      </wui-flex>
    `
  }
  onConnector(e) {
    b.setActiveConnector(e), f.push('ConnectingExternal', { connector: e })
  }
}
fi([c()], xt.prototype, 'tabIdx', void 0)
fi([u()], xt.prototype, 'connectors', void 0)
xt = fi([h('w3m-connect-injected-widget')], xt)
var gi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let vt = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = b.state.connectors),
      this.unsubscribe.push(b.subscribeKey('connectors', e => (this.connectors = e)))
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    const e = this.connectors.filter(t => t.type === 'MULTI_CHAIN' && t.name !== 'WalletConnect')
    return e != null && e.length
      ? l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(
          t => l`
            <wui-list-wallet
              imageSrc=${p(k.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name ?? 'Unknown'}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${() => this.onConnector(t)}
              tabIdx=${p(this.tabIdx)}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
      : ((this.style.cssText = 'display: none'), null)
  }
  onConnector(e) {
    b.setActiveConnector(e), f.push('ConnectingMultiChain')
  }
}
gi([c()], vt.prototype, 'tabIdx', void 0)
gi([u()], vt.prototype, 'connectors', void 0)
vt = gi([h('w3m-connect-multi-chain-widget')], vt)
var Dt = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Ye = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = b.state.connectors),
      (this.loading = !1),
      this.unsubscribe.push(b.subscribeKey('connectors', e => (this.connectors = e))),
      g.isTelegram() &&
        g.isIos() &&
        ((this.loading = !v.state.wcUri),
        this.unsubscribe.push(v.subscribeKey('wcUri', e => (this.loading = !e))))
  }
  render() {
    const t = pe
      .getRecentWallets()
      .filter(n => !this.connectors.some(o => o.id === n.id || o.name === n.name))
    return t.length
      ? l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(
          n => l`
            <wui-list-wallet
              imageSrc=${p(k.getWalletImage(n))}
              name=${n.name ?? 'Unknown'}
              @click=${() => this.onConnectWallet(n)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${p(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
      : ((this.style.cssText = 'display: none'), null)
  }
  onConnectWallet(e) {
    this.loading || b.selectWalletConnector(e)
  }
}
Dt([c()], Ye.prototype, 'tabIdx', void 0)
Dt([u()], Ye.prototype, 'connectors', void 0)
Dt([u()], Ye.prototype, 'loading', void 0)
Ye = Dt([h('w3m-connect-recent-widget')], Ye)
var Lt = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Qe = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = b.state.connectors),
      (this.loading = !1),
      this.unsubscribe.push(b.subscribeKey('connectors', e => (this.connectors = e))),
      g.isTelegram() &&
        g.isIos() &&
        ((this.loading = !v.state.wcUri),
        this.unsubscribe.push(v.subscribeKey('wcUri', e => (this.loading = !e))))
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    if (!this.connectors.find(W => W.id === 'walletConnect')) return null
    const { recommended: t } = I.state,
      { customWallets: n, featuredWalletIds: o } = C.state,
      { connectors: i } = b.state,
      r = pe.getRecentWallets(),
      y = i
        .filter(W => W.type === 'INJECTED' || W.type === 'ANNOUNCED' || W.type === 'MULTI_CHAIN')
        .filter(W => W.name !== 'Browser Wallet')
    if (o || n || !t.length) return (this.style.cssText = 'display: none'), null
    const N = y.length + r.length,
      E = Math.max(0, 2 - N),
      ue = Ae.filterOutDuplicateWallets(t).slice(0, E)
    return ue.length
      ? l`
      <wui-flex flexDirection="column" gap="xs">
        ${ue.map(
          W => l`
            <wui-list-wallet
              imageSrc=${p(k.getWalletImage(W))}
              name=${(W == null ? void 0 : W.name) ?? 'Unknown'}
              @click=${() => this.onConnectWallet(W)}
              tabIdx=${p(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
      : ((this.style.cssText = 'display: none'), null)
  }
  onConnectWallet(e) {
    if (this.loading) return
    const t = b.getConnector(e.id, e.rdns)
    t
      ? f.push('ConnectingExternal', { connector: t })
      : f.push('ConnectingWalletConnect', { wallet: e })
  }
}
Lt([c()], Qe.prototype, 'tabIdx', void 0)
Lt([u()], Qe.prototype, 'connectors', void 0)
Lt([u()], Qe.prototype, 'loading', void 0)
Qe = Lt([h('w3m-connect-recommended-widget')], Qe)
var Ut = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Je = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = b.state.connectors),
      (this.connectorImages = de.state.connectorImages),
      this.unsubscribe.push(
        b.subscribeKey('connectors', e => (this.connectors = e)),
        de.subscribeKey('connectorImages', e => (this.connectorImages = e))
      )
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    if (g.isMobile()) return (this.style.cssText = 'display: none'), null
    const e = this.connectors.find(n => n.id === 'walletConnect')
    if (!e) return (this.style.cssText = 'display: none'), null
    const t = e.imageUrl || this.connectorImages[(e == null ? void 0 : e.imageId) ?? '']
    return l`
      <wui-list-wallet
        imageSrc=${p(t)}
        name=${e.name ?? 'Unknown'}
        @click=${() => this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${p(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `
  }
  onConnector(e) {
    b.setActiveConnector(e), f.push('ConnectingWalletConnect')
  }
}
Ut([c()], Je.prototype, 'tabIdx', void 0)
Ut([u()], Je.prototype, 'connectors', void 0)
Ut([u()], Je.prototype, 'connectorImages', void 0)
Je = Ut([h('w3m-connect-walletconnect-widget')], Je)
const wo = x`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`
var mi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Ze = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = b.state.connectors),
      this.unsubscribe.push(b.subscribeKey('connectors', e => (this.connectors = e)))
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    const {
        custom: e,
        recent: t,
        announced: n,
        injected: o,
        multiChain: i,
        recommended: r,
        featured: s,
        external: y
      } = yi.getConnectorsByType(this.connectors),
      N = yi.getIsConnectedWithWC(),
      E = C.state.enableWalletConnect
    return l`
      <wui-flex flexDirection="column" gap="xs">
        ${
          E && !N
            ? l`<w3m-connect-walletconnect-widget
              tabIdx=${p(this.tabIdx)}
            ></w3m-connect-walletconnect-widget>`
            : null
        }
        ${
          t.length
            ? l`<w3m-connect-recent-widget
              tabIdx=${p(this.tabIdx)}
            ></w3m-connect-recent-widget>`
            : null
        }
        ${
          i.length
            ? l`<w3m-connect-multi-chain-widget
              tabIdx=${p(this.tabIdx)}
            ></w3m-connect-multi-chain-widget>`
            : null
        }
        ${
          n.length
            ? l`<w3m-connect-announced-widget
              tabIdx=${p(this.tabIdx)}
            ></w3m-connect-announced-widget>`
            : null
        }
        ${
          o.length
            ? l`<w3m-connect-injected-widget
              tabIdx=${p(this.tabIdx)}
            ></w3m-connect-injected-widget>`
            : null
        }
        ${
          s.length
            ? l`<w3m-connect-featured-widget
              tabIdx=${p(this.tabIdx)}
            ></w3m-connect-featured-widget>`
            : null
        }
        ${
          e != null && e.length
            ? l`<w3m-connect-custom-widget
              tabIdx=${p(this.tabIdx)}
            ></w3m-connect-custom-widget>`
            : null
        }
        ${
          y.length
            ? l`<w3m-connect-external-widget
              tabIdx=${p(this.tabIdx)}
            ></w3m-connect-external-widget>`
            : null
        }
        ${
          r.length
            ? l`<w3m-connect-recommended-widget
              tabIdx=${p(this.tabIdx)}
            ></w3m-connect-recommended-widget>`
            : null
        }
      </wui-flex>
    `
  }
}
Ze.styles = wo
mi([c()], Ze.prototype, 'tabIdx', void 0)
mi([u()], Ze.prototype, 'connectors', void 0)
Ze = mi([h('w3m-connector-list')], Ze)
var on = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Jt = class extends w {
  constructor() {
    super(...arguments), (this.tabIdx = void 0)
  }
  render() {
    return l`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${p(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${p(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `
  }
}
on([c()], Jt.prototype, 'tabIdx', void 0)
Jt = on([h('w3m-wallet-login-list')], Jt)
const fo = x`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`
var Z = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
const go = 470
let K = class extends w {
  constructor() {
    var e, t
    super(),
      (this.unsubscribe = []),
      (this.connectors = b.state.connectors),
      (this.authConnector = this.connectors.find(n => n.type === 'AUTH')),
      (this.features = C.state.features),
      (this.enableWallets = C.state.enableWallets),
      (this.noAdapters = d.state.noAdapters),
      (this.walletGuide = 'get-started'),
      (this.checked = !1),
      (this.isEmailEnabled =
        ((e = this.features) == null ? void 0 : e.email) && !d.state.noAdapters),
      (this.isSocialEnabled =
        ((t = this.features) == null ? void 0 : t.socials) &&
        this.features.socials.length > 0 &&
        !d.state.noAdapters),
      (this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors)),
      this.unsubscribe.push(
        b.subscribeKey('connectors', n => {
          ;(this.connectors = n),
            (this.authConnector = this.connectors.find(o => o.type === 'AUTH')),
            (this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors))
        }),
        C.subscribeKey('features', n => this.setEmailAndSocialEnableCheck(n, this.noAdapters)),
        C.subscribeKey('enableWallets', n => (this.enableWallets = n)),
        d.subscribeKey('noAdapters', n => this.setEmailAndSocialEnableCheck(this.features, n))
      )
  }
  disconnectedCallback() {
    var t, n
    this.unsubscribe.forEach(o => o()), (t = this.resizeObserver) == null || t.disconnect()
    const e = (n = this.shadowRoot) == null ? void 0 : n.querySelector('.connect')
    e == null || e.removeEventListener('scroll', this.handleConnectListScroll.bind(this))
  }
  firstUpdated() {
    var t, n
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector('.connect')
    e &&
      (requestAnimationFrame(this.handleConnectListScroll.bind(this)),
      e == null || e.addEventListener('scroll', this.handleConnectListScroll.bind(this)),
      (this.resizeObserver = new ResizeObserver(() => {
        this.handleConnectListScroll()
      })),
      (n = this.resizeObserver) == null || n.observe(e),
      this.handleConnectListScroll())
  }
  render() {
    var W
    const { termsConditionsUrl: e, privacyPolicyUrl: t } = C.state,
      n = (W = C.state.features) == null ? void 0 : W.legalCheckbox,
      r = !!(e || t) && !!n && this.walletGuide === 'get-started' && !this.checked,
      s = { connect: !0, disabled: r },
      y = C.state.enableWalletGuide,
      N = this.enableWallets,
      E = this.isSocialEnabled || this.authConnector,
      ue = r ? -1 : void 0
    return l`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${$i(s)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${E && N && y && this.walletGuide === 'get-started' ? ['3xs', 's', '0', 's'] : ['3xs', 's', 's', 's']}
          >
            ${this.renderConnectMethod(ue)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(r)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `
  }
  setEmailAndSocialEnableCheck(e, t) {
    ;(this.isEmailEnabled = (e == null ? void 0 : e.email) && !t),
      (this.isSocialEnabled = (e == null ? void 0 : e.socials) && e.socials.length > 0 && !t),
      (this.features = e),
      (this.noAdapters = t)
  }
  checkIfAuthEnabled(e) {
    const t = e.filter(o => o.type === xn.CONNECTOR_TYPE_AUTH).map(o => o.chain)
    return S.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(o => t.includes(o))
  }
  renderConnectMethod(e) {
    const t = Ae.getConnectOrderMethod(this.features, this.connectors)
    return l`${t.map((n, o) => {
      switch (n) {
        case 'email':
          return l`${this.emailTemplate(e)} ${this.separatorTemplate(o, 'email')}`
        case 'social':
          return l`${this.socialListTemplate(e)}
          ${this.separatorTemplate(o, 'social')}`
        case 'wallet':
          return l`${this.walletListTemplate(e)}
          ${this.separatorTemplate(o, 'wallet')}`
        default:
          return null
      }
    })}`
  }
  checkMethodEnabled(e) {
    switch (e) {
      case 'wallet':
        return this.enableWallets
      case 'social':
        return this.isSocialEnabled && this.isAuthEnabled
      case 'email':
        return this.isEmailEnabled && this.isAuthEnabled
      default:
        return null
    }
  }
  checkIsThereNextMethod(e) {
    const n = Ae.getConnectOrderMethod(this.features, this.connectors)[e + 1]
    return n ? (this.checkMethodEnabled(n) ? n : this.checkIsThereNextMethod(e + 1)) : void 0
  }
  separatorTemplate(e, t) {
    const n = this.checkIsThereNextMethod(e),
      o = this.walletGuide === 'explore'
    switch (t) {
      case 'wallet':
        return this.enableWallets && n && !o
          ? l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
          : null
      case 'email': {
        const i = n === 'social'
        return this.isAuthEnabled && this.isEmailEnabled && !i && n
          ? l`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`
          : null
      }
      case 'social': {
        const i = n === 'email'
        return this.isAuthEnabled && this.isSocialEnabled && !i && n
          ? l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
          : null
      }
      default:
        return null
    }
  }
  emailTemplate(e) {
    return !this.isEmailEnabled || !this.isAuthEnabled
      ? null
      : l`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${p(e)}
    ></w3m-email-login-widget>`
  }
  socialListTemplate(e) {
    return !this.isSocialEnabled || !this.isAuthEnabled
      ? null
      : l`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${p(e)}
    ></w3m-social-login-widget>`
  }
  walletListTemplate(e) {
    var s, y
    const t = this.enableWallets,
      n = ((s = this.features) == null ? void 0 : s.emailShowWallets) === !1,
      o = (y = this.features) == null ? void 0 : y.collapseWallets,
      i = n || o
    return !t ||
      ((g.isTelegram() || g.isSafari()) && g.isIos() && v.connectWalletConnect().catch(N => ({})),
      this.walletGuide === 'explore')
      ? null
      : this.isAuthEnabled && (this.isEmailEnabled || this.isSocialEnabled) && i
        ? l`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${p(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`
        : l`<w3m-wallet-login-list tabIdx=${p(e)}></w3m-wallet-login-list>`
  }
  guideTemplate(e = !1) {
    if (!C.state.enableWalletGuide) return null
    const n = { guide: !0, disabled: e },
      o = e ? -1 : void 0
    return !this.authConnector && !this.isSocialEnabled
      ? null
      : l`
      ${this.walletGuide === 'explore' && !d.state.noAdapters ? l`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>` : null}
      <wui-flex flexDirection="column" .padding=${['l', '0', '0', '0']} class=${$i(n)}>
        <w3m-wallet-guide
          tabIdx=${p(o)}
          walletGuide=${this.walletGuide}
        ></w3m-wallet-guide>
      </wui-flex>
    `
  }
  legalCheckboxTemplate() {
    return this.walletGuide === 'explore'
      ? null
      : l`<w3m-legal-checkbox
      @checkboxChange=${this.onCheckboxChange.bind(this)}
      data-testid="w3m-legal-checkbox"
    ></w3m-legal-checkbox>`
  }
  handleConnectListScroll() {
    var n
    const e = (n = this.shadowRoot) == null ? void 0 : n.querySelector('.connect')
    if (!e) return
    e.scrollHeight > go
      ? (e.style.setProperty(
          '--connect-mask-image',
          `linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 40px,
          black calc(100% - 40px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`
        ),
        e.style.setProperty(
          '--connect-scroll--top-opacity',
          ki.interpolate([0, 50], [0, 1], e.scrollTop).toString()
        ),
        e.style.setProperty(
          '--connect-scroll--bottom-opacity',
          ki.interpolate([0, 50], [0, 1], e.scrollHeight - e.scrollTop - e.offsetHeight).toString()
        ))
      : (e.style.setProperty('--connect-mask-image', 'none'),
        e.style.setProperty('--connect-scroll--top-opacity', '0'),
        e.style.setProperty('--connect-scroll--bottom-opacity', '0'))
  }
  onContinueWalletClick() {
    f.push('ConnectWallets')
  }
  onCheckboxChange(e) {
    this.checked = !!e.detail
  }
}
K.styles = fo
Z([u()], K.prototype, 'connectors', void 0)
Z([u()], K.prototype, 'authConnector', void 0)
Z([u()], K.prototype, 'features', void 0)
Z([u()], K.prototype, 'enableWallets', void 0)
Z([u()], K.prototype, 'noAdapters', void 0)
Z([c()], K.prototype, 'walletGuide', void 0)
Z([u()], K.prototype, 'checked', void 0)
Z([u()], K.prototype, 'isEmailEnabled', void 0)
Z([u()], K.prototype, 'isSocialEnabled', void 0)
Z([u()], K.prototype, 'isAuthEnabled', void 0)
K = Z([h('w3m-connect-view')], K)
const mo = x`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`
var Bt = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Le = class extends w {
  constructor() {
    super(...arguments), (this.disabled = !1), (this.label = ''), (this.buttonLabel = '')
  }
  render() {
    return l`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${['1xs', '2l', '1xs', '2l']}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `
  }
}
Le.styles = [_, T, mo]
Bt([c({ type: Boolean })], Le.prototype, 'disabled', void 0)
Bt([c()], Le.prototype, 'label', void 0)
Bt([c()], Le.prototype, 'buttonLabel', void 0)
Le = Bt([h('wui-cta-button')], Le)
const bo = x`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`
var rn = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let yt = class extends w {
  constructor() {
    super(...arguments), (this.wallet = void 0)
  }
  render() {
    if (!this.wallet) return (this.style.display = 'none'), null
    const { name: e, app_store: t, play_store: n, chrome_store: o, homepage: i } = this.wallet,
      r = g.isMobile(),
      s = g.isIos(),
      y = g.isAndroid(),
      N = [t, n, i, o].filter(Boolean).length > 1,
      E = R.getTruncateString({ string: e, charsStart: 12, charsEnd: 0, truncate: 'end' })
    return N && !r
      ? l`
        <wui-cta-button
          label=${`Don't have ${E}?`}
          buttonLabel="Get"
          @click=${() => f.push('Downloads', { wallet: this.wallet })}
        ></wui-cta-button>
      `
      : !N && i
        ? l`
        <wui-cta-button
          label=${`Don't have ${E}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `
        : t && s
          ? l`
        <wui-cta-button
          label=${`Don't have ${E}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `
          : n && y
            ? l`
        <wui-cta-button
          label=${`Don't have ${E}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `
            : ((this.style.display = 'none'), null)
  }
  onAppStore() {
    var e
    ;(e = this.wallet) != null && e.app_store && g.openHref(this.wallet.app_store, '_blank')
  }
  onPlayStore() {
    var e
    ;(e = this.wallet) != null && e.play_store && g.openHref(this.wallet.play_store, '_blank')
  }
  onHomePage() {
    var e
    ;(e = this.wallet) != null && e.homepage && g.openHref(this.wallet.homepage, '_blank')
  }
}
yt.styles = [bo]
rn([c({ type: Object })], yt.prototype, 'wallet', void 0)
yt = rn([h('w3m-mobile-download-links')], yt)
const xo = x`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`
var re = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
class j extends w {
  constructor() {
    var e, t, n, o, i
    super(),
      (this.wallet = (e = f.state.data) == null ? void 0 : e.wallet),
      (this.connector = (t = f.state.data) == null ? void 0 : t.connector),
      (this.timeout = void 0),
      (this.secondaryBtnIcon = 'refresh'),
      (this.onConnect = void 0),
      (this.onRender = void 0),
      (this.onAutoConnect = void 0),
      (this.isWalletConnect = !0),
      (this.unsubscribe = []),
      (this.imageSrc = k.getWalletImage(this.wallet) ?? k.getConnectorImage(this.connector)),
      (this.name =
        ((n = this.wallet) == null ? void 0 : n.name) ??
        ((o = this.connector) == null ? void 0 : o.name) ??
        'Wallet'),
      (this.isRetrying = !1),
      (this.uri = v.state.wcUri),
      (this.error = v.state.wcError),
      (this.ready = !1),
      (this.showRetry = !1),
      (this.secondaryBtnLabel = 'Try again'),
      (this.secondaryLabel = 'Accept connection request in the wallet'),
      (this.buffering = !1),
      (this.isMobile = !1),
      (this.onRetry = void 0),
      this.unsubscribe.push(
        v.subscribeKey('wcUri', r => {
          var s
          ;(this.uri = r),
            this.isRetrying &&
              this.onRetry &&
              ((this.isRetrying = !1), (s = this.onConnect) == null || s.call(this))
        }),
        v.subscribeKey('wcError', r => (this.error = r)),
        v.subscribeKey('buffering', r => (this.buffering = r))
      ),
      (g.isTelegram() || g.isSafari()) &&
        g.isIos() &&
        v.state.wcUri &&
        ((i = this.onConnect) == null || i.call(this))
  }
  firstUpdated() {
    var e
    ;(e = this.onAutoConnect) == null || e.call(this), (this.showRetry = !this.onAutoConnect)
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e()), clearTimeout(this.timeout)
  }
  render() {
    var n
    ;(n = this.onRender) == null || n.call(this), this.onShowRetry()
    const e = this.error
      ? 'Connection can be declined if a previous request is still active'
      : this.secondaryLabel
    let t = `Continue in ${this.name}`
    return (
      this.buffering && (t = 'Connecting...'),
      this.error && (t = 'Connection declined'),
      l`
      <wui-flex
        data-error=${p(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${['3xl', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${p(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? 'error-100' : 'fg-100'}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${
          this.secondaryBtnLabel
            ? l`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying || (!this.error && this.buffering)}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `
            : null
        }
      </wui-flex>

      ${
        this.isWalletConnect
          ? l`
            <wui-flex .padding=${['0', 'xl', 'xl', 'xl']} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `
          : null
      }

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `
    )
  }
  onShowRetry() {
    var e
    if (this.error && !this.showRetry) {
      this.showRetry = !0
      const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector('wui-button')
      t == null || t.animate([{ opacity: 0 }, { opacity: 1 }], { fill: 'forwards', easing: 'ease' })
    }
  }
  onTryAgain() {
    var e, t
    this.buffering ||
      (v.setWcError(!1),
      this.onRetry
        ? ((this.isRetrying = !0), (e = this.onRetry) == null || e.call(this))
        : (t = this.onConnect) == null || t.call(this))
  }
  loaderTemplate() {
    const e = Kt.state.themeVariables['--w3m-border-radius-master'],
      t = e ? parseInt(e.replace('px', ''), 10) : 4
    return l`<wui-loading-thumbnail radius=${t * 9}></wui-loading-thumbnail>`
  }
  onCopyUri() {
    try {
      this.uri && (g.copyToClopboard(this.uri), O.showSuccess('Link copied'))
    } catch {
      O.showError('Failed to copy')
    }
  }
}
j.styles = xo
re([u()], j.prototype, 'isRetrying', void 0)
re([u()], j.prototype, 'uri', void 0)
re([u()], j.prototype, 'error', void 0)
re([u()], j.prototype, 'ready', void 0)
re([u()], j.prototype, 'showRetry', void 0)
re([u()], j.prototype, 'secondaryBtnLabel', void 0)
re([u()], j.prototype, 'secondaryLabel', void 0)
re([u()], j.prototype, 'buffering', void 0)
re([c({ type: Boolean })], j.prototype, 'isMobile', void 0)
re([c()], j.prototype, 'onRetry', void 0)
var vo = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Pi = class extends j {
  constructor() {
    if ((super(), (this.externalViewUnsubscribe = []), !this.connector))
      throw new Error('w3m-connecting-view: No connector provided')
    $.sendEvent({
      type: 'track',
      event: 'SELECT_WALLET',
      properties: { name: this.connector.name ?? 'Unknown', platform: 'browser' }
    }),
      (this.onConnect = this.onConnectProxy.bind(this)),
      (this.onAutoConnect = this.onConnectProxy.bind(this)),
      (this.isWalletConnect = !1),
      this.externalViewUnsubscribe.push(
        d.subscribeKey('activeCaipAddress', e => {
          e && A.close()
        })
      )
  }
  disconnectedCallback() {
    this.externalViewUnsubscribe.forEach(e => e())
  }
  async onConnectProxy() {
    try {
      ;(this.error = !1),
        this.connector &&
          (this.connector.id !== S.CONNECTOR_ID.COINBASE_SDK || !this.error) &&
          (await v.connectExternal(this.connector, this.connector.chain),
          $.sendEvent({
            type: 'track',
            event: 'CONNECT_SUCCESS',
            properties: { method: 'browser', name: this.connector.name || 'Unknown' }
          }))
    } catch (e) {
      $.sendEvent({
        type: 'track',
        event: 'CONNECT_ERROR',
        properties: { message: (e == null ? void 0 : e.message) ?? 'Unknown' }
      }),
        (this.error = !0)
    }
  }
}
Pi = vo([h('w3m-connecting-external-view')], Pi)
const yo = x`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`
var an = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Ct = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.activeConnector = b.state.activeConnector),
      this.unsubscribe.push(b.subscribeKey('activeConnector', e => (this.activeConnector = e)))
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    var e
    return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['m', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${p(k.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${['0', 's', '0', 's']}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${(e = this.activeConnector) == null ? void 0 : e.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${['xs', '0', 'xs', '0']}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `
  }
  networksTemplate() {
    var e, t
    return (t = (e = this.activeConnector) == null ? void 0 : e.connectors) == null
      ? void 0
      : t.map(n =>
          n.name
            ? l`
            <wui-list-wallet
              imageSrc=${p(k.getChainImage(n.chain))}
              name=${S.CHAIN_NAME_MAP[n.chain]}
              @click=${() => this.onConnector(n)}
              data-testid="wui-list-chain-${n.chain}"
            ></wui-list-wallet>
          `
            : null
        )
  }
  onConnector(e) {
    var n, o
    const t =
      (o = (n = this.activeConnector) == null ? void 0 : n.connectors) == null
        ? void 0
        : o.find(i => i.chain === e.chain)
    if (!t) {
      O.showError('Failed to find connector')
      return
    }
    t.id === 'walletConnect'
      ? g.isMobile()
        ? f.push('AllWallets')
        : f.push('ConnectingWalletConnect')
      : f.push('ConnectingExternal', { connector: t })
  }
}
Ct.styles = yo
an([u()], Ct.prototype, 'activeConnector', void 0)
Ct = an([h('w3m-connecting-multi-chain-view')], Ct)
var zt = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let et = class extends w {
  constructor() {
    super(),
      (this.platformTabs = []),
      (this.unsubscribe = []),
      (this.platforms = []),
      (this.onSelectPlatfrom = void 0),
      (this.buffering = !1),
      this.unsubscribe.push(v.subscribeKey('buffering', e => (this.buffering = e)))
  }
  disconnectCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    const e = this.generateTabs()
    return l`
      <wui-flex justifyContent="center" .padding=${['0', '0', 'l', '0']}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `
  }
  generateTabs() {
    const e = this.platforms.map(t =>
      t === 'browser'
        ? { label: 'Browser', icon: 'extension', platform: 'browser' }
        : t === 'mobile'
          ? { label: 'Mobile', icon: 'mobile', platform: 'mobile' }
          : t === 'qrcode'
            ? { label: 'Mobile', icon: 'mobile', platform: 'qrcode' }
            : t === 'web'
              ? { label: 'Webapp', icon: 'browser', platform: 'web' }
              : t === 'desktop'
                ? { label: 'Desktop', icon: 'desktop', platform: 'desktop' }
                : { label: 'Browser', icon: 'extension', platform: 'unsupported' }
    )
    return (this.platformTabs = e.map(({ platform: t }) => t)), e
  }
  onTabChange(e) {
    var n
    const t = this.platformTabs[e]
    t && ((n = this.onSelectPlatfrom) == null || n.call(this, t))
  }
}
zt([c({ type: Array })], et.prototype, 'platforms', void 0)
zt([c()], et.prototype, 'onSelectPlatfrom', void 0)
zt([u()], et.prototype, 'buffering', void 0)
et = zt([h('w3m-connecting-header')], et)
var Co = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Di = class extends j {
  constructor() {
    if ((super(), !this.wallet)) throw new Error('w3m-connecting-wc-browser: No wallet provided')
    ;(this.onConnect = this.onConnectProxy.bind(this)),
      (this.onAutoConnect = this.onConnectProxy.bind(this)),
      $.sendEvent({
        type: 'track',
        event: 'SELECT_WALLET',
        properties: { name: this.wallet.name, platform: 'browser' }
      })
  }
  async onConnectProxy() {
    var e
    try {
      this.error = !1
      const { connectors: t } = b.state,
        n = t.find(o => {
          var i, r, s
          return (
            (o.type === 'ANNOUNCED' &&
              ((i = o.info) == null ? void 0 : i.rdns) ===
                ((r = this.wallet) == null ? void 0 : r.rdns)) ||
            o.type === 'INJECTED' ||
            o.name === ((s = this.wallet) == null ? void 0 : s.name)
          )
        })
      if (n) await v.connectExternal(n, n.chain)
      else throw new Error('w3m-connecting-wc-browser: No connector found')
      A.close(),
        $.sendEvent({
          type: 'track',
          event: 'CONNECT_SUCCESS',
          properties: {
            method: 'browser',
            name: ((e = this.wallet) == null ? void 0 : e.name) || 'Unknown'
          }
        })
    } catch (t) {
      $.sendEvent({
        type: 'track',
        event: 'CONNECT_ERROR',
        properties: { message: (t == null ? void 0 : t.message) ?? 'Unknown' }
      }),
        (this.error = !0)
    }
  }
}
Di = Co([h('w3m-connecting-wc-browser')], Di)
var $o = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Li = class extends j {
  constructor() {
    if ((super(), !this.wallet)) throw new Error('w3m-connecting-wc-desktop: No wallet provided')
    ;(this.onConnect = this.onConnectProxy.bind(this)),
      (this.onRender = this.onRenderProxy.bind(this)),
      $.sendEvent({
        type: 'track',
        event: 'SELECT_WALLET',
        properties: { name: this.wallet.name, platform: 'desktop' }
      })
  }
  onRenderProxy() {
    var e
    !this.ready && this.uri && ((this.ready = !0), (e = this.onConnect) == null || e.call(this))
  }
  onConnectProxy() {
    var e
    if ((e = this.wallet) != null && e.desktop_link && this.uri)
      try {
        this.error = !1
        const { desktop_link: t, name: n } = this.wallet,
          { redirect: o, href: i } = g.formatNativeUrl(t, this.uri)
        v.setWcLinking({ name: n, href: i }),
          v.setRecentWallet(this.wallet),
          g.openHref(o, '_blank')
      } catch {
        this.error = !0
      }
  }
}
Li = $o([h('w3m-connecting-wc-desktop')], Li)
var ko = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Ui = class extends j {
  constructor() {
    if (
      (super(),
      (this.btnLabelTimeout = void 0),
      (this.labelTimeout = void 0),
      (this.onRender = () => {
        var e
        !this.ready && this.uri && ((this.ready = !0), (e = this.onConnect) == null || e.call(this))
      }),
      (this.onConnect = () => {
        var e
        if ((e = this.wallet) != null && e.mobile_link && this.uri)
          try {
            this.error = !1
            const { mobile_link: t, name: n } = this.wallet,
              { redirect: o, href: i } = g.formatNativeUrl(t, this.uri)
            v.setWcLinking({ name: n, href: i }), v.setRecentWallet(this.wallet)
            const r = g.isIframe() ? '_top' : '_self'
            g.openHref(o, r),
              clearTimeout(this.labelTimeout),
              (this.secondaryLabel = D.CONNECT_LABELS.MOBILE)
          } catch (t) {
            $.sendEvent({
              type: 'track',
              event: 'CONNECT_PROXY_ERROR',
              properties: {
                message: t instanceof Error ? t.message : 'Error parsing the deeplink',
                uri: this.uri,
                mobile_link: this.wallet.mobile_link,
                name: this.wallet.name
              }
            }),
              (this.error = !0)
          }
      }),
      !this.wallet)
    )
      throw new Error('w3m-connecting-wc-mobile: No wallet provided')
    ;(this.secondaryBtnLabel = void 0),
      (this.secondaryLabel = D.CONNECT_LABELS.MOBILE),
      document.addEventListener('visibilitychange', this.onBuffering.bind(this)),
      $.sendEvent({
        type: 'track',
        event: 'SELECT_WALLET',
        properties: { name: this.wallet.name, platform: 'mobile' }
      }),
      (this.btnLabelTimeout = setTimeout(() => {
        ;(this.secondaryBtnLabel = 'Try again'), (this.secondaryLabel = D.CONNECT_LABELS.MOBILE)
      }, D.FIVE_SEC_MS)),
      (this.labelTimeout = setTimeout(() => {
        this.secondaryLabel = "Hold tight... it's taking longer than expected"
      }, D.THREE_SEC_MS))
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      document.removeEventListener('visibilitychange', this.onBuffering.bind(this)),
      clearTimeout(this.btnLabelTimeout),
      clearTimeout(this.labelTimeout)
  }
  onBuffering() {
    const e = g.isIos()
    ;(document == null ? void 0 : document.visibilityState) === 'visible' &&
      !this.error &&
      e &&
      (v.setBuffering(!0),
      setTimeout(() => {
        v.setBuffering(!1)
      }, 5e3))
  }
  onTryAgain() {
    this.buffering || (v.setWcError(!1), this.onConnect())
  }
}
Ui = ko([h('w3m-connecting-wc-mobile')], Ui)
const So = x`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`
var _o = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Zt = class extends j {
  constructor() {
    var e
    super(),
      (this.forceUpdate = () => {
        this.requestUpdate()
      }),
      window.addEventListener('resize', this.forceUpdate),
      $.sendEvent({
        type: 'track',
        event: 'SELECT_WALLET',
        properties: {
          name: ((e = this.wallet) == null ? void 0 : e.name) ?? 'WalletConnect',
          platform: 'qrcode'
        }
      })
  }
  disconnectedCallback() {
    var e
    super.disconnectedCallback(),
      (e = this.unsubscribe) == null || e.forEach(t => t()),
      window.removeEventListener('resize', this.forceUpdate)
  }
  render() {
    return (
      this.onRenderProxy(),
      l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['0', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `
    )
  }
  onRenderProxy() {
    !this.ready &&
      this.uri &&
      (this.timeout = setTimeout(() => {
        this.ready = !0
      }, 200))
  }
  qrCodeTemplate() {
    if (!this.uri || !this.ready) return null
    const e = this.getBoundingClientRect().width - 40,
      t = this.wallet ? this.wallet.name : void 0
    return (
      v.setWcLinking(void 0),
      v.setRecentWallet(this.wallet),
      l` <wui-qr-code
      size=${e}
      theme=${Kt.state.themeMode}
      uri=${this.uri}
      imageSrc=${p(k.getWalletImage(this.wallet))}
      color=${p(Kt.state.themeVariables['--w3m-qr-color'])}
      alt=${p(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`
    )
  }
  copyTemplate() {
    const e = !this.uri || !this.ready
    return l`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`
  }
}
Zt.styles = So
Zt = _o([h('w3m-connecting-wc-qrcode')], Zt)
var Io = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Bi = class extends w {
  constructor() {
    var e
    if ((super(), (this.wallet = (e = f.state.data) == null ? void 0 : e.wallet), !this.wallet))
      throw new Error('w3m-connecting-wc-unsupported: No wallet provided')
    $.sendEvent({
      type: 'track',
      event: 'SELECT_WALLET',
      properties: { name: this.wallet.name, platform: 'browser' }
    })
  }
  render() {
    return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['3xl', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${p(k.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `
  }
}
Bi = Io([h('w3m-connecting-wc-unsupported')], Bi)
var To = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let zi = class extends j {
  constructor() {
    if ((super(), !this.wallet)) throw new Error('w3m-connecting-wc-web: No wallet provided')
    ;(this.onConnect = this.onConnectProxy.bind(this)),
      (this.secondaryBtnLabel = 'Open'),
      (this.secondaryLabel = 'Open and continue in a new browser tab'),
      (this.secondaryBtnIcon = 'externalLink'),
      $.sendEvent({
        type: 'track',
        event: 'SELECT_WALLET',
        properties: { name: this.wallet.name, platform: 'web' }
      })
  }
  onConnectProxy() {
    var e
    if ((e = this.wallet) != null && e.webapp_link && this.uri)
      try {
        this.error = !1
        const { webapp_link: t, name: n } = this.wallet,
          { redirect: o, href: i } = g.formatUniversalUrl(t, this.uri)
        v.setWcLinking({ name: n, href: i }),
          v.setRecentWallet(this.wallet),
          g.openHref(o, '_blank')
      } catch {
        this.error = !0
      }
  }
}
zi = To([h('w3m-connecting-wc-web')], zi)
var Vt = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let tt = class extends w {
  constructor() {
    var e
    super(),
      (this.wallet = (e = f.state.data) == null ? void 0 : e.wallet),
      (this.platform = void 0),
      (this.platforms = []),
      (this.isSiwxEnabled = !!C.state.siwx),
      this.determinePlatforms(),
      this.initializeConnection()
  }
  render() {
    return l`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `
  }
  async initializeConnection(e = !1) {
    if (!(this.platform === 'browser' || (C.state.manualWCControl && !e)))
      try {
        const { wcPairingExpiry: t, status: n } = v.state
        ;(e || g.isPairingExpired(t) || n === 'connecting') &&
          (await v.connectWalletConnect(), this.isSiwxEnabled || A.close())
      } catch (t) {
        $.sendEvent({
          type: 'track',
          event: 'CONNECT_ERROR',
          properties: { message: (t == null ? void 0 : t.message) ?? 'Unknown' }
        }),
          v.setWcError(!0),
          O.showError(t.message ?? 'Connection error'),
          v.resetWcConnection(),
          f.goBack()
      }
  }
  determinePlatforms() {
    if (!this.wallet) {
      this.platforms.push('qrcode'), (this.platform = 'qrcode')
      return
    }
    if (this.platform) return
    const { mobile_link: e, desktop_link: t, webapp_link: n, injected: o, rdns: i } = this.wallet,
      r = o == null ? void 0 : o.map(({ injected_id: fn }) => fn).filter(Boolean),
      s = [...(i ? [i] : (r ?? []))],
      y = C.state.isUniversalProvider ? !1 : s.length,
      N = e,
      E = n,
      ue = v.checkInstalled(s),
      W = y && ue,
      wn = t && !g.isMobile()
    W && !d.state.noAdapters && this.platforms.push('browser'),
      N && this.platforms.push(g.isMobile() ? 'mobile' : 'qrcode'),
      E && this.platforms.push('web'),
      wn && this.platforms.push('desktop'),
      !W && y && !d.state.noAdapters && this.platforms.push('unsupported'),
      (this.platform = this.platforms[0])
  }
  platformTemplate() {
    switch (this.platform) {
      case 'browser':
        return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`
      case 'web':
        return l`<w3m-connecting-wc-web></w3m-connecting-wc-web>`
      case 'desktop':
        return l`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `
      case 'mobile':
        return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `
      case 'qrcode':
        return l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`
      default:
        return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`
    }
  }
  headerTemplate() {
    return this.platforms.length > 1
      ? l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `
      : null
  }
  async onSelectPlatform(e) {
    var n
    const t = (n = this.shadowRoot) == null ? void 0 : n.querySelector('div')
    t &&
      (await t.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: 'forwards',
        easing: 'ease'
      }).finished,
      (this.platform = e),
      t.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: 'forwards',
        easing: 'ease'
      }))
  }
}
Vt([u()], tt.prototype, 'platform', void 0)
Vt([u()], tt.prototype, 'platforms', void 0)
Vt([u()], tt.prototype, 'isSiwxEnabled', void 0)
tt = Vt([h('w3m-connecting-wc-view')], tt)
var sn = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let ei = class extends w {
  constructor() {
    super(...arguments), (this.isMobile = g.isMobile())
  }
  render() {
    if (this.isMobile) {
      const { featured: e, recommended: t } = I.state,
        { customWallets: n } = C.state,
        o = pe.getRecentWallets(),
        i = e.length || t.length || (n == null ? void 0 : n.length) || o.length
      return l`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${['3xs', 's', 's', 's']}
      >
        ${i ? l`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`
    }
    return l`<wui-flex flexDirection="column" .padding=${['0', '0', 'l', '0']}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${['0', 'm', '0', 'm']}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`
  }
}
sn([u()], ei.prototype, 'isMobile', void 0)
ei = sn([h('w3m-connecting-wc-basic-view')], ei)
const Ao = x`
  .continue-button-container {
    width: 100%;
  }
`
var ln = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let $t = class extends w {
  constructor() {
    super(...arguments), (this.loading = !1)
  }
  render() {
    return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${['0', '0', 'l', '0']}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
            g.openHref(yn.URLS.FAQ, '_blank')
          }}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `
  }
  onboardingTemplate() {
    return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${['0', 'xxl', '0', 'xxl']}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`
  }
  buttonsTemplate() {
    return l`<wui-flex
      .padding=${['0', '2l', '0', '2l']}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`
  }
  handleContinue() {
    f.push('RegisterAccountName'),
      $.sendEvent({
        type: 'track',
        event: 'OPEN_ENS_FLOW',
        properties: {
          isSmartAccount: m.state.preferredAccountType === M.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      })
  }
}
$t.styles = Ao
ln([u()], $t.prototype, 'loading', void 0)
$t = ln([h('w3m-choose-account-name-view')], $t)
var Ro = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Vi = class extends w {
  constructor() {
    var e
    super(...arguments), (this.wallet = (e = f.state.data) == null ? void 0 : e.wallet)
  }
  render() {
    if (!this.wallet) throw new Error('w3m-downloads-view')
    return l`
      <wui-flex gap="xs" flexDirection="column" .padding=${['s', 's', 'l', 's']}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `
  }
  chromeTemplate() {
    var e
    return (e = this.wallet) != null && e.chrome_store
      ? l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`
      : null
  }
  iosTemplate() {
    var e
    return (e = this.wallet) != null && e.app_store
      ? l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`
      : null
  }
  androidTemplate() {
    var e
    return (e = this.wallet) != null && e.play_store
      ? l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`
      : null
  }
  homepageTemplate() {
    var e
    return (e = this.wallet) != null && e.homepage
      ? l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `
      : null
  }
  onChromeStore() {
    var e
    ;(e = this.wallet) != null && e.chrome_store && g.openHref(this.wallet.chrome_store, '_blank')
  }
  onAppStore() {
    var e
    ;(e = this.wallet) != null && e.app_store && g.openHref(this.wallet.app_store, '_blank')
  }
  onPlayStore() {
    var e
    ;(e = this.wallet) != null && e.play_store && g.openHref(this.wallet.play_store, '_blank')
  }
  onHomePage() {
    var e
    ;(e = this.wallet) != null && e.homepage && g.openHref(this.wallet.homepage, '_blank')
  }
}
Vi = Ro([h('w3m-downloads-view')], Vi)
var Wo = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
const Eo = 'https://walletconnect.com/explorer'
let Mi = class extends w {
  render() {
    return l`
      <wui-flex flexDirection="column" .padding=${['0', 's', 's', 's']} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${() => {
            g.openHref('https://walletconnect.com/explorer?type=wallet', '_blank')
          }}
        ></wui-list-wallet>
      </wui-flex>
    `
  }
  recommendedWalletsTemplate() {
    const { recommended: e, featured: t } = I.state,
      { customWallets: n } = C.state
    return [...t, ...(n ?? []), ...e].slice(0, 4).map(
      i => l`
        <wui-list-wallet
          name=${i.name ?? 'Unknown'}
          tagVariant="main"
          imageSrc=${p(k.getWalletImage(i))}
          @click=${() => {
            g.openHref(i.homepage ?? Eo, '_blank')
          }}
        ></wui-list-wallet>
      `
    )
  }
}
Mi = Wo([h('w3m-get-wallet-view')], Mi)
var cn = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let ti = class extends w {
  constructor() {
    super(...arguments), (this.data = [])
  }
  render() {
    return l`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(
          e => l`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(t => l`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `
        )}
      </wui-flex>
    `
  }
}
cn([c({ type: Array })], ti.prototype, 'data', void 0)
ti = cn([h('w3m-help-widget')], ti)
var No = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
const Oo = [
  {
    images: ['login', 'profile', 'lock'],
    title: 'One login for all of web3',
    text: 'Log in to any app by connecting your wallet. Say goodbye to countless passwords!'
  },
  {
    images: ['defi', 'nft', 'eth'],
    title: 'A home for your digital assets',
    text: 'A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.'
  },
  {
    images: ['browser', 'noun', 'dao'],
    title: 'Your gateway to a new web',
    text: 'With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.'
  }
]
let Hi = class extends w {
  render() {
    return l`
      <wui-flex
        flexDirection="column"
        .padding=${['xxl', 'xl', 'xl', 'xl']}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Oo}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `
  }
  onGetWallet() {
    $.sendEvent({ type: 'track', event: 'CLICK_GET_WALLET' }), f.push('GetWallet')
  }
}
Hi = No([h('w3m-what-is-a-wallet-view')], Hi)
const jo = x`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`
var un = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let kt = class extends w {
  constructor() {
    super(...arguments), (this.checked = !1)
  }
  render() {
    var y
    const { termsConditionsUrl: e, privacyPolicyUrl: t } = C.state,
      n = (y = C.state.features) == null ? void 0 : y.legalCheckbox,
      i = !!(e || t) && !!n,
      r = i && !this.checked,
      s = r ? -1 : void 0
    return l`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i ? ['0', 's', 's', 's'] : 's'}
        gap="xs"
        class=${p(r ? 'disabled' : void 0)}
      >
        <w3m-wallet-login-list tabIdx=${p(s)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `
  }
  onCheckboxChange(e) {
    this.checked = !!e.detail
  }
}
kt.styles = jo
un([u()], kt.prototype, 'checked', void 0)
kt = un([h('w3m-connect-wallets-view')], kt)
const Po = x`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`
var Do = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let ii = class extends w {
  render() {
    return l`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `
  }
}
ii.styles = [_, Po]
ii = Do([h('wui-loading-hexagon')], ii)
const Lo = oi`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,
  Uo = oi`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,
  Bo = x`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`
var Te = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let le = class extends w {
  constructor() {
    super(...arguments),
      (this.size = 'md'),
      (this.name = 'uknown'),
      (this.networkImagesBySize = { sm: Uo, md: Zi, lg: Lo }),
      (this.selected = !1),
      (this.round = !1)
  }
  render() {
    return (
      this.round
        ? ((this.dataset.round = 'true'),
          (this.style.cssText = `
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `))
        : (this.style.cssText = `

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `),
      l`${this.templateVisual()} ${this.svgTemplate()} `
    )
  }
  svgTemplate() {
    return this.round ? null : this.networkImagesBySize[this.size]
  }
  templateVisual() {
    return this.imageSrc
      ? l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`
      : l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`
  }
}
le.styles = [_, Bo]
Te([c()], le.prototype, 'size', void 0)
Te([c()], le.prototype, 'name', void 0)
Te([c({ type: Object })], le.prototype, 'networkImagesBySize', void 0)
Te([c()], le.prototype, 'imageSrc', void 0)
Te([c({ type: Boolean })], le.prototype, 'selected', void 0)
Te([c({ type: Boolean })], le.prototype, 'round', void 0)
le = Te([h('wui-network-image')], le)
const zo = x`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`
var bi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let it = class extends w {
  constructor() {
    var e
    super(),
      (this.network = (e = f.state.data) == null ? void 0 : e.network),
      (this.unsubscribe = []),
      (this.showRetry = !1),
      (this.error = !1)
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  firstUpdated() {
    this.onSwitchNetwork()
  }
  render() {
    if (!this.network) throw new Error('w3m-network-switch-view: No network provided')
    this.onShowRetry()
    const e = this.getLabel(),
      t = this.getSubLabel()
    return l`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${['3xl', 'xl', '3xl', 'xl']}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${p(k.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : l`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `
  }
  getSubLabel() {
    const e = d.state.activeChain,
      t = b.getConnectorId(e)
    return b.getAuthConnector() && t === S.CONNECTOR_ID.AUTH
      ? ''
      : this.error
        ? 'Switch can be declined if chain is not supported by a wallet or previous request is still active'
        : 'Accept connection request in your wallet'
  }
  getLabel() {
    var o
    const e = d.state.activeChain,
      t = b.getConnectorId(e)
    return b.getAuthConnector() && t === S.CONNECTOR_ID.AUTH
      ? `Switching to ${((o = this.network) == null ? void 0 : o.name) ?? 'Unknown'} network...`
      : this.error
        ? 'Switch declined'
        : 'Approve in wallet'
  }
  onShowRetry() {
    var e
    if (this.error && !this.showRetry) {
      this.showRetry = !0
      const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector('wui-button')
      t == null || t.animate([{ opacity: 0 }, { opacity: 1 }], { fill: 'forwards', easing: 'ease' })
    }
  }
  async onSwitchNetwork() {
    try {
      ;(this.error = !1), this.network && (await d.switchActiveNetwork(this.network))
    } catch {
      this.error = !0
    }
  }
}
it.styles = zo
bi([u()], it.prototype, 'showRetry', void 0)
bi([u()], it.prototype, 'error', void 0)
it = bi([h('w3m-network-switch-view')], it)
const Vo = x`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`
var Me = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let ge = class extends w {
  constructor() {
    super(...arguments),
      (this.imageSrc = ''),
      (this.name = ''),
      (this.disabled = !1),
      (this.selected = !1),
      (this.transparent = !1)
  }
  render() {
    return l`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `
  }
  checkmarkTemplate() {
    return this.selected
      ? l`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`
      : null
  }
  templateNetworkImage() {
    return this.imageSrc
      ? l`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`
      : this.imageSrc
        ? null
        : l`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`
  }
}
ge.styles = [_, T, Vo]
Me([c()], ge.prototype, 'imageSrc', void 0)
Me([c()], ge.prototype, 'name', void 0)
Me([c({ type: Boolean })], ge.prototype, 'disabled', void 0)
Me([c({ type: Boolean })], ge.prototype, 'selected', void 0)
Me([c({ type: Boolean })], ge.prototype, 'transparent', void 0)
ge = Me([h('wui-list-network')], ge)
const Mo = x`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`
var ct = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Se = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.network = d.state.activeCaipNetwork),
      (this.requestedCaipNetworks = d.getAllRequestedCaipNetworks()),
      (this.search = ''),
      (this.onDebouncedSearch = g.debounce(e => {
        this.search = e
      }, 100)),
      this.unsubscribe.push(
        de.subscribeNetworkImages(() => this.requestUpdate()),
        d.subscribeKey('activeCaipNetwork', e => (this.network = e)),
        d.subscribeKey(
          'chains',
          () => (this.requestedCaipNetworks = d.getAllRequestedCaipNetworks())
        )
      )
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    return l`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${['0', 's', 's', 's']}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `
  }
  templateSearchInput() {
    return l`
      <wui-flex gap="xs" .padding=${['0', 's', 's', 's']}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `
  }
  onInputChange(e) {
    this.onDebouncedSearch(e.detail)
  }
  onNetworkHelp() {
    $.sendEvent({ type: 'track', event: 'CLICK_NETWORK_HELP' }), f.push('WhatIsANetwork')
  }
  networksTemplate() {
    var o
    const e = d.getAllRequestedCaipNetworks(),
      t = d.getAllApprovedCaipNetworkIds(),
      n = g.sortRequestedNetworks(t, e)
    return (
      this.search
        ? (this.filteredNetworks =
            n == null
              ? void 0
              : n.filter(i => {
                  var r
                  return (r = i == null ? void 0 : i.name) == null
                    ? void 0
                    : r.toLowerCase().includes(this.search.toLowerCase())
                }))
        : (this.filteredNetworks = n),
      (o = this.filteredNetworks) == null
        ? void 0
        : o.map(i => {
            var r
            return l`
        <wui-list-network
          .selected=${((r = this.network) == null ? void 0 : r.id) === i.id}
          imageSrc=${p(k.getNetworkImage(i))}
          type="network"
          name=${i.name ?? i.id}
          @click=${() => this.onSwitchNetwork(i)}
          .disabled=${this.getNetworkDisabled(i)}
          data-testid=${`w3m-network-switch-${i.name ?? i.id}`}
        ></wui-list-network>
      `
          })
    )
  }
  getNetworkDisabled(e) {
    const t = e.chainNamespace,
      n = m.getCaipAddress(t),
      o = d.getAllApprovedCaipNetworkIds(),
      i = d.getNetworkProp('supportsAllNetworks', t) !== !1,
      r = b.getConnectorId(t),
      s = b.getAuthConnector(),
      y = r === S.CONNECTOR_ID.AUTH && s
    return !n || i || y ? !1 : !(o != null && o.includes(e.caipNetworkId))
  }
  onSwitchNetwork(e) {
    var E
    const t = f.state.data
    if (e.id === ((E = this.network) == null ? void 0 : E.id)) return
    const o = e.chainNamespace !== d.state.activeChain,
      i = m.state.caipAddress,
      r = m.getCaipAddress(e.chainNamespace),
      y = b.getConnectorId(d.state.activeChain) === S.CONNECTOR_ID.AUTH,
      N = S.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(ue => ue === e.chainNamespace)
    i
      ? y && N
        ? f.push('SwitchNetwork', { ...t, network: e })
        : (y && !N) || (o && !r)
          ? f.push('SwitchActiveChain', {
              switchToChain: e.chainNamespace,
              navigateTo: 'Connect',
              navigateWithReplace: !0,
              network: e
            })
          : f.push('SwitchNetwork', { ...t, network: e })
      : f.push('SwitchNetwork', { ...t, network: e })
  }
}
Se.styles = Mo
ct([u()], Se.prototype, 'network', void 0)
ct([u()], Se.prototype, 'requestedCaipNetworks', void 0)
ct([u()], Se.prototype, 'filteredNetworks', void 0)
ct([u()], Se.prototype, 'search', void 0)
Se = ct([h('w3m-networks-view')], Se)
const Ho = x`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`
var dn = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let St = class extends w {
  constructor() {
    var e, t, n, o
    super(...arguments),
      (this.unsubscribe = []),
      (this.switchToChain = (e = f.state.data) == null ? void 0 : e.switchToChain),
      (this.navigateTo = (t = f.state.data) == null ? void 0 : t.navigateTo),
      (this.navigateWithReplace = (n = f.state.data) == null ? void 0 : n.navigateWithReplace),
      (this.caipNetwork = (o = f.state.data) == null ? void 0 : o.network),
      (this.activeChain = d.state.activeChain)
  }
  firstUpdated() {
    this.unsubscribe.push(d.subscribeKey('activeChain', e => (this.activeChain = e)))
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    const e = this.switchToChain ? S.CHAIN_NAME_MAP[this.switchToChain] : 'supported'
    if (!this.switchToChain) return null
    const t = this.switchToChain === 'eip155' ? 'Ethereum' : this.switchToChain
    return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['3xl', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual
            name=${this.switchToChain === 'eip155' ? 'eth' : this.switchToChain}
          ></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `
  }
  async switchActiveChain() {
    this.switchToChain &&
      (d.setIsSwitchingNamespace(!0),
      b.setFilterByNamespace(this.switchToChain),
      this.caipNetwork
        ? await d.switchActiveNetwork(this.caipNetwork)
        : d.setActiveNamespace(this.switchToChain),
      f.reset('Connect'))
  }
}
St.styles = Ho
dn([c()], St.prototype, 'activeChain', void 0)
St = dn([h('w3m-switch-active-chain-view')], St)
var Ko = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
const qo = [
  {
    images: ['network', 'layers', 'system'],
    title: 'The system’s nuts and bolts',
    text: 'A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services.'
  },
  {
    images: ['noun', 'defiAlt', 'dao'],
    title: 'Designed for different uses',
    text: 'Each network is designed differently, and may therefore suit certain apps and experiences.'
  }
]
let Ki = class extends w {
  render() {
    return l`
      <wui-flex
        flexDirection="column"
        .padding=${['xxl', 'xl', 'xl', 'xl']}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${qo}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${() => {
            g.openHref('https://ethereum.org/en/developers/docs/networks/', '_blank')
          }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `
  }
}
Ki = Ko([h('w3m-what-is-a-network-view')], Ki)
const Fo = x`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`
var pn = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let _t = class extends w {
  constructor() {
    var e
    super(),
      (this.swapUnsupportedChain = (e = f.state.data) == null ? void 0 : e.swapUnsupportedChain),
      (this.unsubscribe = []),
      (this.disconecting = !1),
      this.unsubscribe.push(de.subscribeNetworkImages(() => this.requestUpdate()))
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    return l`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${['m', 'xl', 'xs', 'xl']}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `
  }
  descriptionTemplate() {
    return this.swapUnsupportedChain
      ? l`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `
      : l`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `
  }
  networksTemplate() {
    const e = d.getAllRequestedCaipNetworks(),
      t = d.getAllApprovedCaipNetworkIds(),
      n = g.sortRequestedNetworks(t, e)
    return (
      this.swapUnsupportedChain
        ? n.filter(i => D.SWAP_SUPPORTED_NETWORKS.includes(i.caipNetworkId))
        : n
    ).map(
      i => l`
        <wui-list-network
          imageSrc=${p(k.getNetworkImage(i))}
          name=${i.name ?? 'Unknown'}
          @click=${() => this.onSwitchNetwork(i)}
        >
        </wui-list-network>
      `
    )
  }
  async onDisconnect() {
    try {
      ;(this.disconecting = !0),
        await v.disconnect(),
        $.sendEvent({ type: 'track', event: 'DISCONNECT_SUCCESS' }),
        A.close()
    } catch {
      $.sendEvent({ type: 'track', event: 'DISCONNECT_ERROR' }), O.showError('Failed to disconnect')
    } finally {
      this.disconecting = !1
    }
  }
  async onSwitchNetwork(e) {
    const t = m.state.caipAddress,
      n = d.getAllApprovedCaipNetworkIds(),
      o = d.getNetworkProp('supportsAllNetworks', e.chainNamespace),
      i = f.state.data
    t
      ? n != null && n.includes(e.caipNetworkId)
        ? await d.switchActiveNetwork(e)
        : o
          ? f.push('SwitchNetwork', { ...i, network: e })
          : f.push('SwitchNetwork', { ...i, network: e })
      : t || (d.setActiveCaipNetwork(e), f.push('Connect'))
  }
}
_t.styles = Fo
pn([u()], _t.prototype, 'disconecting', void 0)
_t = pn([h('w3m-unsupported-chain-view')], _t)
const Go = x`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`
var xi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let nt = class extends w {
  constructor() {
    super(...arguments), (this.icon = 'externalLink'), (this.text = '')
  }
  render() {
    return l`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `
  }
}
nt.styles = [_, T, Go]
xi([c()], nt.prototype, 'icon', void 0)
xi([c()], nt.prototype, 'text', void 0)
nt = xi([h('wui-banner')], nt)
const Xo = x`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`
var hn = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let It = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.preferredAccountType = m.state.preferredAccountType),
      this.unsubscribe.push(
        m.subscribeKey('preferredAccountType', e => {
          this.preferredAccountType = e
        })
      )
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    return l` <wui-flex
      flexDirection="column"
      .padding=${['xs', 's', 'm', 's']}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`
  }
  networkTemplate() {
    const e = d.getAllRequestedCaipNetworks(),
      t = d.getAllApprovedCaipNetworkIds(),
      n = d.state.activeCaipNetwork,
      o = d.checkIfSmartAccountEnabled()
    let i = g.sortRequestedNetworks(t, e)
    if (o && this.preferredAccountType === M.ACCOUNT_TYPES.SMART_ACCOUNT) {
      if (!n) return null
      i = [n]
    }
    return i.map(
      r => l`
        <wui-list-network
          imageSrc=${p(k.getNetworkImage(r))}
          name=${r.name ?? 'Unknown'}
          ?transparent=${!0}
        >
        </wui-list-network>
      `
    )
  }
}
It.styles = Xo
hn([u()], It.prototype, 'preferredAccountType', void 0)
It = hn([h('w3m-wallet-compatible-networks-view')], It)
const Yo = x`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`
var Mt = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Ue = class extends w {
  render() {
    return (
      (this.style.cssText = `--local-border-radius: ${this.borderRadiusFull ? '1000px' : '20px'}; background-color: var(--wui-color-modal-bg);`),
      l`${this.templateVisual()}`
    )
  }
  templateVisual() {
    return this.imageSrc
      ? l`<wui-image src=${this.imageSrc} alt=${this.alt ?? ''}></wui-image>`
      : l`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`
  }
}
Ue.styles = [_, Yo]
Mt([c()], Ue.prototype, 'imageSrc', void 0)
Mt([c()], Ue.prototype, 'alt', void 0)
Mt([c({ type: Boolean })], Ue.prototype, 'borderRadiusFull', void 0)
Ue = Mt([h('wui-visual-thumbnail')], Ue)
const Qo = x`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`
var Jo = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let ni = class extends w {
  constructor() {
    var e, t
    super(...arguments),
      (this.dappImageUrl = (e = C.state.metadata) == null ? void 0 : e.icons),
      (this.walletImageUrl = (t = m.state.connectedWalletInfo) == null ? void 0 : t.icon)
  }
  firstUpdated() {
    var t
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelectorAll('wui-visual-thumbnail')
    e != null && e[0] && this.createAnimation(e[0], 'translate(18px)'),
      e != null && e[1] && this.createAnimation(e[1], 'translate(-18px)')
  }
  render() {
    var e
    return l`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e = this.dappImageUrl) == null ? void 0 : e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `
  }
  createAnimation(e, t) {
    e.animate([{ transform: 'translateX(0px)' }, { transform: t }], {
      duration: 1600,
      easing: 'cubic-bezier(0.56, 0, 0.48, 1)',
      direction: 'alternate',
      iterations: 1 / 0
    })
  }
}
ni.styles = Qo
ni = Jo([h('w3m-siwx-sign-message-thumbnails')], ni)
var vi = function (a, e, t, n) {
  var o = arguments.length,
    i = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
    r
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    i = Reflect.decorate(a, e, t, n)
  else
    for (var s = a.length - 1; s >= 0; s--)
      (r = a[s]) && (i = (o < 3 ? r(i) : o > 3 ? r(e, t, i) : r(e, t)) || i)
  return o > 3 && i && Object.defineProperty(e, t, i), i
}
let Tt = class extends w {
  constructor() {
    var e
    super(...arguments),
      (this.dappName = (e = C.state.metadata) == null ? void 0 : e.name),
      (this.isCancelling = !1),
      (this.isSigning = !1)
  }
  render() {
    return l`
      <wui-flex justifyContent="center" .padding=${['2xl', '0', 'xxl', '0']}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${['0', '4xl', 'l', '4xl']}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName ?? 'Dapp'} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${['0', '3xl', 'l', '3xl']}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${['l', 'xl', 'xl', 'xl']} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling ? 'Cancelling...' : 'Cancel'}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning ? 'Signing...' : 'Sign'}
        </wui-button>
      </wui-flex>
    `
  }
  async onSign() {
    ;(this.isSigning = !0), await Ci.requestSignMessage().finally(() => (this.isSigning = !1))
  }
  async onCancel() {
    ;(this.isCancelling = !0), await Ci.cancelSignMessage().finally(() => (this.isCancelling = !1))
  }
}
vi([u()], Tt.prototype, 'isCancelling', void 0)
vi([u()], Tt.prototype, 'isSigning', void 0)
Tt = vi([h('w3m-siwx-sign-message-view')], Tt)
export {
  _i as AppKitAccountButton,
  Ti as AppKitButton,
  Ri as AppKitConnectButton,
  Ei as AppKitNetworkButton,
  Si as W3mAccountButton,
  Y as W3mAccountSettingsView,
  Xt as W3mAccountView,
  ft as W3mAllWalletsView,
  Ii as W3mButton,
  $t as W3mChooseAccountNameView,
  Ai as W3mConnectButton,
  K as W3mConnectView,
  kt as W3mConnectWalletsView,
  Pi as W3mConnectingExternalView,
  Ct as W3mConnectingMultiChainView,
  ei as W3mConnectingWcBasicView,
  tt as W3mConnectingWcView,
  Vi as W3mDownloadsView,
  Mi as W3mGetWalletView,
  Wi as W3mNetworkButton,
  it as W3mNetworkSwitchView,
  Se as W3mNetworksView,
  we as W3mProfileView,
  cs as W3mRouter,
  Tt as W3mSIWXSignMessageView,
  St as W3mSwitchActiveChainView,
  Fe as W3mSwitchAddressView,
  _t as W3mUnsupportedChainView,
  It as W3mWalletCompatibleNetworksView,
  Ki as W3mWhatIsANetworkView,
  Hi as W3mWhatIsAWalletView
}
