import { Database } from '../api/ccwdata'
import { LazyXHR } from '../util/inject'
import { ExtensionInjector } from '../util/extensionInjector'

export default {
  pluginPromise: Promise.resolve(),
  userInfo: null,
  myInfo: null,
  vm: null,
  /** @type {Record<string, Database>} */
  ccwdata: Object.freeze({
    /** @type {Database} */
    project: new Database(),
    /** @type {Database} */
    user: new Database()
  }),
  extensionInjector: new ExtensionInjector(),
  mmo: {
    /** @type {RegExp[]} */
    broadcastBlackList: []
  },
  button: null,
  /** @type {LazyXHR} */
  axios: new LazyXHR(),
  isIdentified: false
}
