(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{222:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("blockquote",[a("p",[t._v("接着 "),a("a",{attrs:{href:"https://zhb333.github.io/readme-blog/Python/Django/templates_3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义模板过滤器"),a("OutboundLink")],1),t._v(" 往下讲")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[a("strong",[t._v("参照 "),a("a",{attrs:{href:"http://localhost:8080/readme-blog/Python/Django/templates_1.html#%E4%B8%80%E3%80%81%E6%A8%A1%E6%9D%BF%E6%9F%A5%E6%89%BE%E8%B7%AF%E5%BE%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("render_to_string的模板查找路径"),a("OutboundLink")],1)])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"dtl-模板结构优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dtl-模板结构优化"}},[this._v("#")]),this._v(" "),s("code",[this._v("DTL")]),this._v(" 模板结构优化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一、引入模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、引入模板"}},[this._v("#")]),this._v(" 一、引入模板")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"include-标签的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include-标签的使用"}},[this._v("#")]),this._v(" "),s("code",[this._v("include")]),this._v(" 标签的使用")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("新建 "),a("code",[t._v("templates/header.html")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("头部"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("新建 "),a("code",[t._v("templates/footer.html")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("尾部"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("修改 "),a("code",[t._v("templates/index.html")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n{% include 'header.html' %}\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("内容"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n{% include 'footer.html' %}\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"include-标签中的模板查找路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include-标签中的模板查找路径"}},[this._v("#")]),this._v(" "),s("code",[this._v("include")]),this._v(" 标签中的模板查找路径")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"include-标签引入的模板可以引用当前模板中的变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include-标签引入的模板可以引用当前模板中的变量"}},[this._v("#")]),this._v(" "),s("code",[this._v("include")]),this._v(" 标签引入的模板可以引用当前模板中的变量")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("修改 "),a("code",[t._v("front/views.py")])]),t._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Django'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("修改 "),a("code",[t._v("templates/header.html")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("{#头部 Django#}\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("头部 {{ title }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("但为了所有引用 "),a("code",[t._v("templates/header.html")]),t._v(" 的模板都能使用 "),a("code",[t._v("title")]),t._v(" 变量， 可以在 "),a("code",[t._v("include")]),t._v(" 标签中传递该变量")]),t._v(" "),a("p",[t._v("修改 "),a("code",[t._v("templates/index.html")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("{#头部 Young and Beautiful#}\n{% include 'header.html' with title='Young and Beautiful' %}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"二、模板继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、模板继承"}},[this._v("#")]),this._v(" 二、模板继承")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("新建 "),a("code",[t._v("templates/base.html")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n{% include 'header.html' with title='Young and Beautiful' %}\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {% block content %}\n        默认内容\n    {% endblock %}\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n{% include 'footer.html' %}\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("修改 "),a("code",[t._v("templates/index.html")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("{% extends 'base.html' %}\n\n{% block content %}\n首页中的内容\n{% endblock %}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("访问 "),a("code",[t._v("block")]),t._v(" 标签被覆盖的内容：")]),t._v(" "),a("p",[a("code",[t._v("templates/index.html")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("{% extends 'base.html' %}\n\n{% block content %}\n首页中的内容\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ block.super }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n{% endblock %}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])])])}],!1,null,null,null);s.default=e.exports}}]);