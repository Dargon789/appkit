import {
  aA as B,
  ar as H,
  O as L,
  ax as M,
  N as P,
  X as R,
  Q as S,
  aB as T,
  L as i,
  az as k
} from './cxC4FtgZ.js'

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './BbP-hEFG.js',
      './cxC4FtgZ.js',
      './entry.Cx-OmKng.css',
      './Bu1y7ZvE.js',
      './V3n0z7m4.js',
      './xAaN_W9I.js',
      './Cpe6WJ2w.js',
      './CD9jWIZq.js',
      './CevBADIP.js',
      './Bd3P--xK.js',
      './BfvJ8NtM.js',
      './CetHVGyk.js',
      './CmRul3TV.js',
      './CETXELWp.js',
      './CHu6FcGb.js',
      './DMmznrCJ.js',
      './BbttegrB.js',
      './CQ6tgZ8t.js',
      './5ZDNT6bg.js',
      './C0DUu13s.js',
      './CwpgzaFa.js',
      './C6nqPw7S.js',
      './q7LH_sc7.js',
      './BO_w3CPq.js',
      './D6gTDJWa.js',
      './D__120j4.js',
      './EunpjBDL.js',
      './CMVI2wn4.js',
      './CFkMR7n6.js',
      './DO1U3luj.js',
      './DYd4QaDw.js',
      './CvHol2i2.js',
      './B9MVqPhj.js',
      './BRruepQv.js',
      './Ug8ZDQa0.js',
      './DvdvKhFx.js',
      './Dr48I02n.js',
      './DE_Ahnnk.js',
      './uJPY_b1H.js',
      './6surf6vW.js',
      './h4DEfw-F.js',
      './VQP8sOmQ.js',
      './CQRVV0P-.js',
      './BP9qhT-w.js',
      './DDToIG5x.js',
      './DXIL98Rr.js',
      './a02vgX0p.js',
      './izv-H4qH.js',
      './6fpIlC2J.js',
      './D6gN-Gn1.js',
      './t1yKAool.js',
      './5BlAJnae.js',
      './DUr6j54m.js',
      './BkCJkiIw.js',
      './CE7BnKrj.js',
      './DDvIt2L5.js',
      './kAscIXJ-.js',
      './DMCoa0gc.js',
      './EM77A2ny.js',
      './Cq_bG9Of.js',
      './DDxhWwys.js',
      './BCqdsmBo.js',
      './Rk8ZSUvC.js',
      './Bf0mjICr.js',
      './hQFRQDIh.js',
      './BG0BBF4b.js',
      './dwoHihWO.js',
      './nYNZo_fH.js',
      './D_IBYiRG.js',
      './it-d7mJp.js',
      './DkJuTEAU.js',
      './B6jul13s.js',
      './CQSEJbkz.js',
      './B59Rpx9D.js',
      './CcRQK-lk.js',
      './DIzh3KHs.js'
    ])
) => i.map(i => d[i])
const w = {
  getSpacingStyles(t, e) {
    if (Array.isArray(t)) return t[e] ? `var(--wui-spacing-${t[e]})` : void 0
    if (typeof t == 'string') return `var(--wui-spacing-${t})`
  },
  getFormattedDate(t) {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(t)
  },
  getHostName(t) {
    try {
      return new URL(t).hostname
    } catch {
      return ''
    }
  },
  getTruncateString({ string: t, charsStart: e, charsEnd: r, truncate: o }) {
    return t.length <= e + r
      ? t
      : o === 'end'
        ? `${t.substring(0, e)}...`
        : o === 'start'
          ? `...${t.substring(t.length - r)}`
          : `${t.substring(0, Math.floor(e))}...${t.substring(t.length - Math.floor(r))}`
  },
  generateAvatarColors(t) {
    const r = t
        .toLowerCase()
        .replace(/^0x/iu, '')
        .replace(/[^a-f0-9]/gu, '')
        .substring(0, 6)
        .padEnd(6, '0'),
      o = this.hexToRgb(r),
      n = getComputedStyle(document.documentElement).getPropertyValue('--w3m-border-radius-master'),
      s = 100 - 3 * Number(n == null ? void 0 : n.replace('px', '')),
      c = `${s}% ${s}% at 65% 40%`,
      u = []
    for (let v = 0; v < 5; v += 1) {
      const m = this.tintColor(o, 0.15 * v)
      u.push(`rgb(${m[0]}, ${m[1]}, ${m[2]})`)
    }
    return `
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${c}
   `
  },
  hexToRgb(t) {
    const e = parseInt(t, 16),
      r = (e >> 16) & 255,
      o = (e >> 8) & 255,
      n = e & 255
    return [r, o, n]
  },
  tintColor(t, e) {
    const [r, o, n] = t,
      a = Math.round(r + (255 - r) * e),
      s = Math.round(o + (255 - o) * e),
      c = Math.round(n + (255 - n) * e)
    return [a, s, c]
  },
  isNumber(t) {
    return { number: /^[0-9]+$/u }.number.test(t)
  },
  getColorTheme(t) {
    var e
    return (
      t ||
      (typeof window < 'u' && window.matchMedia
        ? (e = window.matchMedia('(prefers-color-scheme: dark)')) != null && e.matches
          ? 'dark'
          : 'light'
        : 'dark')
    )
  },
  splitBalance(t) {
    const e = t.split('.')
    return e.length === 2 ? [e[0], e[1]] : ['0', '00']
  },
  roundNumber(t, e, r) {
    return t.toString().length >= e ? Number(t).toFixed(r) : t
  },
  formatNumberToLocalString(t, e = 2) {
    return t === void 0
      ? '0.00'
      : typeof t == 'number'
        ? t.toLocaleString('en-US', { maximumFractionDigits: e, minimumFractionDigits: e })
        : parseFloat(t).toLocaleString('en-US', {
            maximumFractionDigits: e,
            minimumFractionDigits: e
          })
  }
}
function j(t, e) {
  const { kind: r, elements: o } = e
  return {
    kind: r,
    elements: o,
    finisher(n) {
      customElements.get(t) || customElements.define(t, n)
    }
  }
}
function U(t, e) {
  return customElements.get(t) || customElements.define(t, e), e
}
function I(t) {
  return function (r) {
    return typeof r == 'function' ? U(t, r) : j(t, r)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const F = { attribute: !0, type: String, converter: B, reflect: !1, hasChanged: k },
  N = (t = F, e, r) => {
    const { kind: o, metadata: n } = r
    let a = globalThis.litPropertyMetadata.get(n)
    if (
      (a === void 0 && globalThis.litPropertyMetadata.set(n, (a = new Map())),
      a.set(r.name, t),
      o === 'accessor')
    ) {
      const { name: s } = r
      return {
        set(c) {
          const u = e.get.call(this)
          e.set.call(this, c), this.requestUpdate(s, u, t)
        },
        init(c) {
          return c !== void 0 && this.P(s, void 0, t), c
        }
      }
    }
    if (o === 'setter') {
      const { name: s } = r
      return function (c) {
        const u = this[s]
        e.call(this, c), this.requestUpdate(s, u, t)
      }
    }
    throw Error('Unsupported decorator location: ' + o)
  }
function l(t) {
  return (e, r) =>
    typeof r == 'object'
      ? N(t, e, r)
      : ((o, n, a) => {
          const s = n.hasOwnProperty(a)
          return (
            n.constructor.createProperty(a, s ? { ...o, wrapped: !0 } : o),
            s ? Object.getOwnPropertyDescriptor(n, a) : void 0
          )
        })(t, e, r)
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function ct(t) {
  return l({ ...t, state: !0, attribute: !1 })
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const W = t => t === null || (typeof t != 'object' && typeof t != 'function'),
  q = t => t.strings === void 0
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const V = { ATTRIBUTE: 1, CHILD: 2 },
  C =
    t =>
    (...e) => ({ _$litDirective$: t, values: e })
let x = class {
  constructor(e) {}
  get _$AU() {
    return this._$AM._$AU
  }
  _$AT(e, r, o) {
    ;(this._$Ct = e), (this._$AM = r), (this._$Ci = o)
  }
  _$AS(e, r) {
    return this.update(e, r)
  }
  update(e, r) {
    return this.render(...r)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const h = (t, e) => {
    var o
    const r = t._$AN
    if (r === void 0) return !1
    for (const n of r) (o = n._$AO) == null || o.call(n, e, !1), h(n, e)
    return !0
  },
  E = t => {
    let e, r
    do {
      if ((e = t._$AM) === void 0) break
      ;(r = e._$AN), r.delete(t), (t = e)
    } while ((r == null ? void 0 : r.size) === 0)
  },
  z = t => {
    for (let e; (e = t._$AM); t = e) {
      let r = e._$AN
      if (r === void 0) e._$AN = r = new Set()
      else if (r.has(t)) break
      r.add(t), K(e)
    }
  }
function G(t) {
  this._$AN !== void 0 ? (E(this), (this._$AM = t), z(this)) : (this._$AM = t)
}
function X(t, e = !1, r = 0) {
  const o = this._$AH,
    n = this._$AN
  if (n !== void 0 && n.size !== 0)
    if (e)
      if (Array.isArray(o)) for (let a = r; a < o.length; a++) h(o[a], !1), E(o[a])
      else o != null && (h(o, !1), E(o))
    else h(this, t)
}
const K = t => {
  t.type == V.CHILD && (t._$AP ?? (t._$AP = X), t._$AQ ?? (t._$AQ = G))
}
class Y extends x {
  constructor() {
    super(...arguments), (this._$AN = void 0)
  }
  _$AT(e, r, o) {
    super._$AT(e, r, o), z(this), (this.isConnected = e._$AU)
  }
  _$AO(e, r = !0) {
    var o, n
    e !== this.isConnected &&
      ((this.isConnected = e),
      e
        ? (o = this.reconnected) == null || o.call(this)
        : (n = this.disconnected) == null || n.call(this)),
      r && (h(this, e), E(this))
  }
  setValue(e) {
    if (q(this._$Ct)) this._$Ct._$AI(e, this)
    else {
      const r = [...this._$Ct._$AH]
      ;(r[this._$Ci] = e), this._$Ct._$AI(r, this, 0)
    }
  }
  disconnected() {}
  reconnected() {}
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class Z {
  constructor(e) {
    this.Y = e
  }
  disconnect() {
    this.Y = void 0
  }
  reconnect(e) {
    this.Y = e
  }
  deref() {
    return this.Y
  }
}
class Q {
  constructor() {
    ;(this.Z = void 0), (this.q = void 0)
  }
  get() {
    return this.Z
  }
  pause() {
    this.Z ?? (this.Z = new Promise(e => (this.q = e)))
  }
  resume() {
    var e
    ;(e = this.q) == null || e.call(this), (this.Z = this.q = void 0)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const D = t => !W(t) && typeof t.then == 'function',
  O = 1073741823
class J extends Y {
  constructor() {
    super(...arguments),
      (this._$Cwt = O),
      (this._$Cbt = []),
      (this._$CK = new Z(this)),
      (this._$CX = new Q())
  }
  render(...e) {
    return e.find(r => !D(r)) ?? T
  }
  update(e, r) {
    const o = this._$Cbt
    let n = o.length
    this._$Cbt = r
    const a = this._$CK,
      s = this._$CX
    this.isConnected || this.disconnected()
    for (let c = 0; c < r.length && !(c > this._$Cwt); c++) {
      const u = r[c]
      if (!D(u)) return (this._$Cwt = c), u
      ;(c < n && u === o[c]) ||
        ((this._$Cwt = O),
        (n = 0),
        Promise.resolve(u).then(async v => {
          for (; s.get(); ) await s.get()
          const m = a.deref()
          if (m !== void 0) {
            const $ = m._$Cbt.indexOf(u)
            $ > -1 && $ < m._$Cwt && ((m._$Cwt = $), m.setValue(v))
          }
        }))
    }
    return T
  }
  disconnected() {
    this._$CK.disconnect(), this._$CX.pause()
  }
  reconnected() {
    this._$CK.reconnect(this), this._$CX.resume()
  }
}
const tt = C(J)
class et {
  constructor() {
    this.cache = new Map()
  }
  set(e, r) {
    this.cache.set(e, r)
  }
  get(e) {
    return this.cache.get(e)
  }
  has(e) {
    return this.cache.has(e)
  }
  delete(e) {
    this.cache.delete(e)
  }
  clear() {
    this.cache.clear()
  }
}
const A = new et(),
  rt = P`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`
var f = function (t, e, r, o) {
  var n = arguments.length,
    a = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, r)) : o,
    s
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    a = Reflect.decorate(t, e, r, o)
  else
    for (var c = t.length - 1; c >= 0; c--)
      (s = t[c]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, r, a) : s(e, r)) || a)
  return n > 3 && a && Object.defineProperty(e, r, a), a
}
const b = {
  add: async () =>
    (
      await i(
        async () => {
          const { addSvg: t } = await import('./BbP-hEFG.js')
          return { addSvg: t }
        },
        __vite__mapDeps([0, 1, 2]),
        import.meta.url
      )
    ).addSvg,
  allWallets: async () =>
    (
      await i(
        async () => {
          const { allWalletsSvg: t } = await import('./Bu1y7ZvE.js')
          return { allWalletsSvg: t }
        },
        __vite__mapDeps([3, 1, 2]),
        import.meta.url
      )
    ).allWalletsSvg,
  arrowBottomCircle: async () =>
    (
      await i(
        async () => {
          const { arrowBottomCircleSvg: t } = await import('./V3n0z7m4.js')
          return { arrowBottomCircleSvg: t }
        },
        __vite__mapDeps([4, 1, 2]),
        import.meta.url
      )
    ).arrowBottomCircleSvg,
  appStore: async () =>
    (
      await i(
        async () => {
          const { appStoreSvg: t } = await import('./xAaN_W9I.js')
          return { appStoreSvg: t }
        },
        __vite__mapDeps([5, 1, 2]),
        import.meta.url
      )
    ).appStoreSvg,
  apple: async () =>
    (
      await i(
        async () => {
          const { appleSvg: t } = await import('./Cpe6WJ2w.js')
          return { appleSvg: t }
        },
        __vite__mapDeps([6, 1, 2]),
        import.meta.url
      )
    ).appleSvg,
  arrowBottom: async () =>
    (
      await i(
        async () => {
          const { arrowBottomSvg: t } = await import('./CD9jWIZq.js')
          return { arrowBottomSvg: t }
        },
        __vite__mapDeps([7, 1, 2]),
        import.meta.url
      )
    ).arrowBottomSvg,
  arrowLeft: async () =>
    (
      await i(
        async () => {
          const { arrowLeftSvg: t } = await import('./CevBADIP.js')
          return { arrowLeftSvg: t }
        },
        __vite__mapDeps([8, 1, 2]),
        import.meta.url
      )
    ).arrowLeftSvg,
  arrowRight: async () =>
    (
      await i(
        async () => {
          const { arrowRightSvg: t } = await import('./Bd3P--xK.js')
          return { arrowRightSvg: t }
        },
        __vite__mapDeps([9, 1, 2]),
        import.meta.url
      )
    ).arrowRightSvg,
  arrowTop: async () =>
    (
      await i(
        async () => {
          const { arrowTopSvg: t } = await import('./BfvJ8NtM.js')
          return { arrowTopSvg: t }
        },
        __vite__mapDeps([10, 1, 2]),
        import.meta.url
      )
    ).arrowTopSvg,
  bank: async () =>
    (
      await i(
        async () => {
          const { bankSvg: t } = await import('./CetHVGyk.js')
          return { bankSvg: t }
        },
        __vite__mapDeps([11, 1, 2]),
        import.meta.url
      )
    ).bankSvg,
  browser: async () =>
    (
      await i(
        async () => {
          const { browserSvg: t } = await import('./CmRul3TV.js')
          return { browserSvg: t }
        },
        __vite__mapDeps([12, 1, 2]),
        import.meta.url
      )
    ).browserSvg,
  card: async () =>
    (
      await i(
        async () => {
          const { cardSvg: t } = await import('./CETXELWp.js')
          return { cardSvg: t }
        },
        __vite__mapDeps([13, 1, 2]),
        import.meta.url
      )
    ).cardSvg,
  checkmark: async () =>
    (
      await i(
        async () => {
          const { checkmarkSvg: t } = await import('./CHu6FcGb.js')
          return { checkmarkSvg: t }
        },
        __vite__mapDeps([14, 1, 2]),
        import.meta.url
      )
    ).checkmarkSvg,
  checkmarkBold: async () =>
    (
      await i(
        async () => {
          const { checkmarkBoldSvg: t } = await import('./DMmznrCJ.js')
          return { checkmarkBoldSvg: t }
        },
        __vite__mapDeps([15, 1, 2]),
        import.meta.url
      )
    ).checkmarkBoldSvg,
  chevronBottom: async () =>
    (
      await i(
        async () => {
          const { chevronBottomSvg: t } = await import('./BbttegrB.js')
          return { chevronBottomSvg: t }
        },
        __vite__mapDeps([16, 1, 2]),
        import.meta.url
      )
    ).chevronBottomSvg,
  chevronLeft: async () =>
    (
      await i(
        async () => {
          const { chevronLeftSvg: t } = await import('./CQ6tgZ8t.js')
          return { chevronLeftSvg: t }
        },
        __vite__mapDeps([17, 1, 2]),
        import.meta.url
      )
    ).chevronLeftSvg,
  chevronRight: async () =>
    (
      await i(
        async () => {
          const { chevronRightSvg: t } = await import('./5ZDNT6bg.js')
          return { chevronRightSvg: t }
        },
        __vite__mapDeps([18, 1, 2]),
        import.meta.url
      )
    ).chevronRightSvg,
  chevronTop: async () =>
    (
      await i(
        async () => {
          const { chevronTopSvg: t } = await import('./C0DUu13s.js')
          return { chevronTopSvg: t }
        },
        __vite__mapDeps([19, 1, 2]),
        import.meta.url
      )
    ).chevronTopSvg,
  chromeStore: async () =>
    (
      await i(
        async () => {
          const { chromeStoreSvg: t } = await import('./CwpgzaFa.js')
          return { chromeStoreSvg: t }
        },
        __vite__mapDeps([20, 1, 2]),
        import.meta.url
      )
    ).chromeStoreSvg,
  clock: async () =>
    (
      await i(
        async () => {
          const { clockSvg: t } = await import('./C6nqPw7S.js')
          return { clockSvg: t }
        },
        __vite__mapDeps([21, 1, 2]),
        import.meta.url
      )
    ).clockSvg,
  close: async () =>
    (
      await i(
        async () => {
          const { closeSvg: t } = await import('./q7LH_sc7.js')
          return { closeSvg: t }
        },
        __vite__mapDeps([22, 1, 2]),
        import.meta.url
      )
    ).closeSvg,
  compass: async () =>
    (
      await i(
        async () => {
          const { compassSvg: t } = await import('./BO_w3CPq.js')
          return { compassSvg: t }
        },
        __vite__mapDeps([23, 1, 2]),
        import.meta.url
      )
    ).compassSvg,
  coinPlaceholder: async () =>
    (
      await i(
        async () => {
          const { coinPlaceholderSvg: t } = await import('./D6gTDJWa.js')
          return { coinPlaceholderSvg: t }
        },
        __vite__mapDeps([24, 1, 2]),
        import.meta.url
      )
    ).coinPlaceholderSvg,
  copy: async () =>
    (
      await i(
        async () => {
          const { copySvg: t } = await import('./D__120j4.js')
          return { copySvg: t }
        },
        __vite__mapDeps([25, 1, 2]),
        import.meta.url
      )
    ).copySvg,
  cursor: async () =>
    (
      await i(
        async () => {
          const { cursorSvg: t } = await import('./EunpjBDL.js')
          return { cursorSvg: t }
        },
        __vite__mapDeps([26, 1, 2]),
        import.meta.url
      )
    ).cursorSvg,
  cursorTransparent: async () =>
    (
      await i(
        async () => {
          const { cursorTransparentSvg: t } = await import('./CMVI2wn4.js')
          return { cursorTransparentSvg: t }
        },
        __vite__mapDeps([27, 1, 2]),
        import.meta.url
      )
    ).cursorTransparentSvg,
  desktop: async () =>
    (
      await i(
        async () => {
          const { desktopSvg: t } = await import('./CFkMR7n6.js')
          return { desktopSvg: t }
        },
        __vite__mapDeps([28, 1, 2]),
        import.meta.url
      )
    ).desktopSvg,
  disconnect: async () =>
    (
      await i(
        async () => {
          const { disconnectSvg: t } = await import('./DO1U3luj.js')
          return { disconnectSvg: t }
        },
        __vite__mapDeps([29, 1, 2]),
        import.meta.url
      )
    ).disconnectSvg,
  discord: async () =>
    (
      await i(
        async () => {
          const { discordSvg: t } = await import('./DYd4QaDw.js')
          return { discordSvg: t }
        },
        __vite__mapDeps([30, 1, 2]),
        import.meta.url
      )
    ).discordSvg,
  etherscan: async () =>
    (
      await i(
        async () => {
          const { etherscanSvg: t } = await import('./CvHol2i2.js')
          return { etherscanSvg: t }
        },
        __vite__mapDeps([31, 1, 2]),
        import.meta.url
      )
    ).etherscanSvg,
  extension: async () =>
    (
      await i(
        async () => {
          const { extensionSvg: t } = await import('./B9MVqPhj.js')
          return { extensionSvg: t }
        },
        __vite__mapDeps([32, 1, 2]),
        import.meta.url
      )
    ).extensionSvg,
  externalLink: async () =>
    (
      await i(
        async () => {
          const { externalLinkSvg: t } = await import('./BRruepQv.js')
          return { externalLinkSvg: t }
        },
        __vite__mapDeps([33, 1, 2]),
        import.meta.url
      )
    ).externalLinkSvg,
  facebook: async () =>
    (
      await i(
        async () => {
          const { facebookSvg: t } = await import('./Ug8ZDQa0.js')
          return { facebookSvg: t }
        },
        __vite__mapDeps([34, 1, 2]),
        import.meta.url
      )
    ).facebookSvg,
  farcaster: async () =>
    (
      await i(
        async () => {
          const { farcasterSvg: t } = await import('./DvdvKhFx.js')
          return { farcasterSvg: t }
        },
        __vite__mapDeps([35, 1, 2]),
        import.meta.url
      )
    ).farcasterSvg,
  filters: async () =>
    (
      await i(
        async () => {
          const { filtersSvg: t } = await import('./Dr48I02n.js')
          return { filtersSvg: t }
        },
        __vite__mapDeps([36, 1, 2]),
        import.meta.url
      )
    ).filtersSvg,
  github: async () =>
    (
      await i(
        async () => {
          const { githubSvg: t } = await import('./DE_Ahnnk.js')
          return { githubSvg: t }
        },
        __vite__mapDeps([37, 1, 2]),
        import.meta.url
      )
    ).githubSvg,
  google: async () =>
    (
      await i(
        async () => {
          const { googleSvg: t } = await import('./uJPY_b1H.js')
          return { googleSvg: t }
        },
        __vite__mapDeps([38, 1, 2]),
        import.meta.url
      )
    ).googleSvg,
  helpCircle: async () =>
    (
      await i(
        async () => {
          const { helpCircleSvg: t } = await import('./6surf6vW.js')
          return { helpCircleSvg: t }
        },
        __vite__mapDeps([39, 1, 2]),
        import.meta.url
      )
    ).helpCircleSvg,
  image: async () =>
    (
      await i(
        async () => {
          const { imageSvg: t } = await import('./h4DEfw-F.js')
          return { imageSvg: t }
        },
        __vite__mapDeps([40, 1, 2]),
        import.meta.url
      )
    ).imageSvg,
  id: async () =>
    (
      await i(
        async () => {
          const { idSvg: t } = await import('./VQP8sOmQ.js')
          return { idSvg: t }
        },
        __vite__mapDeps([41, 1, 2]),
        import.meta.url
      )
    ).idSvg,
  infoCircle: async () =>
    (
      await i(
        async () => {
          const { infoCircleSvg: t } = await import('./CQRVV0P-.js')
          return { infoCircleSvg: t }
        },
        __vite__mapDeps([42, 1, 2]),
        import.meta.url
      )
    ).infoCircleSvg,
  lightbulb: async () =>
    (
      await i(
        async () => {
          const { lightbulbSvg: t } = await import('./BP9qhT-w.js')
          return { lightbulbSvg: t }
        },
        __vite__mapDeps([43, 1, 2]),
        import.meta.url
      )
    ).lightbulbSvg,
  mail: async () =>
    (
      await i(
        async () => {
          const { mailSvg: t } = await import('./DDToIG5x.js')
          return { mailSvg: t }
        },
        __vite__mapDeps([44, 1, 2]),
        import.meta.url
      )
    ).mailSvg,
  mobile: async () =>
    (
      await i(
        async () => {
          const { mobileSvg: t } = await import('./DXIL98Rr.js')
          return { mobileSvg: t }
        },
        __vite__mapDeps([45, 1, 2]),
        import.meta.url
      )
    ).mobileSvg,
  more: async () =>
    (
      await i(
        async () => {
          const { moreSvg: t } = await import('./a02vgX0p.js')
          return { moreSvg: t }
        },
        __vite__mapDeps([46, 1, 2]),
        import.meta.url
      )
    ).moreSvg,
  networkPlaceholder: async () =>
    (
      await i(
        async () => {
          const { networkPlaceholderSvg: t } = await import('./izv-H4qH.js')
          return { networkPlaceholderSvg: t }
        },
        __vite__mapDeps([47, 1, 2]),
        import.meta.url
      )
    ).networkPlaceholderSvg,
  nftPlaceholder: async () =>
    (
      await i(
        async () => {
          const { nftPlaceholderSvg: t } = await import('./6fpIlC2J.js')
          return { nftPlaceholderSvg: t }
        },
        __vite__mapDeps([48, 1, 2]),
        import.meta.url
      )
    ).nftPlaceholderSvg,
  off: async () =>
    (
      await i(
        async () => {
          const { offSvg: t } = await import('./D6gN-Gn1.js')
          return { offSvg: t }
        },
        __vite__mapDeps([49, 1, 2]),
        import.meta.url
      )
    ).offSvg,
  playStore: async () =>
    (
      await i(
        async () => {
          const { playStoreSvg: t } = await import('./t1yKAool.js')
          return { playStoreSvg: t }
        },
        __vite__mapDeps([50, 1, 2]),
        import.meta.url
      )
    ).playStoreSvg,
  plus: async () =>
    (
      await i(
        async () => {
          const { plusSvg: t } = await import('./5BlAJnae.js')
          return { plusSvg: t }
        },
        __vite__mapDeps([51, 1, 2]),
        import.meta.url
      )
    ).plusSvg,
  qrCode: async () =>
    (
      await i(
        async () => {
          const { qrCodeIcon: t } = await import('./DUr6j54m.js')
          return { qrCodeIcon: t }
        },
        __vite__mapDeps([52, 1, 2]),
        import.meta.url
      )
    ).qrCodeIcon,
  recycleHorizontal: async () =>
    (
      await i(
        async () => {
          const { recycleHorizontalSvg: t } = await import('./BkCJkiIw.js')
          return { recycleHorizontalSvg: t }
        },
        __vite__mapDeps([53, 1, 2]),
        import.meta.url
      )
    ).recycleHorizontalSvg,
  refresh: async () =>
    (
      await i(
        async () => {
          const { refreshSvg: t } = await import('./CE7BnKrj.js')
          return { refreshSvg: t }
        },
        __vite__mapDeps([54, 1, 2]),
        import.meta.url
      )
    ).refreshSvg,
  search: async () =>
    (
      await i(
        async () => {
          const { searchSvg: t } = await import('./DDvIt2L5.js')
          return { searchSvg: t }
        },
        __vite__mapDeps([55, 1, 2]),
        import.meta.url
      )
    ).searchSvg,
  send: async () =>
    (
      await i(
        async () => {
          const { sendSvg: t } = await import('./kAscIXJ-.js')
          return { sendSvg: t }
        },
        __vite__mapDeps([56, 1, 2]),
        import.meta.url
      )
    ).sendSvg,
  swapHorizontal: async () =>
    (
      await i(
        async () => {
          const { swapHorizontalSvg: t } = await import('./DMCoa0gc.js')
          return { swapHorizontalSvg: t }
        },
        __vite__mapDeps([57, 1, 2]),
        import.meta.url
      )
    ).swapHorizontalSvg,
  swapHorizontalMedium: async () =>
    (
      await i(
        async () => {
          const { swapHorizontalMediumSvg: t } = await import('./EM77A2ny.js')
          return { swapHorizontalMediumSvg: t }
        },
        __vite__mapDeps([58, 1, 2]),
        import.meta.url
      )
    ).swapHorizontalMediumSvg,
  swapHorizontalBold: async () =>
    (
      await i(
        async () => {
          const { swapHorizontalBoldSvg: t } = await import('./Cq_bG9Of.js')
          return { swapHorizontalBoldSvg: t }
        },
        __vite__mapDeps([59, 1, 2]),
        import.meta.url
      )
    ).swapHorizontalBoldSvg,
  swapHorizontalRoundedBold: async () =>
    (
      await i(
        async () => {
          const { swapHorizontalRoundedBoldSvg: t } = await import('./DDxhWwys.js')
          return { swapHorizontalRoundedBoldSvg: t }
        },
        __vite__mapDeps([60, 1, 2]),
        import.meta.url
      )
    ).swapHorizontalRoundedBoldSvg,
  swapVertical: async () =>
    (
      await i(
        async () => {
          const { swapVerticalSvg: t } = await import('./BCqdsmBo.js')
          return { swapVerticalSvg: t }
        },
        __vite__mapDeps([61, 1, 2]),
        import.meta.url
      )
    ).swapVerticalSvg,
  telegram: async () =>
    (
      await i(
        async () => {
          const { telegramSvg: t } = await import('./Rk8ZSUvC.js')
          return { telegramSvg: t }
        },
        __vite__mapDeps([62, 1, 2]),
        import.meta.url
      )
    ).telegramSvg,
  threeDots: async () =>
    (
      await i(
        async () => {
          const { threeDotsSvg: t } = await import('./Bf0mjICr.js')
          return { threeDotsSvg: t }
        },
        __vite__mapDeps([63, 1, 2]),
        import.meta.url
      )
    ).threeDotsSvg,
  twitch: async () =>
    (
      await i(
        async () => {
          const { twitchSvg: t } = await import('./hQFRQDIh.js')
          return { twitchSvg: t }
        },
        __vite__mapDeps([64, 1, 2]),
        import.meta.url
      )
    ).twitchSvg,
  twitter: async () =>
    (
      await i(
        async () => {
          const { xSvg: t } = await import('./BG0BBF4b.js')
          return { xSvg: t }
        },
        __vite__mapDeps([65, 1, 2]),
        import.meta.url
      )
    ).xSvg,
  twitterIcon: async () =>
    (
      await i(
        async () => {
          const { twitterIconSvg: t } = await import('./dwoHihWO.js')
          return { twitterIconSvg: t }
        },
        __vite__mapDeps([66, 1, 2]),
        import.meta.url
      )
    ).twitterIconSvg,
  verify: async () =>
    (
      await i(
        async () => {
          const { verifySvg: t } = await import('./nYNZo_fH.js')
          return { verifySvg: t }
        },
        __vite__mapDeps([67, 1, 2]),
        import.meta.url
      )
    ).verifySvg,
  verifyFilled: async () =>
    (
      await i(
        async () => {
          const { verifyFilledSvg: t } = await import('./D_IBYiRG.js')
          return { verifyFilledSvg: t }
        },
        __vite__mapDeps([68, 1, 2]),
        import.meta.url
      )
    ).verifyFilledSvg,
  wallet: async () =>
    (
      await i(
        async () => {
          const { walletSvg: t } = await import('./it-d7mJp.js')
          return { walletSvg: t }
        },
        __vite__mapDeps([69, 1, 2]),
        import.meta.url
      )
    ).walletSvg,
  walletConnect: async () =>
    (
      await i(
        async () => {
          const { walletConnectSvg: t } = await import('./DkJuTEAU.js')
          return { walletConnectSvg: t }
        },
        __vite__mapDeps([70, 1, 2]),
        import.meta.url
      )
    ).walletConnectSvg,
  walletConnectLightBrown: async () =>
    (
      await i(
        async () => {
          const { walletConnectLightBrownSvg: t } = await import('./DkJuTEAU.js')
          return { walletConnectLightBrownSvg: t }
        },
        __vite__mapDeps([70, 1, 2]),
        import.meta.url
      )
    ).walletConnectLightBrownSvg,
  walletConnectBrown: async () =>
    (
      await i(
        async () => {
          const { walletConnectBrownSvg: t } = await import('./DkJuTEAU.js')
          return { walletConnectBrownSvg: t }
        },
        __vite__mapDeps([70, 1, 2]),
        import.meta.url
      )
    ).walletConnectBrownSvg,
  walletPlaceholder: async () =>
    (
      await i(
        async () => {
          const { walletPlaceholderSvg: t } = await import('./B6jul13s.js')
          return { walletPlaceholderSvg: t }
        },
        __vite__mapDeps([71, 1, 2]),
        import.meta.url
      )
    ).walletPlaceholderSvg,
  warningCircle: async () =>
    (
      await i(
        async () => {
          const { warningCircleSvg: t } = await import('./CQSEJbkz.js')
          return { warningCircleSvg: t }
        },
        __vite__mapDeps([72, 1, 2]),
        import.meta.url
      )
    ).warningCircleSvg,
  x: async () =>
    (
      await i(
        async () => {
          const { xSvg: t } = await import('./BG0BBF4b.js')
          return { xSvg: t }
        },
        __vite__mapDeps([65, 1, 2]),
        import.meta.url
      )
    ).xSvg,
  info: async () =>
    (
      await i(
        async () => {
          const { infoSvg: t } = await import('./B59Rpx9D.js')
          return { infoSvg: t }
        },
        __vite__mapDeps([73, 1, 2]),
        import.meta.url
      )
    ).infoSvg,
  exclamationTriangle: async () =>
    (
      await i(
        async () => {
          const { exclamationTriangleSvg: t } = await import('./CcRQK-lk.js')
          return { exclamationTriangleSvg: t }
        },
        __vite__mapDeps([74, 1, 2]),
        import.meta.url
      )
    ).exclamationTriangleSvg,
  reown: async () =>
    (
      await i(
        async () => {
          const { reownSvg: t } = await import('./DIzh3KHs.js')
          return { reownSvg: t }
        },
        __vite__mapDeps([75, 1, 2]),
        import.meta.url
      )
    ).reownSvg
}
async function it(t) {
  if (A.has(t)) return A.get(t)
  const r = (b[t] ?? b.copy)()
  return A.set(t, r), r
}
let g = class extends L {
  constructor() {
    super(...arguments),
      (this.size = 'md'),
      (this.name = 'copy'),
      (this.color = 'fg-300'),
      (this.aspectRatio = '1 / 1')
  }
  render() {
    return (
      (this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `),
      S`${tt(it(this.name), S`<div class="fallback"></div>`)}`
    )
  }
}
g.styles = [R, H, rt]
f([l()], g.prototype, 'size', void 0)
f([l()], g.prototype, 'name', void 0)
f([l()], g.prototype, 'color', void 0)
f([l()], g.prototype, 'aspectRatio', void 0)
g = f([I('wui-icon')], g)
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const at = C(
    class extends x {
      constructor(t) {
        var e
        if (
          (super(t),
          t.type !== V.ATTRIBUTE ||
            t.name !== 'class' ||
            ((e = t.strings) == null ? void 0 : e.length) > 2)
        )
          throw Error(
            '`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.'
          )
      }
      render(t) {
        return (
          ' ' +
          Object.keys(t)
            .filter(e => t[e])
            .join(' ') +
          ' '
        )
      }
      update(t, [e]) {
        var o, n
        if (this.st === void 0) {
          ;(this.st = new Set()),
            t.strings !== void 0 &&
              (this.nt = new Set(
                t.strings
                  .join(' ')
                  .split(/\s/)
                  .filter(a => a !== '')
              ))
          for (const a in e) e[a] && !((o = this.nt) != null && o.has(a)) && this.st.add(a)
          return this.render(e)
        }
        const r = t.element.classList
        for (const a of this.st) a in e || (r.remove(a), this.st.delete(a))
        for (const a in e) {
          const s = !!e[a]
          s === this.st.has(a) ||
            ((n = this.nt) != null && n.has(a)) ||
            (s ? (r.add(a), this.st.add(a)) : (r.remove(a), this.st.delete(a)))
        }
        return T
      }
    }
  ),
  ot = P`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`
var y = function (t, e, r, o) {
  var n = arguments.length,
    a = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, r)) : o,
    s
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    a = Reflect.decorate(t, e, r, o)
  else
    for (var c = t.length - 1; c >= 0; c--)
      (s = t[c]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, r, a) : s(e, r)) || a)
  return n > 3 && a && Object.defineProperty(e, r, a), a
}
let d = class extends L {
  constructor() {
    super(...arguments),
      (this.variant = 'paragraph-500'),
      (this.color = 'fg-300'),
      (this.align = 'left'),
      (this.lineClamp = void 0)
  }
  render() {
    const e = {
      [`wui-font-${this.variant}`]: !0,
      [`wui-color-${this.color}`]: !0,
      [`wui-line-clamp-${this.lineClamp}`]: !!this.lineClamp
    }
    return (
      (this.style.cssText = `
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `),
      S`<slot class=${at(e)}></slot>`
    )
  }
}
d.styles = [R, ot]
y([l()], d.prototype, 'variant', void 0)
y([l()], d.prototype, 'color', void 0)
y([l()], d.prototype, 'align', void 0)
y([l()], d.prototype, 'lineClamp', void 0)
d = y([I('wui-text')], d)
const nt = P`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`
var p = function (t, e, r, o) {
  var n = arguments.length,
    a = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, r)) : o,
    s
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    a = Reflect.decorate(t, e, r, o)
  else
    for (var c = t.length - 1; c >= 0; c--)
      (s = t[c]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, r, a) : s(e, r)) || a)
  return n > 3 && a && Object.defineProperty(e, r, a), a
}
let _ = class extends L {
  render() {
    return (
      (this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && w.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && w.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && w.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && w.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && w.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && w.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && w.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && w.getSpacingStyles(this.margin, 3)};
    `),
      S`<slot></slot>`
    )
  }
}
_.styles = [R, nt]
p([l()], _.prototype, 'flexDirection', void 0)
p([l()], _.prototype, 'flexWrap', void 0)
p([l()], _.prototype, 'flexBasis', void 0)
p([l()], _.prototype, 'flexGrow', void 0)
p([l()], _.prototype, 'flexShrink', void 0)
p([l()], _.prototype, 'alignItems', void 0)
p([l()], _.prototype, 'justifyContent', void 0)
p([l()], _.prototype, 'columnGap', void 0)
p([l()], _.prototype, 'rowGap', void 0)
p([l()], _.prototype, 'gap', void 0)
p([l()], _.prototype, 'padding', void 0)
p([l()], _.prototype, 'margin', void 0)
_ = p([I('wui-flex')], _)
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const mt = t => t ?? M
export { w as U, C as a, I as c, at as e, Y as f, l as n, mt as o, ct as r }
