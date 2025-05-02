import { o as H, U as ce, r as d, n as p, c as y } from './if-defined-DVOmkLu5.js'
import './index-B2osUT2V.js'
import './index-BGjtclTS.js'
import './index-Bz4Ul6tQ.js'
import './index-Cxc8tIRM.js'
import {
  b as B,
  t as D,
  P as E,
  C as K,
  S as N,
  O,
  l as U,
  e as X,
  Q as ae,
  x as c,
  f as ee,
  i as g,
  M as h,
  k as ie,
  p as j,
  R as l,
  T as ne,
  z as oe,
  A as q,
  c as re,
  d as se,
  D as te,
  r as v,
  j as w,
  J as z
} from './index-DVkBgnkX.js'
import './index-QpqlfPgl.js'
import './index-swSfGf8i.js'

import { c as y, n as p, r as d, o as H, U as ce } from './if-defined-DVOmkLu5.js'
import './index-BGjtclTS.js'
import './index-QpqlfPgl.js'
import './index-Cxc8tIRM.js'
import './index-B2osUT2V.js'
import './index-swSfGf8i.js'
import './index-Bz4Ul6tQ.js'
const le = g`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`
var de = function (s, e, t, i) {
  var n = arguments.length,
    o = n < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    a
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    o = Reflect.decorate(s, e, t, i)
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (o = (n < 3 ? a(o) : n > 3 ? a(e, t, o) : a(e, t)) || o)
  return n > 3 && o && Object.defineProperty(e, t, o), o
}
let Y = class extends v {
  render() {
    return c`<slot></slot>`
  }
}
Y.styles = [B, le]
Y = de([y('wui-card')], Y)
const ue = g`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`
var T = function (s, e, t, i) {
  var n = arguments.length,
    o = n < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    a
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    o = Reflect.decorate(s, e, t, i)
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (o = (n < 3 ? a(o) : n > 3 ? a(e, t, o) : a(e, t)) || o)
  return n > 3 && o && Object.defineProperty(e, t, o), o
}
let k = class extends v {
  constructor() {
    super(...arguments),
      (this.message = ''),
      (this.backgroundColor = 'accent-100'),
      (this.iconColor = 'accent-100'),
      (this.icon = 'info')
  }
  render() {
    return (
      (this.style.cssText = `
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `),
      c`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `
    )
  }
  onClose() {
    E.close()
  }
}
k.styles = [B, ue]
T([p()], k.prototype, 'message', void 0)
T([p()], k.prototype, 'backgroundColor', void 0)
T([p()], k.prototype, 'iconColor', void 0)
T([p()], k.prototype, 'icon', void 0)
k = T([y('wui-alertbar')], k)
const pe = g`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`
var J = function (s, e, t, i) {
  var n = arguments.length,
    o = n < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    a
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    o = Reflect.decorate(s, e, t, i)
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (o = (n < 3 ? a(o) : n > 3 ? a(e, t, o) : a(e, t)) || o)
  return n > 3 && o && Object.defineProperty(e, t, o), o
}
const he = {
  info: { backgroundColor: 'fg-350', iconColor: 'fg-325', icon: 'info' },
  success: {
    backgroundColor: 'success-glass-reown-020',
    iconColor: 'success-125',
    icon: 'checkmark'
  },
  warning: {
    backgroundColor: 'warning-glass-reown-020',
    iconColor: 'warning-100',
    icon: 'warningCircle'
  },
  error: {
    backgroundColor: 'error-glass-reown-020',
    iconColor: 'error-125',
    icon: 'exclamationTriangle'
  }
}
let R = class extends v {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.open = E.state.open),
      this.onOpen(!0),
      this.unsubscribe.push(
        E.subscribeKey('open', e => {
          ;(this.open = e), this.onOpen(!1)
        })
      )
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    const { message: e, variant: t } = E.state,
      i = he[t]
    return c`
      <wui-alertbar
        message=${e}
        backgroundColor=${i == null ? void 0 : i.backgroundColor}
        iconColor=${i == null ? void 0 : i.iconColor}
        icon=${i == null ? void 0 : i.icon}
      ></wui-alertbar>
    `
  }
  onOpen(e) {
    this.open
      ? (this.animate(
          [
            { opacity: 0, transform: 'scale(0.85)' },
            { opacity: 1, transform: 'scale(1)' }
          ],
          { duration: 150, fill: 'forwards', easing: 'ease' }
        ),
        (this.style.cssText = 'pointer-events: auto'))
      : e ||
        (this.animate(
          [
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0.85)' }
          ],
          { duration: 150, fill: 'forwards', easing: 'ease' }
        ),
        (this.style.cssText = 'pointer-events: none'))
  }
}
R.styles = pe
J([d()], R.prototype, 'open', void 0)
R = J([y('w3m-alertbar')], R)
const we = g`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`
var Q = function (s, e, t, i) {
  var n = arguments.length,
    o = n < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    a
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    o = Reflect.decorate(s, e, t, i)
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (o = (n < 3 ? a(o) : n > 3 ? a(e, t, o) : a(e, t)) || o)
  return n > 3 && o && Object.defineProperty(e, t, o), o
}
let I = class extends v {
  constructor() {
    super(...arguments), (this.imageSrc = '')
  }
  render() {
    return c`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`
  }
  imageTemplate() {
    return this.imageSrc
      ? c`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`
      : c`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`
  }
}
I.styles = [B, ee, te, we]
Q([p()], I.prototype, 'imageSrc', void 0)
I = Q([y('wui-select')], I)
const me = g`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
var m = function (s, e, t, i) {
  var n = arguments.length,
    o = n < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    a
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    o = Reflect.decorate(s, e, t, i)
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (o = (n < 3 ? a(o) : n > 3 ? a(e, t, o) : a(e, t)) || o)
  return n > 3 && o && Object.defineProperty(e, t, o), o
}
const fe = ['SmartSessionList']
function L() {
  var a, r, C, A, W, P, $
  const s = (r = (a = l.state.data) == null ? void 0 : a.connector) == null ? void 0 : r.name,
    e = (A = (C = l.state.data) == null ? void 0 : C.wallet) == null ? void 0 : A.name,
    t = (P = (W = l.state.data) == null ? void 0 : W.network) == null ? void 0 : P.name,
    i = e ?? s,
    n = K.getConnectors()
  return {
    Connect: `Connect ${n.length === 1 && (($ = n[0]) == null ? void 0 : $.id) === 'w3m-email' ? 'Email' : ''} Wallet`,
    Create: 'Create Wallet',
    ChooseAccountName: void 0,
    Account: void 0,
    AccountSettings: void 0,
    AllWallets: 'All Wallets',
    ApproveTransaction: 'Approve Transaction',
    BuyInProgress: 'Buy',
    ConnectingExternal: i ?? 'Connect Wallet',
    ConnectingWalletConnect: i ?? 'WalletConnect',
    ConnectingWalletConnectBasic: 'WalletConnect',
    ConnectingSiwe: 'Sign In',
    Convert: 'Convert',
    ConvertSelectToken: 'Select token',
    ConvertPreview: 'Preview convert',
    Downloads: i ? `Get ${i}` : 'Downloads',
    EmailVerifyOtp: 'Confirm Email',
    EmailVerifyDevice: 'Register Device',
    GetWallet: 'Get a wallet',
    Networks: 'Choose Network',
    OnRampProviders: 'Choose Provider',
    OnRampActivity: 'Activity',
    OnRampTokenSelect: 'Select Token',
    OnRampFiatSelect: 'Select Currency',
    Profile: void 0,
    SwitchNetwork: t ?? 'Switch Network',
    SwitchAddress: 'Switch Address',
    Transactions: 'Activity',
    UnsupportedChain: 'Switch Network',
    UpgradeEmailWallet: 'Upgrade your Wallet',
    UpdateEmailWallet: 'Edit Email',
    UpdateEmailPrimaryOtp: 'Confirm Current Email',
    UpdateEmailSecondaryOtp: 'Confirm New Email',
    WhatIsABuy: 'What is Buy?',
    RegisterAccountName: 'Choose name',
    RegisterAccountNameSuccess: '',
    WalletReceive: 'Receive',
    WalletCompatibleNetworks: 'Compatible Networks',
    Swap: 'Swap',
    SwapSelectToken: 'Select token',
    SwapPreview: 'Preview swap',
    WalletSend: 'Send',
    WalletSendPreview: 'Review send',
    WalletSendSelectToken: 'Select Token',
    WhatIsANetwork: 'What is a network?',
    WhatIsAWallet: 'What is a wallet?',
    ConnectWallets: 'Connect wallet',
    ConnectSocials: 'All socials',
    ConnectingSocial: q.state.socialProvider ? q.state.socialProvider : 'Connect Social',
    ConnectingMultiChain: 'Select chain',
    ConnectingFarcaster: 'Farcaster',
    SwitchActiveChain: 'Switch chain',
    SmartSessionCreated: void 0,
    SmartSessionList: 'Smart Sessions',
    SIWXSignMessage: 'Sign In'
  }
}
let u = class extends v {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.heading = L()[l.state.view]),
      (this.network = w.state.activeCaipNetwork),
      (this.networkImage = j.getNetworkImage(this.network)),
      (this.buffering = !1),
      (this.showBack = !1),
      (this.prevHistoryLength = 1),
      (this.view = l.state.view),
      (this.viewDirection = ''),
      (this.headerText = L()[l.state.view]),
      this.unsubscribe.push(
        oe.subscribeNetworkImages(() => {
          this.networkImage = j.getNetworkImage(this.network)
        }),
        l.subscribeKey('view', e => {
          setTimeout(() => {
            ;(this.view = e), (this.headerText = L()[e])
          }, U.ANIMATION_DURATIONS.HeaderText),
            this.onViewChange(),
            this.onHistoryChange()
        }),
        ie.subscribeKey('buffering', e => (this.buffering = e)),
        w.subscribeKey('activeCaipNetwork', e => {
          ;(this.network = e), (this.networkImage = j.getNetworkImage(this.network))
        })
      )
  }
  disconnectCallback() {
    this.unsubscribe.forEach(e => e())
  }
  render() {
    return c`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `
  }
  onWalletHelp() {
    X.sendEvent({ type: 'track', event: 'CLICK_WALLET_HELP' }), l.push('WhatIsAWallet')
  }
  async onClose() {
    l.state.view === 'UnsupportedChain' || (await z.isSIWXCloseDisabled()) ? h.shake() : h.close()
  }
  rightHeaderTemplate() {
    var t, i, n
    const e =
      (n = (i = (t = O) == null ? void 0 : t.state) == null ? void 0 : i.features) == null
        ? void 0
        : n.smartSessions
    return l.state.view !== 'Account' || !e
      ? this.closeButtonTemplate()
      : c`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${() => l.push('SmartSessionList')}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `
  }
  closeButtonTemplate() {
    return c`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `
  }
  titleTemplate() {
    const e = fe.includes(this.view)
    return c`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e ? c`<wui-tag variant="main">Beta</wui-tag>` : null}
      </wui-flex>
    `
  }
  leftHeaderTemplate() {
    var C
    const { view: e } = l.state,
      t = e === 'Connect',
      i = O.state.enableEmbedded,
      n = e === 'ApproveTransaction',
      o = e === 'ConnectingSiwe',
      a = e === 'Account',
      r = n || o || (t && i)
    return a
      ? c`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${H((C = this.network) == null ? void 0 : C.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${H(this.networkImage)}
      ></wui-select>`
      : this.showBack && !r
        ? c`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`
        : c`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`
  }
  onNetworks() {
    this.isAllowedNetworkSwitch() &&
      (X.sendEvent({ type: 'track', event: 'CLICK_NETWORKS' }), l.push('Networks'))
  }
  isAllowedNetworkSwitch() {
    const e = w.getAllRequestedCaipNetworks(),
      t = e ? e.length > 1 : !1,
      i =
        e == null
          ? void 0
          : e.find(({ id: n }) => {
              var o
              return n === ((o = this.network) == null ? void 0 : o.id)
            })
    return t || !i
  }
  getPadding() {
    return this.heading ? ['l', '2l', 'l', '2l'] : ['0', '2l', '0', '2l']
  }
  onViewChange() {
    const { history: e } = l.state
    let t = U.VIEW_DIRECTION.Next
    e.length < this.prevHistoryLength && (t = U.VIEW_DIRECTION.Prev),
      (this.prevHistoryLength = e.length),
      (this.viewDirection = t)
  }
  async onHistoryChange() {
    var i
    const { history: e } = l.state,
      t = (i = this.shadowRoot) == null ? void 0 : i.querySelector('#dynamic')
    e.length > 1 && !this.showBack && t
      ? (await t.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 200,
          fill: 'forwards',
          easing: 'ease'
        }).finished,
        (this.showBack = !0),
        t.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 200,
          fill: 'forwards',
          easing: 'ease'
        }))
      : e.length <= 1 &&
        this.showBack &&
        t &&
        (await t.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 200,
          fill: 'forwards',
          easing: 'ease'
        }).finished,
        (this.showBack = !1),
        t.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 200,
          fill: 'forwards',
          easing: 'ease'
        }))
  }
  onGoBack() {
    l.goBack()
  }
}
u.styles = me
m([d()], u.prototype, 'heading', void 0)
m([d()], u.prototype, 'network', void 0)
m([d()], u.prototype, 'networkImage', void 0)
m([d()], u.prototype, 'buffering', void 0)
m([d()], u.prototype, 'showBack', void 0)
m([d()], u.prototype, 'prevHistoryLength', void 0)
m([d()], u.prototype, 'view', void 0)
m([d()], u.prototype, 'viewDirection', void 0)
m([d()], u.prototype, 'headerText', void 0)
u = m([y('w3m-header')], u)
const be = g`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`
var x = function (s, e, t, i) {
  var n = arguments.length,
    o = n < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    a
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    o = Reflect.decorate(s, e, t, i)
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (o = (n < 3 ? a(o) : n > 3 ? a(e, t, o) : a(e, t)) || o)
  return n > 3 && o && Object.defineProperty(e, t, o), o
}
let f = class extends v {
  constructor() {
    super(...arguments),
      (this.backgroundColor = 'accent-100'),
      (this.iconColor = 'accent-100'),
      (this.icon = 'checkmark'),
      (this.message = ''),
      (this.loading = !1),
      (this.iconType = 'default')
  }
  render() {
    return c`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `
  }
  templateIcon() {
    return this.loading
      ? c`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`
      : this.iconType === 'default'
        ? c`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`
        : c`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`
  }
}
f.styles = [B, be]
x([p()], f.prototype, 'backgroundColor', void 0)
x([p()], f.prototype, 'iconColor', void 0)
x([p()], f.prototype, 'icon', void 0)
x([p()], f.prototype, 'message', void 0)
x([p()], f.prototype, 'loading', void 0)
x([p()], f.prototype, 'iconType', void 0)
f = x([y('wui-snackbar')], f)
const ge = g`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`
var Z = function (s, e, t, i) {
  var n = arguments.length,
    o = n < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    a
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    o = Reflect.decorate(s, e, t, i)
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (o = (n < 3 ? a(o) : n > 3 ? a(e, t, o) : a(e, t)) || o)
  return n > 3 && o && Object.defineProperty(e, t, o), o
}
const ve = {
  loading: void 0,
  success: { backgroundColor: 'success-100', iconColor: 'success-100', icon: 'checkmark' },
  error: { backgroundColor: 'error-100', iconColor: 'error-100', icon: 'close' }
}
let _ = class extends v {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.timeout = void 0),
      (this.open = N.state.open),
      this.unsubscribe.push(
        N.subscribeKey('open', e => {
          ;(this.open = e), this.onOpen()
        })
      )
  }
  disconnectedCallback() {
    clearTimeout(this.timeout), this.unsubscribe.forEach(e => e())
  }
  render() {
    const { message: e, variant: t, svg: i } = N.state,
      n = ve[t],
      { icon: o, iconColor: a } = i ?? n ?? {}
    return c`
      <wui-snackbar
        message=${e}
        backgroundColor=${n == null ? void 0 : n.backgroundColor}
        iconColor=${a}
        icon=${o}
        .loading=${t === 'loading'}
      ></wui-snackbar>
    `
  }
  onOpen() {
    clearTimeout(this.timeout),
      this.open
        ? (this.animate(
            [
              { opacity: 0, transform: 'translateX(-50%) scale(0.85)' },
              { opacity: 1, transform: 'translateX(-50%) scale(1)' }
            ],
            { duration: 150, fill: 'forwards', easing: 'ease' }
          ),
          this.timeout && clearTimeout(this.timeout),
          N.state.autoClose && (this.timeout = setTimeout(() => N.hide(), 2500)))
        : this.animate(
            [
              { opacity: 1, transform: 'translateX(-50%) scale(1)' },
              { opacity: 0, transform: 'translateX(-50%) scale(0.85)' }
            ],
            { duration: 150, fill: 'forwards', easing: 'ease' }
          )
  }
}
_.styles = ge
Z([d()], _.prototype, 'open', void 0)
_ = Z([y('w3m-snackbar')], _)
const ye = g`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`
var S = function (s, e, t, i) {
  var n = arguments.length,
    o = n < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    a
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    o = Reflect.decorate(s, e, t, i)
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (o = (n < 3 ? a(o) : n > 3 ? a(e, t, o) : a(e, t)) || o)
  return n > 3 && o && Object.defineProperty(e, t, o), o
}
const F = 'scroll-lock'
let b = class extends v {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.abortController = void 0),
      (this.hasPrefetched = !1),
      (this.enableEmbedded = O.state.enableEmbedded),
      (this.open = h.state.open),
      (this.caipAddress = w.state.activeCaipAddress),
      (this.caipNetwork = w.state.activeCaipNetwork),
      (this.shake = h.state.shake),
      (this.filterByNamespace = K.state.filterByNamespace),
      this.initializeTheming(),
      D.prefetchAnalyticsConfig(),
      this.unsubscribe.push(
        h.subscribeKey('open', e => (e ? this.onOpen() : this.onClose())),
        h.subscribeKey('shake', e => (this.shake = e)),
        w.subscribeKey('activeCaipNetwork', e => this.onNewNetwork(e)),
        w.subscribeKey('activeCaipAddress', e => this.onNewAddress(e)),
        O.subscribeKey('enableEmbedded', e => (this.enableEmbedded = e)),
        K.subscribeKey('filterByNamespace', e => {
          this.filterByNamespace !== e &&
            (D.fetchRecommendedWallets(), (this.filterByNamespace = e))
        })
      )
  }
  firstUpdated() {
    if (this.caipAddress) {
      if (this.enableEmbedded) {
        h.close(), this.prefetch()
        return
      }
      this.onNewAddress(this.caipAddress)
    }
    this.open && this.onOpen(), this.enableEmbedded && this.prefetch()
  }
  disconnectedCallback() {
    this.unsubscribe.forEach(e => e()), this.onRemoveKeyboardListener()
  }
  render() {
    return (
      (this.style.cssText = `
      --local-border-bottom-mobile-radius: ${this.enableEmbedded ? 'clamp(0px, var(--wui-border-radius-l), 44px)' : '0px'};
    `),
      this.enableEmbedded
        ? c`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `
        : this.open
          ? c`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `
          : null
    )
  }
  contentTemplate() {
    return c` <wui-card
      shake="${this.shake}"
      data-embedded="${H(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`
  }
  async onOverlayClick(e) {
    e.target === e.currentTarget && (await this.handleClose())
  }
  async handleClose() {
    l.state.view === 'UnsupportedChain' || (await z.isSIWXCloseDisabled()) ? h.shake() : h.close()
  }
  initializeTheming() {
    const { themeVariables: e, themeMode: t } = ne.state,
      i = ce.getColorTheme(t)
    ae(e, i)
  }
  onClose() {
    ;(this.open = !1),
      this.classList.remove('open'),
      this.onScrollUnlock(),
      N.hide(),
      this.onRemoveKeyboardListener()
  }
  onOpen() {
    ;(this.open = !0), this.classList.add('open'), this.onScrollLock(), this.onAddKeyboardListener()
  }
  onScrollLock() {
    const e = document.createElement('style')
    ;(e.dataset.w3m = F),
      (e.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `),
      document.head.appendChild(e)
  }
  onScrollUnlock() {
    const e = document.head.querySelector(`style[data-w3m="${F}"]`)
    e && e.remove()
  }
  onAddKeyboardListener() {
    var t
    this.abortController = new AbortController()
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector('wui-card')
    e == null || e.focus(),
      window.addEventListener(
        'keydown',
        i => {
          if (i.key === 'Escape') this.handleClose()
          else if (i.key === 'Tab') {
            const { tagName: n } = i.target
            n && !n.includes('W3M-') && !n.includes('WUI-') && (e == null || e.focus())
          }
        },
        this.abortController
      )
  }
  onRemoveKeyboardListener() {
    var e
    ;(e = this.abortController) == null || e.abort(), (this.abortController = void 0)
  }
  async onNewAddress(e) {
    const t = w.state.isSwitchingNamespace,
      i = se.getPlainAddress(e)
    !i && !t ? h.close() : t && i && l.goBack(),
      await z.initializeIfEnabled(),
      (this.caipAddress = e),
      w.setIsSwitchingNamespace(!1)
  }
  onNewNetwork(e) {
    var $, M, V, G
    const t =
        (M = ($ = this.caipNetwork) == null ? void 0 : $.caipNetworkId) == null
          ? void 0
          : M.toString(),
      i = (V = e == null ? void 0 : e.caipNetworkId) == null ? void 0 : V.toString(),
      n = t && i && t !== i,
      o = w.state.isSwitchingNamespace,
      a = ((G = this.caipNetwork) == null ? void 0 : G.name) === re.UNSUPPORTED_NETWORK_NAME,
      r = l.state.view === 'ConnectingExternal',
      C = !this.caipAddress,
      A = n && !a && !o,
      W = l.state.view === 'UnsupportedChain'
    !r && (C || W || A) && l.goBack(), (this.caipNetwork = e)
  }
  prefetch() {
    this.hasPrefetched || ((this.hasPrefetched = !0), D.prefetch())
  }
}
b.styles = ye
S([p({ type: Boolean })], b.prototype, 'enableEmbedded', void 0)
S([d()], b.prototype, 'open', void 0)
S([d()], b.prototype, 'caipAddress', void 0)
S([d()], b.prototype, 'caipNetwork', void 0)
S([d()], b.prototype, 'shake', void 0)
S([d()], b.prototype, 'filterByNamespace', void 0)
b = S([y('w3m-modal')], b)
export { b as W3mModal }
