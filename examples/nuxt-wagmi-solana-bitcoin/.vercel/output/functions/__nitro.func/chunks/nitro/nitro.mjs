function jsonParseTransform$1(key, value) {
  }
}
function warnKeyDropped$1(key) {
}
function destr$1(value, options = {}) {
  }
  }
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      }
      }
      }
      }
      }
      }
      }
    }
  }
  if (!JsonSigRx$1.test(value)) {
    if (options.strict) {
    }
  }
  try {
    if (suspectProtoRx$1.test(value) || suspectConstructorRx$1.test(value)) {
      if (options.strict) {
      }
    }
  } catch (error) {
    if (options.strict) {
    }
  }
}

function encode(text) {
}
function encodeQueryValue(input) {
}
function encodeQueryKey(text) {
}
  try {
  } catch {
  }
}
function decodeQueryKey(text) {
}
function decodeQueryValue(text) {
}

  }
    if (s.length < 2) {
    }
    }
    if (object[key] === void 0) {
    } else if (Array.isArray(object[key])) {
    } else {
    }
  }
}
function encodeQueryItem(key, value) {
  }
  if (!value) {
  }
  if (Array.isArray(value)) {
  }
}
function stringifyQuery(query) {
}

function hasProtocol(inputString, opts = {}) {
  }
  if (opts.strict) {
  }
}
  {
  }
}
  {
  }
}
  {
  }
}
}
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
  }
  if (input.startsWith(_base)) {
  }
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
  }
  if (!input.startsWith(_base)) {
  }
}
function withQuery(input, query) {
}
function getQuery$1(input) {
}
function isEmptyURL(url) {
}
function isNonEmptyURL(url) {
}
function joinURL(base, ...input) {
    if (url) {
    } else {
    }
  }
}
function joinRelativeURL(..._input) {
  for (const i of input) {
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      }
        if (segments.length === 1 && hasProtocol(segments[0])) {
        }
      }
      }
    }
  }
  if (segmentsDepth >= 0) {
    }
  } else {
  }
  }
}

  if (_specialProtoMatch) {
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
  }
  }
  return {
    protocol: protocol.toLowerCase(),
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  }
  return {
    pathname,
    search,
    hash
}
function stringifyParsedURL(parsed) {
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  if (options.routes) {
    for (const path in options.routes) {
    }
  }
  return {
    ctx,
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
}
function lookup(ctx, path) {
  if (staticPathNode) {
  }
  for (let i = 0; i < sections.length; i++) {
    if (node.wildcardChildNode !== null) {
    }
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
      } else {
      }
      if (!node) {
      }
      if (node.paramName) {
      }
    } else {
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
  }
  if (!node) {
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    }
}
function insert(ctx, path, data) {
  for (const section of sections) {
    } else {
      if (type === NODE_TYPES.PLACEHOLDER) {
      } else if (type === NODE_TYPES.WILDCARD) {
            3
            /* "**:" */
      }
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
  }
  if (isStaticRoute === true) {
  }
}
function remove(ctx, path) {
  for (const section of sections) {
    if (!node) {
    }
  }
  if (node.data) {
    if (Object.keys(node.children).length === 0 && node.parent) {
    }
  }
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
}
function getNodeType(str) {
  }
  }
}

function toRouteMatcher(router) {
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
}
function _matchRoutes(path, table, strictTrailingSlash) {
  }
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    }
  }
  if (staticMatch) {
  }
}
function _sortRoutesMap(m) {
}
function _routerNodeToTable(initialPath, initialNode) {
  function _addNode(path, node) {
    if (path) {
        if (node.data) {
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        if (node.data) {
        }
      }
    }
    for (const [childPath, child] of node.children.entries()) {
    }
  }
}

function isPlainObject$1(value) {
  }
  }
  if (Symbol.iterator in value) {
  }
  if (Symbol.toStringTag in value) {
  }
}

  if (!isPlainObject$1(defaults)) {
  }
  for (const key in baseObject) {
    }
    if (value === null || value === void 0) {
    }
    if (merger && merger(object, key, value, namespace)) {
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
    } else if (isPlainObject$1(value) && isPlainObject$1(object[key])) {
      object[key] = _defu$1(
        value,
        object[key],
        merger
    } else {
    }
  }
}
function createDefu$1(merger) {
    // eslint-disable-next-line unicorn/no-array-reduce
}


function hasProp(obj, prop) {
  try {
  } catch {
  }
}

class H3Error extends Error {
  constructor(message, opts = {}) {
    if (opts.cause && !this.cause) {
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    if (this.statusMessage) {
    }
    if (this.data !== undefined) {
    }
  }
}
function createError$1(input) {
  }
  if (isError(input)) {
  }
    cause: input.cause || input
    try {
        get() {
        }
    } catch {
      try {
    }
  }
  if (input.data) {
  }
  if (input.statusCode) {
  } else if (input.status) {
  }
  if (input.statusMessage) {
  } else if (input.statusText) {
  }
  if (err.statusMessage) {
    if (sanitizedMessage !== originalMessage) {
      console.warn(
    }
  }
  if (input.fatal !== undefined) {
  }
  if (input.unhandled !== undefined) {
  }
}
function sendError(event, error, debug) {
  if (event.handled) {
  }
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  if (debug) {
  }
  if (event.handled) {
  }
}
function isError(input) {
}

function getQuery(event) {
}
function isMethod(event, expected, allowHead) {
    if (event.method === expected) {
    }
  } else if (expected.includes(event.method)) {
  }
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
  }
}
function getRequestHeaders(event) {
  for (const key in event.node.req.headers) {
  }
}
function getRequestHeader(event, name) {
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    if (xForwardedHost) {
    }
  }
}
function getRequestProtocol(event, opts = {}) {
  }
}
function getRequestURL(event, opts = {}) {
}

  if (_rawBody) {
      if (Buffer.isBuffer(_resolved)) {
      }
        return new Promise((resolve, reject) => {
              new WritableStream({
                write(chunk) {
                },
                close() {
                },
                abort(reason) {
                }
              })
        return new Promise((resolve, reject) => {
      }
      if (_resolved.constructor === Object) {
      }
      if (_resolved instanceof URLSearchParams) {
      }
  }
  }
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
  }
  if (bodyStream) {
  }
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        if (_rawBody) {
        }
      }
  }
  return new ReadableStream({
    }
}

function handleCacheHeaders(event, opts) {
  if (opts.maxAge !== undefined) {
  }
  if (opts.modifiedTime) {
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
    }
  }
  if (opts.etag) {
    if (ifNonMatch === opts.etag) {
    }
  }
  if (cacheMatched) {
    if (!event.handled) {
    }
  }
}

const MIMES = {

}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
  }
  }
  if (statusCode < 100 || statusCode > 999) {
  }
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
  }
  }
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
    }
  const notSpecialChar = () => {
  while (pos < cookiesString.length) {
    while (skipWhitespace()) {
        while (pos < cookiesString.length && notSpecialChar()) {
        }
        } else {
        }
      } else {
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
    }
  }
}

function send(event, data, type) {
  if (type) {
  }
    defer(() => {
      if (!event.handled) {
      }
}
function sendNoContent(event, code) {
  if (event.handled) {
  }
  if (!code && event.node.res.statusCode !== 200) {
  }
  if (_code === 204) {
  }
}
function setResponseStatus(event, code, text) {
  if (code) {
  }
  if (text) {
  }
}
function getResponseStatus(event) {
}
function getResponseStatusText(event) {
}
function defaultContentType(event, type) {
  }
}
function sendRedirect(event, location, code = 302) {
}
function getResponseHeader(event, name) {
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
  }
}
function setResponseHeader(event, name, value) {
}
function isStream(data) {
  }
    }
    }
  }
  }
}
function isWebResponse(data) {
}
function sendStream(event, stream) {
  }
  if (!event.node.res.socket) {
  }
        new WritableStream({
          write(chunk) {
          }
        })
  }
    return new Promise((resolve, reject) => {
      if (stream.on) {
      }
        if (stream.abort) {
        }
  }
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    } else {
    }
  }
  if (response.status) {
  }
  if (response.statusText) {
  }
  if (response.redirected) {
  }
  if (!response.body) {
  }
}

const ignoredHeaders = /* @__PURE__ */ new Set([
async function proxyRequest(event, target, opts = {}) {
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
    } else {
    }
  }
  const fetchHeaders = mergeHeaders$1(
    opts.fetchOptions?.headers,
    opts.headers
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
}
async function sendProxy(event, target, opts = {}) {
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
  } catch (error) {
    throw createError$1({
      status: 502,
      cause: error
  }
  for (const [key, value] of response.headers.entries()) {
    }
    }
    }
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
        if (opts.cookieDomainRewrite) {
        }
        if (opts.cookiePathRewrite) {
        }
      })
  }
  if (opts.onResponse) {
  }
  if (response._data !== undefined) {
  }
  if (event.handled) {
  }
  if (opts.sendStream === false) {
  }
  if (response.body) {
    for await (const chunk of response.body) {
    }
  }
}
function getProxyRequestHeaders(event, opts) {
  for (const name in reqHeaders) {
    }
  }
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
      }),
      ...init?.headers
    }
}
function _getFetch(_fetch) {
  if (_fetch) {
  }
  if (globalThis.fetch) {
  }
}
function rewriteCookieProperty(header, map, property) {
  return header.replace(
    (match, prefix, previousValue) => {
      if (previousValue in _map) {
      } else {
      }
    }
}
function mergeHeaders$1(defaults, ...inputs) {
  if (_inputs.length === 0) {
  }
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== undefined) {
      }
    }
  }
}

class H3Event {
  // Context
  // Node
  // Web
  // Shared
  // Request
  // Response
  // Hooks
  constructor(req, res) {
  }
  // --- Request ---
  get method() {
    if (!this._method) {
    }
  }
  get path() {
  }
  get headers() {
    if (!this._headers) {
    }
  }
  // --- Respoonse ---
  get handled() {
  }
  respondWith(response) {
  }
  // --- Utils ---
  toString() {
  }
  toJSON() {
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
  }
}
function isEvent(input) {
}
function createEvent(req, res) {
}
function _normalizeNodeHeaders(nodeHeaders) {
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
      }
    } else if (value) {
    }
  }
}

function defineEventHandler(handler) {
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
}
function _normalizeArray(input) {
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      if (event.handled) {
      }
    }
  }
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
    }
  }
}
function isEventHandler(input) {
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      `
     Handler: ${input}`
  }
}
function defineLazyEventHandler(factory) {
  const resolveHandler = () => {
    if (_resolved) {
    }
    if (!_promise) {
        }
    }
    if (_resolved) {
    }
}

function createApp(options = {}) {
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
    }
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
    }
  } else {
  }
}
function createAppEventHandler(stack, options) {
    if (options.onRequest) {
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
        }
      } else {
      }
      if (layer.match && !layer.match(_layerPath, event)) {
      }
      if (_body !== undefined) {
        if (options.onBeforeResponse) {
        }
        if (options.onAfterResponse) {
        }
      }
      if (event.handled) {
        if (options.onAfterResponse) {
        }
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
    }
    if (options.onAfterResponse) {
    }
}
function createResolver(stack) {
    for (const layer of stack) {
      }
      if (!path.startsWith(layer.route)) {
      }
      if (layer.match && !layer.match(_layerPath, undefined)) {
      }
      if (res.handler.__resolve__) {
        if (!_res) {
        }
        res = {
          ...res,
          ..._res,
      }
    }
}
function normalizeLayer(input) {
  if (handler.handler) {
  }
  if (input.lazy) {
  } else if (!isEventHandler(handler)) {
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
  }
  if (val) {
    if (isWebResponse(val)) {
    }
    if (isStream(val)) {
    }
    if (val.buffer) {
    }
    }
    if (val instanceof Error) {
    }
    }
  }
  }
  }
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
}
function cachedFn(fn) {
  return () => {
    if (!cache) {
    }
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
    }
}

const RouterMethods = [
function createRouter(opts = {}) {
  const addRoute = (path, handler, method) => {
    if (!route) {
    }
    if (Array.isArray(method)) {
      for (const m of method) {
      }
    } else {
    }
  for (const method of RouterMethods) {
  }
    if (qIndex !== -1) {
    }
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
        })
      }
    if (!handler) {
      if (!_matcher) {
      }
      for (const _match of _matches) {
        if (_match.handlers[method]) {
        }
        if (_match.handlers.all) {
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          statusMessage: `Method ${method} is not allowed on this route.`
        })
    }
      if (isPreemptive) {
      } else {
      }
    }
      if (res === undefined && isPreemptive) {
      }
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    if (match.handler.__resolve__) {
      if (!_res) {
      }
    }
}
function toNodeListener(app) {
  const toNodeHandle = async function (req, res) {
    try {
    } catch (_error) {
      if (!isError(_error)) {
      }
      if (app.options.onError) {
      }
      if (event.handled) {
      }
      if (error.unhandled || error.fatal) {
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
      }
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
      }
    }
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    }
  }
}
function serialTaskCaller(hooks, args) {
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
}
function parallelTaskCaller(hooks, args) {
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
  }
}

class Hookable {
  constructor() {
  }
  hook(name, function_, options = {}) {
    }
    while (this._deprecatedHooks[name]) {
    }
    if (dep && !options.allowDeprecated) {
      if (!message) {
      }
      if (!this._deprecatedMessages) {
      }
      if (!this._deprecatedMessages.has(message)) {
      }
    }
    if (!function_.name) {
      try {
          configurable: true
    }
    return () => {
      if (function_) {
      }
  }
  hookOnce(name, function_) {
    let _function = (...arguments_) => {
      }
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      if (index !== -1) {
      }
      if (this._hooks[name].length === 0) {
      }
    }
  }
  deprecateHook(name, deprecated) {
    for (const hook of _hooks) {
    }
  }
  deprecateHooks(deprecatedHooks) {
    for (const name in deprecatedHooks) {
    }
  }
  addHooks(configHooks) {
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
      }
  }
  removeHooks(configHooks) {
    for (const key in hooks) {
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
    }
  }
  callHook(name, ...arguments_) {
  }
  callHookParallel(name, ...arguments_) {
  }
  callHookWith(caller, name, ...arguments_) {
    if (this._before) {
    }
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
        }
    }
    if (this._after && event) {
    }
  }
  beforeEach(function_) {
    return () => {
      if (this._before !== void 0) {
        if (index !== -1) {
        }
      }
  }
  afterEach(function_) {
    return () => {
      if (this._after !== void 0) {
        if (index !== -1) {
        }
      }
  }
}
function createHooks() {
}


class FetchError extends Error {
  constructor(message, opts) {
    if (opts?.cause && !this.cause) {
    }
  }
}
function createFetchError(ctx) {
    Object.defineProperty(fetchError, key, {
      get() {
      }
  }
  for (const [key, refKey] of [
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
      }
  }
}

}
function isJSONSerializable(value) {
  if (value === void 0) {
  }
  }
  }
  if (Array.isArray(value)) {
  }
  if (value.buffer) {
  }
}
const textTypes = /* @__PURE__ */ new Set([
  if (!_contentType) {
  }
  if (JSON_RE.test(contentType)) {
  }
  }
}
function resolveFetchOptions(request, input, defaults, Headers) {
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
  }
  if (input) {
    }
  }
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
      }
    } else {
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  async function onError(context) {
    if (context.options.retry !== false && !isAbort) {
      } else {
      }
        if (retryDelay > 0) {
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
      }
    }
    if (Error.captureStackTrace) {
    }
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      response: void 0,
      error: void 0
    if (context.options.method) {
    }
    if (context.options.onRequest) {
    }
      if (context.options.baseURL) {
      }
      if (context.options.query) {
      }
      }
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        }
        }
      } else if (
        // ReadableStream Body
      ) {
        }
      }
    }
    if (!context.options.signal && context.options.timeout) {
      abortTimeout = setTimeout(() => {
    }
    try {
    } catch (error) {
      if (context.options.onRequestError) {
      }
    } finally {
      if (abortTimeout) {
      }
    }
        // https://github.com/unjs/ofetch/issues/294
        // https://github.com/JakeChampion/fetch/issues/1454
    if (hasBody) {
      switch (responseType) {
        }
        }
        default: {
        }
      }
    }
    if (context.options.onResponse) {
    }
      if (context.options.onResponseError) {
      }
    }
  const $fetch = async function $fetch2(request, options) {
      ...globalOptions,
      ...customGlobalOptions,
      defaults: {
        ...globalOptions.defaults,
        ...customGlobalOptions.defaults,
        ...defaultOptions
      }
}

function createNodeFetch() {
  if (!useKeepAlive) {
  }
  const nodeFetchOptions = {
    agent(parsedURL) {
    }
  return function nodeFetchWithKeepAlive(input, init) {
  }

const storageKeyProperties = [
function prefixStorage(storage, base) {
  if (!base) {
  }
  for (const property of storageKeyProperties) {
      // @ts-ignore
      storage[property](base + key, ...args)
  }
}
function normalizeKey$2(key) {
  if (!key) {
  }
}
function normalizeBaseKey$1(base) {
}

function jsonParseTransform(key, value) {
  }
}
function warnKeyDropped(key) {
}
function destr(value, options = {}) {
  }
  if (
    // eslint-disable-next-line unicorn/prefer-at
  ) {
  }
  if (_value.length <= 9) {
    }
    }
    }
    }
    }
    }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
    }
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
      }
    }
  } catch (error) {
    if (options.strict) {
    }
  }
}

function wrapToPromise(value) {
  }
}
function asyncCall(function_, ...arguments_) {
  try {
  } catch (error) {
  }
}
function isPrimitive(value) {
}
function isPureObject(value) {
}
function stringify(value) {
  if (isPrimitive(value)) {
  }
  if (isPureObject(value) || Array.isArray(value)) {
  }
  }
}
function serializeRaw(value) {
  }
}
function deserializeRaw(value) {
  }
  if (!value.startsWith(BASE64_PREFIX)) {
  }
}
function base64Decode(input) {
  if (globalThis.Buffer) {
  }
}
function base64Encode(input) {
  if (globalThis.Buffer) {
  }
}
function normalizeKey$1(key) {
  if (!key) {
  }
}
function joinKeys(...keys) {
}
function normalizeBaseKey(base) {
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
  }
  while (index > -1) {
  }
}
function filterKeyByBase(key, base) {
  if (base) {
  }
}

function defineDriver$1(factory) {
}

const memory = defineDriver$1(() => {
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
    },
    getItem(key) {
    },
    getItemRaw(key) {
    },
    setItem(key, value) {
    },
    setItemRaw(key, value) {
    },
    removeItem(key) {
    },
    getKeys() {
    },
    clear() {
    },
    dispose() {
    }

function createStorage(options = {}) {
  const context = {
    watching: false,
    watchListeners: [],
    unwatch: {}
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
      }
    }
    return {
      relativeKey: key,
  const getMounts = (base, includeParent) => {
        relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
        mountpoint,
        driver: context.mounts[mountpoint]
  const onChange = (event, key) => {
    if (!context.watching) {
    }
    for (const listener of context.watchListeners) {
    }
  const startWatch = async () => {
    if (context.watching) {
    }
    for (const mountpoint in context.mounts) {
    }
  const stopWatch = async () => {
    if (!context.watching) {
    }
    for (const mountpoint in context.unwatch) {
    }
  const runBatch = (items, commonOptions, cb) => {
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
      }
    for (const item of items) {
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
    }
  const storage = {
    // Item
    hasItem(key, opts = {}) {
    },
    getItem(key, opts = {}) {
    },
    getItems(items, commonOptions = {}) {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
        }
        return Promise.all(
              key: item.key,
              value: destr(value)
          })
    },
    getItemRaw(key, opts = {}) {
      if (driver.getItemRaw) {
      }
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
      }
      if (!driver.setItem) {
      }
      if (!driver.watch) {
      }
    },
    async setItems(items, commonOptions) {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
        }
        if (!batch.driver.setItem) {
        }
        await Promise.all(
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
          })
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
      }
      if (driver.setItemRaw) {
      } else if (driver.setItem) {
      } else {
      }
      if (!driver.watch) {
      }
    },
    async removeItem(key, opts = {}) {
      }
      if (!driver.removeItem) {
      }
      if (opts.removeMeta || opts.removeMata) {
      }
      if (!driver.watch) {
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      }
      if (driver.getMeta) {
      }
      if (!opts.nativeOnly) {
          }
          }
        }
      }
    },
    setMeta(key, value, opts = {}) {
    },
    removeMeta(key, opts = {}) {
    },
    // Keys
    async getKeys(base, opts = {}) {
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
        }
        for (const key of rawKeys) {
          }
        }
        maskedMounts = [
          mount.mountpoint,
      }
      return allKeys.filter(
    },
    // Utils
    async clear(base, opts = {}) {
      await Promise.all(
          if (m.driver.clear) {
          }
          if (m.driver.removeItem) {
          }
        })
    },
    async dispose() {
    },
    async watch(callback) {
      return async () => {
        if (context.watchListeners.length === 0) {
        }
    },
    async unwatch() {
    },
    // Mount
    mount(base, driver) {
      if (base && context.mounts[base]) {
      }
      if (base) {
      }
      if (context.watching) {
      }
    },
    async unmount(base, _dispose = true) {
      if (!base || !context.mounts[base]) {
      }
      if (context.watching && base in context.unwatch) {
      }
      if (_dispose) {
      }
    },
      return {
        driver: m.driver,
        base: m.base
    },
        driver: m.driver,
        base: m.mountpoint
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
}
function watch(driver, onChange, base) {
}
async function dispose(driver) {
  }
}


const normalizeKey = function normalizeKey(key) {
  if (!key) {
  }

const assets = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem(id) {
    return Promise.resolve(id in _assets)
  },
  getItem(id) {
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta(id) {
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }

function defineDriver(factory) {
}
function createError(driver, message, opts) {
  if (Error.captureStackTrace) {
  }
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
  }
}

function ignoreNotfound(err) {
}
function ignoreExists(err) {
}
async function writeFile(path, data, encoding) {
}
function readFile(path, encoding) {
}
function unlink(path) {
}
function readdir(dir) {
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
  }
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
  }
  await Promise.all(
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
        }
      }
    })
}
async function rmRecursive(dir) {
  await Promise.all(
      if (entry.isDirectory()) {
      } else {
      }
    })
}

const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
  }
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
    }
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
    },
    getItem(key) {
    },
    getItemRaw(key) {
    },
    async getMeta(key) {
    },
    setItem(key, value) {
      if (opts.readOnly) {
      }
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
      }
    },
    removeItem(key) {
      if (opts.readOnly) {
      }
    },
    getKeys(_base, topts) {
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
    }
  }




}


const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    write(str) {
    }
    dispatch(value) {
    }
    object(object) {
      }
      if ((objectNumber = this.#context.get(object)) === void 0) {
      } else {
      }
      }
        if (this[objType]) {
        } else {
        }
      } else {
        for (const key of keys) {
        }
        for (const key of extraKeys) {
        }
      }
    }
    array(arr, unordered) {
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
        }
      }
        for (const [key, value] of hasher.#context) {
        }
    }
    date(date) {
    }
    symbol(sym) {
    }
    unknown(value, type) {
      if (!value) {
      }
        return this.array(
          [...value.entries()],
          true
          /* ordered */
      }
    }
    error(err) {
    }
    boolean(bool) {
    }
    string(string) {
    }
    function(fn) {
      if (isNativeFunction(fn)) {
      } else {
      }
    }
    number(number) {
    }
    null() {
    }
    undefined() {
    }
    regexp(regex) {
    }
    arraybuffer(arr) {
    }
    url(url) {
    }
    map(map) {
    }
    set(set) {
    }
    bigint(number) {
    }
  }
  for (const type of [
  ]) {
    Hasher2.prototype[type] = function (arr) {
  }
  function isNativeFunction(f) {
    }
        -15
        /* "[native code] }".length */
  }
function serialize(object) {
}
function hash(value) {
}

function defaultCacheOptions() {
  return {
    swr: true,
    maxAge: 1
}
function defineCachedFunction(fn, opts = {}) {
  async function get(key, resolver, shouldInvalidateCache, event) {
    }
    if (ttl) {
    }
    const _resolve = async () => {
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
        }
      }
      try {
      } catch (error) {
        if (!isPending) {
        }
      }
      if (!isPending) {
        if (validate(entry) !== false) {
          if (opts.maxAge && !opts.swr) {
          }
          if (event?.waitUntil) {
          }
        }
      }
    if (entry.value === void 0) {
    } else if (expired && event && event.waitUntil) {
    }
    if (opts.swr && validate(entry) !== false) {
    }
  }
  return async (...args) => {
    if (shouldBypassCache) {
    }
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    if (opts.transform) {
    }
}
function cachedFunction(fn, opts = {}) {
}
function getKey(...args) {
}
function escapeKey(key) {
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const _opts = {
    ...opts,
      if (customKey) {
      }
      try {
      } catch {
      }
    },
      if (!entry.value) {
      }
      if (entry.value.code >= 400) {
      }
      if (entry.value.body === void 0) {
      }
      }
    },
    integrity: opts.integrity || hash([handler, opts])
    for (const header of variableHeaderNames) {
      if (value !== void 0) {
      }
    }
    const reqProxy = cloneWithProxy(incomingEvent.node.req, {
      headers: variableHeaders
    const resProxy = cloneWithProxy(incomingEvent.node.res, {
      statusCode: 200,
      writableEnded: false,
      writableFinished: false,
      headersSent: false,
      closed: false,
      getHeader(name) {
      },
      setHeader(name, value) {
      },
      getHeaderNames() {
      },
      hasHeader(name) {
      },
      removeHeader(name) {
      },
      getHeaders() {
      },
      end(chunk, arg2, arg3) {
        }
        }
        }
      },
      write(chunk, arg2, arg3) {
        }
        }
        }
      },
      writeHead(statusCode, headers2) {
        if (headers2) {
          }
          for (const header in headers2) {
            if (value !== void 0) {
            }
          }
        }
      }
        fetch: useNitroApp().localFetch
        fetch: globalThis.$fetch
    event.context.cache = {
      options: _opts
    if (opts.swr) {
      if (opts.maxAge) {
      }
      if (opts.staleMaxAge) {
      } else {
      }
    } else if (opts.maxAge) {
    }
    if (cacheControl.length > 0) {
    }
    const cacheEntry = {
      code: event.node.res.statusCode,
      headers,
      body
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
      }
    }
    if (event.node.res.headersSent || event.node.res.writableEnded) {
    }
        etag: response.headers.etag,
        maxAge: opts.maxAge
    }
    for (const name in response.headers) {
      } else {
        if (value !== void 0) {
        }
      }
    }
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
      }
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
      }
    }
}

function klona(x) {


  if (str === '[object Object]') {
    if (x.constructor !== Object && typeof x.constructor === 'function') {
      for (k in x) {
        if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
        }
      }
    } else {
      for (k in x) {
        if (k === '__proto__') {
          Object.defineProperty(tmp, k, {
            value: klona(x[k]),
            configurable: true,
            enumerable: true,
        } else {
        }
      }
    }
  }

  if (str === '[object Array]') {
    for (tmp = Array(k); k--; ) {
    }
  }

  if (str === '[object Set]') {
    x.forEach(function (val) {
  }

  if (str === '[object Map]') {
    x.forEach(function (val, key) {
  }

  if (str === '[object Date]') {
  }

  if (str === '[object RegExp]') {
  }

  if (str === '[object DataView]') {
  }

  if (str === '[object ArrayBuffer]') {
  }

  // ArrayBuffer.isView(x)
  // ~> `new` bcuz `Buffer.slice` => ref
  if (str.slice(-6) === 'Array]') {
  }

}

function isPlainObject(value) {
  }
  }
  if (Symbol.iterator in value) {
  }
  if (Symbol.toStringTag in value) {
  }
}

  if (!isPlainObject(defaults)) {
  }
  for (const key in baseObject) {
    }
    if (value === null || value === void 0) {
    }
    if (merger && merger(object, key, value, namespace)) {
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        merger
    } else {
    }
  }
}
function createDefu(merger) {
    // eslint-disable-next-line unicorn/no-array-reduce
}
const defuFn = createDefu((object, key, currentValue) => {
  }

const inlineAppConfig = {


  if (NUMBER_CHAR_RE.test(char)) {
  }
}
function splitByCase(str, separators) {
  }
  for (const char of str) {
    if (isSplitter === true) {
    }
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
      }
    }
  }
}
function kebabCase(str, joiner) {
}
function snakeCase(str) {
}

function getEnv(key, opts) {
}
function _isObject(input) {
}
  for (const key in obj) {
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
      } else if (envValue === void 0) {
      } else {
      }
    } else {
    }
    }
  }
}
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
}

const _inlineRuntimeConfig = {
  },
      },
        }
      },
        }
      },
        }
      }
    }
  },
  }
const envOptions = {
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
function useRuntimeConfig(event) {
  if (!event) {
  }
  if (event.context.nitro.runtimeConfig) {
  }
}
function _deepFreeze(object) {
  for (const name of propNames) {
    }
  }
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    if (prop in runtimeConfig) {
    }
  }

function createContext(opts = {}) {
    if (currentInstance && currentInstance !== instance) {
    }
  if (opts.asyncContext) {
    if (_AsyncLocalStorage) {
    } else {
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      if (instance !== void 0) {
      }
    }
  return {
    use: () => {
      if (_instance === void 0) {
      }
    },
    tryUse: () => {
    },
    set: (instance, replace) => {
      if (!replace) {
      }
    },
    unset: () => {
    },
    call: (instance, callback) => {
      try {
      } finally {
        if (!isSingleton) {
        }
      }
    },
    async callAsync(instance, callback) {
      const onRestore = () => {
      try {
        if (!isSingleton) {
        }
      } finally {
      }
    }
}
function createNamespace(defaultOpts = {}) {
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
      }
    }
  }

  asyncContext: false,
  AsyncLocalStorage: void 0

function createRouteRulesHandler(ctx) {
    if (routeRules.headers) {
    }
    if (routeRules.redirect) {
        if (strpBase) {
        }
      }
    }
    if (routeRules.proxy) {
        if (strpBase) {
        }
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
    }
}
function getRouteRules(event) {
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
  }
}
function getRouteRulesForPath(path) {
}

function joinHeaders(value) {
}
function normalizeFetchResponse(response) {
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
}
}
function normalizeCookieHeaders(headers) {
  for (const [name, header] of headers) {
      for (const cookie of normalizeCookieHeader(header)) {
      }
    } else {
    }
  }
}

function isJsonRequest(event) {
  }
}
function hasReqHeader(event, name, includes) {
}

  if (isJsonRequest(event)) {
  }
  if (statusCode === 404 && defaultRes.status === 302) {
  }
          {
          }
  if (event.handled) {
  }
  if (!res) {
  }
  for (const [header, value] of res.headers.entries()) {
  }

function defineNitroErrorHandler(handler) {
}

function defaultHandler(error, event, opts) {
  if (statusCode === 404) {
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: { location: redirectTo },
        body: `Redirecting...`
    }
  }
  if (isSensitive && !opts?.silent) {
  }
  const headers = {
    // Prevent browser from guessing the MIME types of resources.
    // Prevent error page from being embedded in an iframe
    // Prevent browsers from sending the Referer header
    // Disable the execution of any js
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    data: isSensitive ? void 0 : error.data
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
}


async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      if (event.handled) {
      }
    } catch (error) {
      // Handler itself thrown, log and continue
    }
  }
  // H3 will handle fallback
}



const handlers = [
  { route: '/**', handler: _lazy_migoS7, lazy: true, middleware: false, method: undefined }

function createNitroApp() {
  const captureError = (error, context = {}) => {
    if (context.event && isEvent(context.event)) {
      if (errors) {
      }
      if (context.event.waitUntil) {
      }
    }
  const h3App = createApp({
    debug: destr$1(false),
    onError: (error, event) => {
    },
      if (fetchContext?._platform) {
        event.context = {
          ...fetchContext._platform,
          ...event.context
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
      }
          fetch: $fetch
        if (!event.context.nitro._waitUntilPromises) {
        }
        if (event.context.waitUntil) {
        }
      event.captureError = (error, context) => {
    },
    onBeforeResponse: async (event, response) => {
    },
    onAfterResponse: async (event, response) => {
    }
  const router = createRouter({
    preemptive: true
  const localFetch = (input, init) => {
    }
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  for (const h of handlers) {
    if (h.middleware || !h.route) {
    } else {
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          ...routeRules.cache
      }
    }
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
    } catch (error) {
    }
  }
}
function useNitroApp() {
}

function defineRenderHandler(render) {
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        return send(
          event,
      }
      if (!ctx.response) {
      }
    }
    if (ctx.response.headers) {
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
    }
}

const listener = function (req, res) {
  if (query) {
    if (url) {
  }
}

//# sourceMappingURL=nitro.mjs.map
