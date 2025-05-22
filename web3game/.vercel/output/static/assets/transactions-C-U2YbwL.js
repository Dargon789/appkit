import { c as p } from './if-defined-DVOmkLu5.js'
import './index-B4eb2ffY.js'
import './index-CTojmOJx.js'
import './index-Cxc8tIRM.js'
import { x as a, r as m, i as s } from './index-DVkBgnkX.js'
import './index-DeEXhxyT.js'
import './index-QpqlfPgl.js'
import './index-kA5-QyMM.js'

import { c as p } from './if-defined-DVOmkLu5.js'
import './index-B4eb2ffY.js'
import './index-kA5-QyMM.js'
import './index-CTojmOJx.js'
import './index-Cxc8tIRM.js'
import './index-DeEXhxyT.js'
import './index-QpqlfPgl.js'
const d = s`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`
var u = function (o, t, i, r) {
  var n = arguments.length,
    e = n < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, i)) : r,
    l
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    e = Reflect.decorate(o, t, i, r)
  else
    for (var c = o.length - 1; c >= 0; c--)
      (l = o[c]) && (e = (n < 3 ? l(e) : n > 3 ? l(t, i, e) : l(t, i)) || e)
  return n > 3 && e && Object.defineProperty(t, i, e), e
}
let f = class extends m {
  render() {
    return a`
      <wui-flex flexDirection="column" .padding=${['0', 'm', 'm', 'm']} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `
  }
}
f.styles = d
f = u([p('w3m-transactions-view')], f)
export { f as W3mTransactionsView }
