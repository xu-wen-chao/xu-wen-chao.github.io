(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{271:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"如何发布一个-npm-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何发布一个-npm-包","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何发布一个 npm 包")]),a._v(" "),s("h2",{attrs:{id:"npm-账号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-账号","aria-hidden":"true"}},[a._v("#")]),a._v(" npm 账号")]),a._v(" "),s("p",[a._v("要在 npm 上发布自己的 package，那么就必须先有自己的账号，打开"),s("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.npmjs.com/"),s("OutboundLink")],1),a._v("进行注册、登陆。")]),a._v(" "),s("h2",{attrs:{id:"本地登陆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地登陆","aria-hidden":"true"}},[a._v("#")]),a._v(" 本地登陆")]),a._v(" "),s("p",[a._v("因为发布操作是在自己的机器上进行的，所以需要确保发布环境已进行 npm 账号登陆。")]),a._v(" "),s("p",[a._v("打开终端，执行"),s("code",[a._v("npm config get registry")]),a._v("，查看当前的源，"),s("code",[a._v("npm config get")]),a._v("用于查看当前的 npm 配置。因为国内的网络问题，我们经常会切换至淘宝等国内的镜像源，但是接下来是要在 npm 官方发布一个 package，所以需要保证当前的 registry 为 https://registry.npmjs.org/ 。")]),a._v(" "),s("p",[a._v("确保 registry 正确之后执行"),s("code",[a._v("npm login")]),a._v("，按要求你输入用户名、密码、邮箱，用于登陆验证。")]),a._v(" "),s("p",[a._v("执行"),s("code",[a._v("npm whoami")]),a._v("查看当前的已登陆用户，如果出现了自己的用户名，说明登陆成功。")]),a._v(" "),s("h2",{attrs:{id:"实现一个简单的-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现一个简单的-package","aria-hidden":"true"}},[a._v("#")]),a._v(" 实现一个简单的 package")]),a._v(" "),s("h3",{attrs:{id:"初始化项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 初始化项目")]),a._v(" "),s("p",[a._v("新建一个目录用于保存、维护将要发布的 package，在目录中执行"),s("code",[a._v("npm init")]),a._v("初始化一个 npm 项目，package name 要注意不要与已有的 package 重名，因为 npm 不允许有两个相同、相似名称的 package。")]),a._v(" "),s("p",[a._v("初始化成功之后，可以看见目录中多了一个 package.json 文件。")]),a._v(" "),s("h3",{attrs:{id:"package-json-简单解读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json-简单解读","aria-hidden":"true"}},[a._v("#")]),a._v(" package.json 简单解读")]),a._v(" "),s("p",[a._v("package.json 用于描述我们的 npm package 基本信息，打开 package.json ，可见如下内容。")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test-publish-666"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"main"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"index.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"echo \\"Error: no test specified\\" && exit 1"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"wenchaoxu"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"license"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ISC"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ul",[s("li",[a._v("name，package 的名字。")]),a._v(" "),s("li",[a._v("version，package 的版本。")]),a._v(" "),s("li",[a._v("description，package 的简单描述。")]),a._v(" "),s("li",[a._v("main，package 的主入口文件，当使用者 import 你的 package 的时候，就是从这个入口文件 import。")]),a._v(" "),s("li",[a._v("scripts，自定义的 npm 脚本命令。")]),a._v(" "),s("li",[a._v("author，作者。")]),a._v(" "),s("li",[a._v("license，软件许可证类型。")])]),a._v(" "),s("p",[a._v("关于 package.json 的更多字段含义，可从"),s("a",{attrs:{href:"https://docs.npmjs.com/cli/v6/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.npmjs.com/cli/v6/configuring-npm/package-json"),s("OutboundLink")],1),a._v("中查看。")]),a._v(" "),s("h3",{attrs:{id:"package-主文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-主文件","aria-hidden":"true"}},[a._v("#")]),a._v(" package 主文件")]),a._v(" "),s("p",[a._v("在目录中创建一个 index.js 脚本，脚本会内容如下。")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'hello npm'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布","aria-hidden":"true"}},[a._v("#")]),a._v(" 发布")]),a._v(" "),s("h3",{attrs:{id:"初次发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初次发布","aria-hidden":"true"}},[a._v("#")]),a._v(" 初次发布")]),a._v(" "),s("p",[a._v("在准备好了我们的 package 相关文件之后，在当前目录中执行"),s("code",[a._v("npm publish")]),a._v("，稍等片刻即可见 package 发布成功。")]),a._v(" "),s("p",[a._v("在"),s("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.npmjs.com/"),s("OutboundLink")],1),a._v("中根据 package 名称查找，可看见刚发布的 package。这样就能够通过"),s("code",[a._v("npm i")]),a._v("来安装该 package 了。")]),a._v(" "),s("h3",{attrs:{id:"更新发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新发布","aria-hidden":"true"}},[a._v("#")]),a._v(" 更新发布")]),a._v(" "),s("p",[a._v("我们的 package 经常需要进行 bug 修复、新增 feature 等，所以需要更新发布新的 package。在本地修改代码之后，可以手动将 package.json 中等 version 版本号+1，然后再次执行"),s("code",[a._v("npm publish")]),a._v("发布新包。")]),a._v(" "),s("p",[a._v("当然 npm 也提供了命令"),s("code",[a._v("npm version")]),a._v("来避免手动对 version 进行修改。")]),a._v(" "),s("p",[a._v("从此处"),s("a",{attrs:{href:"https://docs.npmjs.com/cli/v6/commands/npm-version",target:"_blank",rel:"noopener noreferrer"}},[a._v("npm-version"),s("OutboundLink")],1),a._v("可查看 version 命令的更多参数解析。")]),a._v(" "),s("p",[a._v("比如执行"),s("code",[a._v("npm version patch")]),a._v("，就会将当前 version 从 1.0.0 改为 1.0.1，如当前目录为 git 仓库，那么还会打上 git tag 并进行 commit。")]),a._v(" "),s("p",[a._v("所以我们可以将发布命名合并为一个 script 命令，方便下次发布执行，如下。")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"publish-patch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"npm version patch && npm publish"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("p",[a._v("当执行"),s("code",[a._v("npm run publish-patch")]),a._v("的时候，补丁版本号自动+1，然后进行发布。")])])}),[],!1,null,null,null);t.default=r.exports}}]);