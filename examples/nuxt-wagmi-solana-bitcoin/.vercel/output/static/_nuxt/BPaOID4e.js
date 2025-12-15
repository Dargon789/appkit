import { _ as A, d as Ie, c as J, E as he, y as wt } from './B-K-_OwG.js'
import { aQ as bt, aN as ft, aO as gt, aM as ht, aP as mt, aw as pt } from './cxC4FtgZ.js'

import { E as he, _ as A, c as J, d as Ie, y as wt } from './B-K-_OwG.js'
class B {
  constructor(e, t) {
    ;(this.scope = e), (this.module = t)
  }
  storeObject(e, t) {
    this.setItem(e, JSON.stringify(t))
  }
  loadObject(e) {
    const t = this.getItem(e)
    return t ? JSON.parse(t) : void 0
  }
  setItem(e, t) {
    localStorage.setItem(this.scopedKey(e), t)
  }
  getItem(e) {
    return localStorage.getItem(this.scopedKey(e))
  }
  removeItem(e) {
    localStorage.removeItem(this.scopedKey(e))
  }
  clear() {
    const e = this.scopedKey(''),
      t = []
    for (let s = 0; s < localStorage.length; s++) {
      const r = localStorage.key(s)
      typeof r == 'string' && r.startsWith(e) && t.push(r)
    }
    t.forEach(s => localStorage.removeItem(s))
  }
  scopedKey(e) {
    return `-${this.scope}${this.module ? `:${this.module}` : ''}:${e}`
  }
  static clearAll() {
    new B('CBWSDK').clear(), new B('walletlink').clear()
  }
}
const R = {
    rpc: {
      invalidInput: -32e3,
      resourceNotFound: -32001,
      resourceUnavailable: -32002,
      transactionRejected: -32003,
      methodNotSupported: -32004,
      limitExceeded: -32005,
      parse: -32700,
      invalidRequest: -32600,
      methodNotFound: -32601,
      invalidParams: -32602,
      internal: -32603
    },
    provider: {
      userRejectedRequest: 4001,
      unauthorized: 4100,
      unsupportedMethod: 4200,
      disconnected: 4900,
      chainDisconnected: 4901,
      unsupportedChain: 4902
    }
  },
  fe = {
    '-32700': {
      standard: 'JSON RPC 2.0',
      message:
        'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
    },
    '-32600': { standard: 'JSON RPC 2.0', message: 'The JSON sent is not a valid Request object.' },
    '-32601': {
      standard: 'JSON RPC 2.0',
      message: 'The method does not exist / is not available.'
    },
    '-32602': { standard: 'JSON RPC 2.0', message: 'Invalid method parameter(s).' },
    '-32603': { standard: 'JSON RPC 2.0', message: 'Internal JSON-RPC error.' },
    '-32000': { standard: 'EIP-1474', message: 'Invalid input.' },
    '-32001': { standard: 'EIP-1474', message: 'Resource not found.' },
    '-32002': { standard: 'EIP-1474', message: 'Resource unavailable.' },
    '-32003': { standard: 'EIP-1474', message: 'Transaction rejected.' },
    '-32004': { standard: 'EIP-1474', message: 'Method not supported.' },
    '-32005': { standard: 'EIP-1474', message: 'Request limit exceeded.' },
    4001: { standard: 'EIP-1193', message: 'User rejected the request.' },
    4100: {
      standard: 'EIP-1193',
      message: 'The requested account and/or method has not been authorized by the user.'
    },
    4200: {
      standard: 'EIP-1193',
      message: 'The requested method is not supported by this Ethereum provider.'
    },
    4900: { standard: 'EIP-1193', message: 'The provider is disconnected from all chains.' },
    4901: {
      standard: 'EIP-1193',
      message: 'The provider is disconnected from the specified chain.'
    },
    4902: { standard: 'EIP-3085', message: 'Unrecognized chain ID.' }
  },
  Fe = 'Unspecified error message.',
  yt = 'Unspecified server error.'
function be(n, e = Fe) {
  if (n && Number.isInteger(n)) {
    const t = n.toString()
    if (pe(fe, t)) return fe[t].message
    if (Ge(n)) return yt
  }
  return e
}
function kt(n) {
  if (!Number.isInteger(n)) return !1
  const e = n.toString()
  return !!(fe[e] || Ge(n))
}
function vt(n, { shouldIncludeStack: e = !1 } = {}) {
  const t = {}
  if (n && typeof n == 'object' && !Array.isArray(n) && pe(n, 'code') && kt(n.code)) {
    const s = n
    ;(t.code = s.code),
      s.message && typeof s.message == 'string'
        ? ((t.message = s.message), pe(s, 'data') && (t.data = s.data))
        : ((t.message = be(t.code)), (t.data = { originalError: Se(n) }))
  } else
    (t.code = R.rpc.internal),
      (t.message = Ce(n, 'message') ? n.message : Fe),
      (t.data = { originalError: Se(n) })
  return e && (t.stack = Ce(n, 'stack') ? n.stack : void 0), t
}
function Ge(n) {
  return n >= -32099 && n <= -32e3
}
function Se(n) {
  return n && typeof n == 'object' && !Array.isArray(n) ? Object.assign({}, n) : n
}
function pe(n, e) {
  return Object.prototype.hasOwnProperty.call(n, e)
}
function Ce(n, e) {
  return typeof n == 'object' && n !== null && e in n && typeof n[e] == 'string'
}
const S = {
  rpc: {
    parse: n => D(R.rpc.parse, n),
    invalidRequest: n => D(R.rpc.invalidRequest, n),
    invalidParams: n => D(R.rpc.invalidParams, n),
    methodNotFound: n => D(R.rpc.methodNotFound, n),
    internal: n => D(R.rpc.internal, n),
    server: n => {
      if (!n || typeof n != 'object' || Array.isArray(n))
        throw new Error('Ethereum RPC Server errors must provide single object argument.')
      const { code: e } = n
      if (!Number.isInteger(e) || e > -32005 || e < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005')
      return D(e, n)
    },
    invalidInput: n => D(R.rpc.invalidInput, n),
    resourceNotFound: n => D(R.rpc.resourceNotFound, n),
    resourceUnavailable: n => D(R.rpc.resourceUnavailable, n),
    transactionRejected: n => D(R.rpc.transactionRejected, n),
    methodNotSupported: n => D(R.rpc.methodNotSupported, n),
    limitExceeded: n => D(R.rpc.limitExceeded, n)
  },
  provider: {
    userRejectedRequest: n => G(R.provider.userRejectedRequest, n),
    unauthorized: n => G(R.provider.unauthorized, n),
    unsupportedMethod: n => G(R.provider.unsupportedMethod, n),
    disconnected: n => G(R.provider.disconnected, n),
    chainDisconnected: n => G(R.provider.chainDisconnected, n),
    unsupportedChain: n => G(R.provider.unsupportedChain, n),
    custom: n => {
      if (!n || typeof n != 'object' || Array.isArray(n))
        throw new Error('Ethereum Provider custom errors must provide single object argument.')
      const { code: e, message: t, data: s } = n
      if (!t || typeof t != 'string') throw new Error('"message" must be a nonempty string')
      return new Je(e, t, s)
    }
  }
}
function D(n, e) {
  const [t, s] = Ye(e)
  return new $e(n, t || be(n), s)
}
function G(n, e) {
  const [t, s] = Ye(e)
  return new Je(n, t || be(n), s)
}
function Ye(n) {
  if (n) {
    if (typeof n == 'string') return [n]
    if (typeof n == 'object' && !Array.isArray(n)) {
      const { message: e, data: t } = n
      if (e && typeof e != 'string') throw new Error('Must specify string message.')
      return [e || void 0, t]
    }
  }
  return []
}
class $e extends Error {
  constructor(e, t, s) {
    if (!Number.isInteger(e)) throw new Error('"code" must be an integer.')
    if (!t || typeof t != 'string') throw new Error('"message" must be a nonempty string.')
    super(t), (this.code = e), s !== void 0 && (this.data = s)
  }
}
class Je extends $e {
  constructor(e, t, s) {
    if (!Et(e)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999')
    super(e, t, s)
  }
}
function Et(n) {
  return Number.isInteger(n) && n >= 1e3 && n <= 4999
}
function we() {
  return n => n
}
const Z = we(),
  It = we(),
  St = we()
function W(n) {
  return Math.floor(n)
}
const Ve = /^[0-9]*$/,
  Qe = /^[a-f0-9]*$/
function F(n) {
  return ye(crypto.getRandomValues(new Uint8Array(n)))
}
function ye(n) {
  return [...n].map(e => e.toString(16).padStart(2, '0')).join('')
}
function ne(n) {
  return new Uint8Array(n.match(/.{1,2}/g).map(e => Number.parseInt(e, 16)))
}
function V(n, e = !1) {
  const t = n.toString('hex')
  return Z(e ? `0x${t}` : t)
}
function re(n) {
  return V(ge(n), !0)
}
function U(n) {
  return St(n.toString(10))
}
function z(n) {
  return Z(`0x${BigInt(n).toString(16)}`)
}
function Ze(n) {
  return n.startsWith('0x') || n.startsWith('0X')
}
function ke(n) {
  return Ze(n) ? n.slice(2) : n
}
function Xe(n) {
  return Ze(n) ? `0x${n.slice(2)}` : `0x${n}`
}
function se(n) {
  if (typeof n != 'string') return !1
  const e = ke(n).toLowerCase()
  return Qe.test(e)
}
function Ct(n, e = !1) {
  if (typeof n == 'string') {
    const t = ke(n).toLowerCase()
    if (Qe.test(t)) return Z(e ? `0x${t}` : t)
  }
  throw S.rpc.invalidParams(`"${String(n)}" is not a hexadecimal string`)
}
function ve(n, e = !1) {
  let t = Ct(n, !1)
  return t.length % 2 === 1 && (t = Z(`0${t}`)), e ? Z(`0x${t}`) : t
}
function H(n) {
  if (typeof n == 'string') {
    const e = ke(n).toLowerCase()
    if (se(e) && e.length === 40) return It(Xe(e))
  }
  throw S.rpc.invalidParams(`Invalid Ethereum address: ${String(n)}`)
}
function ge(n) {
  if (Buffer.isBuffer(n)) return n
  if (typeof n == 'string') {
    if (se(n)) {
      const e = ve(n, !1)
      return Buffer.from(e, 'hex')
    }
    return Buffer.from(n, 'utf8')
  }
  throw S.rpc.invalidParams(`Not binary data: ${String(n)}`)
}
function Q(n) {
  if (typeof n == 'number' && Number.isInteger(n)) return W(n)
  if (typeof n == 'string') {
    if (Ve.test(n)) return W(Number(n))
    if (se(n)) return W(Number(BigInt(ve(n, !0))))
  }
  throw S.rpc.invalidParams(`Not an integer: ${String(n)}`)
}
function $(n) {
  if (n !== null && (typeof n == 'bigint' || xt(n))) return BigInt(n.toString(10))
  if (typeof n == 'number') return BigInt(Q(n))
  if (typeof n == 'string') {
    if (Ve.test(n)) return BigInt(n)
    if (se(n)) return BigInt(ve(n, !0))
  }
  throw S.rpc.invalidParams(`Not an integer: ${String(n)}`)
}
function _t(n) {
  if (typeof n == 'string') return JSON.parse(n)
  if (typeof n == 'object') return n
  throw S.rpc.invalidParams(`Not a JSON string or an object: ${String(n)}`)
}
function xt(n) {
  if (n == null || typeof n.constructor != 'function') return !1
  const { constructor: e } = n
  return typeof e.config == 'function' && typeof e.EUCLID == 'number'
}
async function At() {
  return crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, !0, ['deriveKey'])
}
async function Lt(n, e) {
  return crypto.subtle.deriveKey(
    { name: 'ECDH', public: e },
    n,
    { name: 'AES-GCM', length: 256 },
    !1,
    ['encrypt', 'decrypt']
  )
}
async function Mt(n, e) {
  const t = crypto.getRandomValues(new Uint8Array(12)),
    s = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: t }, n, new TextEncoder().encode(e))
  return { iv: t, cipherText: s }
}
async function Pt(n, { iv: e, cipherText: t }) {
  const s = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: e }, n, t)
  return new TextDecoder().decode(s)
}
function et(n) {
  switch (n) {
    case 'public':
      return 'spki'
    case 'private':
      return 'pkcs8'
  }
}
async function tt(n, e) {
  const t = et(n),
    s = await crypto.subtle.exportKey(t, e)
  return ye(new Uint8Array(s))
}
async function nt(n, e) {
  const t = et(n),
    s = ne(e).buffer
  return await crypto.subtle.importKey(
    t,
    new Uint8Array(s),
    { name: 'ECDH', namedCurve: 'P-256' },
    !0,
    n === 'private' ? ['deriveKey'] : []
  )
}
async function Rt(n, e) {
  const t = JSON.stringify(n, (s, r) => {
    if (!(r instanceof Error)) return r
    const i = r
    return Object.assign(Object.assign({}, i.code ? { code: i.code } : {}), { message: i.message })
  })
  return Mt(e, t)
}
async function Tt(n, e) {
  return JSON.parse(await Pt(e, n))
}
const ae = { storageKey: 'ownPrivateKey', keyType: 'private' },
  oe = { storageKey: 'ownPublicKey', keyType: 'public' },
  ce = { storageKey: 'peerPublicKey', keyType: 'public' }
class Nt {
  constructor() {
    ;(this.storage = new B('CBWSDK', 'SCWKeyManager')),
      (this.ownPrivateKey = null),
      (this.ownPublicKey = null),
      (this.peerPublicKey = null),
      (this.sharedSecret = null)
  }
  async getOwnPublicKey() {
    return await this.loadKeysIfNeeded(), this.ownPublicKey
  }
  async getSharedSecret() {
    return await this.loadKeysIfNeeded(), this.sharedSecret
  }
  async setPeerPublicKey(e) {
    ;(this.sharedSecret = null),
      (this.peerPublicKey = e),
      await this.storeKey(ce, e),
      await this.loadKeysIfNeeded()
  }
  async clear() {
    ;(this.ownPrivateKey = null),
      (this.ownPublicKey = null),
      (this.peerPublicKey = null),
      (this.sharedSecret = null),
      this.storage.removeItem(oe.storageKey),
      this.storage.removeItem(ae.storageKey),
      this.storage.removeItem(ce.storageKey)
  }
  async generateKeyPair() {
    const e = await At()
    ;(this.ownPrivateKey = e.privateKey),
      (this.ownPublicKey = e.publicKey),
      await this.storeKey(ae, e.privateKey),
      await this.storeKey(oe, e.publicKey)
  }
  async loadKeysIfNeeded() {
    if (
      (this.ownPrivateKey === null && (this.ownPrivateKey = await this.loadKey(ae)),
      this.ownPublicKey === null && (this.ownPublicKey = await this.loadKey(oe)),
      (this.ownPrivateKey === null || this.ownPublicKey === null) && (await this.generateKeyPair()),
      this.peerPublicKey === null && (this.peerPublicKey = await this.loadKey(ce)),
      this.sharedSecret === null)
    ) {
      if (this.ownPrivateKey === null || this.peerPublicKey === null) return
      this.sharedSecret = await Lt(this.ownPrivateKey, this.peerPublicKey)
    }
  }
  async loadKey(e) {
    const t = this.storage.getItem(e.storageKey)
    return t ? nt(e.keyType, t) : null
  }
  async storeKey(e, t) {
    const s = await tt(e.keyType, t)
    this.storage.setItem(e.storageKey, s)
  }
}
const X = '4.3.0',
  st = '@coinbase/wallet-sdk'
async function Ee(n, e) {
  const t = Object.assign(Object.assign({}, n), { jsonrpc: '2.0', id: crypto.randomUUID() }),
    s = await window.fetch(e, {
      method: 'POST',
      body: JSON.stringify(t),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'X-Cbw-Sdk-Version': X,
        'X-Cbw-Sdk-Platform': st
      }
    }),
    { result: r, error: i } = await s.json()
  if (i) throw i
  return r
}
function Ot() {
  return globalThis.coinbaseWalletExtension
}
function Dt() {
  var n, e
  try {
    const t = globalThis
    return (n = t.ethereum) !== null && n !== void 0
      ? n
      : (e = t.top) === null || e === void 0
        ? void 0
        : e.ethereum
  } catch {
    return
  }
}
function jt({ metadata: n, preference: e }) {
  var t, s
  const { appName: r, appLogoUrl: i, appChainIds: a } = n
  if (e.options !== 'smartWalletOnly') {
    const l = Ot()
    if (l) return (t = l.setAppInfo) === null || t === void 0 || t.call(l, r, i, a, e), l
  }
  const c = Dt()
  if (c != null && c.isCoinbaseBrowser)
    return (s = c.setAppInfo) === null || s === void 0 || s.call(c, r, i, a, e), c
}
function Ut(n) {
  if (!n || typeof n != 'object' || Array.isArray(n))
    throw S.rpc.invalidParams({
      message: 'Expected a single, non-array, object argument.',
      data: n
    })
  const { method: e, params: t } = n
  if (typeof e != 'string' || e.length === 0)
    throw S.rpc.invalidParams({ message: "'args.method' must be a non-empty string.", data: n })
  if (t !== void 0 && !Array.isArray(t) && (typeof t != 'object' || t === null))
    throw S.rpc.invalidParams({
      message: "'args.params' must be an object or array if provided.",
      data: n
    })
  switch (e) {
    case 'eth_sign':
    case 'eth_signTypedData_v2':
    case 'eth_subscribe':
    case 'eth_unsubscribe':
      throw S.provider.unsupportedMethod()
  }
}
const _e = 'accounts',
  xe = 'activeChain',
  Ae = 'availableChains',
  Le = 'walletCapabilities'
class Bt {
  constructor(e) {
    var t, s, r
    ;(this.metadata = e.metadata),
      (this.communicator = e.communicator),
      (this.callback = e.callback),
      (this.keyManager = new Nt()),
      (this.storage = new B('CBWSDK', 'SCWStateManager')),
      (this.accounts = (t = this.storage.loadObject(_e)) !== null && t !== void 0 ? t : []),
      (this.chain = this.storage.loadObject(xe) || {
        id:
          (r = (s = e.metadata.appChainIds) === null || s === void 0 ? void 0 : s[0]) !== null &&
          r !== void 0
            ? r
            : 1
      }),
      (this.handshake = this.handshake.bind(this)),
      (this.request = this.request.bind(this)),
      (this.createRequestMessage = this.createRequestMessage.bind(this)),
      (this.decryptResponseMessage = this.decryptResponseMessage.bind(this))
  }
  async handshake(e) {
    var t, s, r, i
    await ((s = (t = this.communicator).waitForPopupLoaded) === null || s === void 0
      ? void 0
      : s.call(t))
    const a = await this.createRequestMessage({
        handshake: {
          method: e.method,
          params: Object.assign({}, this.metadata, (r = e.params) !== null && r !== void 0 ? r : {})
        }
      }),
      c = await this.communicator.postRequestAndWaitForResponse(a)
    if ('failure' in c.content) throw c.content.failure
    const l = await nt('public', c.sender)
    await this.keyManager.setPeerPublicKey(l)
    const b = (await this.decryptResponseMessage(c)).result
    if ('error' in b) throw b.error
    switch (e.method) {
      case 'eth_requestAccounts': {
        const y = b.value
        ;(this.accounts = y),
          this.storage.storeObject(_e, y),
          (i = this.callback) === null || i === void 0 || i.call(this, 'accountsChanged', y)
        break
      }
    }
  }
  async request(e) {
    var t
    if (this.accounts.length === 0)
      switch (e.method) {
        case 'wallet_sendCalls':
          return this.sendRequestToPopup(e)
        default:
          throw S.provider.unauthorized()
      }
    switch (e.method) {
      case 'eth_requestAccounts':
        return (
          (t = this.callback) === null ||
            t === void 0 ||
            t.call(this, 'connect', { chainId: z(this.chain.id) }),
          this.accounts
        )
      case 'eth_accounts':
        return this.accounts
      case 'eth_coinbase':
        return this.accounts[0]
      case 'net_version':
        return this.chain.id
      case 'eth_chainId':
        return z(this.chain.id)
      case 'wallet_getCapabilities':
        return this.storage.loadObject(Le)
      case 'wallet_switchEthereumChain':
        return this.handleSwitchChainRequest(e)
      case 'eth_ecRecover':
      case 'personal_sign':
      case 'wallet_sign':
      case 'personal_ecRecover':
      case 'eth_signTransaction':
      case 'eth_sendTransaction':
      case 'eth_signTypedData_v1':
      case 'eth_signTypedData_v3':
      case 'eth_signTypedData_v4':
      case 'eth_signTypedData':
      case 'wallet_addEthereumChain':
      case 'wallet_watchAsset':
      case 'wallet_sendCalls':
      case 'wallet_showCallsStatus':
      case 'wallet_grantPermissions':
        return this.sendRequestToPopup(e)
      default:
        if (!this.chain.rpcUrl) throw S.rpc.internal('No RPC URL set for chain')
        return Ee(e, this.chain.rpcUrl)
    }
  }
  async sendRequestToPopup(e) {
    var t, s
    await ((s = (t = this.communicator).waitForPopupLoaded) === null || s === void 0
      ? void 0
      : s.call(t))
    const r = await this.sendEncryptedRequest(e),
      a = (await this.decryptResponseMessage(r)).result
    if ('error' in a) throw a.error
    return a.value
  }
  async cleanup() {
    var e, t
    this.storage.clear(),
      await this.keyManager.clear(),
      (this.accounts = []),
      (this.chain = {
        id:
          (t = (e = this.metadata.appChainIds) === null || e === void 0 ? void 0 : e[0]) !== null &&
          t !== void 0
            ? t
            : 1
      })
  }
  async handleSwitchChainRequest(e) {
    var t
    const s = e.params
    if (!s || !(!((t = s[0]) === null || t === void 0) && t.chainId)) throw S.rpc.invalidParams()
    const r = Q(s[0].chainId)
    if (this.updateChain(r)) return null
    const a = await this.sendRequestToPopup(e)
    return a === null && this.updateChain(r), a
  }
  async sendEncryptedRequest(e) {
    const t = await this.keyManager.getSharedSecret()
    if (!t)
      throw S.provider.unauthorized(
        'No valid session found, try requestAccounts before other methods'
      )
    const s = await Rt({ action: e, chainId: this.chain.id }, t),
      r = await this.createRequestMessage({ encrypted: s })
    return this.communicator.postRequestAndWaitForResponse(r)
  }
  async createRequestMessage(e) {
    const t = await tt('public', await this.keyManager.getOwnPublicKey())
    return { id: crypto.randomUUID(), sender: t, content: e, timestamp: new Date() }
  }
  async decryptResponseMessage(e) {
    var t, s
    const r = e.content
    if ('failure' in r) throw r.failure
    const i = await this.keyManager.getSharedSecret()
    if (!i) throw S.provider.unauthorized('Invalid session')
    const a = await Tt(r.encrypted, i),
      c = (t = a.data) === null || t === void 0 ? void 0 : t.chains
    if (c) {
      const f = Object.entries(c).map(([b, y]) => ({ id: Number(b), rpcUrl: y }))
      this.storage.storeObject(Ae, f), this.updateChain(this.chain.id, f)
    }
    const l = (s = a.data) === null || s === void 0 ? void 0 : s.capabilities
    return l && this.storage.storeObject(Le, l), a
  }
  updateChain(e, t) {
    var s
    const r = t ?? this.storage.loadObject(Ae),
      i = r == null ? void 0 : r.find(a => a.id === e)
    return i
      ? (i !== this.chain &&
          ((this.chain = i),
          this.storage.storeObject(xe, i),
          (s = this.callback) === null || s === void 0 || s.call(this, 'chainChanged', z(i.id))),
        !0)
      : !1
  }
}
var L = {},
  k = {},
  Me
function Wt() {
  if (Me) return k
  ;(Me = 1),
    Object.defineProperty(k, '__esModule', { value: !0 }),
    (k.add5L =
      k.add5H =
      k.add4H =
      k.add4L =
      k.add3H =
      k.add3L =
      k.rotlBL =
      k.rotlBH =
      k.rotlSL =
      k.rotlSH =
      k.rotr32L =
      k.rotr32H =
      k.rotrBL =
      k.rotrBH =
      k.rotrSL =
      k.rotrSH =
      k.shrSL =
      k.shrSH =
      k.toBig =
        void 0),
    (k.fromBig = t),
    (k.split = s),
    (k.add = C)
  const n = BigInt(2 ** 32 - 1),
    e = BigInt(32)
  function t(p, h = !1) {
    return h
      ? { h: Number(p & n), l: Number((p >> e) & n) }
      : { h: Number((p >> e) & n) | 0, l: Number(p & n) | 0 }
  }
  function s(p, h = !1) {
    let g = new Uint32Array(p.length),
      T = new Uint32Array(p.length)
    for (let N = 0; N < p.length; N++) {
      const { h: j, l: ie } = t(p[N], h)
      ;[g[N], T[N]] = [j, ie]
    }
    return [g, T]
  }
  const r = (p, h) => (BigInt(p >>> 0) << e) | BigInt(h >>> 0)
  k.toBig = r
  const i = (p, h, g) => p >>> g
  k.shrSH = i
  const a = (p, h, g) => (p << (32 - g)) | (h >>> g)
  k.shrSL = a
  const c = (p, h, g) => (p >>> g) | (h << (32 - g))
  k.rotrSH = c
  const l = (p, h, g) => (p << (32 - g)) | (h >>> g)
  k.rotrSL = l
  const f = (p, h, g) => (p << (64 - g)) | (h >>> (g - 32))
  k.rotrBH = f
  const b = (p, h, g) => (p >>> (g - 32)) | (h << (64 - g))
  k.rotrBL = b
  const y = (p, h) => h
  k.rotr32H = y
  const d = (p, h) => p
  k.rotr32L = d
  const o = (p, h, g) => (p << g) | (h >>> (32 - g))
  k.rotlSH = o
  const u = (p, h, g) => (h << g) | (p >>> (32 - g))
  k.rotlSL = u
  const I = (p, h, g) => (h << (g - 32)) | (p >>> (64 - g))
  k.rotlBH = I
  const v = (p, h, g) => (p << (g - 32)) | (h >>> (64 - g))
  k.rotlBL = v
  function C(p, h, g, T) {
    const N = (h >>> 0) + (T >>> 0)
    return { h: (p + g + ((N / 2 ** 32) | 0)) | 0, l: N | 0 }
  }
  const x = (p, h, g) => (p >>> 0) + (h >>> 0) + (g >>> 0)
  k.add3L = x
  const P = (p, h, g, T) => (h + g + T + ((p / 2 ** 32) | 0)) | 0
  k.add3H = P
  const w = (p, h, g, T) => (p >>> 0) + (h >>> 0) + (g >>> 0) + (T >>> 0)
  k.add4L = w
  const m = (p, h, g, T, N) => (h + g + T + N + ((p / 2 ** 32) | 0)) | 0
  k.add4H = m
  const E = (p, h, g, T, N) => (p >>> 0) + (h >>> 0) + (g >>> 0) + (T >>> 0) + (N >>> 0)
  k.add5L = E
  const _ = (p, h, g, T, N, j) => (h + g + T + N + j + ((p / 2 ** 32) | 0)) | 0
  k.add5H = _
  const M = {
    fromBig: t,
    split: s,
    toBig: r,
    shrSH: i,
    shrSL: a,
    rotrSH: c,
    rotrSL: l,
    rotrBH: f,
    rotrBL: b,
    rotr32H: y,
    rotr32L: d,
    rotlSH: o,
    rotlSL: u,
    rotlBH: I,
    rotlBL: v,
    add: C,
    add3L: x,
    add3H: P,
    add4L: w,
    add4H: m,
    add5H: _,
    add5L: E
  }
  return (k.default = M), k
}
var Pe
function qt() {
  if (Pe) return L
  ;(Pe = 1),
    Object.defineProperty(L, '__esModule', { value: !0 }),
    (L.shake256 =
      L.shake128 =
      L.keccak_512 =
      L.keccak_384 =
      L.keccak_256 =
      L.keccak_224 =
      L.sha3_512 =
      L.sha3_384 =
      L.sha3_256 =
      L.sha3_224 =
      L.Keccak =
        void 0),
    (L.keccakP = v)
  const n = ft(),
    e = Wt(),
    t = ht(),
    s = [],
    r = [],
    i = [],
    a = BigInt(0),
    c = BigInt(1),
    l = BigInt(2),
    f = BigInt(7),
    b = BigInt(256),
    y = BigInt(113)
  for (let w = 0, m = c, E = 1, _ = 0; w < 24; w++) {
    ;([E, _] = [_, (2 * E + 3 * _) % 5]),
      s.push(2 * (5 * _ + E)),
      r.push((((w + 1) * (w + 2)) / 2) % 64)
    let M = a
    for (let p = 0; p < 7; p++)
      (m = ((m << c) ^ ((m >> f) * y)) % b), m & l && (M ^= c << ((c << BigInt(p)) - c))
    i.push(M)
  }
  const [d, o] = (0, e.split)(i, !0),
    u = (w, m, E) => (E > 32 ? (0, e.rotlBH)(w, m, E) : (0, e.rotlSH)(w, m, E)),
    I = (w, m, E) => (E > 32 ? (0, e.rotlBL)(w, m, E) : (0, e.rotlSL)(w, m, E))
  function v(w, m = 24) {
    const E = new Uint32Array(10)
    for (let _ = 24 - m; _ < 24; _++) {
      for (let h = 0; h < 10; h++) E[h] = w[h] ^ w[h + 10] ^ w[h + 20] ^ w[h + 30] ^ w[h + 40]
      for (let h = 0; h < 10; h += 2) {
        const g = (h + 8) % 10,
          T = (h + 2) % 10,
          N = E[T],
          j = E[T + 1],
          ie = u(N, j, 1) ^ E[g],
          ut = I(N, j, 1) ^ E[g + 1]
        for (let ee = 0; ee < 50; ee += 10) (w[h + ee] ^= ie), (w[h + ee + 1] ^= ut)
      }
      let M = w[2],
        p = w[3]
      for (let h = 0; h < 24; h++) {
        const g = r[h],
          T = u(M, p, g),
          N = I(M, p, g),
          j = s[h]
        ;(M = w[j]), (p = w[j + 1]), (w[j] = T), (w[j + 1] = N)
      }
      for (let h = 0; h < 50; h += 10) {
        for (let g = 0; g < 10; g++) E[g] = w[h + g]
        for (let g = 0; g < 10; g++) w[h + g] ^= ~E[(g + 2) % 10] & E[(g + 4) % 10]
      }
      ;(w[0] ^= d[_]), (w[1] ^= o[_])
    }
    E.fill(0)
  }
  class C extends t.Hash {
    constructor(m, E, _, M = !1, p = 24) {
      if (
        (super(),
        (this.blockLen = m),
        (this.suffix = E),
        (this.outputLen = _),
        (this.enableXOF = M),
        (this.rounds = p),
        (this.pos = 0),
        (this.posOut = 0),
        (this.finished = !1),
        (this.destroyed = !1),
        (0, n.anumber)(_),
        0 >= this.blockLen || this.blockLen >= 200)
      )
        throw new Error('Sha3 supports only keccak-f1600 function')
      ;(this.state = new Uint8Array(200)), (this.state32 = (0, t.u32)(this.state))
    }
    keccak() {
      t.isLE || (0, t.byteSwap32)(this.state32),
        v(this.state32, this.rounds),
        t.isLE || (0, t.byteSwap32)(this.state32),
        (this.posOut = 0),
        (this.pos = 0)
    }
    update(m) {
      ;(0, n.aexists)(this)
      const { blockLen: E, state: _ } = this
      m = (0, t.toBytes)(m)
      const M = m.length
      for (let p = 0; p < M; ) {
        const h = Math.min(E - this.pos, M - p)
        for (let g = 0; g < h; g++) _[this.pos++] ^= m[p++]
        this.pos === E && this.keccak()
      }
      return this
    }
    finish() {
      if (this.finished) return
      this.finished = !0
      const { state: m, suffix: E, pos: _, blockLen: M } = this
      ;(m[_] ^= E),
        (E & 128) !== 0 && _ === M - 1 && this.keccak(),
        (m[M - 1] ^= 128),
        this.keccak()
    }
    writeInto(m) {
      ;(0, n.aexists)(this, !1), (0, n.abytes)(m), this.finish()
      const E = this.state,
        { blockLen: _ } = this
      for (let M = 0, p = m.length; M < p; ) {
        this.posOut >= _ && this.keccak()
        const h = Math.min(_ - this.posOut, p - M)
        m.set(E.subarray(this.posOut, this.posOut + h), M), (this.posOut += h), (M += h)
      }
      return m
    }
    xofInto(m) {
      if (!this.enableXOF) throw new Error('XOF is not possible for this instance')
      return this.writeInto(m)
    }
    xof(m) {
      return (0, n.anumber)(m), this.xofInto(new Uint8Array(m))
    }
    digestInto(m) {
      if (((0, n.aoutput)(m, this), this.finished)) throw new Error('digest() was already called')
      return this.writeInto(m), this.destroy(), m
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
      ;(this.destroyed = !0), this.state.fill(0)
    }
    _cloneInto(m) {
      const { blockLen: E, suffix: _, outputLen: M, rounds: p, enableXOF: h } = this
      return (
        m || (m = new C(E, _, M, h, p)),
        m.state32.set(this.state32),
        (m.pos = this.pos),
        (m.posOut = this.posOut),
        (m.finished = this.finished),
        (m.rounds = p),
        (m.suffix = _),
        (m.outputLen = M),
        (m.enableXOF = h),
        (m.destroyed = this.destroyed),
        m
      )
    }
  }
  L.Keccak = C
  const x = (w, m, E) => (0, t.wrapConstructor)(() => new C(m, w, E))
  ;(L.sha3_224 = x(6, 144, 224 / 8)),
    (L.sha3_256 = x(6, 136, 256 / 8)),
    (L.sha3_384 = x(6, 104, 384 / 8)),
    (L.sha3_512 = x(6, 72, 512 / 8)),
    (L.keccak_224 = x(1, 144, 224 / 8)),
    (L.keccak_256 = x(1, 136, 256 / 8)),
    (L.keccak_384 = x(1, 104, 384 / 8)),
    (L.keccak_512 = x(1, 72, 512 / 8))
  const P = (w, m, E) =>
    (0, t.wrapXOFConstructorWithOpts)((_ = {}) => new C(m, w, _.dkLen === void 0 ? E : _.dkLen, !0))
  return (L.shake128 = P(31, 168, 128 / 8)), (L.shake256 = P(31, 136, 256 / 8)), L
}
var de, Re
function it() {
  if (Re) return de
  Re = 1
  const { keccak_256: n } = qt()
  function e(o) {
    return Buffer.allocUnsafe(o).fill(0)
  }
  function t(o) {
    return o.toString(2).length
  }
  function s(o, u) {
    let I = o.toString(16)
    I.length % 2 !== 0 && (I = '0' + I)
    const v = I.match(/.{1,2}/g).map(C => parseInt(C, 16))
    for (; v.length < u; ) v.unshift(0)
    return Buffer.from(v)
  }
  function r(o, u) {
    const I = o < 0n
    let v
    if (I) {
      const C = (1n << BigInt(u)) - 1n
      v = (~o & C) + 1n
    } else v = o
    return (v &= (1n << BigInt(u)) - 1n), v
  }
  function i(o, u, I) {
    const v = e(u)
    return (
      (o = c(o)),
      I
        ? o.length < u
          ? (o.copy(v), v)
          : o.slice(0, u)
        : o.length < u
          ? (o.copy(v, u - o.length), v)
          : o.slice(-u)
    )
  }
  function a(o, u) {
    return i(o, u, !0)
  }
  function c(o) {
    if (!Buffer.isBuffer(o))
      if (Array.isArray(o)) o = Buffer.from(o)
      else if (typeof o == 'string') y(o) ? (o = Buffer.from(b(d(o)), 'hex')) : (o = Buffer.from(o))
      else if (typeof o == 'number') o = intToBuffer(o)
      else if (o == null) o = Buffer.allocUnsafe(0)
      else if (typeof o == 'bigint') o = s(o)
      else if (o.toArray) o = Buffer.from(o.toArray())
      else throw new Error('invalid type')
    return o
  }
  function l(o) {
    return (o = c(o)), '0x' + o.toString('hex')
  }
  function f(o, u) {
    if (((o = c(o)), u || (u = 256), u !== 256)) throw new Error('unsupported')
    return Buffer.from(n(new Uint8Array(o)))
  }
  function b(o) {
    return o.length % 2 ? '0' + o : o
  }
  function y(o) {
    return typeof o == 'string' && o.match(/^0x[0-9A-Fa-f]*$/)
  }
  function d(o) {
    return typeof o == 'string' && o.startsWith('0x') ? o.slice(2) : o
  }
  return (
    (de = {
      zeros: e,
      setLength: i,
      setLengthRight: a,
      isHexString: y,
      stripHexPrefix: d,
      toBuffer: c,
      bufferToHex: l,
      keccak: f,
      bitLengthFromBigInt: t,
      bufferBEFromBigInt: s,
      twosFromBigInt: r
    }),
    de
  )
}
var le, Te
function Kt() {
  if (Te) return le
  Te = 1
  const n = it()
  function e(d) {
    return d.startsWith('int[')
      ? 'int256' + d.slice(3)
      : d === 'int'
        ? 'int256'
        : d.startsWith('uint[')
          ? 'uint256' + d.slice(4)
          : d === 'uint'
            ? 'uint256'
            : d.startsWith('fixed[')
              ? 'fixed128x128' + d.slice(5)
              : d === 'fixed'
                ? 'fixed128x128'
                : d.startsWith('ufixed[')
                  ? 'ufixed128x128' + d.slice(6)
                  : d === 'ufixed'
                    ? 'ufixed128x128'
                    : d
  }
  function t(d) {
    return Number.parseInt(/^\D+(\d+)$/.exec(d)[1], 10)
  }
  function s(d) {
    var o = /^\D+(\d+)x(\d+)$/.exec(d)
    return [Number.parseInt(o[1], 10), Number.parseInt(o[2], 10)]
  }
  function r(d) {
    var o = d.match(/(.*)\[(.*?)\]$/)
    return o ? (o[2] === '' ? 'dynamic' : Number.parseInt(o[2], 10)) : null
  }
  function i(d) {
    var o = typeof d
    if (o === 'string' || o === 'number') return BigInt(d)
    if (o === 'bigint') return d
    throw new Error('Argument is not a number')
  }
  function a(d, o) {
    var u, I, v, C
    if (d === 'address') return a('uint160', i(o))
    if (d === 'bool') return a('uint8', o ? 1 : 0)
    if (d === 'string') return a('bytes', new Buffer(o, 'utf8'))
    if (l(d)) {
      if (typeof o.length > 'u') throw new Error('Not an array?')
      if (((u = r(d)), u !== 'dynamic' && u !== 0 && o.length > u))
        throw new Error('Elements exceed array size: ' + u)
      ;(v = []), (d = d.slice(0, d.lastIndexOf('['))), typeof o == 'string' && (o = JSON.parse(o))
      for (C in o) v.push(a(d, o[C]))
      if (u === 'dynamic') {
        var x = a('uint256', o.length)
        v.unshift(x)
      }
      return Buffer.concat(v)
    } else {
      if (d === 'bytes')
        return (
          (o = new Buffer(o)),
          (v = Buffer.concat([a('uint256', o.length), o])),
          o.length % 32 !== 0 && (v = Buffer.concat([v, n.zeros(32 - (o.length % 32))])),
          v
        )
      if (d.startsWith('bytes')) {
        if (((u = t(d)), u < 1 || u > 32)) throw new Error('Invalid bytes<N> width: ' + u)
        return n.setLengthRight(o, 32)
      } else if (d.startsWith('uint')) {
        if (((u = t(d)), u % 8 || u < 8 || u > 256)) throw new Error('Invalid uint<N> width: ' + u)
        I = i(o)
        const P = n.bitLengthFromBigInt(I)
        if (P > u) throw new Error('Supplied uint exceeds width: ' + u + ' vs ' + P)
        if (I < 0) throw new Error('Supplied uint is negative')
        return n.bufferBEFromBigInt(I, 32)
      } else if (d.startsWith('int')) {
        if (((u = t(d)), u % 8 || u < 8 || u > 256)) throw new Error('Invalid int<N> width: ' + u)
        I = i(o)
        const P = n.bitLengthFromBigInt(I)
        if (P > u) throw new Error('Supplied int exceeds width: ' + u + ' vs ' + P)
        const w = n.twosFromBigInt(I, 256)
        return n.bufferBEFromBigInt(w, 32)
      } else if (d.startsWith('ufixed')) {
        if (((u = s(d)), (I = i(o)), I < 0)) throw new Error('Supplied ufixed is negative')
        return a('uint256', I * BigInt(2) ** BigInt(u[1]))
      } else if (d.startsWith('fixed'))
        return (u = s(d)), a('int256', i(o) * BigInt(2) ** BigInt(u[1]))
    }
    throw new Error('Unsupported or invalid type: ' + d)
  }
  function c(d) {
    return d === 'string' || d === 'bytes' || r(d) === 'dynamic'
  }
  function l(d) {
    return d.lastIndexOf(']') === d.length - 1
  }
  function f(d, o) {
    var u = [],
      I = [],
      v = 32 * d.length
    for (var C in d) {
      var x = e(d[C]),
        P = o[C],
        w = a(x, P)
      c(x) ? (u.push(a('uint256', v)), I.push(w), (v += w.length)) : u.push(w)
    }
    return Buffer.concat(u.concat(I))
  }
  function b(d, o) {
    if (d.length !== o.length) throw new Error('Number of types are not matching the values')
    for (var u, I, v = [], C = 0; C < d.length; C++) {
      var x = e(d[C]),
        P = o[C]
      if (x === 'bytes') v.push(P)
      else if (x === 'string') v.push(new Buffer(P, 'utf8'))
      else if (x === 'bool') v.push(new Buffer(P ? '01' : '00', 'hex'))
      else if (x === 'address') v.push(n.setLength(P, 20))
      else if (x.startsWith('bytes')) {
        if (((u = t(x)), u < 1 || u > 32)) throw new Error('Invalid bytes<N> width: ' + u)
        v.push(n.setLengthRight(P, u))
      } else if (x.startsWith('uint')) {
        if (((u = t(x)), u % 8 || u < 8 || u > 256)) throw new Error('Invalid uint<N> width: ' + u)
        I = i(P)
        const w = n.bitLengthFromBigInt(I)
        if (w > u) throw new Error('Supplied uint exceeds width: ' + u + ' vs ' + w)
        v.push(n.bufferBEFromBigInt(I, u / 8))
      } else if (x.startsWith('int')) {
        if (((u = t(x)), u % 8 || u < 8 || u > 256)) throw new Error('Invalid int<N> width: ' + u)
        I = i(P)
        const w = n.bitLengthFromBigInt(I)
        if (w > u) throw new Error('Supplied int exceeds width: ' + u + ' vs ' + w)
        const m = n.twosFromBigInt(I, u)
        v.push(n.bufferBEFromBigInt(m, u / 8))
      } else throw new Error('Unsupported or invalid type: ' + x)
    }
    return Buffer.concat(v)
  }
  function y(d, o) {
    return n.keccak(b(d, o))
  }
  return (le = { rawEncode: f, solidityPack: b, soliditySHA3: y }), le
}
var ue, Ne
function Ht() {
  if (Ne) return ue
  Ne = 1
  const n = it(),
    e = Kt(),
    t = {
      type: 'object',
      properties: {
        types: {
          type: 'object',
          additionalProperties: {
            type: 'array',
            items: {
              type: 'object',
              properties: { name: { type: 'string' }, type: { type: 'string' } },
              required: ['name', 'type']
            }
          }
        },
        primaryType: { type: 'string' },
        domain: { type: 'object' },
        message: { type: 'object' }
      },
      required: ['types', 'primaryType', 'domain', 'message']
    },
    s = {
      encodeData(i, a, c, l = !0) {
        const f = ['bytes32'],
          b = [this.hashType(i, c)]
        if (l) {
          const y = (d, o, u) => {
            if (c[o] !== void 0)
              return [
                'bytes32',
                u == null
                  ? '0x0000000000000000000000000000000000000000000000000000000000000000'
                  : n.keccak(this.encodeData(o, u, c, l))
              ]
            if (u === void 0) throw new Error(`missing value for field ${d} of type ${o}`)
            if (o === 'bytes') return ['bytes32', n.keccak(u)]
            if (o === 'string')
              return typeof u == 'string' && (u = Buffer.from(u, 'utf8')), ['bytes32', n.keccak(u)]
            if (o.lastIndexOf(']') === o.length - 1) {
              const I = o.slice(0, o.lastIndexOf('[')),
                v = u.map(C => y(d, I, C))
              return [
                'bytes32',
                n.keccak(
                  e.rawEncode(
                    v.map(([C]) => C),
                    v.map(([, C]) => C)
                  )
                )
              ]
            }
            return [o, u]
          }
          for (const d of c[i]) {
            const [o, u] = y(d.name, d.type, a[d.name])
            f.push(o), b.push(u)
          }
        } else
          for (const y of c[i]) {
            let d = a[y.name]
            if (d !== void 0)
              if (y.type === 'bytes') f.push('bytes32'), (d = n.keccak(d)), b.push(d)
              else if (y.type === 'string')
                f.push('bytes32'),
                  typeof d == 'string' && (d = Buffer.from(d, 'utf8')),
                  (d = n.keccak(d)),
                  b.push(d)
              else if (c[y.type] !== void 0)
                f.push('bytes32'), (d = n.keccak(this.encodeData(y.type, d, c, l))), b.push(d)
              else {
                if (y.type.lastIndexOf(']') === y.type.length - 1)
                  throw new Error('Arrays currently unimplemented in encodeData')
                f.push(y.type), b.push(d)
              }
          }
        return e.rawEncode(f, b)
      },
      encodeType(i, a) {
        let c = '',
          l = this.findTypeDependencies(i, a).filter(f => f !== i)
        l = [i].concat(l.sort())
        for (const f of l) {
          if (!a[f]) throw new Error('No type definition specified: ' + f)
          c += f + '(' + a[f].map(({ name: y, type: d }) => d + ' ' + y).join(',') + ')'
        }
        return c
      },
      findTypeDependencies(i, a, c = []) {
        if (((i = i.match(/^\w*/)[0]), c.includes(i) || a[i] === void 0)) return c
        c.push(i)
        for (const l of a[i])
          for (const f of this.findTypeDependencies(l.type, a, c)) !c.includes(f) && c.push(f)
        return c
      },
      hashStruct(i, a, c, l = !0) {
        return n.keccak(this.encodeData(i, a, c, l))
      },
      hashType(i, a) {
        return n.keccak(this.encodeType(i, a))
      },
      sanitizeData(i) {
        const a = {}
        for (const c in t.properties) i[c] && (a[c] = i[c])
        return a.types && (a.types = Object.assign({ EIP712Domain: [] }, a.types)), a
      },
      hash(i, a = !0) {
        const c = this.sanitizeData(i),
          l = [Buffer.from('1901', 'hex')]
        return (
          l.push(this.hashStruct('EIP712Domain', c.domain, c.types, a)),
          c.primaryType !== 'EIP712Domain' &&
            l.push(this.hashStruct(c.primaryType, c.message, c.types, a)),
          n.keccak(Buffer.concat(l))
        )
      }
    }
  ue = {
    TYPED_MESSAGE_SCHEMA: t,
    TypedDataUtils: s,
    hashForSignTypedDataLegacy: function (i) {
      return r(i.data)
    },
    hashForSignTypedData_v3: function (i) {
      return s.hash(i.data, !1)
    },
    hashForSignTypedData_v4: function (i) {
      return s.hash(i.data)
    }
  }
  function r(i) {
    const a = new Error('Expect argument to be non-empty array')
    if (typeof i != 'object' || !i.length) throw a
    const c = i.map(function (b) {
        return b.type === 'bytes' ? n.toBuffer(b.value) : b.value
      }),
      l = i.map(function (b) {
        return b.type
      }),
      f = i.map(function (b) {
        if (!b.name) throw a
        return b.type + ' ' + b.name
      })
    return e.soliditySHA3(
      ['bytes32', 'bytes32'],
      [e.soliditySHA3(new Array(i.length).fill('string'), f), e.soliditySHA3(l, c)]
    )
  }
  return ue
}
var zt = Ht()
const te = pt(zt),
  Ft = 'walletUsername',
  me = 'Addresses',
  Gt = 'AppVersion'
function O(n) {
  return n.errorMessage !== void 0
}
class Yt {
  constructor(e) {
    this.secret = e
  }
  async encrypt(e) {
    const t = this.secret
    if (t.length !== 64) throw Error('secret must be 256 bits')
    const s = crypto.getRandomValues(new Uint8Array(12)),
      r = await crypto.subtle.importKey('raw', ne(t), { name: 'aes-gcm' }, !1, [
        'encrypt',
        'decrypt'
      ]),
      i = new TextEncoder(),
      a = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv: s }, r, i.encode(e)),
      c = 16,
      l = a.slice(a.byteLength - c),
      f = a.slice(0, a.byteLength - c),
      b = new Uint8Array(l),
      y = new Uint8Array(f),
      d = new Uint8Array([...s, ...b, ...y])
    return ye(d)
  }
  async decrypt(e) {
    const t = this.secret
    if (t.length !== 64) throw Error('secret must be 256 bits')
    return new Promise((s, r) => {
      ;(async function () {
        const i = await crypto.subtle.importKey('raw', ne(t), { name: 'aes-gcm' }, !1, [
            'encrypt',
            'decrypt'
          ]),
          a = ne(e),
          c = a.slice(0, 12),
          l = a.slice(12, 28),
          f = a.slice(28),
          b = new Uint8Array([...f, ...l]),
          y = { name: 'AES-GCM', iv: new Uint8Array(c) }
        try {
          const d = await window.crypto.subtle.decrypt(y, i, b),
            o = new TextDecoder()
          s(o.decode(d))
        } catch (d) {
          r(d)
        }
      })()
    })
  }
}
class $t {
  constructor(e, t, s) {
    ;(this.linkAPIUrl = e), (this.sessionId = t)
    const r = `${t}:${s}`
    this.auth = `Basic ${btoa(r)}`
  }
  async markUnseenEventsAsSeen(e) {
    return Promise.all(
      e.map(t =>
        fetch(`${this.linkAPIUrl}/events/${t.eventId}/seen`, {
          method: 'POST',
          headers: { Authorization: this.auth }
        })
      )
    ).catch(t => console.error('Unabled to mark event as failed:', t))
  }
  async fetchUnseenEvents() {
    var e
    const t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
      headers: { Authorization: this.auth }
    })
    if (t.ok) {
      const { events: s, error: r } = await t.json()
      if (r) throw new Error(`Check unseen events failed: ${r}`)
      const i =
        (e =
          s == null
            ? void 0
            : s
                .filter(a => a.event === 'Web3Response')
                .map(a => ({
                  type: 'Event',
                  sessionId: this.sessionId,
                  eventId: a.id,
                  event: a.event,
                  data: a.data
                }))) !== null && e !== void 0
          ? e
          : []
      return this.markUnseenEventsAsSeen(i), i
    }
    throw new Error(`Check unseen events failed: ${t.status}`)
  }
}
var K
;(function (n) {
  ;(n[(n.DISCONNECTED = 0)] = 'DISCONNECTED'),
    (n[(n.CONNECTING = 1)] = 'CONNECTING'),
    (n[(n.CONNECTED = 2)] = 'CONNECTED')
})(K || (K = {}))
class Jt {
  setConnectionStateListener(e) {
    this.connectionStateListener = e
  }
  setIncomingDataListener(e) {
    this.incomingDataListener = e
  }
  constructor(e, t = WebSocket) {
    ;(this.WebSocketClass = t),
      (this.webSocket = null),
      (this.pendingData = []),
      (this.url = e.replace(/^http/, 'ws'))
  }
  async connect() {
    if (this.webSocket) throw new Error('webSocket object is not null')
    return new Promise((e, t) => {
      var s
      let r
      try {
        this.webSocket = r = new this.WebSocketClass(this.url)
      } catch (i) {
        t(i)
        return
      }
      ;(s = this.connectionStateListener) === null || s === void 0 || s.call(this, K.CONNECTING),
        (r.onclose = i => {
          var a
          this.clearWebSocket(),
            t(new Error(`websocket error ${i.code}: ${i.reason}`)),
            (a = this.connectionStateListener) === null ||
              a === void 0 ||
              a.call(this, K.DISCONNECTED)
        }),
        (r.onopen = i => {
          var a
          e(),
            (a = this.connectionStateListener) === null ||
              a === void 0 ||
              a.call(this, K.CONNECTED),
            this.pendingData.length > 0 &&
              ([...this.pendingData].forEach(l => this.sendData(l)), (this.pendingData = []))
        }),
        (r.onmessage = i => {
          var a, c
          if (i.data === 'h')
            (a = this.incomingDataListener) === null ||
              a === void 0 ||
              a.call(this, { type: 'Heartbeat' })
          else
            try {
              const l = JSON.parse(i.data)
              ;(c = this.incomingDataListener) === null || c === void 0 || c.call(this, l)
            } catch {}
        })
    })
  }
  disconnect() {
    var e
    const { webSocket: t } = this
    if (t) {
      this.clearWebSocket(),
        (e = this.connectionStateListener) === null || e === void 0 || e.call(this, K.DISCONNECTED),
        (this.connectionStateListener = void 0),
        (this.incomingDataListener = void 0)
      try {
        t.close()
      } catch {}
    }
  }
  sendData(e) {
    const { webSocket: t } = this
    if (!t) {
      this.pendingData.push(e), this.connect()
      return
    }
    t.send(e)
  }
  clearWebSocket() {
    const { webSocket: e } = this
    e &&
      ((this.webSocket = null),
      (e.onclose = null),
      (e.onerror = null),
      (e.onmessage = null),
      (e.onopen = null))
  }
}
const Oe = 1e4,
  Vt = 6e4
class Qt {
  constructor({ session: e, linkAPIUrl: t, listener: s }) {
    ;(this.destroyed = !1),
      (this.lastHeartbeatResponse = 0),
      (this.nextReqId = W(1)),
      (this._connected = !1),
      (this._linked = !1),
      (this.shouldFetchUnseenEventsOnConnect = !1),
      (this.requestResolutions = new Map()),
      (this.handleSessionMetadataUpdated = i => {
        if (!i) return
        new Map([
          ['__destroyed', this.handleDestroyed],
          ['EthereumAddress', this.handleAccountUpdated],
          ['WalletUsername', this.handleWalletUsernameUpdated],
          ['AppVersion', this.handleAppVersionUpdated],
          ['ChainId', c => i.JsonRpcUrl && this.handleChainUpdated(c, i.JsonRpcUrl)]
        ]).forEach((c, l) => {
          const f = i[l]
          f !== void 0 && c(f)
        })
      }),
      (this.handleDestroyed = i => {
        var a
        i === '1' && ((a = this.listener) === null || a === void 0 || a.resetAndReload())
      }),
      (this.handleAccountUpdated = async i => {
        var a
        const c = await this.cipher.decrypt(i)
        ;(a = this.listener) === null || a === void 0 || a.accountUpdated(c)
      }),
      (this.handleMetadataUpdated = async (i, a) => {
        var c
        const l = await this.cipher.decrypt(a)
        ;(c = this.listener) === null || c === void 0 || c.metadataUpdated(i, l)
      }),
      (this.handleWalletUsernameUpdated = async i => {
        this.handleMetadataUpdated(Ft, i)
      }),
      (this.handleAppVersionUpdated = async i => {
        this.handleMetadataUpdated(Gt, i)
      }),
      (this.handleChainUpdated = async (i, a) => {
        var c
        const l = await this.cipher.decrypt(i),
          f = await this.cipher.decrypt(a)
        ;(c = this.listener) === null || c === void 0 || c.chainUpdated(l, f)
      }),
      (this.session = e),
      (this.cipher = new Yt(e.secret)),
      (this.listener = s)
    const r = new Jt(`${t}/rpc`, WebSocket)
    r.setConnectionStateListener(async i => {
      let a = !1
      switch (i) {
        case K.DISCONNECTED:
          if (!this.destroyed) {
            const c = async () => {
              await new Promise(l => setTimeout(l, 5e3)),
                this.destroyed ||
                  r.connect().catch(() => {
                    c()
                  })
            }
            c()
          }
          break
        case K.CONNECTED:
          ;(a = await this.handleConnected()),
            this.updateLastHeartbeat(),
            setInterval(() => {
              this.heartbeat()
            }, Oe),
            this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI()
          break
        case K.CONNECTING:
          break
      }
      this.connected !== a && (this.connected = a)
    }),
      r.setIncomingDataListener(i => {
        var a
        switch (i.type) {
          case 'Heartbeat':
            this.updateLastHeartbeat()
            return
          case 'IsLinkedOK':
          case 'Linked': {
            const c = i.type === 'IsLinkedOK' ? i.linked : void 0
            this.linked = c || i.onlineGuests > 0
            break
          }
          case 'GetSessionConfigOK':
          case 'SessionConfigUpdated': {
            this.handleSessionMetadataUpdated(i.metadata)
            break
          }
          case 'Event': {
            this.handleIncomingEvent(i)
            break
          }
        }
        i.id !== void 0 &&
          ((a = this.requestResolutions.get(i.id)) === null || a === void 0 || a(i))
      }),
      (this.ws = r),
      (this.http = new $t(t, e.id, e.key))
  }
  connect() {
    if (this.destroyed) throw new Error('instance is destroyed')
    this.ws.connect()
  }
  async destroy() {
    this.destroyed ||
      (await this.makeRequest(
        {
          type: 'SetSessionConfig',
          id: W(this.nextReqId++),
          sessionId: this.session.id,
          metadata: { __destroyed: '1' }
        },
        { timeout: 1e3 }
      ),
      (this.destroyed = !0),
      this.ws.disconnect(),
      (this.listener = void 0))
  }
  get connected() {
    return this._connected
  }
  set connected(e) {
    this._connected = e
  }
  get linked() {
    return this._linked
  }
  set linked(e) {
    var t, s
    ;(this._linked = e),
      e && ((t = this.onceLinked) === null || t === void 0 || t.call(this)),
      (s = this.listener) === null || s === void 0 || s.linkedUpdated(e)
  }
  setOnceLinked(e) {
    return new Promise(t => {
      this.linked
        ? e().then(t)
        : (this.onceLinked = () => {
            e().then(t), (this.onceLinked = void 0)
          })
    })
  }
  async handleIncomingEvent(e) {
    var t
    if (e.type !== 'Event' || e.event !== 'Web3Response') return
    const s = await this.cipher.decrypt(e.data),
      r = JSON.parse(s)
    if (r.type !== 'WEB3_RESPONSE') return
    const { id: i, response: a } = r
    ;(t = this.listener) === null || t === void 0 || t.handleWeb3ResponseMessage(i, a)
  }
  async checkUnseenEvents() {
    if (!this.connected) {
      this.shouldFetchUnseenEventsOnConnect = !0
      return
    }
    await new Promise(e => setTimeout(e, 250))
    try {
      await this.fetchUnseenEventsAPI()
    } catch (e) {
      console.error('Unable to check for unseen events', e)
    }
  }
  async fetchUnseenEventsAPI() {
    ;(this.shouldFetchUnseenEventsOnConnect = !1),
      (await this.http.fetchUnseenEvents()).forEach(t => this.handleIncomingEvent(t))
  }
  async publishEvent(e, t, s = !1) {
    const r = await this.cipher.encrypt(
        JSON.stringify(
          Object.assign(Object.assign({}, t), {
            origin: location.origin,
            location: location.href,
            relaySource:
              'coinbaseWalletExtension' in window && window.coinbaseWalletExtension
                ? 'injected_sdk'
                : 'sdk'
          })
        )
      ),
      i = {
        type: 'PublishEvent',
        id: W(this.nextReqId++),
        sessionId: this.session.id,
        event: e,
        data: r,
        callWebhook: s
      }
    return this.setOnceLinked(async () => {
      const a = await this.makeRequest(i)
      if (a.type === 'Fail') throw new Error(a.error || 'failed to publish event')
      return a.eventId
    })
  }
  sendData(e) {
    this.ws.sendData(JSON.stringify(e))
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now()
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > Oe * 2) {
      this.ws.disconnect()
      return
    }
    try {
      this.ws.sendData('h')
    } catch {}
  }
  async makeRequest(e, t = { timeout: Vt }) {
    const s = e.id
    this.sendData(e)
    let r
    return Promise.race([
      new Promise((i, a) => {
        r = window.setTimeout(() => {
          a(new Error(`request ${s} timed out`))
        }, t.timeout)
      }),
      new Promise(i => {
        this.requestResolutions.set(s, a => {
          clearTimeout(r), i(a), this.requestResolutions.delete(s)
        })
      })
    ])
  }
  async handleConnected() {
    return (
      await this.makeRequest({
        type: 'HostSession',
        id: W(this.nextReqId++),
        sessionId: this.session.id,
        sessionKey: this.session.key
      })
    ).type === 'Fail'
      ? !1
      : (this.sendData({ type: 'IsLinked', id: W(this.nextReqId++), sessionId: this.session.id }),
        this.sendData({
          type: 'GetSessionConfig',
          id: W(this.nextReqId++),
          sessionId: this.session.id
        }),
        !0)
  }
}
class Zt {
  constructor() {
    ;(this._nextRequestId = 0), (this.callbacks = new Map())
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647
    const e = this._nextRequestId,
      t = Xe(e.toString(16))
    return this.callbacks.get(t) && this.callbacks.delete(t), e
  }
}
const De = 'session:id',
  je = 'session:secret',
  Ue = 'session:linked'
class Y {
  constructor(e, t, s, r = !1) {
    ;(this.storage = e),
      (this.id = t),
      (this.secret = s),
      (this.key = gt(mt(`${t}, ${s} WalletLink`))),
      (this._linked = !!r)
  }
  static create(e) {
    const t = F(16),
      s = F(32)
    return new Y(e, t, s).save()
  }
  static load(e) {
    const t = e.getItem(De),
      s = e.getItem(Ue),
      r = e.getItem(je)
    return t && r ? new Y(e, t, r, s === '1') : null
  }
  get linked() {
    return this._linked
  }
  set linked(e) {
    ;(this._linked = e), this.persistLinked()
  }
  save() {
    return (
      this.storage.setItem(De, this.id),
      this.storage.setItem(je, this.secret),
      this.persistLinked(),
      this
    )
  }
  persistLinked() {
    this.storage.setItem(Ue, this._linked ? '1' : '0')
  }
}
function Xt() {
  try {
    return window.frameElement !== null
  } catch {
    return !1
  }
}
function en() {
  try {
    return Xt() && window.top ? window.top.location : window.location
  } catch {
    return window.location
  }
}
function tn() {
  var n
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    (n = window == null ? void 0 : window.navigator) === null || n === void 0 ? void 0 : n.userAgent
  )
}
function rt() {
  var n, e
  return (e =
    (n = window == null ? void 0 : window.matchMedia) === null || n === void 0
      ? void 0
      : n.call(window, '(prefers-color-scheme: dark)').matches) !== null && e !== void 0
    ? e
    : !1
}
const nn =
  '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
function at() {
  const n = document.createElement('style')
  ;(n.type = 'text/css'),
    n.appendChild(document.createTextNode(nn)),
    document.documentElement.appendChild(n)
}
const sn =
    '.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}',
  rn =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+',
  an =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4='
class on {
  constructor() {
    ;(this.items = new Map()), (this.nextItemKey = 0), (this.root = null), (this.darkMode = rt())
  }
  attach(e) {
    ;(this.root = document.createElement('div')),
      (this.root.className = '-cbwsdk-snackbar-root'),
      e.appendChild(this.root),
      this.render()
  }
  presentItem(e) {
    const t = this.nextItemKey++
    return (
      this.items.set(t, e),
      this.render(),
      () => {
        this.items.delete(t), this.render()
      }
    )
  }
  clear() {
    this.items.clear(), this.render()
  }
  render() {
    this.root &&
      he(
        A(
          'div',
          null,
          A(
            ot,
            { darkMode: this.darkMode },
            Array.from(this.items.entries()).map(([e, t]) =>
              A(cn, Object.assign({}, t, { key: e }))
            )
          )
        ),
        this.root
      )
  }
}
const ot = n =>
    A(
      'div',
      { class: J('-cbwsdk-snackbar-container') },
      A('style', null, sn),
      A('div', { class: '-cbwsdk-snackbar' }, n.children)
    ),
  cn = ({ autoExpand: n, message: e, menuItems: t }) => {
    const [s, r] = Ie(!0),
      [i, a] = Ie(n ?? !1)
    wt(() => {
      const l = [
        window.setTimeout(() => {
          r(!1)
        }, 1),
        window.setTimeout(() => {
          a(!0)
        }, 1e4)
      ]
      return () => {
        l.forEach(window.clearTimeout)
      }
    })
    const c = () => {
      a(!i)
    }
    return A(
      'div',
      {
        class: J(
          '-cbwsdk-snackbar-instance',
          s && '-cbwsdk-snackbar-instance-hidden',
          i && '-cbwsdk-snackbar-instance-expanded'
        )
      },
      A(
        'div',
        { class: '-cbwsdk-snackbar-instance-header', onClick: c },
        A('img', { src: rn, class: '-cbwsdk-snackbar-instance-header-cblogo' }),
        ' ',
        A('div', { class: '-cbwsdk-snackbar-instance-header-message' }, e),
        A(
          'div',
          { class: '-gear-container' },
          !i &&
            A(
              'svg',
              {
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg'
              },
              A('circle', { cx: '12', cy: '12', r: '12', fill: '#F5F7F8' })
            ),
          A('img', { src: an, class: '-gear-icon', title: 'Expand' })
        )
      ),
      t &&
        t.length > 0 &&
        A(
          'div',
          { class: '-cbwsdk-snackbar-instance-menu' },
          t.map((l, f) =>
            A(
              'div',
              {
                class: J(
                  '-cbwsdk-snackbar-instance-menu-item',
                  l.isRed && '-cbwsdk-snackbar-instance-menu-item-is-red'
                ),
                onClick: l.onClick,
                key: f
              },
              A(
                'svg',
                {
                  width: l.svgWidth,
                  height: l.svgHeight,
                  viewBox: '0 0 10 11',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg'
                },
                A('path', {
                  'fill-rule': l.defaultFillRule,
                  'clip-rule': l.defaultClipRule,
                  d: l.path,
                  fill: '#AAAAAA'
                })
              ),
              A(
                'span',
                {
                  class: J(
                    '-cbwsdk-snackbar-instance-menu-item-info',
                    l.isRed && '-cbwsdk-snackbar-instance-menu-item-info-is-red'
                  )
                },
                l.info
              )
            )
          )
        )
    )
  }
class dn {
  constructor() {
    ;(this.attached = !1), (this.snackbar = new on())
  }
  attach() {
    if (this.attached) throw new Error('Coinbase Wallet SDK UI is already attached')
    const e = document.documentElement,
      t = document.createElement('div')
    ;(t.className = '-cbwsdk-css-reset'),
      e.appendChild(t),
      this.snackbar.attach(t),
      (this.attached = !0),
      at()
  }
  showConnecting(e) {
    let t
    return (
      e.isUnlinkedErrorState
        ? (t = {
            autoExpand: !0,
            message: 'Connection lost',
            menuItems: [
              {
                isRed: !1,
                info: 'Reset connection',
                svgWidth: '10',
                svgHeight: '11',
                path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                defaultFillRule: 'evenodd',
                defaultClipRule: 'evenodd',
                onClick: e.onResetConnection
              }
            ]
          })
        : (t = {
            message: 'Confirm on phone',
            menuItems: [
              {
                isRed: !0,
                info: 'Cancel transaction',
                svgWidth: '11',
                svgHeight: '11',
                path: 'M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z',
                defaultFillRule: 'inherit',
                defaultClipRule: 'inherit',
                onClick: e.onCancel
              },
              {
                isRed: !1,
                info: 'Reset connection',
                svgWidth: '10',
                svgHeight: '11',
                path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                defaultFillRule: 'evenodd',
                defaultClipRule: 'evenodd',
                onClick: e.onResetConnection
              }
            ]
          }),
      this.snackbar.presentItem(t)
    )
  }
}
const ln =
  '.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}'
class un {
  constructor() {
    ;(this.root = null), (this.darkMode = rt())
  }
  attach() {
    const e = document.documentElement
    ;(this.root = document.createElement('div')),
      (this.root.className = '-cbwsdk-css-reset'),
      e.appendChild(this.root),
      at()
  }
  present(e) {
    this.render(e)
  }
  clear() {
    this.render(null)
  }
  render(e) {
    this.root &&
      (he(null, this.root),
      e &&
        he(
          A(
            hn,
            Object.assign({}, e, {
              onDismiss: () => {
                this.clear()
              },
              darkMode: this.darkMode
            })
          ),
          this.root
        ))
  }
}
const hn = ({ title: n, buttonText: e, darkMode: t, onButtonClick: s, onDismiss: r }) => {
    const i = t ? 'dark' : 'light'
    return A(
      ot,
      { darkMode: t },
      A(
        'div',
        { class: '-cbwsdk-redirect-dialog' },
        A('style', null, ln),
        A('div', { class: '-cbwsdk-redirect-dialog-backdrop', onClick: r }),
        A(
          'div',
          { class: J('-cbwsdk-redirect-dialog-box', i) },
          A('p', null, n),
          A('button', { onClick: s }, e)
        )
      )
    )
  },
  fn = 'https://keys.coinbase.com/connect',
  pn = 'http://rpc.wallet.coinbase.com',
  Be = 'https://www.walletlink.org',
  gn = 'https://go.cb-w.com/walletlink'
class We {
  constructor() {
    ;(this.attached = !1), (this.redirectDialog = new un())
  }
  attach() {
    if (this.attached) throw new Error('Coinbase Wallet SDK UI is already attached')
    this.redirectDialog.attach(), (this.attached = !0)
  }
  redirectToCoinbaseWallet(e) {
    const t = new URL(gn)
    t.searchParams.append('redirect_url', en().href), e && t.searchParams.append('wl_url', e)
    const s = document.createElement('a')
    ;(s.target = 'cbw-opener'), (s.href = t.href), (s.rel = 'noreferrer noopener'), s.click()
  }
  openCoinbaseWalletDeeplink(e) {
    this.redirectDialog.present({
      title: 'Redirecting to Coinbase Wallet...',
      buttonText: 'Open',
      onButtonClick: () => {
        this.redirectToCoinbaseWallet(e)
      }
    }),
      setTimeout(() => {
        this.redirectToCoinbaseWallet(e)
      }, 99)
  }
  showConnecting(e) {
    return () => {
      this.redirectDialog.clear()
    }
  }
}
class q {
  constructor(e) {
    ;(this.chainCallbackParams = { chainId: '', jsonRpcUrl: '' }),
      (this.isMobileWeb = tn()),
      (this.linkedUpdated = i => {
        this.isLinked = i
        const a = this.storage.getItem(me)
        if ((i && (this._session.linked = i), (this.isUnlinkedErrorState = !1), a)) {
          const c = a.split(' '),
            l = this.storage.getItem('IsStandaloneSigning') === 'true'
          c[0] !== '' && !i && this._session.linked && !l && (this.isUnlinkedErrorState = !0)
        }
      }),
      (this.metadataUpdated = (i, a) => {
        this.storage.setItem(i, a)
      }),
      (this.chainUpdated = (i, a) => {
        ;(this.chainCallbackParams.chainId === i && this.chainCallbackParams.jsonRpcUrl === a) ||
          ((this.chainCallbackParams = { chainId: i, jsonRpcUrl: a }),
          this.chainCallback && this.chainCallback(a, Number.parseInt(i, 10)))
      }),
      (this.accountUpdated = i => {
        this.accountsCallback && this.accountsCallback([i]),
          q.accountRequestCallbackIds.size > 0 &&
            (Array.from(q.accountRequestCallbackIds.values()).forEach(a => {
              this.invokeCallback(a, { method: 'requestEthereumAccounts', result: [i] })
            }),
            q.accountRequestCallbackIds.clear())
      }),
      (this.resetAndReload = this.resetAndReload.bind(this)),
      (this.linkAPIUrl = e.linkAPIUrl),
      (this.storage = e.storage),
      (this.metadata = e.metadata),
      (this.accountsCallback = e.accountsCallback),
      (this.chainCallback = e.chainCallback)
    const { session: t, ui: s, connection: r } = this.subscribe()
    ;(this._session = t),
      (this.connection = r),
      (this.relayEventManager = new Zt()),
      (this.ui = s),
      this.ui.attach()
  }
  subscribe() {
    const e = Y.load(this.storage) || Y.create(this.storage),
      { linkAPIUrl: t } = this,
      s = new Qt({ session: e, linkAPIUrl: t, listener: this }),
      r = this.isMobileWeb ? new We() : new dn()
    return s.connect(), { session: e, ui: r, connection: s }
  }
  resetAndReload() {
    this.connection
      .destroy()
      .then(() => {
        const e = Y.load(this.storage)
        ;(e == null ? void 0 : e.id) === this._session.id && B.clearAll(),
          document.location.reload()
      })
      .catch(e => {})
  }
  signEthereumTransaction(e) {
    return this.sendRequest({
      method: 'signEthereumTransaction',
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: U(e.weiValue),
        data: V(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? U(e.gasPriceInWei) : null,
        maxFeePerGas: e.gasPriceInWei ? U(e.gasPriceInWei) : null,
        maxPriorityFeePerGas: e.gasPriceInWei ? U(e.gasPriceInWei) : null,
        gasLimit: e.gasLimit ? U(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !1
      }
    })
  }
  signAndSubmitEthereumTransaction(e) {
    return this.sendRequest({
      method: 'signEthereumTransaction',
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: U(e.weiValue),
        data: V(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? U(e.gasPriceInWei) : null,
        maxFeePerGas: e.maxFeePerGas ? U(e.maxFeePerGas) : null,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? U(e.maxPriorityFeePerGas) : null,
        gasLimit: e.gasLimit ? U(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !0
      }
    })
  }
  submitEthereumTransaction(e, t) {
    return this.sendRequest({
      method: 'submitEthereumTransaction',
      params: { signedTransaction: V(e, !0), chainId: t }
    })
  }
  getWalletLinkSession() {
    return this._session
  }
  sendRequest(e) {
    let t = null
    const s = F(8),
      r = i => {
        this.publishWeb3RequestCanceledEvent(s),
          this.handleErrorResponse(s, e.method, i),
          t == null || t()
      }
    return new Promise((i, a) => {
      ;(t = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: r,
        onResetConnection: this.resetAndReload
      })),
        this.relayEventManager.callbacks.set(s, c => {
          if ((t == null || t(), O(c))) return a(new Error(c.errorMessage))
          i(c)
        }),
        this.publishWeb3RequestEvent(s, e)
    })
  }
  publishWeb3RequestEvent(e, t) {
    const s = { type: 'WEB3_REQUEST', id: e, request: t }
    this.publishEvent('Web3Request', s, !0)
      .then(r => {})
      .catch(r => {
        this.handleWeb3ResponseMessage(s.id, { method: t.method, errorMessage: r.message })
      }),
      this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method)
  }
  openCoinbaseWalletDeeplink(e) {
    if (this.ui instanceof We)
      switch (e) {
        case 'requestEthereumAccounts':
        case 'switchEthereumChain':
          return
        default:
          window.addEventListener(
            'blur',
            () => {
              window.addEventListener(
                'focus',
                () => {
                  this.connection.checkUnseenEvents()
                },
                { once: !0 }
              )
            },
            { once: !0 }
          ),
            this.ui.openCoinbaseWalletDeeplink()
          break
      }
  }
  publishWeb3RequestCanceledEvent(e) {
    const t = { type: 'WEB3_REQUEST_CANCELED', id: e }
    this.publishEvent('Web3RequestCanceled', t, !1).then()
  }
  publishEvent(e, t, s) {
    return this.connection.publishEvent(e, t, s)
  }
  handleWeb3ResponseMessage(e, t) {
    if (t.method === 'requestEthereumAccounts') {
      q.accountRequestCallbackIds.forEach(s => this.invokeCallback(s, t)),
        q.accountRequestCallbackIds.clear()
      return
    }
    this.invokeCallback(e, t)
  }
  handleErrorResponse(e, t, s) {
    var r
    const i =
      (r = s == null ? void 0 : s.message) !== null && r !== void 0
        ? r
        : 'Unspecified error message.'
    this.handleWeb3ResponseMessage(e, { method: t, errorMessage: i })
  }
  invokeCallback(e, t) {
    const s = this.relayEventManager.callbacks.get(e)
    s && (s(t), this.relayEventManager.callbacks.delete(e))
  }
  requestEthereumAccounts() {
    const { appName: e, appLogoUrl: t } = this.metadata,
      s = { method: 'requestEthereumAccounts', params: { appName: e, appLogoUrl: t } },
      r = F(8)
    return new Promise((i, a) => {
      this.relayEventManager.callbacks.set(r, c => {
        if (O(c)) return a(new Error(c.errorMessage))
        i(c)
      }),
        q.accountRequestCallbackIds.add(r),
        this.publishWeb3RequestEvent(r, s)
    })
  }
  watchAsset(e, t, s, r, i, a) {
    const c = {
      method: 'watchAsset',
      params: { type: e, options: { address: t, symbol: s, decimals: r, image: i }, chainId: a }
    }
    let l = null
    const f = F(8),
      b = y => {
        this.publishWeb3RequestCanceledEvent(f),
          this.handleErrorResponse(f, c.method, y),
          l == null || l()
      }
    return (
      (l = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: b,
        onResetConnection: this.resetAndReload
      })),
      new Promise((y, d) => {
        this.relayEventManager.callbacks.set(f, o => {
          if ((l == null || l(), O(o))) return d(new Error(o.errorMessage))
          y(o)
        }),
          this.publishWeb3RequestEvent(f, c)
      })
    )
  }
  addEthereumChain(e, t, s, r, i, a) {
    const c = {
      method: 'addEthereumChain',
      params: {
        chainId: e,
        rpcUrls: t,
        blockExplorerUrls: r,
        chainName: i,
        iconUrls: s,
        nativeCurrency: a
      }
    }
    let l = null
    const f = F(8),
      b = y => {
        this.publishWeb3RequestCanceledEvent(f),
          this.handleErrorResponse(f, c.method, y),
          l == null || l()
      }
    return (
      (l = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: b,
        onResetConnection: this.resetAndReload
      })),
      new Promise((y, d) => {
        this.relayEventManager.callbacks.set(f, o => {
          if ((l == null || l(), O(o))) return d(new Error(o.errorMessage))
          y(o)
        }),
          this.publishWeb3RequestEvent(f, c)
      })
    )
  }
  switchEthereumChain(e, t) {
    const s = {
      method: 'switchEthereumChain',
      params: Object.assign({ chainId: e }, { address: t })
    }
    let r = null
    const i = F(8),
      a = c => {
        this.publishWeb3RequestCanceledEvent(i),
          this.handleErrorResponse(i, s.method, c),
          r == null || r()
      }
    return (
      (r = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: a,
        onResetConnection: this.resetAndReload
      })),
      new Promise((c, l) => {
        this.relayEventManager.callbacks.set(i, f => {
          if ((r == null || r(), O(f) && f.errorCode))
            return l(
              S.provider.custom({
                code: f.errorCode,
                message: 'Unrecognized chain ID. Try adding the chain using addEthereumChain first.'
              })
            )
          if (O(f)) return l(new Error(f.errorMessage))
          c(f)
        }),
          this.publishWeb3RequestEvent(i, s)
      })
    )
  }
}
q.accountRequestCallbackIds = new Set()
const qe = 'DefaultChainId',
  Ke = 'DefaultJsonRpcUrl'
class ct {
  constructor(e) {
    ;(this._relay = null),
      (this._addresses = []),
      (this.metadata = e.metadata),
      (this._storage = new B('walletlink', Be)),
      (this.callback = e.callback || null)
    const t = this._storage.getItem(me)
    if (t) {
      const s = t.split(' ')
      s[0] !== '' && (this._addresses = s.map(r => H(r)))
    }
    this.initializeRelay()
  }
  getSession() {
    const e = this.initializeRelay(),
      { id: t, secret: s } = e.getWalletLinkSession()
    return { id: t, secret: s }
  }
  async handshake() {
    await this._eth_requestAccounts()
  }
  get selectedAddress() {
    return this._addresses[0] || void 0
  }
  get jsonRpcUrl() {
    var e
    return (e = this._storage.getItem(Ke)) !== null && e !== void 0 ? e : void 0
  }
  set jsonRpcUrl(e) {
    this._storage.setItem(Ke, e)
  }
  updateProviderInfo(e, t) {
    var s
    this.jsonRpcUrl = e
    const r = this.getChainId()
    this._storage.setItem(qe, t.toString(10)),
      Q(t) !== r &&
        ((s = this.callback) === null || s === void 0 || s.call(this, 'chainChanged', z(t)))
  }
  async watchAsset(e) {
    const t = Array.isArray(e) ? e[0] : e
    if (!t.type) throw S.rpc.invalidParams('Type is required')
    if ((t == null ? void 0 : t.type) !== 'ERC20')
      throw S.rpc.invalidParams(`Asset of type '${t.type}' is not supported`)
    if (!(t != null && t.options)) throw S.rpc.invalidParams('Options are required')
    if (!(t != null && t.options.address)) throw S.rpc.invalidParams('Address is required')
    const s = this.getChainId(),
      { address: r, symbol: i, image: a, decimals: c } = t.options,
      f = await this.initializeRelay().watchAsset(
        t.type,
        r,
        i,
        c,
        a,
        s == null ? void 0 : s.toString()
      )
    return O(f) ? !1 : !!f.result
  }
  async addEthereumChain(e) {
    var t, s
    const r = e[0]
    if (((t = r.rpcUrls) === null || t === void 0 ? void 0 : t.length) === 0)
      throw S.rpc.invalidParams('please pass in at least 1 rpcUrl')
    if (!r.chainName || r.chainName.trim() === '')
      throw S.rpc.invalidParams('chainName is a required field')
    if (!r.nativeCurrency) throw S.rpc.invalidParams('nativeCurrency is a required field')
    const i = Number.parseInt(r.chainId, 16)
    if (i === this.getChainId()) return !1
    const a = this.initializeRelay(),
      {
        rpcUrls: c = [],
        blockExplorerUrls: l = [],
        chainName: f,
        iconUrls: b = [],
        nativeCurrency: y
      } = r,
      d = await a.addEthereumChain(i.toString(), c, b, l, f, y)
    if (O(d)) return !1
    if (((s = d.result) === null || s === void 0 ? void 0 : s.isApproved) === !0)
      return this.updateProviderInfo(c[0], i), null
    throw S.rpc.internal('unable to add ethereum chain')
  }
  async switchEthereumChain(e) {
    const t = e[0],
      s = Number.parseInt(t.chainId, 16),
      i = await this.initializeRelay().switchEthereumChain(
        s.toString(10),
        this.selectedAddress || void 0
      )
    if (O(i)) throw i
    const a = i.result
    return a.isApproved && a.rpcUrl.length > 0 && this.updateProviderInfo(a.rpcUrl, s), null
  }
  async cleanup() {
    ;(this.callback = null), this._relay && this._relay.resetAndReload(), this._storage.clear()
  }
  _setAddresses(e, t) {
    var s
    if (!Array.isArray(e)) throw new Error('addresses is not an array')
    const r = e.map(i => H(i))
    JSON.stringify(r) !== JSON.stringify(this._addresses) &&
      ((this._addresses = r),
      (s = this.callback) === null || s === void 0 || s.call(this, 'accountsChanged', r),
      this._storage.setItem(me, r.join(' ')))
  }
  async request(e) {
    const t = e.params || []
    switch (e.method) {
      case 'eth_accounts':
        return [...this._addresses]
      case 'eth_coinbase':
        return this.selectedAddress || null
      case 'net_version':
        return this.getChainId().toString(10)
      case 'eth_chainId':
        return z(this.getChainId())
      case 'eth_requestAccounts':
        return this._eth_requestAccounts()
      case 'eth_ecRecover':
      case 'personal_ecRecover':
        return this.ecRecover(e)
      case 'personal_sign':
        return this.personalSign(e)
      case 'eth_signTransaction':
        return this._eth_signTransaction(t)
      case 'eth_sendRawTransaction':
        return this._eth_sendRawTransaction(t)
      case 'eth_sendTransaction':
        return this._eth_sendTransaction(t)
      case 'eth_signTypedData_v1':
      case 'eth_signTypedData_v3':
      case 'eth_signTypedData_v4':
      case 'eth_signTypedData':
        return this.signTypedData(e)
      case 'wallet_addEthereumChain':
        return this.addEthereumChain(t)
      case 'wallet_switchEthereumChain':
        return this.switchEthereumChain(t)
      case 'wallet_watchAsset':
        return this.watchAsset(t)
      default:
        if (!this.jsonRpcUrl) throw S.rpc.internal('No RPC URL set for chain')
        return Ee(e, this.jsonRpcUrl)
    }
  }
  _ensureKnownAddress(e) {
    const t = H(e)
    if (!this._addresses.map(r => H(r)).includes(t)) throw new Error('Unknown Ethereum address')
  }
  _prepareTransactionParams(e) {
    const t = e.from ? H(e.from) : this.selectedAddress
    if (!t) throw new Error('Ethereum address is unavailable')
    this._ensureKnownAddress(t)
    const s = e.to ? H(e.to) : null,
      r = e.value != null ? $(e.value) : BigInt(0),
      i = e.data ? ge(e.data) : Buffer.alloc(0),
      a = e.nonce != null ? Q(e.nonce) : null,
      c = e.gasPrice != null ? $(e.gasPrice) : null,
      l = e.maxFeePerGas != null ? $(e.maxFeePerGas) : null,
      f = e.maxPriorityFeePerGas != null ? $(e.maxPriorityFeePerGas) : null,
      b = e.gas != null ? $(e.gas) : null,
      y = e.chainId ? Q(e.chainId) : this.getChainId()
    return {
      fromAddress: t,
      toAddress: s,
      weiValue: r,
      data: i,
      nonce: a,
      gasPriceInWei: c,
      maxFeePerGas: l,
      maxPriorityFeePerGas: f,
      gasLimit: b,
      chainId: y
    }
  }
  async ecRecover(e) {
    const { method: t, params: s } = e
    if (!Array.isArray(s)) throw S.rpc.invalidParams()
    const i = await this.initializeRelay().sendRequest({
      method: 'ethereumAddressFromSignedMessage',
      params: { message: re(s[0]), signature: re(s[1]), addPrefix: t === 'personal_ecRecover' }
    })
    if (O(i)) throw i
    return i.result
  }
  getChainId() {
    var e
    return Number.parseInt((e = this._storage.getItem(qe)) !== null && e !== void 0 ? e : '1', 10)
  }
  async _eth_requestAccounts() {
    var e, t
    if (this._addresses.length > 0)
      return (
        (e = this.callback) === null ||
          e === void 0 ||
          e.call(this, 'connect', { chainId: z(this.getChainId()) }),
        this._addresses
      )
    const r = await this.initializeRelay().requestEthereumAccounts()
    if (O(r)) throw r
    if (!r.result) throw new Error('accounts received is empty')
    return (
      this._setAddresses(r.result),
      (t = this.callback) === null ||
        t === void 0 ||
        t.call(this, 'connect', { chainId: z(this.getChainId()) }),
      this._addresses
    )
  }
  async personalSign({ params: e }) {
    if (!Array.isArray(e)) throw S.rpc.invalidParams()
    const t = e[1],
      s = e[0]
    this._ensureKnownAddress(t)
    const i = await this.initializeRelay().sendRequest({
      method: 'signEthereumMessage',
      params: { address: H(t), message: re(s), addPrefix: !0, typedDataJson: null }
    })
    if (O(i)) throw i
    return i.result
  }
  async _eth_signTransaction(e) {
    const t = this._prepareTransactionParams(e[0] || {}),
      r = await this.initializeRelay().signEthereumTransaction(t)
    if (O(r)) throw r
    return r.result
  }
  async _eth_sendRawTransaction(e) {
    const t = ge(e[0]),
      r = await this.initializeRelay().submitEthereumTransaction(t, this.getChainId())
    if (O(r)) throw r
    return r.result
  }
  async _eth_sendTransaction(e) {
    const t = this._prepareTransactionParams(e[0] || {}),
      r = await this.initializeRelay().signAndSubmitEthereumTransaction(t)
    if (O(r)) throw r
    return r.result
  }
  async signTypedData(e) {
    const { method: t, params: s } = e
    if (!Array.isArray(s)) throw S.rpc.invalidParams()
    const r = f => {
        const b = {
          eth_signTypedData_v1: te.hashForSignTypedDataLegacy,
          eth_signTypedData_v3: te.hashForSignTypedData_v3,
          eth_signTypedData_v4: te.hashForSignTypedData_v4,
          eth_signTypedData: te.hashForSignTypedData_v4
        }
        return V(b[t]({ data: _t(f) }), !0)
      },
      i = s[t === 'eth_signTypedData_v1' ? 1 : 0],
      a = s[t === 'eth_signTypedData_v1' ? 0 : 1]
    this._ensureKnownAddress(i)
    const l = await this.initializeRelay().sendRequest({
      method: 'signEthereumMessage',
      params: {
        address: H(i),
        message: r(a),
        typedDataJson: JSON.stringify(a, null, 2),
        addPrefix: !1
      }
    })
    if (O(l)) throw l
    return l.result
  }
  initializeRelay() {
    return (
      this._relay ||
        (this._relay = new q({
          linkAPIUrl: Be,
          storage: this._storage,
          metadata: this.metadata,
          accountsCallback: this._setAddresses.bind(this),
          chainCallback: this.updateProviderInfo.bind(this)
        })),
      this._relay
    )
  }
}
const dt = 'SignerType',
  lt = new B('CBWSDK', 'SignerConfigurator')
function mn() {
  return lt.getItem(dt)
}
function bn(n) {
  lt.setItem(dt, n)
}
async function wn(n) {
  const { communicator: e, metadata: t, handshakeRequest: s, callback: r } = n
  kn(e, t, r).catch(() => {})
  const i = {
      id: crypto.randomUUID(),
      event: 'selectSignerType',
      data: Object.assign(Object.assign({}, n.preference), { handshakeRequest: s })
    },
    { data: a } = await e.postRequestAndWaitForResponse(i)
  return a
}
function yn(n) {
  const { signerType: e, metadata: t, communicator: s, callback: r } = n
  switch (e) {
    case 'scw':
      return new Bt({ metadata: t, callback: r, communicator: s })
    case 'walletlink':
      return new ct({ metadata: t, callback: r })
  }
}
async function kn(n, e, t) {
  await n.onMessage(({ event: r }) => r === 'WalletLinkSessionRequest')
  const s = new ct({ metadata: e, callback: t })
  n.postMessage({ event: 'WalletLinkUpdate', data: { session: s.getSession() } }),
    await s.handshake(),
    n.postMessage({ event: 'WalletLinkUpdate', data: { connected: !0 } })
}
const vn = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
  En = () => {
    let n
    return {
      getCrossOriginOpenerPolicy: () => (n === void 0 ? 'undefined' : n),
      checkCrossOriginOpenerPolicy: async () => {
        if (typeof window > 'u') {
          n = 'non-browser-env'
          return
        }
        try {
          const e = `${window.location.origin}${window.location.pathname}`,
            t = await fetch(e, { method: 'HEAD' })
          if (!t.ok) throw new Error(`HTTP error! status: ${t.status}`)
          const s = t.headers.get('Cross-Origin-Opener-Policy')
          ;(n = s ?? 'null'), n === 'same-origin' && console.error(vn)
        } catch (e) {
          console.error('Error checking Cross-Origin-Opener-Policy:', e.message), (n = 'error')
        }
      }
    }
  },
  { checkCrossOriginOpenerPolicy: In, getCrossOriginOpenerPolicy: Sn } = En(),
  He = 420,
  ze = 540
function Cn(n) {
  const e = (window.innerWidth - He) / 2 + window.screenX,
    t = (window.innerHeight - ze) / 2 + window.screenY
  xn(n)
  const s = `wallet_${crypto.randomUUID()}`,
    r = window.open(n, s, `width=${He}, height=${ze}, left=${e}, top=${t}`)
  if ((r == null || r.focus(), !r)) throw S.rpc.internal('Pop up window failed to open')
  return r
}
function _n(n) {
  n && !n.closed && n.close()
}
function xn(n) {
  const e = { sdkName: st, sdkVersion: X, origin: window.location.origin, coop: Sn() }
  for (const [t, s] of Object.entries(e)) n.searchParams.append(t, s.toString())
}
class An {
  constructor({ url: e = fn, metadata: t, preference: s }) {
    ;(this.popup = null),
      (this.listeners = new Map()),
      (this.postMessage = async r => {
        ;(await this.waitForPopupLoaded()).postMessage(r, this.url.origin)
      }),
      (this.postRequestAndWaitForResponse = async r => {
        const i = this.onMessage(({ requestId: a }) => a === r.id)
        return this.postMessage(r), await i
      }),
      (this.onMessage = async r =>
        new Promise((i, a) => {
          const c = l => {
            if (l.origin !== this.url.origin) return
            const f = l.data
            r(f) && (i(f), window.removeEventListener('message', c), this.listeners.delete(c))
          }
          window.addEventListener('message', c), this.listeners.set(c, { reject: a })
        })),
      (this.disconnect = () => {
        _n(this.popup),
          (this.popup = null),
          this.listeners.forEach(({ reject: r }, i) => {
            r(S.provider.userRejectedRequest('Request rejected')),
              window.removeEventListener('message', i)
          }),
          this.listeners.clear()
      }),
      (this.waitForPopupLoaded = async () =>
        this.popup && !this.popup.closed
          ? (this.popup.focus(), this.popup)
          : ((this.popup = Cn(this.url)),
            this.onMessage(({ event: r }) => r === 'PopupUnload')
              .then(this.disconnect)
              .catch(() => {}),
            this.onMessage(({ event: r }) => r === 'PopupLoaded')
              .then(r => {
                this.postMessage({
                  requestId: r.id,
                  data: {
                    version: X,
                    metadata: this.metadata,
                    preference: this.preference,
                    location: window.location.toString()
                  }
                })
              })
              .then(() => {
                if (!this.popup) throw S.rpc.internal()
                return this.popup
              }))),
      (this.url = new URL(e)),
      (this.metadata = t),
      (this.preference = s)
  }
}
function Ln(n) {
  const e = vt(Mn(n), { shouldIncludeStack: !0 }),
    t = new URL('https://docs.cloud.coinbase.com/wallet-sdk/docs/errors')
  return (
    t.searchParams.set('version', X),
    t.searchParams.set('code', e.code.toString()),
    t.searchParams.set('message', e.message),
    Object.assign(Object.assign({}, e), { docUrl: t.href })
  )
}
function Mn(n) {
  var e
  if (typeof n == 'string') return { message: n, code: R.rpc.internal }
  if (O(n)) {
    const t = n.errorMessage,
      s =
        (e = n.errorCode) !== null && e !== void 0
          ? e
          : t.match(/(denied|rejected)/i)
            ? R.provider.userRejectedRequest
            : void 0
    return Object.assign(Object.assign({}, n), { message: t, code: s, data: { method: n.method } })
  }
  return n
}
class Pn extends bt {}
var Rn = function (n, e) {
  var t = {}
  for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s])
  if (n != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var r = 0, s = Object.getOwnPropertySymbols(n); r < s.length; r++)
      e.indexOf(s[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, s[r]) &&
        (t[s[r]] = n[s[r]])
  return t
}
class Tn extends Pn {
  constructor(e) {
    var { metadata: t } = e,
      s = e.preference,
      { keysUrl: r } = s,
      i = Rn(s, ['keysUrl'])
    super(),
      (this.signer = null),
      (this.isCoinbaseWallet = !0),
      (this.metadata = t),
      (this.preference = i),
      (this.communicator = new An({ url: r, metadata: t, preference: i }))
    const a = mn()
    a && (this.signer = this.initSigner(a))
  }
  async request(e) {
    try {
      if ((Ut(e), !this.signer))
        switch (e.method) {
          case 'eth_requestAccounts': {
            const t = await this.requestSignerSelection(e),
              s = this.initSigner(t)
            await s.handshake(e), (this.signer = s), bn(t)
            break
          }
          case 'wallet_sendCalls': {
            const t = this.initSigner('scw')
            await t.handshake({ method: 'handshake' })
            const s = await t.request(e)
            return await t.cleanup(), s
          }
          case 'wallet_getCallsStatus':
            return Ee(e, pn)
          case 'net_version':
            return 1
          case 'eth_chainId':
            return z(1)
          default:
            throw S.provider.unauthorized("Must call 'eth_requestAccounts' before other methods")
        }
      return await this.signer.request(e)
    } catch (t) {
      const { code: s } = t
      return s === R.provider.unauthorized && this.disconnect(), Promise.reject(Ln(t))
    }
  }
  async enable() {
    return (
      console.warn(
        '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
      ),
      await this.request({ method: 'eth_requestAccounts' })
    )
  }
  async disconnect() {
    var e
    await ((e = this.signer) === null || e === void 0 ? void 0 : e.cleanup()),
      (this.signer = null),
      B.clearAll(),
      this.emit('disconnect', S.provider.disconnected('User initiated disconnection'))
  }
  requestSignerSelection(e) {
    return wn({
      communicator: this.communicator,
      preference: this.preference,
      metadata: this.metadata,
      handshakeRequest: e,
      callback: this.emit.bind(this)
    })
  }
  initSigner(e) {
    return yn({
      signerType: e,
      metadata: this.metadata,
      communicator: this.communicator,
      callback: this.emit.bind(this)
    })
  }
}
function Nn(n) {
  if (n) {
    if (!['all', 'smartWalletOnly', 'eoaOnly'].includes(n.options))
      throw new Error(`Invalid options: ${n.options}`)
    if (n.attribution && n.attribution.auto !== void 0 && n.attribution.dataSuffix !== void 0)
      throw new Error('Attribution cannot contain both auto and dataSuffix properties')
  }
}
function On(n) {
  var e
  const t = { metadata: n.metadata, preference: n.preference }
  return (e = jt(t)) !== null && e !== void 0 ? e : new Tn(t)
}
const Dn = { options: 'all' }
function Bn(n) {
  var e
  new B('CBWSDK').setItem('VERSION', X), In()
  const s = {
    metadata: {
      appName: n.appName || 'Dapp',
      appLogoUrl: n.appLogoUrl || '',
      appChainIds: n.appChainIds || []
    },
    preference: Object.assign(Dn, (e = n.preference) !== null && e !== void 0 ? e : {})
  }
  Nn(s.preference)
  let r = null
  return { getProvider: () => (r || (r = On(s)), r) }
}
export { Bn as createCoinbaseWalletSDK }
