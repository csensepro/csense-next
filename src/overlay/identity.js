import globalState from '../base/state'
import { LazyXHR } from 'src/util/inject'

export class IdentityWarningOverlay {
  constructor(manager) {
    this.manager = manager
    this.showOverlay = false
    this.isUpdated = false
    globalState.axios.interceptors.response.use(resp => {
      if (resp.config.url.endsWith('/students/self/detail') && this.isUpdated) {
        const body = resp.data.body
        if (body) {
          globalState.myInfo = body
          if (body.identitiyAuthRank === 'L2') {
            this.showOverlay = true
            globalState.isIdentified = true
            manager.requestUpdate()
          }
        }
      }
      return resp
    })
  }
  render() {
    const target = this.manager.target
    if (this.showOverlay) {
      const warningDiv = document.createElement('div')
      warningDiv.style.cursor = 'pointer'
      warningDiv.textContent = '账户已实名认证'
      warningDiv.title =
        '为防止您的行为遭到追踪，请登出账户或切换到未实名认证的账户。您可以点击此处立刻登出。'
      warningDiv.style.width = '100%'
      warningDiv.style.backgroundColor = 'yellow'
      warningDiv.style.color = 'black'
      warningDiv.style.textAlign = 'center'
      warningDiv.style.padding = '5px'
      warningDiv.style.fontSize = '12px'
      warningDiv.style.boxSizing = 'border-box'
      warningDiv.addEventListener('click', async () => {
        await fetch('https://sso.ccw.site/web/auth/logout', {
          headers: {
            'content-type': 'application/json'
          },
          body: '{}',
          method: 'POST',
          mode: 'cors',
          credentials: 'include'
        })
        document.cookie =
          'cookie-user-id=;domain=.ccw.site;path=/;max-age=-999999'
        window.location.reload()
      })
      target.appendChild(warningDiv)
    }
  }
  dispose() {}
}
