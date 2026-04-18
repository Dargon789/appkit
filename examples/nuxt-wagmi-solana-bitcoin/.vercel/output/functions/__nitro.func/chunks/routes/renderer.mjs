const VueResolver = (_, value) => {

function vueInstall(head) {
  const plugin = {
    install(app) {
    }
}

function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
}








function buildAssetsDir() {
}
function buildAssetsURL(...path) {
}
function publicAssetsURL(...path) {
}

const getSPARenderer = lazyCachedFunction(async () => {
      {
      }
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
    ssrContext.config = {
      public: config.public,
      app: config.app
  return {
    rendererContext: renderer.rendererContext,
    renderToString
function lazyCachedFunction(fn) {
  return () => {
    if (res === null) {
    }
}

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers),
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
    }
}
function renderPayloadJsonScript(opts) {
  const payload = {
  {
  }
  if (opts.src) {
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
}
function splitPayload(ssrContext) {
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
}

const unheadOptions = {
  disableDefaults: true,
  disableCapoSorting: false,


  if (ssrError && ssrError.statusCode) {
  }
    throw createError({
      statusCode: 404,
  }
  if (isRenderingPayload) {
  }
  {
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: true,
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set(),
    islandContext
  }
  if (ssrContext._renderResponse) {
  }
  if (ssrContext.payload?.error && !ssrError) {
  }
  if (isRenderingPayload) {
  }
  if (ssrContext._preloadManifest) {
        link: [
        ]
  }
  if (inlinedStyles.length) {
  }
  {
    for (const resource of Object.values(styles)) {
      {
      }
    }
    if (link.length) {
    }
  }
  if (!NO_SCRIPTS) {
        link: getPreloadLinks(ssrContext, renderer.rendererContext)
        link: getPrefetchLinks(ssrContext, renderer.rendererContext)
        script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload })
        ...headEntryOptions,
        // this should come before another end of body scripts
  }
  if (!routeOptions.noScripts) {
          src: renderer.rendererContext.buildAssetsURL(resource.file),
          defer: resource.module ? null : true,
          // if we are rendering script tag payloads that import an async payload
          // we need to ensure this resolves before executing the Nuxt entry
        }))
  }
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      _rendered.html,
    ],
    bodyAppend: [bodyTags]
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
    }
function normalizeChunks(chunks) {
}
function joinTags(tags) {
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
  }
}
function renderHTMLDocument(html) {
}

//# sourceMappingURL=renderer.mjs.map
