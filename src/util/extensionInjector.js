export class ExtensionInjector {
  constructor() {
    /** @type {Map<string, ((extensionObject: any) => void)[]>} */
    this.extensions = new Map()
  }
  on(name, callback) {
    if (!this.extensions.has(name)) {
      this.extensions.set(name, [])
    }
    this.extensions.get(name).push(callback)
  }
  emit(name, extensionObject) {
    if (!this.extensions.has(name)) return
    for (const callback of this.extensions.get(name)) {
      try {
        callback(extensionObject)
      } catch (e) {
        console.error(`[CSense] 扩展事件 ${name} 回调失败`, e)
      }
    }
  }
}
