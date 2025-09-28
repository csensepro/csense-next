import PackageJSON from '../package.json' with { type: 'json' }

export default `// ==UserScript==
// @name         CSense Next
// @namespace    CSense
// @version      ${PackageJSON.version}
// @license      AGPL-3.0
// @description  一个 CCW 安全审计工具
// @author       FurryR & Csense Next
// @match        https://www.ccw.site/*
// @icon         https://m.ccw.site/community/images/logo-ccw.png
// @grant        none
// @run-at       document-start
// @downloadURL https://update.greasyfork.org/scripts/550966/CSense.user.js
// @updateURL https://update.greasyfork.org/scripts/550966/CSense.meta.js
// ==/UserScript==`
